import FrontServicos from '@/src/components/Servicos/FrontServicos/FrontServicos';
import GridServicos from '@/src/components/Servicos/GridServicos/GridServicos';
import CTAServicos from '@/src/components/Servicos/CTAServicos/CTAServicos';
import styles from './page.module.css';

export default function Servicos() {
  return (
    <main className={styles.hero}>
      <FrontServicos />
      <GridServicos />
      <CTAServicos />
    </main>
  );
}