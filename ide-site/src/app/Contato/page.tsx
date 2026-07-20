import ContatoInfo from '@/src/components/Contato/ContatoInfo/ContatoInfo';
import styles from './page.module.css';

export default function Contato() {
  return (
    <main className={styles.mainContato}>
      <ContatoInfo />
    </main>
  );
}