import { NextResponse } from 'next/server';
import { SESSION_COOKIE, isValidPassword, sessionToken } from '@/app/lib/pt-auth';

export async function POST(request: Request) {
  const { password } = await request.json().catch(() => ({ password: '' }));
  if (!isValidPassword(password)) {
    return NextResponse.json({ ok: false, error: 'Invalid password' }, { status: 401 });
  }
  const res = NextResponse.json({ ok: true });
  res.cookies.set(SESSION_COOKIE, sessionToken(), {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });
  return res;
}
