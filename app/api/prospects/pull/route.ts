import { NextResponse } from 'next/server';
import { pullProspects } from '@/app/lib/prospecting';
import { hasCronSecret, isAuthed } from '@/app/lib/pt-auth';

export const dynamic = 'force-dynamic';
export const maxDuration = 300; // Pro plan allows up to 300s

export async function GET(request: Request) {
  if (!hasCronSecret(request) && !(await isAuthed())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  try {
    const hours = Number(new URL(request.url).searchParams.get('hours')) || 48;
    const result = await pullProspects(hours);
    return NextResponse.json({ ok: true, ...result });
  } catch (e) {
    console.error('prospect pull failed:', e);
    return NextResponse.json(
      { ok: false, error: e instanceof Error ? e.message : 'pull failed' },
      { status: 500 }
    );
  }
}
