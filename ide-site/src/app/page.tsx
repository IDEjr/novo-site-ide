import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.hero}>
      <section className={styles.content}>
        <div className={styles.textContent}>
          <h1>
            Transformamos Código em <span className={styles.highlight}>Impacto</span>.
          </h1>

          <p>
            A IDE é a empresa júnio de informática da UFRGS. Desenvolvemos soluções digitais de alta
            performance com a energia e inovação que só o ambiente acadêmico proporciona.
          </p>

          <div className={styles.actions}>
            <Link href="/contato" className={`${styles.button} ${styles.buttonPrimary}`}>
              Fale Conosco
            </Link>
            <Link href="/portfolio" className={`${styles.button} ${styles.buttonSecondary}`}>
              Ver Portfólio
            </Link>
          </div>
        </div>

        <img
          src="/imagens/detail-front.png"
          alt="Detalhe frontal"
          className={styles.heroImage}
        />
      </section>
    </main>
  );
}