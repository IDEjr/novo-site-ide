import styles from "./page.module.css";
import FrontPortfolio from "@/components/Portfolio/FrontPortfolio/FrontPortfolio";
import Projetos from "@/components/Portfolio/Projetos/Projetos";
import CTAHome from "@/components/Home/CTAHome/CTAHome";


export default function PortfolioPage() {
  return (
    <section className={styles.portfolio}>
      <div className={styles.background}>
      </div>

      <main className={styles.hero}>
        <FrontPortfolio />
        <Projetos />
        <CTAHome  />
      </main>
    </section>
  );
}
