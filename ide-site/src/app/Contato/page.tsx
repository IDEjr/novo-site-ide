import ContatoInfo from '@/src/components/Contato/ContatoInfo/ContatoInfo';
import ContatoForm from '@/src/components/Contato/ContatoForm/ContatoForm';
import styles from './page.module.css';

export default function Contato() {
  return (
    <main className={styles.mainContato}>
      <ContatoInfo />
      <ContatoForm />
    </main>
  );
}