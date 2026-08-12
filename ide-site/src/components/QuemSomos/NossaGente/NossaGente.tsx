"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./NossaGente.module.css";
import { yearCollections } from "@/data/members";

export default function NossaGente() {
  const [selectedYear, setSelectedYear] = useState("2026/2");
  const [isOpen, setIsOpen] = useState(false);

  const activeCollection =
    yearCollections.find((collection) => collection.year === selectedYear) ??
    yearCollections[0];

  const handleSelect = (year: string) => {
    setSelectedYear(year);
    setIsOpen(false);
  };

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2>Nossa Gente</h2>
        <p>O capital intelectual que sustenta cada linha de código.</p>
      </div>

      <div className={styles.selectorWrapper}>
        <span className={styles.selectorLabel}>Gestão</span>

        <div className={styles.dropdown}>
          <button
            type="button"
            className={`${styles.dropdownButton} ${
              isOpen ? styles.dropdownButtonOpen : ""
            }`}
            onClick={() => setIsOpen((prev) => !prev)}
            aria-haspopup="listbox"
            aria-expanded={isOpen}
          >
            <span>{activeCollection.year}</span>

            <svg
              className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`}
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M6 9L12 15L18 9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {isOpen && (
            <div className={styles.dropdownMenu} role="listbox">
              {yearCollections.map((collection) => {
                const isActive = collection.year === activeCollection.year;

                return (
                  <button
                    key={collection.year}
                    type="button"
                    role="option"
                    aria-selected={isActive}
                    className={`${styles.dropdownOption} ${
                      isActive ? styles.dropdownOptionActive : ""
                    }`}
                    onClick={() => handleSelect(collection.year)}
                  >
                    <span>{collection.year}</span>

                    {isActive && (
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M5 12L10 17L19 7"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>
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