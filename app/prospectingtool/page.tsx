import { isAuthed } from '@/app/lib/pt-auth';
import { getServiceClient, ProspectContact, ProspectTier, scoreContacts } from '@/app/lib/prospecting';
import LoginForm from './login-form';
import ProspectTable, { ProspectRow } from './prospect-table';
import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';
export const metadata: Metadata = { title: 'Prospecting Tool - TDM Financial' };

export default async function ProspectingToolPage() {
  if (!(await isAuthed())) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <LoginForm />
      </main>
    );
  }

  const supabase = getServiceClient();
  const { data, error } = await supabase
    .from('prospects')
    .select('id, article_id, title, summary, url, publisher, published_at, ticker, exchange, company_name, market_cap, contacts, status, relationship, tier, enrichment')
    .eq('status', 'new')
    .order('published_at', { ascending: false })
    .limit(200);

  const rows: ProspectRow[] = (data || []).map((r) => ({
    id: r.id,
    title: r.title,
    summary: r.summary,
    url: r.url,
    publisher: r.publisher,
    publishedAt: r.published_at,
    ticker: r.ticker,
    exchange: r.exchange,
    companyName: r.company_name,
    marketCap: r.market_cap as number | null,
    contacts: (r.contacts || []) as ProspectContact[],
    relationship: (r.relationship as 'cold' | 'contacted') || 'cold',
    tier: (r.tier as ProspectTier) || scoreContacts((r.contacts || []) as ProspectContact[]),
    enrichment: r.enrichment || null,
  }));

  const TIER_ORDER: Record<ProspectTier, number> = { hot: 0, warm: 1, low: 2, dead: 3 };
  rows.sort((a, b) => TIER_ORDER[a.tier] - TIER_ORDER[b.tier]);

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Press Release Prospects</h1>
          <p className="text-sm text-gray-500 mt-1">
            {rows.length} pending {rows.length === 1 ? 'record' : 'records'} — OTCQB/QX/MKTS + NASDAQ &lt; $500M issuers
          </p>
        </header>
        {error ? (
          <p className="text-red-600">Failed to load prospects: {error.message}</p>
        ) : (
          <ProspectTable rows={rows} />
        )}
      </div>
    </main>
  );
}


