import styles from "./FrontQuemSomos.module.css";

export default function FrontQuemSomos() {
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
