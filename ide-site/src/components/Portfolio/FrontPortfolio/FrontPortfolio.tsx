import styles from "./FrontPortfolio.module.css";

export default function FrontPortfolio() {
  return (
    <section className={styles.content}>
      <div className={styles.textContent}>
        <h2 className={styles.title}>
          <span>
            Nosso <strong className={styles.highlight}>portfólio.</strong>
          </span>
        </h2>

        <p className={styles.description}>
          Explora nosso ecossistema de soluções digitais. De plataformas
          complexas a interfaces minimalistas, cada linha de código é escrita
          com o rigor acadêmico da UFRGS e a energia de uma Empresa Júnior.
        </p>
      </div>
    </section>
  );
}
