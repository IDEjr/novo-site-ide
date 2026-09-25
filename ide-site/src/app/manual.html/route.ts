import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { NextResponse, type NextRequest } from 'next/server';
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

export async function GET(request: NextRequest) {
  // Verifica a sessão usando NextAuth em vez de cookies manuais
  const session = await getServerSession(authOptions);

  if (!session) {
    const loginUrl = new URL('/manual-login', request.url);
    loginUrl.searchParams.set('from', '/manual.html');
    return NextResponse.redirect(loginUrl);
  }

  // Se tem sessão (e consequentemente já passou pela verificação de domínio no signIn), libera o manual
  const manual = await readFile(join(process.cwd(), 'src', 'manual-content.html'));

  const response = new NextResponse(manual, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'private, no-store',
    },
  });

  return response;
}