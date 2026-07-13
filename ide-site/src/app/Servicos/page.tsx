import FrontServicos from '@/src/components/Servicos/FrontServicos';
import CTAServicos from '@/src/components/Servicos/CTAServicos';
import styles from './page.module.css';

export default function Servicos() {
  return (
    <main className={styles.hero}>
      <FrontServicos />
      <CTAServicos />
    </main>
  );
}