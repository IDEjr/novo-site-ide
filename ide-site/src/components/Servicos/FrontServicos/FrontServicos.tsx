import styles from './FrontServicos.module.css';

export default function FrontServicos() {
  return (
    <section className={styles.content}>
        <h1>Codificando o <span className={styles.highlight}>futuro</span> através da <span className={styles.highlight}>excelência</span> acadêmica.</h1>
        <p>
            Transformamos desafios complexos em soluções digitais elegantes.<br></br> 
            Do campus da UFRGS para o seu negócio, unimos técnica rigorosa e inovação ágil.
        </p>
    </section>
  );
}