import Image from "next/image";
import styles from "./FrontPortfolio.module.css";

export default function FrontPortfolio() {
  return (
    <section className={styles.content}>
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

      <Image
        src="/imagens/gato-ide.png"
        alt="Ilustração do gato da IDE"
        className={styles.heroImage}
        width={640}
        height={520}
        priority
      />
    </section>
  );
}
