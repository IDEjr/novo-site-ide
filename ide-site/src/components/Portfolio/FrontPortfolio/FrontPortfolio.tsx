import Image from 'next/image';
import styles from './FrontPortfolio.module.css';

export default function FrontPortfolio() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>
              <span>Nosso Output.</span>
            </h2>

            <p className={styles.description}>
              Explora nosso ecossistema de soluções digitais. De plataformas
              complexas a interfaces minimalistas, cada linha de código é escrita
              com o rigor acadêmico da UFRGS e a energia de uma Junior.
            </p>
          </div>

          <div className={styles.imageWrapper}>
            <Image
              src="/imagens/gato-ide.png"
              alt="Ilustração do gato da IDE"
              className={styles.image}
              width={360}
              height={360}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}