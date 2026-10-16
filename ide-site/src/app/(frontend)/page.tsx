import styles from "./page.module.css";
import FrontHome from "@/components/Home/FrontHome/FrontHome";
import ProjetosDestaque from "@/components/Home/ProjetosDestaque/ProjetosDestaque";
import ComoTrabalhamos from "@/components/Home/ComoTrabalhamos/ComoTrabalhamos";
import AgoraNaIde from "@/components/Home/AgoraNaIde/AgoraNaIde";
import ExcelenciaUfrgs from "@/components/Home/ExcelenciaUfrgs/ExcelenciaUfrgs";
import CTAHome from "@/components/Home/CTAHome/CTAHome";

export default function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.background}>
      </div>

      <main className={styles.hero}>
        <FrontHome />
        <ProjetosDestaque />
        <ComoTrabalhamos />
        <AgoraNaIde />
        <ExcelenciaUfrgs />
        <CTAHome />
      </main>
    </section>
  );
}
