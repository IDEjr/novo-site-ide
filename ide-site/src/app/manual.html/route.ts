import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

import { NextResponse, type NextRequest } from 'next/server';

import { getManualAccessToken, MANUAL_ACCESS_COOKIE } from '@/lib/manual-auth';

export async function GET(request: NextRequest) {
  const expectedToken = process.env.MANUAL_PASSWORD
    ? await getManualAccessToken(process.env.MANUAL_PASSWORD)
    : null;
  const suppliedToken = request.cookies.get(MANUAL_ACCESS_COOKIE)?.value;

  if (!expectedToken || suppliedToken !== expectedToken) {
    const loginUrl = new URL('/manual-login', request.url);
    loginUrl.searchParams.set('from', '/manual.html');
    return NextResponse.redirect(loginUrl);
  }

  const manual = await readFile(join(process.cwd(), 'src', 'manual-content.html'));

  const response = new NextResponse(manual, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'private, no-store',
    },
  });

  response.cookies.set(MANUAL_ACCESS_COOKIE, '', {
    expires: new Date(0),
    path: '/manual.html',
  });

  return response;
}