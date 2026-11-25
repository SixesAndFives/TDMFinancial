import { createClient, SupabaseClient } from '@supabase/supabase-js';

export interface ProspectContact {
  name: string | null;
  title: string | null;
  email: string | null;
  phone: string | null;
}

export interface ParsedProspect {
  article_id: string;
  title: string;
  summary: string | null;
  url: string | null;
  publisher: string | null;
  published_at: string | null;
  ticker: string;
  exchange: string;
  company_name: string | null;
  market_cap: number | null;
  contacts: ProspectContact[];
  raw_body: string;
  relationship: 'cold' | 'contacted';
  tier: ProspectTier;
  enrichment: Enrichment | null;
}

export type ProspectTier = 'hot' | 'warm' | 'low' | 'dead';

const GENERIC_LOCAL = /^(info|ir|investor|investors|media|press|contact|news|hello|sales|pr|admin|communications?|corp(orate)?comm|inquir|office|support|general|mail|enquiries|marketing|corp|irteam|irdept)/i;
const AGENCY_LOCAL = /(investor[. -]?relations|media[. -]?relations)/i;
const TOLL_FREE_RE = /^(?:\+?1[\s.-]?)?\(?8(?:00|33|44|55|66|77|88)/;

function isPersonalEmail(email: string): boolean {
  const local = email.split('@')[0] || '';
  if (GENERIC_LOCAL.test(local) || AGENCY_LOCAL.test(local)) return false;
  return true;
}

function isDirectPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, '');
  return !TOLL_FREE_RE.test(phone.trim()) && digits.length >= 10;
}

// Tiers: hot = named contact w/ direct email or direct phone;
// warm = direct email/phone but no name; low = generic mailbox or toll-free only; dead = nothing.
export function scoreContacts(contacts: ProspectContact[]): ProspectTier {
  let best: ProspectTier = 'dead';
  for (const c of contacts) {
    const hasName = !!c.name;
    const personal = !!c.email && isPersonalEmail(c.email);
    const anyEmail = !!c.email;
    const direct = !!c.phone && isDirectPhone(c.phone);
    const anyPhone = !!c.phone;
    if (hasName && (personal || direct)) return 'hot';
    if (personal || direct) best = 'warm';
    else if ((anyEmail || anyPhone) && best === 'dead') best = 'low';
  }
  return best;
}

const MN_BASE = 'https://api.marketnewsapi.com/v1';
const OTC_EXCHANGES = new Set(['OTCQB', 'OTCQX', 'OTCMKTS', 'OTCID', 'OTC']);
const NASDAQ_MAX_CAP = 500_000_000;

const NON_ISSUER_RE =
  /\b(reit|exchange[- ]traded fund|\betfs?\b|acquisition corp|spac\b|blank[- ]check|closed[- ]end fund|income fund|royalty trust|mutual fund)\b/i;

const TITLE_WORD_RE =
  /\b(ceo|cfo|coo|cio|cto|chairman|chair|president|director|officer|vp\b|vice president|investor relations|media relations|corporate communications|communications|manager|head of|founder|secretary|treasurer|svp|evp|ir\b)/i;

const CONTACT_ANCHOR_RE =
  /(for (?:further|more|additional) information|media contact|investor relations|investor contact|ir contact|company contact|corporate communications|please contact|contact:)/i;

const EMAIL_RE = /[\w.+-]+@[\w-]+\.[\w.]+/g;
const PHONE_RE = /(?:\+?1[\s.-]?)?\(?\d{3}\)?[\s.-]\s?\d{3}[\s.-]\s?\d{4}/g;

export function getServiceClient(): SupabaseClient {
  const url = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) throw new Error('Missing Supabase env vars');
  return createClient(url, key, { auth: { persistSession: false } });
}

async function mnFetch(path: string) {
  const key = process.env.MN_API_KEY;
  if (!key) throw new Error('Missing MN_API_KEY');
  const res = await fetch(`${MN_BASE}${path}`, {
    headers: { Authorization: `Bearer ${key}` },
    cache: 'no-store',
  });
  if (!res.ok) throw new Error(`MarketNewsAPI ${res.status}: ${await res.text()}`);
  return res.json();
}

