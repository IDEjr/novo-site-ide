"use client";

import styles from "./page.module.css";
import FrontPortfolio from "../../components/Portfolio/FrontPortfolio/FrontPortfolio";
import Projetos from "../../components/Portfolio/Projetos/Projetos";
import Commit from "../../components/Portfolio/Commit/Commit";
import FaultyTerminal from "../../components/FaultyTerminal/FaultyTerminal";


export default function PortfolioPage() {
  return (
    <section className={styles.portfolio}>
      <div className={styles.background}>
        <FaultyTerminal
          scale={2.7}
          tint="#67db52"
          timeScale={1.4}
          curvature={0}
        />
      </div>

      <main className={styles.hero}>
        <FrontPortfolio />
        <Projetos />
        <Commit />
      </main>
    </section>
  );
}
