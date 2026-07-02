import styles from './page.module.css';
import FrontQuemSomos from '@/components/QuemSomos/FrontQuemSomos';
import Timeline from '@/components/QuemSomos/Timeline';

export default function QuemSomos() {
  return (
    <main className={styles.hero}>
      <FrontQuemSomos />
      <Timeline />
    </main>
  );
}