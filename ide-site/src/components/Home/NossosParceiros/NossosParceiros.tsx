import styles from './NossosParceiros.module.css';

const parceiros = [
  { nome: 'INF' },
  { nome: 'UFRGS' },
  { nome: 'CEI' },
];

export default function NossosParceiros() {
  return (
    <section className={styles.parceirosSection}>
      <div className={styles.parceirosBox}>
        <h2>Nossos Parceiros</h2>

        <div className={styles.parceirosList}>
          {parceiros.map((parceiro) => (
            <div key={parceiro.nome} className={styles.parceiroBubble}>
              <span>{parceiro.nome}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}