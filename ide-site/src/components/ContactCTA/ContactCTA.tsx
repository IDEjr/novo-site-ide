import Link from "next/link";
import styles from "./ContactCTA.module.css";

type ContactCTAProps = {
  className?: string;
};

export default function ContactCTA({ className = "" }: ContactCTAProps) {
  return (
    <section className={`${styles.section} ${className}`}>
      <div className={styles.card}>
        <h2>Pronto para tirar sua ideia do papel?</h2>
        <p>Conte o que você precisa. Vamos pensar na melhor solução junto com você.</p>
        <Link href="/Contato" className={styles.button}>
          Fale conosco
        </Link>
      </div>
    </section>
  );
}
