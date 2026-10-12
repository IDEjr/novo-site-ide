import styles from "./page.module.css";
import FrontQuemSomos from "@/components/QuemSomos/FrontQuemSomos/FrontQuemSomos";
import NossaGente from "@/components/QuemSomos/NossaGente/NossaGente";
import Timeline from "@/components/QuemSomos/Timeline/Timeline";
import Conquistas from "@/components/QuemSomos/Conquistas/Conquistas";

export default function QuemSomos() {
  return (
    <section className={styles.quemsomos}>
      <div className={styles.background}>
      </div>

      <main className={styles.hero}>
        <FrontQuemSomos />
        <Timeline />
        <Conquistas />
        <NossaGente />
      </main>
    </section>
  );
}
