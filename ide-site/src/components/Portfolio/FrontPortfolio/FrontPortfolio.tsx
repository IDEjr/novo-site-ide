import Image from 'next/image';
import styles from './FrontPortfolio.module.css';

export default function FrontPortfolio() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.textBlock}>
          <h2 className={styles.title}>Nosso Output.</h2>
          <p className={styles.description}>
            Transformamos ideias em soluções digitais com foco em resultado, estética e
            experiência real para pessoas e marcas.
          </p>
        </div>

        <div className={styles.imageWrapper}>
          <Image
            src="/imagens/gato-ide.png"
            alt="Ilustração do gato da IDE"
            className={styles.image}
            width={420}
            height={420}
            priority
          />
        </div>
      </div>
    </section>
  );
}
