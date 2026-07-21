"use client";

import styles from "./page.module.css";
import FrontQuemSomos from "@/components/QuemSomos/FrontQuemSomos/FrontQuemSomos";
import NossaGente from "@/components/QuemSomos/NossaGente/NossaGente";
import Parte from "@/components/QuemSomos/Parte/Parte";
import Timeline from "@/components/QuemSomos/Timeline/Timeline";
import FaultyTerminal from "../../components/FaultyTerminal/FaultyTerminal";

export default function QuemSomos() {
  return (
    <section className={styles.quemsomos}>
      <div className={styles.background}>
        <FaultyTerminal
          scale={2.7}
          tint="#143c69"
          timeScale={0.3}
          curvature={1.2}
        />
      </div>

      <main className={styles.hero}>
        <FrontQuemSomos />
        <Timeline />
        <NossaGente />
        <Parte />
      </main>
    </section>
  );
}
