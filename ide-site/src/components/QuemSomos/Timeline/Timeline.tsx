"use client";

import { useState } from "react";
import styles from "./Timeline.module.css";

const eras = [
  {
    year: "2016",
    title: "Fundação e primeiros passos no INF",
    description:
      "Um grupo de estudantes visionários do INF-UFRGS decide que a teoria precisava de prática. Nasce a IDE.",
  },
  {
    year: "2018",
    title: "Expansão e consolidação",
    description:
      "Primeiros grandes projetos comerciais. A IDE começa a ser reconhecida no ecossistema de inovação do RS.",
  },
  {
    year: "2025",
    title: "Nova Identidade e Reestruturação",
    description:
      "Apresentamos uma nova marca moderna, destacando nosso posicionamento criativo e foco em qualidade técnica.",
  },
  {
    year: "2026",
    title: "Software de verdade",
    description:
      "Eleita uma das empresas juniores mais inovadoras. Foco total em engenharia de software de ponta e resultados reais.",
  },
];

export default function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeEra = eras[activeIndex];

  return (
    <section className={styles.timelineSection}>
      <div className={styles.sectionHeader}>
        <span className={styles.overline}>Nossa trajetória</span>
      </div>

      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <div className={styles.yearsList}>
            {eras.map((era, index) => (
              <div key={era.year} className={styles.yearItemContainer}>
                <button
                  className={`${styles.yearNode} ${
                    activeIndex === index ? styles.active : ""
                  }`}
                  onClick={() => setActiveIndex(index)}
                  title={`Ver era ${era.year}`}
                >
                  {era.year}
                </button>
                {index < eras.length - 1 && <div className={styles.yearLine} />}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.rightColumn}>
          <div className={`${styles.navContainer} ${styles.navTop} ${activeIndex === 0 ? styles.invisible : ""}`}>
            <button
              className={`${styles.navButton} ${styles.navButtonUp}`}
              onClick={() => activeIndex > 0 && setActiveIndex(activeIndex - 1)}
              title={activeIndex > 0 ? `Voltar para ${eras[activeIndex - 1].year}` : ""}
            >
              ↑
            </button>
            <span className={styles.navText}>
              Era anterior: {activeIndex > 0 ? eras[activeIndex - 1].year : "---"}
            </span>
          </div>

          <div key={activeEra.year} className={styles.eraBlockFade}>
            <div className={styles.eraHeader}>
              <h2>
                {activeEra.year} – {activeEra.title}
              </h2>
              <p>{activeEra.description}</p>
            </div>

            <div className={styles.photoGrid}>
              <div className={`${styles.photoPlaceholder} ${styles.photoLarge}`}>
                [Foto Grande {activeEra.year}]
                <span className={styles.caption}>Legenda</span>
              </div>
              
              <div className={styles.photoSmallStack}>
                <div className={`${styles.photoPlaceholder} ${styles.photoSmall}`}>
                  [Foto Menor {activeEra.year} - A]
                  <span className={styles.caption}>Legenda</span>
                </div>
                <div className={`${styles.photoPlaceholder} ${styles.photoSmall}`}>
                  [Foto Menor {activeEra.year} - B]
                  <span className={styles.caption}>Legenda</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.navContainer} ${styles.navBottom}`}>
            {activeIndex < eras.length - 1 ? (
              <>
                <span className={styles.navText}>
                  Próxima era: {eras[activeIndex + 1].year}
                </span>
                <button
                  className={`${styles.navButton} ${styles.navButtonDown}`}
                  onClick={() => setActiveIndex(activeIndex + 1)}
                  title={`Avançar para ${eras[activeIndex + 1].year}`}
                >
                  ↓
                </button>
              </>
            ) : (
              <span className={styles.navTextFinal}>
                
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}