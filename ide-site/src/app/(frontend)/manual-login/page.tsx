import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { getManualAccessToken, MANUAL_ACCESS_COOKIE } from '@/lib/manual-auth';

import styles from './page.module.css';

type ManualLoginPageProps = {
  searchParams: Promise<{ from?: string; error?: string }>;
};

export default async function ManualLoginPage({ searchParams }: ManualLoginPageProps) {
  const params = await searchParams;
  const destination = params.from === '/manual.html' ? params.from : '/manual.html';
  const hasError = params.error === '1';

  async function authenticate(formData: FormData) {
    'use server';

    const password = formData.get('password');
    const target = formData.get('from') === '/manual.html' ? '/manual.html' : '/manual.html';

    if (typeof password !== 'string' || !process.env.MANUAL_PASSWORD || password !== process.env.MANUAL_PASSWORD) {
      redirect(`/manual-login?from=${encodeURIComponent(target)}&error=1`);
    }

    const token = await getManualAccessToken(password);
    const cookieStore = await cookies();

    cookieStore.set(MANUAL_ACCESS_COOKIE, token, {
      httpOnly: true,
      maxAge: 60 * 60 * 8,
      path: '/manual.html',
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
    });

    redirect(target);
  }

  return (
    <section className={styles.page}>
      <div className={styles.panel}>
        <p className={styles.eyebrow}>Acesso restrito</p>
        <h1 className={styles.title}>Manual de Projetos</h1>
        <p className={styles.description}>Informe a senha para continuar.</p>

        <form className={styles.form} action={authenticate}>
          <input type="hidden" name="from" value={destination} />
          <label className={styles.label} htmlFor="password">
            Senha
            <input className={styles.input} id="password" name="password" type="password" required autoFocus />
          </label>
          {hasError && <p className={styles.error}>Senha incorreta.</p>}
          <button className={styles.button} type="submit">Acessar manual</button>
        </form>
      </div>
    </section>
  );
}