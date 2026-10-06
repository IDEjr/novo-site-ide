import styles from "./FrontQuemSomos.module.css";

export default function FrontQuemSomos() {
  // Array temporário simulando as fotos. 
  // O ideal depois é importar do Next/Image com as fotos reais do INF/Lab.
  const carouselItems = [1, 2, 3, 4, 5, 6];

  return (
    <section className={styles.heroSection}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h1>
            Estudantes da UFRGS construindo <span className={styles.highlight}>software.</span>
          </h1>
        </div>
      </div>

      <div className={styles.carouselContainer}>
        <div className={styles.carouselTrack}>
          {/* Duplicamos os itens para o efeito de rolagem infinita (marquee) */}
          {[...carouselItems, ...carouselItems].map((item, index) => (
            <div key={index} className={styles.carouselItem}>
              <div className={styles.imagePlaceholder}>
                [Foto {item}]
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
