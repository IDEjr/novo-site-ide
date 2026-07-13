import Link from 'next/link';
import styles from './CTAServicos.module.css';

export default function CTAServicos() {
  return (
    <section className={styles.content}>
        <div className={styles.ctaBox}>
            <h1>Pronto para dar o próximo passo?</h1>

            <Link href="/Contato" className={styles.button}>
              Fale Conosco
            </Link>
        </div>
    </section>
  );
}