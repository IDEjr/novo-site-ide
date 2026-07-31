"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./NossaGente.module.css";

const roles = ["Presidente", "Vice-presidente", "Diretor de Financeiro", 
"Diretor de Marketing", "Diretor de Projetos", "Diretor de Relações Públicas",
"Diretor de Recursos Humanos", "Diretor de Comercial"];

const yearCollections = [
  {
    year: "2026/2",
    integrantes: [
      { nome: "Fulano", image: "/imagens/sapo-ide.png" },
      { nome: "Fulano", image: "/imagens/sapo-ide.png" },
      { nome: "Fulano", image: "/imagens/sapo-ide.png" },
    ],
  },
  {
    year: "2025/2",
    integrantes: [
      { nome: "Fulano", image: "/imagens/sapo-ide.png" },
      { nome: "Fulano", image: "/imagens/sapo-ide.png" },
      { nome: "Fulano", image: "/imagens/sapo-ide.png" },
    ],
  },
];

const buildItems = (integrantes: { nome: string; image: string }[]) =>
  roles.map((role, index) => ({
    integrante: integrantes[index]?.nome ?? "Fulano",
    title: role,
    image: integrantes[index]?.image ?? "/imagens/sapo-ide.png",
  }));

export default function NossaGente() {
  const [selectedYear, setSelectedYear] = useState("2025/2");
  const activeCollection =
    yearCollections.find((collection) => collection.year === selectedYear) ??
    yearCollections[0];
  const activeItems = buildItems(activeCollection.integrantes);

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
              className={`${styles.yearButton} ${isActive ? styles.active : ""}`}
              onClick={() => setSelectedYear(collection.year)}
            >
              {collection.year}
            </button>
          );
        })}
      </div>

      <div className={styles.cardsWrapper}>
        {activeItems.map((item) => (
          <article key={item.title} className={styles.card}>
            <div className={styles.imageWrap}>
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 80vw, 220px"
              />
            </div>

            <div className={styles.cardContent}>
              <h3>{item.integrante}</h3>
              <p>{item.title}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
