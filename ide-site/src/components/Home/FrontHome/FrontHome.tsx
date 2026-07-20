import Link from 'next/link';
import Image from 'next/image';
import styles from './FrontHome.module.css';
import Typewriter from '../../Typewriter/Typewriter';

const words = [
    "Transforma.",
    "Inspira.",
    "Conecta.",
    "Inova.",
    "Evolui."
];


export default function FrontHome() {
  return (
    <section className={styles.content}>
      <div className={styles.textContent}>
        <h1>
          Transformamos Código em {" "} <Typewriter words={words} />
        </h1>

        <p>
          A IDE é a empresa júnior de informática da UFRGS. Desenvolvemos soluções digitais de alta
          performance com a energia e inovação que só o ambiente acadêmico proporciona.
        </p>

        <div className={styles.actions}>
          <Link href="/contato" className={`${styles.button} ${styles.buttonPrimary}`}>
            Fale Conosco
          </Link>
          <Link href="/portfolio" className={`${styles.button} ${styles.buttonSecondary}`}>
            Ver Portfólio
          </Link>
        </div>
      </div>

      <Image
        src="/imagens/detail-front.png"
        alt="Detalhe frontal"
        className={styles.heroImage}
        width={800}
        height={700}
      />
    </section>
  );
}
