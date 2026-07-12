import FrontPortfolio from '../../components/Portfolio/FrontPortfolio/FrontPortfolio';
import styles from './page.module.css';

export default function PortfolioPage() {
  return (
    <main className={styles.hero}>
      <FrontPortfolio />
    </main>
  );
}
