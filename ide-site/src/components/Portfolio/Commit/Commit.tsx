import Link from "next/link";
import styles from "./Commit.module.css";

export default function Commit() {
  return (
    <section className={styles.showcase}>
      <div className={styles.card}>
        <h2 className={styles.title}>
          Pronto para o próximo <span>commit</span>?
        </h2>

        <p className={styles.description}>
          Transformamos sua visão em código de alta performance.
          Vamos construir algo incrível juntos.
        </p>

        <Link href="/Contato" className={styles.button}>
          Fale Conosco
        </Link>
      </div>
    </section>
  );
}