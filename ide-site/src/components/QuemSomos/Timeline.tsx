import styles from './Timeline.module.css';

const events = [
  { year: '2019', title: 'Fundação da equipe IDE' },
  { year: '2021', title: 'Primeiro projeto entregue' },
  { year: '2023', title: 'Lançamento de identidade visual' },
  { year: '2025', title: 'Crescimento para novos serviços' },
];

export default function Timeline() {
  return (
    <section className={styles.timelineSection}>
      <div className={styles.sectionHeader}>
        <span className={styles.overline}>Nossa história</span>
        <h2>Timeline</h2>
      </div>

      <div className={styles.timeline}>
        {events.map((event, index) => (
          <div key={`${event.year}-${index}`} className={styles.item}>
            <div className={styles.marker}>
              <span className={styles.year}>{event.year}</span>
            </div>
            <div className={styles.content}>
              <h3>{event.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
