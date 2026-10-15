import Image from 'next/image';
import Link from 'next/link';
import styles from './ProjetosDestaque.module.css';

const destaques = [
  {
    id: 1,
    categoria: 'Plataforma Web',
    nome: 'Mural de Bolsas da UFRGS',
    descricao:
      'Centralização de todas as oportunidades de bolsas de pesquisa e extensão da universidade. Substituiu murais físicos de papel por uma plataforma digital intuitiva integrada ao login institucional.',
    imagem: '/imagens/projetos/mural1.png',
    linkInterno: '/Portfolio/1',
    linkExterno: 'https://www.ufrgs.br/bolsas/',
    metricas: [
      { valor: '+500', rotulo: 'vagas mapeadas' },
      { valor: '300%', rotulo: 'aumento nas inscrições' },
    ],
    tags: ['React', 'Node.js', 'Figma UX', 'Auth UFRGS'],
  },
  {
    id: 2,
    categoria: 'App Mobile & Backend',
    nome: 'App de Inventário Patrimonial',
    descricao:
      'Digitalização completa do controle patrimonial da UFRGS com leitura veloz de QR Codes. Acabou com as pranchetas manuais e dias de digitação no sistema legado da universidade.',
    imagem: '/imagens/projetos/inventario.png',
    linkInterno: '/Portfolio/2',
    linkExterno:
      'https://play.google.com/store/apps/details?id=br.ufrgs.cpd.coletainventario&hl=pt_BR',
    metricas: [
      { valor: '-70%', rotulo: 'tempo de conferência' },
      { valor: 'Zero', rotulo: 'digitação manual' },
    ],
    tags: ['Flutter', 'Python', 'Django', 'PostgreSQL'],
  },
];

export default function ProjetosDestaque() {
  return (
    <section id="projetos" className={styles.section} aria-labelledby="projetos-titulo">
      <div className={styles.container}>
        {/* Cabeçalho da Seção (Centralizado) */}
        <header className={styles.header}>
          <h2 id="projetos-titulo" className={styles.title}>
            Software colocado em produção.
          </h2>
          <p className={styles.subtitle}>
            Conheça algumas das soluções que desenvolvemos do zero, combinando
            design intuitivo, engenharia sólida e impacto no dia a dia das pessoas.
          </p>
        </header>

        {/* Grid dos Cases em 2 Colunas */}
        <div className={styles.projectsGrid}>
          {destaques.map((projeto) => (
            <article key={projeto.id} className={styles.card}>
              {/* Moldura de Navegador com Imagem */}
              <div className={styles.imageWrapper}>
                <div className={styles.browserHeader}>
                  <div className={styles.browserDots} aria-hidden="true">
                    <span className={styles.dotRed} />
                    <span className={styles.dotYellow} />
                    <span className={styles.dotGreen} />
                  </div>
                  <span className={styles.browserUrl}>
                    {projeto.linkExterno.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                  </span>
                </div>

                <div className={styles.imageBox}>
                  <Image
                    src={projeto.imagem}
                    alt={`Interface do projeto ${projeto.nome}`}
                    fill
                    sizes="(max-width: 900px) 94vw, 540px"
                    className={styles.image}
                  />
                </div>
              </div>

              {/* Corpo do Card */}
              <div className={styles.cardBody}>
                <div className={styles.cardMeta}>
                  <span className={styles.category}>{projeto.categoria}</span>
                  <h3 className={styles.projectName}>{projeto.nome}</h3>
                  <p className={styles.description}>{projeto.descricao}</p>
                </div>

                {/* Métricas de Impacto */}
                <div className={styles.metricsGrid}>
                  {projeto.metricas.map((m, idx) => (
                    <div key={idx} className={styles.metricCard}>
                      <span className={styles.metricValue}>{m.valor}</span>
                      <span className={styles.metricLabel}>{m.rotulo}</span>
                    </div>
                  ))}
                </div>

                {/* Tags de Tecnologias */}
                <div className={styles.tagsList}>
                  {projeto.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link de Ação */}
                <div className={styles.cardActions}>
                  <Link href={projeto.linkInterno} className={styles.caseLink}>
                    <span>Ver estudo de caso</span>
                    <span className={styles.arrow} aria-hidden="true">↗</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Botão Centralizado para o Portfólio */}
        <div className={styles.portfolioCta}>
          <Link href="/Portfolio" className={styles.allProjectsButton}>
            <span>Explorar todos os projetos no Portfólio</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
