import styles from "./MVVCards.module.css";

const valores = [
  "Foco no Cliente",
  "Aprendizado Constante",
  "Trabalho em Equipe",
  "Transparência Radical",
];

export default function MVVCards() {
  return (
    <section className={styles.mvvSection}>
      <div className={styles.mvvBox}>
        <div className={styles.mvvRow}>
          <div className={styles.mvvCard}>
            <h3>MISSÃO</h3>

            <div className={styles.mvvIcon}>
              <svg
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="9" />
                <circle cx="12" cy="12" r="4.5" />
                <circle cx="12" cy="12" r="0.8" fill="#ffffff" />
              </svg>
            </div>

            <p>
              Formar profissionais de excelência através da vivência
              empresarial, entregando soluções tecnológicas de alto valor para
              nossos clientes.
            </p>
          </div>

          <div className={styles.mvvCard}>
            <h3>VISÃO</h3>

            <div className={styles.mvvIcon}>
              <svg
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M1.5 12S5 5 12 5s10.5 7 10.5 7-3.5 7-10.5 7S1.5 12 1.5 12Z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>

            <p>
              Ser referência nacional em desenvolvimento de software e
              formação de lideranças no Movimento Empresa Júnior.
            </p>
          </div>

          <div className={styles.mvvCard}>
            <h3>VALORES</h3>

            <div className={styles.mvvIcon}>
              <svg
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>

            <ul className={styles.mvvList}>
              {valores.map((valor) => (
                <li key={valor}>{valor}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
