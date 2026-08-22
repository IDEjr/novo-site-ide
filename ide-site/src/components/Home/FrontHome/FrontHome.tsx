import Link from 'next/link';
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
          <Link href="/Contato" className={`${styles.button} ${styles.buttonPrimary}`}>
            Fale Conosco
          </Link>
          <Link href="/Portfolio" className={`${styles.button} ${styles.buttonSecondary}`}>
            Ver Portfólio
          </Link>
        </div>
      </div>
    </section>
  );
}
