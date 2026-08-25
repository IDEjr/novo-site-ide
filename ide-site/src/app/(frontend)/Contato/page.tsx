import ContatoInfo from '@/components/Contato/ContatoInfo/ContatoInfo';
import ContatoForm from '@/components/Contato/ContatoForm/ContatoForm';
import styles from './page.module.css';

export default function Contato() {
  return (
    <main className={styles.mainContato}>
      <h1>Entre em <span className={styles.highlight}>contato</span> conosco.</h1>
      <div className={styles.contactContent}>
        <ContatoInfo />
        <ContatoForm />
      </div>
    </main>
  );
}
