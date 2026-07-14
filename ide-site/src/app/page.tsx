import styles from './page.module.css';
import CTAHome from '../components/Home/CTAHome/CTAHome';
import FrontHome from '../components/Home/FrontHome/FrontHome';
import NossosParceiros from '../components/Home/NossosParceiros/NossosParceiros';

export default function Home() {
  return (
    <main className={styles.hero}>
      <FrontHome />
      <NossosParceiros />
      <CTAHome />
    </main>
  );
}