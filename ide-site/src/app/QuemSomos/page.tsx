import styles from './page.module.css';
import FrontQuemSomos from '@/components/QuemSomos/FrontQuemSomos';

export default function QuemSomos() {
  return (
    <main className={styles.hero}>
      <FrontQuemSomos />
    </main>
  );
}