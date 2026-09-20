import { NextResponse, type NextRequest } from 'next/server';

import { getManualAccessToken, MANUAL_ACCESS_COOKIE } from '@/lib/manual-auth';

export async function proxy(request: NextRequest) {
  const expectedToken = process.env.MANUAL_PASSWORD
    ? await getManualAccessToken(process.env.MANUAL_PASSWORD)
    : null;
  const suppliedToken = request.cookies.get(MANUAL_ACCESS_COOKIE)?.value;

  if (expectedToken && suppliedToken === expectedToken) {
    return NextResponse.next();
  }

  const loginUrl = new URL('/manual-login', request.url);
  loginUrl.searchParams.set('from', '/manual.html');

  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ['/manual.html'],
};