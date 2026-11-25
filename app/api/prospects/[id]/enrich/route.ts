import { NextResponse } from 'next/server';
import { enrichProspect, getServiceClient } from '@/app/lib/prospecting';
import { isAuthed } from '@/app/lib/pt-auth';

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await isAuthed())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const { id } = await params;
  const supabase = getServiceClient();
  const { data: prospect } = await supabase
    .from('prospects')
    .select('article_id, ticker')
    .eq('id', id)
    .single();
  if (!prospect) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }
  const enrichment = await enrichProspect(prospect.article_id, prospect.ticker);
  const { error } = await supabase
    .from('prospects')
    .update({ enrichment, updated_at: new Date().toISOString() })
    .eq('id', id);
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ ok: true, enrichment });
}
