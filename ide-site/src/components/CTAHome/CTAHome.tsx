import Link from 'next/link';
import styles from './CTAHome.module.css';

export default function CTAHome() {
  return (
    <section className={styles.ctaHomeSection}>
      <div className={styles.ctaHomeBox}>
        <h2>
          Pronto para tirar sua <span className={styles.highlight}>ide</span>ia do papel?
        </h2>

        <p>
          Vamos conversar sobre o seu próximo grande projeto. 
          Nossos consultores estão prontos para te ajudar.
        </p>
        
        <Link href="/contato" className={styles.ctaButton}>
          Fale Conosco
        </Link>
      </div>
    </section>
  );
}