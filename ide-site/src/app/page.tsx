"use client";

import styles from "./page.module.css";
import FrontHome from "../components/Home/FrontHome/FrontHome";
import NossosParceiros from "../components/Home/NossosParceiros/NossosParceiros";
import InfoCards from "../components/Home/InfoCards/InfoCards";
import CTAHome from "../components/Home/CTAHome/CTAHome";
import FaultyTerminal from "../components/FaultyTerminal/FaultyTerminal";

export default function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.background}>
        <FaultyTerminal
          scale={2.7}
          tint="#7b00ff"
          timeScale={1.7}
          curvature={0.28}
        />
      </div>

      <main className={styles.hero}>
        <FrontHome />
        <NossosParceiros />
        <InfoCards />
        <CTAHome />
      </main>
    </section>
  );
}
