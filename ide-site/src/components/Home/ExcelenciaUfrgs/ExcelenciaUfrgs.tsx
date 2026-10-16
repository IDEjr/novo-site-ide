import Image from 'next/image';
import styles from './ExcelenciaUfrgs.module.css';

const metricas = [
  {
    valor: '+10',
    rotulo: 'Anos de história',
    detalhe: 'Atuação contínua no mercado',
  },
  {
    valor: '27',
    rotulo: 'Premiações conquistadas',
    detalhe: 'Reconhecimento no Movimento Empresa Júnior',
  },
  {
    valor: '100%',
    rotulo: 'Reinvestimento no time',
    detalhe: 'Sem fins lucrativos: foco em capacitação',
  },
  {
    valor: 'INF · UFRGS',
    rotulo: 'Campus do Vale',
    detalhe: 'Prédio 43424 · Porto Alegre, RS',
  },
];

export default function ExcelenciaUfrgs() {
  return (
    <section
      id="sobre-nos"
      className={styles.section}
      aria-labelledby="excelencia-titulo"
    >
      <div className={styles.container}>
        {/* Cabeçalho da Seção */}
        <header className={styles.header}>
          <span className={styles.kicker}>{"// QUEM FAZ ACONTECER"}</span>
          <h2 id="excelencia-titulo" className={styles.title}>
            Excelência UFRGS em cada pixel.
          </h2>
          <p className={styles.subtitle}>
            Nascida no Instituto de Informática da UFRGS, a IDE une o rigor
            acadêmico da universidade à energia de talentos que respiram
            tecnologia todos os dias.
          </p>
        </header>

        {/* Faixa Panorâmica Horizontal de Métricas */}
        <div className={styles.metricsBar}>
          {metricas.map((m, idx) => (
            <div key={idx} className={styles.metricItem}>
              <span className={styles.metricValue}>{m.valor}</span>
              <span className={styles.metricLabel}>{m.rotulo}</span>
              <span className={styles.metricDetail}>{m.detalhe}</span>
            </div>
          ))}
        </div>

        {/* Layout em 3 Colunas: Card 1 | Foto no Centro | Card 2 */}
        <div className={styles.showcaseGrid}>
          {/* Coluna 1 (Esquerda): Cultura Júnior & Reinvestimento */}
          <article className={styles.infoCard}>
            <div className={styles.cardTop}>
              <span className={styles.cardTag}>{"01 // CULTURA JÚNIOR"}</span>
              <span className={styles.cardBadge}>Sem fins lucrativos</span>
            </div>

            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>
                100% reinvestido na capacitação do time
              </h3>

              <p className={styles.cardText}>
                Como empresa júnior sem fins lucrativos, revertemos todo o
                faturamento em infraestrutura técnica e treinamento da equipe. O
                resultado para você é software moderno a um custo acessível.
              </p>

              <ul className={styles.featureList}>
                <li className={styles.featureItem}>
                  <span className={styles.checkIcon} aria-hidden="true">✓</span>
                  <span>Sem distribuição de lucros entre sócios</span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.checkIcon} aria-hidden="true">✓</span>
                  <span>Reinvestimento contínuo em ferramentas e cursos</span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.checkIcon} aria-hidden="true">✓</span>
                  <span>Formação de lideranças em tecnologia</span>
                </li>
              </ul>
            </div>
          </article>

          {/* Coluna 2 (Centro): Foto Completa da Equipe e Chancela INF-UFRGS */}
          <article className={styles.photoCard}>
            {/* Imagem Completa da Equipe no Aspect Ratio Real */}
            <div className={styles.imageBox}>
              <Image
                src="/imagens/membros-ide.jpg"
                alt="Equipe de membros da IDE reunida no Campus do Vale da UFRGS"
                fill
                priority
                sizes="(max-width: 1100px) 100vw, 560px"
                className={styles.photo}
              />
            </div>

            {/* Barra Inferior com a Chancela Oficial da UFRGS e do INF */}
            <div className={styles.institutionBanner}>
              <div className={styles.institutionText}>
                <span className={styles.institutionTitle}>
                  Chancela Institucional
                </span>
                <p className={styles.institutionDesc}>
                  Apoio oficial do Instituto de Informática e UFRGS.
                </p>
              </div>

              <div className={styles.logosWrapper}>
                <a
                  href="https://www.inf.ufrgs.br/cei/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.partnerLink}
                  aria-label="Instituto de Informática da UFRGS"
                >
                  <div className={styles.partnerBubble}>
                    <Image
                      src="/imagens/infTransparente.png"
                      alt="Logo do Instituto de Informática da UFRGS"
                      fill
                      sizes="120px"
                      className={styles.partnerLogo}
                    />
                  </div>
                </a>

                <a
                  href="https://www.ufrgs.br/site/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.partnerLink}
                  aria-label="Universidade Federal do Rio Grande do Sul"
                >
                  <div className={styles.partnerBubble}>
                    <Image
                      src="/imagens/ufrgsLogo2.png"
                      alt="Logo da UFRGS"
                      fill
                      sizes="120px"
                      className={styles.partnerLogo}
                    />
                  </div>
                </a>
              </div>
            </div>
          </article>

          {/* Coluna 3 (Direita): Berço Acadêmico & Rigor Técnico */}
          <article className={styles.infoCard}>
            <div className={styles.cardTop}>
              <span className={styles.cardTag}>{"02 // AMBIENTE & RIGOR"}</span>
              <span className={styles.cardBadge}>Campus do Vale</span>
            </div>

            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>
                No centro do polo de computação da UFRGS
              </h3>

              <p className={styles.cardText}>
                Sediados no Campus do Vale, nossos desenvolvedores combinam a
                base acadêmica de Ciência e Engenharia de Computação com a
                prática de projetos reais de mercado.
              </p>

              <ul className={styles.featureList}>
                <li className={styles.featureItem}>
                  <span className={styles.checkIcon} aria-hidden="true">✓</span>
                  <span>Talentos de Ciência e Engenharia da Computação</span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.checkIcon} aria-hidden="true">✓</span>
                  <span>Acesso a laboratórios e professores referência</span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.checkIcon} aria-hidden="true">✓</span>
                  <span>Pesquisa e tecnologia de ponta aplicadas</span>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
