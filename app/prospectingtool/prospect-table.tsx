'use client';

import { useState } from 'react';
import type { Enrichment, ProspectContact, ProspectTier } from '@/app/lib/prospecting';

export interface ProspectRow {
  id: number;
  title: string;
  summary: string | null;
  url: string | null;
  publisher: string | null;
  publishedAt: string | null;
  ticker: string;
  exchange: string;
  companyName: string | null;
  marketCap: number | null;
  contacts: ProspectContact[];
  relationship: 'cold' | 'contacted';
  tier: ProspectTier;
  enrichment: Enrichment | null;
}

const TIER_STYLE: Record<ProspectTier, { label: string; cls: string; card: string }> = {
  hot: {
    label: 'Hot',
    cls: 'bg-green-100 text-green-800 border border-green-300',
    card: 'border-l-4 border-l-green-500 bg-green-50/40',
  },
  warm: {
    label: 'Warm',
    cls: 'bg-yellow-100 text-yellow-800 border border-yellow-300',
    card: 'border-l-4 border-l-yellow-400 bg-yellow-50/40',
  },
  low: {
    label: 'Low',
    cls: 'bg-gray-200 text-gray-600 border border-gray-300',
    card: 'border-l-4 border-l-gray-300',
  },
  dead: {
    label: 'No contact',
    cls: 'bg-red-50 text-red-500 border border-red-200',
    card: 'border-l-4 border-l-red-300 opacity-60',
  },
};

function formatCap(cap: number | null): string {
  if (cap === null || cap === undefined) return '—';
  if (cap >= 1e9) return `$${(cap / 1e9).toFixed(1)}B`;
  if (cap >= 1e6) return `$${(cap / 1e6).toFixed(1)}M`;
  return `$${Math.round(cap / 1e3)}K`;
}

function ContactLine({ c }: { c: ProspectContact }) {
  return (
    <div className="text-sm text-gray-700 leading-5">
      {c.name && <span className="font-medium">{c.name}</span>}
      {c.title && <span className="text-gray-500"> — {c.title}</span>}
      <div className="text-gray-600">
        {c.email && <span>{c.email}</span>}
        {c.email && c.phone && <span> · </span>}
        {c.phone && <span>{c.phone}</span>}
      </div>
    </div>
  );
}

export default function ProspectTable({ rows: initial }: { rows: ProspectRow[] }) {
  const [rows, setRows] = useState(initial);
  const [busy, setBusy] = useState<number | null>(null);

  async function act(id: number, action: 'apollo' | 'delete') {
    setBusy(id);
    const res = await fetch(`/api/prospects/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action }),
    });
    setBusy(null);
    if (res.ok) setRows((rs) => rs.filter((r) => r.id !== id));
    else alert('Action failed — please try again.');
  }



  if (rows.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow p-10 text-center text-gray-500">
        No pending prospects. New press releases appear here after each pull.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {rows.map((r) => (
        <div key={r.id} className={`bg-white rounded-lg shadow p-5 ${TIER_STYLE[r.tier].card}`}>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2">
            <span className={`inline-flex items-center rounded text-xs font-bold px-2 py-0.5 ${TIER_STYLE[r.tier].cls}`}>
              {TIER_STYLE[r.tier].label}
            </span>
            <span className="inline-flex items-center rounded bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5">
              {r.ticker}
            </span>
            <span className="inline-flex items-center rounded bg-gray-100 text-gray-700 text-xs font-medium px-2 py-0.5">
              {r.exchange}
            </span>
            <span className="inline-flex items-center rounded bg-amber-100 text-amber-800 text-xs font-medium px-2 py-0.5">
              {formatCap(r.marketCap)}
            </span>
            {r.relationship === 'contacted' && (
              <span className="inline-flex items-center rounded bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-0.5">
                Previously contacted
              </span>
            )}
            {r.publisher && <span className="text-xs text-gray-400">{r.publisher}</span>}
            {r.publishedAt && (
              <span className="text-xs text-gray-400">
                {new Date(r.publishedAt).toLocaleString('en-US', { timeZone: 'America/New_York' })} ET
              </span>
            )}
          </div>
          <h2 className="font-semibold text-gray-900 mb-1">
            {r.url ? (
              <a href={r.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {r.title}
              </a>
            ) : (
              r.title
            )}
          </h2>
          {r.summary && <p className="text-sm text-gray-600 mb-3 line-clamp-2">{r.summary}</p>}
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="space-y-2">
              {r.contacts.length > 0 ? (
                r.contacts.map((c, i) => <ContactLine key={i} c={c} />)
              ) : (
                <span className="text-sm text-gray-400 italic">No contact info extracted</span>
              )}
              {r.enrichment && (
                <div className="mt-2 rounded bg-indigo-50 border border-indigo-200 p-3 text-sm">
                  <div className="text-xs font-semibold text-indigo-700 mb-1">Enriched with FMP</div>
                  {r.enrichment.execs.length > 0 && (
                    <div className="space-y-0.5">
                      {r.enrichment.execs.slice(0, 4).map((e, i) => (
                        <div key={i} className="text-gray-700">
                          <span className="font-medium">{e.name}</span>
                          <span className="text-gray-500"> — {e.title}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  {r.enrichment.people.length > 0 && (
                    <div className="text-gray-600 mt-1">Named in release: {r.enrichment.people.join(', ')}</div>
                  )}
                  <div className="text-gray-500 mt-1">
                    {r.enrichment.website && (
                      <a href={r.enrichment.website} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline mr-3">
                        {r.enrichment.website.replace(/^https?:\/\//, '')}
                      </a>
                    )}
                    {r.enrichment.hq_phone && <span>{r.enrichment.hq_phone}</span>}
                  </div>
                </div>
              )}
            </div>
            <div className="flex gap-2 shrink-0">
              <button
                onClick={() => act(r.id, 'apollo')}
                disabled={busy === r.id}
                className="bg-green-600 text-white text-sm font-medium rounded px-4 py-2 hover:bg-green-700 disabled:opacity-50"
              >
                {r.relationship === 'contacted' ? 'Re-engage in Apollo' : 'Add to Apollo'}
              </button>
              <button
                onClick={() => act(r.id, 'delete')}
                disabled={busy === r.id}
                className="bg-red-100 text-red-700 text-sm font-medium rounded px-4 py-2 hover:bg-red-200 disabled:opacity-50"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
