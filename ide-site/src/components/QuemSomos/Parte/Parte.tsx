import Image from "next/image";
import Link from "next/link";
import styles from "./Parte.module.css";

export default function Parte() {
  return (
    <section className={styles.showcase}>
      <div className={styles.card}>
        <div className={styles.text}>

          <h2>Quer fazer parte dessa história?</h2>

          <p>
            Nosso processo seletivo abre semestralmente para alunos da computação da UFRGS. Venha codar o futuro com a gente.
          </p>

          <div className={styles.actions}>
            <Link href="/Servicos" className={styles.primary}>
              Processo Seletivo
            </Link>

            <Link href="/Contato" className={styles.secondary}>
                Ver manifesto
            </Link>
          </div>
        </div>

        <div className={styles.imageContainer}>
          <Image
            src="/imagens/sapo-ide.png"
            alt="Sapo IDE"
            width={420}
            height={420}
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}