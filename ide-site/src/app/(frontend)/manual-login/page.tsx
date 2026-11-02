import styles from './page.module.css';
import { GoogleLoginButton } from '@/components/GoogleLoginButton/GoogleLoginButton';

type ManualLoginPageProps = {
  searchParams: Promise<{ from?: string; error?: string }>;
};

export default async function ManualLoginPage({ searchParams }: ManualLoginPageProps) {
  const params = await searchParams;
  const destination = params.from === '/manual.html' ? params.from : '/manual.html';
  const isGoogleAuthConfigured = Boolean(
    process.env.GOOGLE_CLIENT_ID &&
      process.env.GOOGLE_CLIENT_SECRET &&
      process.env.NEXTAUTH_SECRET,
  );

  // NextAuth retorna 'AccessDenied' se a verificação no callback signIn falhar
  const hasError = params.error === 'AccessDenied';

  return (
    <section className={styles.page}>
      <div className={styles.panel}>
        <p className={styles.eyebrow}>Acesso restrito</p>
        <h1 className={styles.title}>Manual de Projetos</h1>
        <p className={styles.description}>Faça login com seu e-mail da IDE (@idejr.com.br) para continuar.</p>

        <div className={styles.formContainer} style={{ marginTop: '32px' }}>
          {isGoogleAuthConfigured ? (
            <GoogleLoginButton destination={destination} />
          ) : (
            <p className={styles.error}>
              O login do Google não está configurado. Preencha GOOGLE_CLIENT_ID,
              GOOGLE_CLIENT_SECRET e NEXTAUTH_SECRET no arquivo .env e reinicie
              o servidor.
            </p>
          )}
          {hasError && <p className={styles.error} style={{ marginTop: '16px', color: 'red', fontSize: '14px', textAlign: 'center' }}>Acesso negado. Use um e-mail @idejr.com.br.</p>}
        </div>
      </div>
    </section>
  );
}