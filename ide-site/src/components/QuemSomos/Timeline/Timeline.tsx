"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./Timeline.module.css";

type EraPhoto = {
  src: string;
  alt: string;
  caption: string;
};

type Era = {
  year: string;
  title: string;
  description: string;
  photos?: [EraPhoto, EraPhoto, EraPhoto];
};

const eras: Era[] = [
  {
    year: "2016",
    title: "Fundação e primeiros passos no INF",
    description:
      "Um grupo de estudantes visionários do INF-UFRGS decide que a teoria precisava de prática. Nasce a IDE.",
    photos: [
      {
        src: "/imagens/trajetoria/2016/C%C3%B3pia%20de%20fundacao01.jpg",
        alt: "Registro da fundação da IDE em 2016",
        caption: "Fundação da IDE",
      },
      {
        src: "/imagens/trajetoria/2016/imersão.jpg",
        alt: "Registro da imersão da IDE em 2016",
        caption: "Imersão",
      },
      {
        src: "/imagens/trajetoria/2016/0001.png",
        alt: "Foto histórica da IDE em 2016",
        caption: "Registro de 2016",
      },
    ],
  },
  {
    year: "2018",
    title: "Expansão e consolidação",
    description:
      "Primeiros grandes projetos comerciais. A IDE começa a ser reconhecida no ecossistema de inovação do RS.",
    photos: [
      {
        src: "/imagens/trajetoria/2018/egej2018.jpg",
        alt: "Equipe da IDE no EGEJ de 2018",
        caption: "EGEJ 2018",
      },
      {
        src: "/imagens/trajetoria/2018/29543108_1924001044597015_1693264989132287545_n.jpg",
        alt: "Registro da IDE em 2018",
        caption: "Registro de 2018",
      },
      {
        src: "/imagens/trajetoria/2018/27654771_1899797170350736_2797026366714940346_n.jpg",
        alt: "Registro da IDE em 2018",
        caption: "Registro de 2018",
      },
    ],
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

function PhotoCard({
  photo,
  className,
  placeholder,
  showCaption = false,
}: {
  photo?: EraPhoto;
  className: string;
  placeholder: string;
  showCaption?: boolean;
}) {
  return (
    <div className={`${styles.photoPlaceholder} ${className}`}>
      {photo ? (
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="(max-width: 900px) 100vw, 700px"
          className={styles.photoImage}
        />
      ) : (
        placeholder
      )}
      {showCaption && (
        <span className={styles.caption}>{photo?.caption ?? "Legenda"}</span>
      )}
    </div>
  );
}

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
              <PhotoCard
                photo={activeEra.photos?.[0]}
                className={styles.photoLarge}
                placeholder={`[Foto Grande ${activeEra.year}]`}
                showCaption
              />

              <div className={styles.photoSmallStack}>
                <PhotoCard
                  photo={activeEra.photos?.[1]}
                  className={styles.photoSmall}
                  placeholder={`[Foto Menor ${activeEra.year} - A]`}
                />
                <PhotoCard
                  photo={activeEra.photos?.[2]}
                  className={styles.photoSmall}
                  placeholder={`[Foto Menor ${activeEra.year} - B]`}
                />
              </div>
            </div>
          </div>

          <div className={`${styles.navContainer} ${styles.navBottom} ${activeIndex === eras.length - 1 ? styles.invisible : ""}`}>
            <span className={styles.navText}>
              Próxima era: {activeIndex < eras.length - 1 ? eras[activeIndex + 1].year : "---"}
            </span>
            <button
              className={`${styles.navButton} ${styles.navButtonDown}`}
              onClick={() => activeIndex < eras.length - 1 && setActiveIndex(activeIndex + 1)}
              title={activeIndex < eras.length - 1 ? `Avançar para ${eras[activeIndex + 1].year}` : ""}
            >
              ↓
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}