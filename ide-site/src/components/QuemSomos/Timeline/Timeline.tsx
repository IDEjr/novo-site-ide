import styles from "./Timeline.module.css";

const events = [
  {
    year: "2016",
    title: "Fundação da equipe IDE",
    description:
      "Um grupo de estudantes visionários do INF-UFRGS decide que a teoria precisava de prática. Nasce a IDE.",
  },
  {
    year: "2018",
    title: "Expansão de mercado",
    description:
      "Primeiros grandes projetos comerciais. A IDE começa a ser reconhecida no ecossistema de inovação do RS.",
  },
  {
    year: "2025",
    title: "Lançamento de identidade visual",
    description:
      "Apresentamos uma nova marca moderna, destacando nosso posicionamento criativo e profissional.",
  },
  {
    year: "2026",
    title: "Referência Nacional em Soluções Digitais",
    description:
      "Eleita uma das empresas juniores mais inovadoras, mantendo a excelência acadêmica e foco em resultados reais.",
  },
];

export default function Timeline() {
  return (
    <section className={styles.timelineSection}>
      <div className={styles.sectionHeader}>
        <span className={styles.overline}>Nossa trajetória</span>
      </div>

      <div className={styles.timeline}>
        {events.map((event, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={`${event.year}-${index}`}
              className={`${styles.item} ${
                isLeft ? styles.left : styles.right
              }`}
            >
              <div className={styles.marker} />

              <div className={styles.content}>
                <div className={styles.year}>{event.year}</div>
                <h3>{event.title}</h3>
                {event.description && <p>{event.description}</p>}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}