// ---------- contact extraction ----------

function cleanLine(s: string) {
  return s
    .replace(/\[[^\]]*\]\([^)]*\)/g, '') // markdown links
    .replace(/\*\*/g, '')
    .replace(/mailto:/gi, '')
    .trim();
}

function looksLikeName(line: string) {
  const w = line.replace(/[,;]/g, '').trim().split(/\s+/);
  if (w.length < 2 || w.length > 5) return false;
  if (!/^[A-Z]/.test(line)) return false;
  if (/(inc|corp|corporation|ltd|llc|company|www\.|http|@|news|release|forward|about)/i.test(line)) return false;
  return /^[A-Z][a-zA-Z'’.-]+(\s+[A-Z][a-zA-Z'’.-]+)+/.test(line.trim());
}

function looksLikeTitle(line: string) {
  return TITLE_WORD_RE.test(line) && !/@|http|\d{3}[-. )]\d{3}/.test(line);
}

export function extractContacts(body: string): ProspectContact[] {
  const anchor = CONTACT_ANCHOR_RE.exec(body);
  if (!anchor) {
    const emails = body.match(EMAIL_RE);
    if (!emails || emails.length === 0) return [];
    // no labeled block — fall back to bare email/phone pairs from the tail
    const tail = body.slice(Math.floor(body.length * 0.6));
    const phones = tail.match(PHONE_RE) || [];
    return [...new Set(emails)].map((email, i) => ({
      name: null,
      title: null,
      email,
      phone: phones[i] ? phones[i].trim() : null,
    }));
  }

  const start = anchor.index;
  let region = body.slice(start, start + 1400);
  const cut = region.search(
    /(forward[- ]looking|cautionary|safe harbor|neither the tsx|source:|to view the source|about [A-Z]|©|copyright)/i
  );
  if (cut > 120) region = region.slice(0, cut);

  const emails = [...new Set(region.match(EMAIL_RE) || [])];
  const phones = region.match(PHONE_RE) || [];
  const lines = region.split('\n').map(cleanLine).filter(Boolean);

  if (emails.length === 0 && phones.length === 0) return [];

  const contacts: ProspectContact[] = [];
  const usedPhones = new Set<string>();

  for (const email of emails) {
    const emailIdx = lines.findIndex((l) => l.includes(email));
    let name: string | null = null;
    let title: string | null = null;

    for (let i = Math.max(0, emailIdx - 4); i <= emailIdx + 2 && i < lines.length; i++) {
      const l = lines[i];
      const beforeEmail = i < emailIdx || (i === emailIdx && l.indexOf(email) > 0);
      const text = i === emailIdx ? l.replace(email, '') : l;
      const cleaned = text
        .replace(/e-?mail:?/gi, '')
        .replace(/tel(ephone)?:?/gi, '')
        .replace(/phone:?/gi, '')
        .trim();
      // lines ending in ':' are section labels ("Media Contact:"), not names
      const nameCandidate = cleaned.replace(/:$/, '').trim();
      if (!name && beforeEmail && nameCandidate && looksLikeName(nameCandidate) && !looksLikeTitle(nameCandidate)) {
        name = nameCandidate;
      }
      if (!title && cleaned && looksLikeTitle(cleaned)) {
        // "Name, Title" on one line
        const comma = cleaned.split(/,\s*/);
        if (comma.length >= 2 && looksLikeTitle(comma.slice(1).join(', '))) {
          if (!name && looksLikeName(comma[0])) name = comma[0].trim();
          title = comma.slice(1).join(', ').trim();
        } else {
          title = cleaned.replace(/[,:]$/, '');
        }
      }
    }

    const phone = phones.find((p) => !usedPhones.has(p));
    if (phone) usedPhones.add(phone);
    contacts.push({ name, title, email, phone: phone ? phone.trim() : null });
  }

  // phone-only contact block
  if (contacts.length === 0) {
    for (const p of phones.slice(0, 2)) contacts.push({ name: null, title: null, email: null, phone: p.trim() });
  }
  return contacts;
}

