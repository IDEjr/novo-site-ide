import FrontServicos from '@/components/Servicos/FrontServicos/FrontServicos';
import GridServicos from '@/components/Servicos/GridServicos/GridServicos';
import CTAHome from "@/components/Home/CTAHome/CTAHome";
import styles from './page.module.css';

export default function Servicos() {
  return (
    <main className={styles.hero}>
      <FrontServicos />
      <GridServicos />
      <CTAHome  />
    </main>
  );
}