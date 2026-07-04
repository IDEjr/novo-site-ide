import styles from './page.module.css';
import FrontQuemSomos from '@/components/QuemSomos/FrontQuemSomos';
import NossaGente from '@/components/QuemSomos/NossaGente';
import Parte from '@/components/QuemSomos/Parte';
import Timeline from '@/components/QuemSomos/Timeline';

export default function QuemSomos() {
  return (
    <main className={styles.hero}>
      <FrontQuemSomos />
      <Timeline />
      <NossaGente />
      <Parte />
    </main>
  );
}