// ---------- issuer / qualifier ----------

interface MnListing {
  symbol: string;
  exchange: string;
}

interface MnEntity {
  symbol?: string;
  name?: string;
  type?: string;
}

interface MnArticle {
  id: string;
  title: string;
  language?: string;
  url?: string;
  summary?: string;
  publisher?: string;
  published_at?: string;
  body?: string;
  tickers?: string[];
  listings?: MnListing[];
  entities?: MnEntity[];
  source?: { name?: string; domain?: string };
}

const MEDIA_OUTLET_RE =
  /(usa news|newsroom|equity insider|ceo\.ca|zacks|motley fool|barchart|investorideas|stockwatch|investing\.com|seeking alpha|benzinga|globe newswire canada news|marketwatch)/i;

const LAW_FIRM_RE =
  /(rosen legal|pomerantz|hagens berman|bronstein|gewirtz|grossman|kessler topaz|levi & korsinsky|glancy prongay|bernstein liebhard|robbins llp|wolf haldenstein|faruqi|labaton|block & leviton|kirby mcinerney|scott\+scott|lieff cabraser|law firm|attorneys?|legal (llc|llp|group)|class action|shareholder (alert|rights)|securities litigation|deadline (reminder|alert))/i;

const GOV_SPONSORED = new Set(['FMCC', 'FNMA']);

const LANGUAGE_OK = new Set(['en', 'en-US', 'en-GB', undefined, null]);

function issuerListing(article: MnArticle): { ticker: string; exchange: string } | null {
  const listings = article.listings || [];
  const entities = (article.entities || []).filter((e) => e.type === 'company');
  const publisher = (article.publisher || '').toLowerCase();

  // 1. company entity whose symbol maps to a listing
  for (const e of entities) {
    if (!e.symbol) continue;
    const l = listings.find((x) => x.symbol === e.symbol);
    if (l) return { ticker: l.symbol, exchange: l.exchange };
  }

  // 2. company entity named in title → its listing
  for (const e of entities) {
    if (!e.name) continue;
    const token = e.name.split(/\s+/)[0].toLowerCase();
    if (token.length < 3 || !article.title.toLowerCase().includes(token)) continue;
    const l = listings.find((x) => article.title.toUpperCase().includes(`(${x.exchange}:`) || publisher.includes(token));
    if (l) return { ticker: l.symbol, exchange: l.exchange };
  }

  // 3. publisher looks like a company (not a wire/outlet) → first listing
  const WIRES = /(globenewswire|business wire|pr newswire|newsfile|access newswire|cision|accesswire)/i;
  if (publisher && !WIRES.test(publisher) && !MEDIA_OUTLET_RE.test(publisher) && listings.length > 0) {
    const l = listings[0];
    return { ticker: l.symbol, exchange: l.exchange };
  }

  return null;
}

function isOperatingCompany(companyName: string, title: string) {
  return !NON_ISSUER_RE.test(companyName) && !NON_ISSUER_RE.test(title);
}

const capCache = new Map<string, number | null>();

async function fmpMarketCap(ticker: string): Promise<number | null> {
  if (capCache.has(ticker)) return capCache.get(ticker)!;
  const key = process.env.FMP_API_KEY;
  if (!key) return null;
  try {
    const res = await fetch(
      `https://financialmodelingprep.com/stable/profile?symbol=${encodeURIComponent(ticker)}&apikey=${key}`,
      { cache: 'no-store' }
    );
    if (!res.ok) return null;
    const d = await res.json();
    const cap: number | null = d?.[0]?.marketCap ?? null;
    capCache.set(ticker, cap);
    return cap;
  } catch {
    return null;
  }
}

async function qualifies(
  issuer: { ticker: string; exchange: string },
  cap: number | null
): Promise<boolean> {
  if (OTC_EXCHANGES.has(issuer.exchange)) return true;
  if (issuer.exchange === 'NASDAQ') return cap !== null && cap < NASDAQ_MAX_CAP;
  return false;
}

