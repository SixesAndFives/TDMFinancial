import { NextResponse } from 'next/server';
import { emailDomain, getServiceClient, ProspectContact } from '@/app/lib/prospecting';
import { isAuthed } from '@/app/lib/pt-auth';

const ACTION_STATUS: Record<string, string> = {
  delete: 'deleted',
  apollo: 'added',
};

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await isAuthed())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const { id } = await params;
  const { action } = await request.json().catch(() => ({}));
  const status = ACTION_STATUS[action];
  if (!status) {
    return NextResponse.json({ error: 'Unknown action' }, { status: 400 });
  }
  const supabase = getServiceClient();

  const { data: prospect } = await supabase
    .from('prospects')
    .select('ticker, contacts, company_name')
    .eq('id', id)
    .single();

  const { error } = await supabase
    .from('prospects')
    .update({ status, updated_at: new Date().toISOString() })
    .eq('id', id);
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // On "Add to Apollo": remember this company so its next press release
  // arrives flagged as a re-engagement (relationship='contacted')
  if (action === 'apollo' && prospect) {
    const stamps: { type: string; value: string; category: string; note: string }[] = [
      {
        type: 'ticker',
        value: prospect.ticker,
        category: 'contacted',
        note: 'pushed to Apollo',
      },
    ];
    // Only stamp the domain if it looks like the company's own domain —
    // IR/PR agency domains (e.g. allianceadvisors.com) serve many issuers,
    // so stamping them would falsely flag unrelated companies later.
    const companyToken = (prospect.company_name || '')
      .toLowerCase()
      .replace(/[^a-z0-9 ]/g, '')
      .split(/\s+/)
      .find((w: string) => w.length >= 4 && !['inc', 'corp', 'ltd', 'llc', 'company', 'the'].includes(w));
    for (const c of (prospect.contacts || []) as ProspectContact[]) {
      if (!c.email) continue;
      const domain = emailDomain(c.email);
      if (companyToken && domain.includes(companyToken)) {
        stamps.push({
          type: 'domain',
          value: domain,
          category: 'contacted',
          note: 'pushed to Apollo',
        });
      }
      stamps.push({
        type: 'email',
        value: c.email.toLowerCase(),
        category: 'contacted',
        note: 'pushed to Apollo',
      });
    }
    const { error: sErr } = await supabase
      .from('suppressions')
      .upsert(stamps, { onConflict: 'type,value', ignoreDuplicates: true });
    if (sErr) console.error('suppression stamp failed:', sErr.message);

    // TODO phase 2: create Apollo contact + enroll in the sequence
    // matching prospect.relationship (cold → intro drip, contacted → re-engagement)
  }

  return NextResponse.json({ ok: true, status });
}
