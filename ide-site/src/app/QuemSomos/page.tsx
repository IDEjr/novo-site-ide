import styles from "./page.module.css";
import FrontQuemSomos from "@/components/QuemSomos/FrontQuemSomos/FrontQuemSomos";
import NossaGente from "@/components/QuemSomos/NossaGente/NossaGente";
import Parte from "@/components/QuemSomos/Parte/Parte";
import Timeline from "@/components/QuemSomos/Timeline/Timeline";

export default function QuemSomos() {
  return (
    <section className={styles.quemsomos}>
      <div className={styles.background}>
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
