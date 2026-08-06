"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./NossaGente.module.css";
import { yearCollections } from "@/data/members";


export default function NossaGente() {
  const [selectedYear, setSelectedYear] = useState("2026/2");

  const activeCollection =
    yearCollections.find((collection) => collection.year === selectedYear) ??
    yearCollections[0];

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2>Nossa Gente</h2>
        <p>O capital intelectual que sustenta cada linha de código.</p>
      </div>

      <div
        className={styles.yearSelector}
        role="tablist"
        aria-label="Selecionar ano"
      >
        {yearCollections.map((collection) => {
          const isActive = collection.year === activeCollection.year;

          return (
            <button
              key={collection.year}
              type="button"
              className={`${styles.yearButton} ${
                isActive ? styles.active : ""
              }`}
              onClick={() => setSelectedYear(collection.year)}
            >
              {collection.year}
            </button>
          );
        })}
      </div>

      <div className={styles.cardsWrapper}>
        {activeCollection.integrantes.map((integrante) => (
          <article
            key={`${integrante.nome}-${integrante.cargo}`}
            className={styles.card}
          >
            <div className={styles.imageWrap}>
              <Image
                src={integrante.image}
                alt={integrante.nome}
                fill
                priority
                sizes="(max-width: 768px) 80vw, 220px"
              />
            </div>

            <div className={styles.cardContent}>
              <h3>{integrante.nome}</h3>
              <p>{integrante.cargo}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
