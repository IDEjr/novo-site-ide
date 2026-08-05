"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./NossaGente.module.css";

const yearCollections = [
  {
    year: "2026/2",
    integrantes: [
      { nome: "Pedro Müller", cargo: "Presidente", image: "/imagens/gestoes/26-2/pedro-muller.png" },
      { nome: "João Carlos Batista", cargo: "Vice-Presidente", image: "/imagens/gestoes/26-2/joao-carlos-batista.png" },
      { nome: "Giovanni Milanez", cargo: "Diretor do Financeiro", image: "/imagens/gestoes/26-2/giovanni-milanez.png" },
      { nome: "João Pedro Alves", cargo: "Diretor de Marketing", image: "/imagens/gestoes/26-2/joao-pedro-alves.png" },
      { nome: "Leonardo Rocha", cargo: "Diretor de Projetos" , image: "/imagens/gestoes/26-2/leonardo-rocha.png" },
      { nome: "Luís Macedo", cargo: "Diretor de Relações Públicas" ,image: "/imagens/gestoes/26-2/luis-macedo.png" },
      { nome: "Kelvin Schaun", cargo: "Diretor de Recursos Humanos", image: "/imagens/gestoes/26-2/kelvin-schaun.png" },
      { nome: "Bruno Delgiovo", cargo: "Diretor de Comercial" , image: "/imagens/gestoes/26-2/bruno-delgiovo.png" },
    ],
  },
  {
    year: "2026/1",
    integrantes: [
      { nome: "João Carlos Batista",cargo: "Presidente", image: "/imagens/gestoes/26-2/joao-carlos-batista.png" },
      { nome: "Giovanni Milanez", cargo: "Diretor do Financeiro", image: "/imagens/gestoes/26-2/giovanni-milanez.png" },
      { nome: "João Pedro Alves", cargo: "Diretor de Marketing", image: "/imagens/gestoes/26-2/joao-pedro-alves.png" },
      { nome: "Miguel Dutra", cargo: "Diretor de Projetos", image: "/imagens/gestoes/26-1/miguel-dutra.png" },
      { nome: "Arthur Andrade", cargo: "Diretor de Relações Acadêmicas", image: "/imagens/gestoes/26-1/arthur-andrade.png" },
      { nome: "Pedro Müller", cargo: "Diretor de Recursos Humanos", image: "/imagens/gestoes/26-2/pedro-muller.png" },
      { nome: "Bruno Souza", cargo: "Diretor de Comercial",image: "/imagens/gestoes/26-1/bruno-souza.png" },
    ],
  },
  {
    year: "2025/2",
    integrantes: [
      { nome: "João Carlos Batista", cargo: "Presidente", image: "/imagens/gestoes/26-2/joao-carlos-batista.png" },
      { nome: "Angelo Oliveira", cargo: "Diretor do Financeiro", image: "/imagens/gestoes/25-2/angelo-oliveira.png" },
      { nome: "Rafaela Rembold", cargo: "Diretor de Marketing", image: "/imagens/gestoes/25-2/rafaela-rembold.png" },
      { nome: "Ricardo Zanini", cargo: "Diretor de Projetos", image: "/imagens/gestoes/25-2/ricardo-zanini.png" },
      { nome: "Arthur Andrade", cargo: "Diretor de Relações Acadêmicas", image: "/imagens/gestoes/26-1/arthur-andrade.png" },
      { nome: "Ana Cláudia Rodrigues", cargo: "Diretor de Recursos Humanos", image: "/imagens/gestoes/25-2/ana-claudia.png" },
      { nome: "Bruno Souza", cargo: "Diretor de Comercial", image: "/imagens/gestoes/26-1/bruno-souza.png" },
    ],
  },
  {
    year: "2025/1",
    integrantes: [
      { nome: "Luca Pasquetti",cargo: "Presidente", image: "/imagens/sapo-ide.png" },
      { nome: "Luiz Henrique de Ramos",cargo: "Diretor do Financeiro", image: "/imagens/sapo-ide.png" },
      { nome: "André Klarmann",cargo: "Diretor de Marketing", image: "/imagens/sapo-ide.png" },
      { nome: "Bernardo Cobalchini", cargo: "Diretor de Projetos", image: "/imagens/sapo-ide.png" },
      { nome: "Gabriel Welter", cargo: "Diretor de Recursos Humanos", image: "/imagens/sapo-ide.png" },
      { nome: "Lucas Leal", cargo: "Diretor de Comercial", image: "/imagens/sapo-ide.png" },
    ],
  },
  {
    year: "2024/2",
    integrantes: [
      { nome: "Gabriel Welter",cargo: "Presidente e Diretor de Recursos Humanos", image: "/imagens/sapo-ide.png" },
      { nome: "Luiz Henrique de Ramos",cargo: "Diretor do Financeiro", image: "/imagens/sapo-ide.png" },
      { nome: "Luca Boni",cargo: "Diretor de Marketing", image: "/imagens/sapo-ide.png" },
      { nome: "Luca Pasquetti",cargo: "Diretor de Projetos", image: "/imagens/sapo-ide.png" },
      { nome: "Lucas Leal",cargo: "Diretor de Comercial", image: "/imagens/sapo-ide.png" },
    ],
  },
  {
    year: "2024/1",
    integrantes: [
      { nome: "Pedro Henrique Colle",cargo: "Presidente e Diretor do Financeiro", image: "/imagens/sapo-ide.png" },
      { nome: "Gleydson Sousa",cargo: "Diretor de Marketing", image: "/imagens/sapo-ide.png" },
      { nome: "Leonardo Gonzatti", cargo: "Diretor de Projetos", image: "/imagens/sapo-ide.png" },
      { nome: "Bruno Hofstetter",cargo: "Diretor de Recursos Humanos",  image: "/imagens/sapo-ide.png" },
      { nome: "Vítor Hugo", cargo: "Diretor de Comercial", image: "/imagens/sapo-ide.png" },
    ],
  },


];

export default function NossaGente() {
  const [selectedYear, setSelectedYear] = useState("2026/2");

  const activeCollection =
    yearCollections.find(
      (collection) => collection.year === selectedYear
    ) ?? yearCollections[0];

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