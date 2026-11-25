import { cookies } from 'next/headers';

export const SESSION_COOKIE = 'pt_session';

export function sessionToken(): string {
  const t = process.env.PROSPECTING_SESSION_TOKEN;
  if (!t) throw new Error('Missing PROSPECTING_SESSION_TOKEN env var');
  return t;
}

export function isValidPassword(pw: string): boolean {
  const expected = process.env.PROSPECTING_PASSWORD;
  return !!expected && pw === expected;
}

export async function isAuthed(): Promise<boolean> {
  const store = await cookies();
  const c = store.get(SESSION_COOKIE);
  return !!c && !!process.env.PROSPECTING_SESSION_TOKEN && c.value === process.env.PROSPECTING_SESSION_TOKEN;
}

export function hasCronSecret(request: Request): boolean {
  const secret = process.env.CRON_SECRET;
  if (!secret) return false;
  const auth = request.headers.get('authorization');
  if (auth === `Bearer ${secret}`) return true;
  return new URL(request.url).searchParams.get('secret') === secret;
}
