import styles from './page.module.css';
import CTAHome from '../components/Home/CTAHome/CTAHome';
import FrontHome from '../components/Home/FrontHome/FrontHome';

export default function Home() {
  return (
    <main className={styles.hero}>
      <FrontHome />
      <CTAHome />
    </main>
  );
}