// ---------- suppression list ----------

interface Suppression {
  tickers: Set<string>;
  domains: Set<string>;
  emails: Set<string>;
  companies: Set<string>;
}

export interface Suppressions {
  blocked: Suppression;
  contacted: Suppression;
}

function newSuppression(): Suppression {
  return { tickers: new Set(), domains: new Set(), emails: new Set(), companies: new Set() };
}

async function loadSuppressions(supabase: SupabaseClient): Promise<Suppressions> {
  const s: Suppressions = { blocked: newSuppression(), contacted: newSuppression() };
  const { data, error } = await supabase.from('suppressions').select('type, value, category');
  if (error) {
    console.error('suppressions load failed:', error.message);
    return s; // fail open — better to show a record than silently drop everything
  }
  for (const r of data || []) {
    const target = r.category === 'blocked' ? s.blocked : r.category === 'contacted' ? s.contacted : null;
    if (!target) continue;
    const v = String(r.value).trim().toLowerCase();
    if (r.type === 'ticker') target.tickers.add(v.toUpperCase());
    else if (r.type === 'domain') target.domains.add(v);
    else if (r.type === 'email') target.emails.add(v);
    else if (r.type === 'company') target.companies.add(v);
  }
  return s;
}

export function emailDomain(email: string) {
  return email.split('@')[1]?.toLowerCase() || '';
}

function matchesSuppression(
  s: Suppression,
  companyName: string | null,
  contacts: ProspectContact[],
  allListings: MnListing[]
): boolean {
  // check every listing on the release, not just the one that qualified —
  // a company may appear via its CSE/TSXV symbol even if the OTC ticker qualified
  for (const l of allListings) {
    if (s.tickers.has(l.symbol.toUpperCase())) return true;
  }
  if (companyName && s.companies.has(companyName.trim().toLowerCase())) return true;
  for (const c of contacts) {
    if (!c.email) continue;
    const e = c.email.toLowerCase();
    if (s.emails.has(e) || s.domains.has(emailDomain(e))) return true;
  }
  return false;
}

// ---------- enrichment ----------

export interface Enrichment {
  website: string | null;
  hq_phone: string | null;
  ceo: string | null;
  execs: { name: string; title: string }[];
  people: string[]; // person entities named in the article
  fetched_at: string;
}

export async function enrichProspect(articleId: string, ticker: string): Promise<Enrichment> {
  const key = process.env.FMP_API_KEY;
  const out: Enrichment = {
    website: null,
    hq_phone: null,
    ceo: null,
    execs: [],
    people: [],
    fetched_at: new Date().toISOString(),
  };
  try {
    const [profile, execs, article] = await Promise.all([
      key
        ? fetch(`https://financialmodelingprep.com/stable/profile?symbol=${encodeURIComponent(ticker)}&apikey=${key}`, { cache: 'no-store' }).then((r) => (r.ok ? r.json() : []))
        : Promise.resolve([]),
      key
        ? fetch(`https://financialmodelingprep.com/stable/key-executives?symbol=${encodeURIComponent(ticker)}&apikey=${key}`, { cache: 'no-store' }).then((r) => (r.ok ? r.json() : []))
        : Promise.resolve([]),
      mnFetch(`/news/${encodeURIComponent(articleId)}`).catch(() => null),
    ]);
    const p = profile?.[0];
    if (p) {
      out.website = p.website || null;
      out.hq_phone = p.phone || null;
      out.ceo = p.ceo || null;
    }
    if (Array.isArray(execs)) {
      out.execs = execs.slice(0, 8).map((e) => ({ name: e.name, title: e.title }));
    }
    const entities = article?.data?.entities || article?.entities || [];
    out.people = entities
      .filter((e: MnEntity) => e.type === 'person' || e.type === 'executive')
      .map((e: MnEntity) => e.name)
      .filter(Boolean) as string[];
  } catch (e) {
    console.error('enrich failed:', e);
  }
  return out;
}

// ---------- main pull ----------

