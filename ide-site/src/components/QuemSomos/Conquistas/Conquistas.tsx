import React from 'react';
import Image from 'next/image';
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
            <Image
              src="/imagens/premios/egej26.png"
              alt="Equipe da IDE reunida em evento do EGEJ em 2026"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              className={styles.photoImage}
            />
          </div>
          <div className={styles.photoCard}>
            <Image
              src="/imagens/premios/fejers18.jpeg"
              alt="Representantes da IDE recebendo um reconhecimento em 2018"
              fill
              sizes="(max-width: 900px) 50vw, 25vw"
              className={styles.photoImage}
            />
          </div>
          <div className={styles.photoCard}>
            <Image
              src="/imagens/premios/egej18.jpg"
              alt="Equipe da IDE reunida em evento do EGEJ em 2018"
              fill
              sizes="(max-width: 900px) 50vw, 25vw"
              className={styles.photoImage}
            />
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
                <span className={styles.awardName}>Troféu “Ondas de Excelência”</span>
                <span className={styles.awardManagement}>EGEJ · 2026/1</span>
                <span className={styles.awardDescription}>
                  EJ com maior faturamento de seu cluster
                </span>
              </div>
            </li>
            <li className={styles.awardItem}>
              <span className={styles.awardIcon}>🥇</span>
              <div className={styles.awardInfo}>
                <span className={styles.awardName}>Prêmio “Respeitamos Nossa História”</span>
                <span className={styles.awardManagement}>FEJERS · 2018/2</span>
                <span className={styles.awardDescription}>TRI Alto Crescimento</span>
              </div>
            </li>
            <li className={styles.awardItem}>
              <span className={styles.awardIcon}>⭐</span>
              <div className={styles.awardInfo}>
                <span className={styles.awardName}>Certificado “Selo EJ”</span>
                <span className={styles.awardManagement}>Lidera · 2026/2</span>
                <span className={styles.awardDescription}>
                  Avançar com base em princípios de excelência e desenvolvimento, atingindo
                  60% do Selo Anual
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Conquistas;
