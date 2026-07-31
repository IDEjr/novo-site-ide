import FrontServicos from '@/components/Servicos/FrontServicos/FrontServicos';
import GridServicos from '@/components/Servicos/GridServicos/GridServicos';
import CTAServicos from '@/components/Servicos/CTAServicos/CTAServicos';
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