export async function pullProspects(
  hoursBack = 48,
  maxPages = 40 // 2,000 articles — covers a heavy 48h window
): Promise<{
  fetched: number;
  inserted: number;
  skipped: number;
}> {
  const supabase = getServiceClient();
  const suppressions = await loadSuppressions(supabase);
  const toInsert: ParsedProspect[] = [];
  let cursor: string | null = null;
  let fetched = 0;
  const from = new Date(Date.now() - hoursBack * 3600 * 1000).toISOString();

  for (let p = 0; p < maxPages; p++) {
    const path = `/news?type=press_release&limit=50&from=${encodeURIComponent(from)}${
      cursor ? `&cursor=${encodeURIComponent(cursor)}` : ''
    }`;
    const d = await mnFetch(path);
    const articles: MnArticle[] = d.data || [];
    fetched += articles.length;
    cursor = d.meta?.next_cursor ?? null;
    if (articles.length === 0) break;

    for (const a of articles) {
      const body = a.body || '';
      if (!body || body.length < 400) continue; // stub/partial
      if (!LANGUAGE_OK.has(a.language)) continue; // non-English releases
      if (!EMAIL_RE.test(body)) continue; // no email anywhere → nothing to contact
      EMAIL_RE.lastIndex = 0;

      // law-firm / class-action notices masquerading as press releases
      const blob = `${a.title} ${a.publisher || ''} ${(a.entities || []).map((e) => e.name).join(' ')}`;
      if (LAW_FIRM_RE.test(blob)) continue;

      const issuer = issuerListing(a);
      if (!issuer) continue;
      if (GOV_SPONSORED.has(issuer.ticker)) continue;
      const cap = await fmpMarketCap(issuer.ticker);
      if (!(await qualifies(issuer, cap))) continue;

      const company =
        (a.entities || []).find((e) => e.type === 'company' && e.symbol === issuer.ticker)?.name ||
        (a.entities || []).find((e) => e.type === 'company')?.name ||
        a.publisher ||
        null;
      if (!isOperatingCompany(company || '', a.title)) continue;

      // promo-outlet signal: every contact email lives on the publisher's own domain
      const contacts = extractContacts(body);
      const allListings = a.listings || [];
      if (matchesSuppression(suppressions.blocked, company, contacts, allListings)) continue;
      const relationship = matchesSuppression(suppressions.contacted, company, contacts, allListings)
        ? 'contacted'
        : 'cold';

      const tier = scoreContacts(contacts);
      // weak records get auto-enriched: execs, website, HQ phone from FMP +
      // people named in the article — shown to reps in the indigo panel
      let enrichment: Enrichment | null = null;
      if (tier === 'low' || tier === 'dead' || contacts.every((c) => !c.name)) {
        enrichment = await enrichProspect(a.id, issuer.ticker);
      }
      const pubDomain = (a.source?.domain || '').replace(/^www\./, '');
      const issuerEmails = contacts.filter((c) => c.email);
      if (
        issuerEmails.length > 0 &&
        pubDomain &&
        issuerEmails.every((c) => c.email!.toLowerCase().endsWith('@' + pubDomain))
      ) {
        continue;
      }

      toInsert.push({
        article_id: a.id,
        title: a.title,
        summary: a.summary || null,
        url: a.url || null,
        publisher: a.publisher || a.source?.name || null,
        published_at: a.published_at || null,
        ticker: issuer.ticker,
        exchange: issuer.exchange,
        company_name: company,
        market_cap: cap,
        contacts,
        raw_body: body,
        relationship,
        tier,
        enrichment,
      });
    }
    if (!cursor) break; // feed exhausted within the window
  }

  let inserted = 0;
  if (toInsert.length > 0) {
    // ignore duplicates so a re-pull never resets a reviewed record's status
    const { error, count } = await supabase
      .from('prospects')
      .upsert(toInsert, { onConflict: 'article_id', ignoreDuplicates: true, count: 'exact' });
    if (error) throw new Error(`Supabase upsert: ${error.message}`);
    inserted = count ?? toInsert.length;
  }

  return { fetched, inserted, skipped: fetched - inserted };
}
