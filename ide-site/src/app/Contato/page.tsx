import ContatoInfo from '../../components/Contato/ContatoInfo/ContatoInfo';
import ContatoForm from '../../components/Contato/ContatoForm/ContatoForm';
import styles from './page.module.css';

export default function Contato() {
  return (
    <main className={styles.mainContato}>
      <ContatoInfo />
      <ContatoForm />
    </main>
  );
}