import CtaLink from "@/components/CtaLink/CtaLink";
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
        <CtaLink href="/Contato" className={styles.button} origin="contact_cta">
          Fale conosco
        </CtaLink>
      </div>
    </section>
  );
}
