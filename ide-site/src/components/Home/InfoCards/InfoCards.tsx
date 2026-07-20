import styles from './InfoCards.module.css';

const infoCards = [
  {
    titulo: 'Desenvolvimento Web',
    texto: 'Sistemas escaláveis e interfaces que convertem, utilizando as stacks mais modernas do mercado.',
  },
  {
    titulo: 'Cultura Junior',
    texto: 'Preços acessíveis com qualidade sênior. Investimos 100% do nosso faturamento na capacitação dos nossos membros.',
  },
  {
    titulo: 'UI/UX Design',
    texto: 'Experiências centradas no usuário com design minimalista e fluxos intuitivos.',
  },
];

const valores = [
  'Foco no Cliente',
  'Aprendizado Constante',
  'Trabalho em Equipe',
  'Transparência Radical',
];

export default function InfoCards() {
  return (
    <section className={styles.infoCardsSection}>
      <div className={styles.infoCardsBox}>

        <h2>Excelência UFRGS em cada pixel</h2>

        <p>
          Nascida dentro do Instituto de Informática da UFRGS, a IDE une o rigor
          acadêmico das melhores mentes de TI do país com a agilidade de uma
          startup moderna. Somos mais que desenvolvedores; somos estrategistas
          digitais.
        </p>

        <div className={styles.cardsWrapper}>

          <div className={styles.infoRow}>
            {infoCards.map((card) => (
              <div key={card.titulo} className={styles.infoCard}>
                <h3>{card.titulo}</h3>
                <p>{card.texto}</p>
              </div>
            ))}
          </div>


          <div className={styles.statRow}>

            <div className={styles.statCard}>
              <strong>10+</strong>
              <span>anos de história</span>
            </div>

            <div className={styles.fotoCard}>
              <span>FOTO MEMBROS IDE</span>
            </div>

            <div className={styles.statCard}>
              <strong>XX+</strong>
              <span>premiações</span>
            </div>

          </div>


          <div className={styles.mvvRow}>

            <div className={styles.mvvCard}>
              <h3>MISSÃO</h3>

              <div className={styles.mvvIcon}>
                <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <circle cx="12" cy="12" r="4.5" />
                  <circle cx="12" cy="12" r="0.8" fill="#ffffff" />
                </svg>
              </div>

              <p>
                Formar profissionais de excelência através da vivência
                empresarial, entregando soluções tecnológicas de alto
                valor para nossos clientes.
              </p>
            </div>


            <div className={styles.mvvCard}>
              <h3>VISÃO</h3>

              <div className={styles.mvvIcon}>
                <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1.5 12S5 5 12 5s10.5 7 10.5 7-3.5 7-10.5 7S1.5 12 1.5 12Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>

              <p>
                Ser referência nacional em desenvolvimento de software e
                formação de lideranças no Movimento Empresa Júnior.
              </p>
            </div>


            <div className={styles.mvvCard}>
              <h3>VALORES</h3>

              <div className={styles.mvvIcon}>
                <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="#ffffff" stroke="none">
                  <path d="M12 21s-7.5-4.5-10-9C0.2 8.4 1.6 4.5 5.5 4.5c2.1 0 3.6 1.1 4.5 2.4 0.9-1.3 2.4-2.4 4.5-2.4 3.9 0 5.3 3.9 3.5 7.5-2.5 4.5-10 9-10 9Z" />
                </svg>
              </div>

              <ul className={styles.mvvList}>
                {valores.map((valor) => (
                  <li key={valor}>{valor}</li>
                ))}
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}