import React from 'react';
import styles from './Conquistas.module.css';

const Conquistas = () => {
  return (
    <section className={styles.conquistasSection}>
      <header className={styles.sectionHeader}>
        <h2 className={styles.title}>Nossas conquistas</h2>
      </header>

      <div className={styles.container}>
        <div className={styles.photosGrid}>
          <div className={`${styles.photoCard} ${styles.photoMain}`}>
            <div className={styles.placeholderImage}>[Foto ENEJ]</div>
          </div>
          <div className={styles.photoCard}>
            <div className={styles.placeholderImage}>[Foto ECEJ]</div>
          </div>
          <div className={styles.photoCard}>
            <div className={styles.placeholderImage}>[Foto Prêmio]</div>
          </div>
        </div>

        <div className={styles.contentColumn}>
          <p className={styles.description}>
            A vivência empresarial e a presença nos maiores eventos do MEJ sempre foram pilares da nossa trajetória. Ao longo dos anos, nosso impacto foi reconhecido através de <strong>27 prêmios</strong> conquistados nas mais diversas esferas do Movimento Empresa Júnior.
          </p>
          
          <h3 className={styles.subtitle}>Principais Prêmios</h3>
          
          <ul className={styles.awardsList}>
            <li className={styles.awardItem}>
              <span className={styles.awardIcon}>🏆</span>
              <div className={styles.awardInfo}>
                <span className={styles.awardName}>Prêmio Destaque Estadual</span>
                <span className={styles.awardManagement}>Gestão 2023/1</span>
              </div>
            </li>
            <li className={styles.awardItem}>
              <span className={styles.awardIcon}>🥇</span>
              <div className={styles.awardInfo}>
                <span className={styles.awardName}>Prêmio Impacto MEJ</span>
                <span className={styles.awardManagement}>Gestão 2022/2</span>
              </div>
            </li>
            <li className={styles.awardItem}>
              <span className={styles.awardIcon}>⭐</span>
              <div className={styles.awardInfo}>
                <span className={styles.awardName}>Prêmio Empresa Júnior Revelação</span>
                <span className={styles.awardManagement}>Gestão 2021</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Conquistas;

