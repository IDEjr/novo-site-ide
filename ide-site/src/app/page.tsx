import styles from './page.module.css';
import FrontHome from '../components/Home/FrontHome/FrontHome';
import NossosParceiros from '../components/Home/NossosParceiros/NossosParceiros';
import InfoCards from '../components/Home/InfoCards/InfoCards';
import CTAHome from '../components/Home/CTAHome/CTAHome';

export default function Home() {
  return (
    <main className={styles.hero}>
      <FrontHome />
      <NossosParceiros />
      <InfoCards />
      <CTAHome />
    </main>
  );
}