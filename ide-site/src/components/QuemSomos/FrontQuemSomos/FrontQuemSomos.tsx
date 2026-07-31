import Image from "next/image";
import styles from "./FrontQuemSomos.module.css";

export default function FrontQuemSomos() {
  return (
    <section className={styles.content}>
      <div className={styles.textContent}>
        <h1>
          Código que <span className={styles.highlight}>Transforma.</span>
        </h1>

        <p>
          Nascemos no coração do Instituto de Informática da UFRGS. Somos
          movidos pela lógica, desafiados pela inovação e unidos pela paixão em
          construir o futuro digital.
        </p>
      </div>

      <div className={styles.imageContainer}>
        <Image
          src="/imagens/sapo-ide.png"
          alt="Sapo IDE"
          width={640}
          height={520}
          priority
          className={styles.heroImage}
        />
      </div>
    </section>
  );
}