import Link from 'next/link';
import CtaLink from '@/components/CtaLink/CtaLink';
import styles from './FrontHome.module.css';
import Typewriter from '../../Typewriter/Typewriter';

const words = [
  "futuro.",
  "referência.",
  "sucesso.",
  "inovação.",
  "evolução."
];


export default function FrontHome() {
  return (
    <section className={styles.content}>
      <div className={styles.textContent}>
        <h1>
          Transformamos código em{" "}
          <span className={styles.typewriter}>
            <Typewriter words={words} />
          </span>
        </h1>

        <p>
          A IDE é a empresa júnior de informática da UFRGS. Desenvolvemos soluções digitais de alta
          performance com a energia e inovação que só o ambiente acadêmico proporciona.
        </p>

        <div className={styles.actions}>
          <CtaLink href="/Contato" className={`${styles.button} ${styles.buttonPrimary}`} origin="home_front">
            Fale conosco
          </CtaLink>
          <Link href="/Portfolio" className={`${styles.button} ${styles.buttonSecondary}`}>
            Ver portfólio
          </Link>
        </div>
      </div>
    </section>
  );
}
