import type { ReactNode } from 'react';
import CtaLink from '@/components/CtaLink/CtaLink';
import styles from './ComoTrabalhamos.module.css';

interface EtapaMetodo {
  numero: string;
  fase: string;
  momento: string;
  titulo: string;
  descricao: string;
  entregaveis: string[];
  destaque: string;
  icone: ReactNode;
}

const etapas: EtapaMetodo[] = [
  {
    numero: '01',
    fase: 'DIAGNÓSTICO & ESCOPO',
    momento: 'Antes do contrato',
    titulo: 'Mapeamento & Escopo Claro',
    descricao:
      'Mapeamos a rotina e o problema real do seu negócio para desenhar o esboço dos módulos antes de qualquer linha de código.',
    entregaveis: [
      'Entendimento das regras de negócio',
      'Esboço visual dos módulos',
      'Cronograma e escopo fechados',
    ],
    destaque: 'Orçamento transparente sem surpresas',
    icone: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
        <circle cx="15" cy="15" r="2" />
      </svg>
    ),
  },
  {
    numero: '02',
    fase: 'PLANEJAMENTO & ESTRUTURA',
    momento: 'Início do projeto',
    titulo: 'Arquitetura & Engenharia',
    descricao:
      'Organizamos o fluxo de navegação e a estrutura técnica para que o software seja rápido, seguro e fácil de manter.',
    entregaveis: [
      'Fluxo de navegação do usuário',
      'Modelagem da base de dados',
      'Arquitetura pronta para crescer',
    ],
    destaque: 'Software estruturado para o futuro',
    icone: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="2" y="3" width="6" height="6" rx="1.5" />
        <rect x="16" y="3" width="6" height="6" rx="1.5" />
        <rect x="9" y="15" width="6" height="6" rx="1.5" />
        <path d="M5 9v3a2 2 0 0 0 2 2h5m7-5v3a2 2 0 0 1-2 2h-5" />
        <path d="M12 14v1" />
      </svg>
    ),
  },
  {
    numero: '03',
    fase: 'DESIGN & USABILIDADE',
    momento: 'Validação visual',
    titulo: 'Design de Telas & Protótipo',
    descricao:
      'Criamos interfaces modernas para computador e celular. Você navega e aprova o protótipo real antes de começarmos a programar.',
    entregaveis: [
      'Protótipo navegável e interativo',
      'Layout adaptado para celular e web',
      'Foco total em facilidade de uso',
    ],
    destaque: 'Você valida as telas antes do código',
    icone: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
        <circle cx="7" cy="7" r="1" />
        <circle cx="10" cy="7" r="1" />
      </svg>
    ),
  },
  {
    numero: '04',
    fase: 'CONSTRUÇÃO & ENTREGA',
    momento: 'Entrega contínua',
    titulo: 'Desenvolvimento & Suporte',
    descricao:
      'Programamos em etapas com entregas frequentes. Cada funcionalidade passa por dupla revisão de qualidade da equipe antes de ir ao ar.',
    entregaveis: [
      'Acompanhamento e evolução contínua',
      'Testes e dupla revisão técnica',
      'Publicação e suporte pós-entrega',
    ],
    destaque: 'Sistema no ar e com acompanhamento',
    icone: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
];

export default function ComoTrabalhamos() {
  return (
    <section
      id="como-trabalhamos"
      className={styles.section}
      aria-labelledby="como-trabalhamos-titulo"
    >
      <div className={styles.container}>
        {/* Cabeçalho da Seção */}
        <header className={styles.header}>
          <span className={styles.kicker}>{"// MÉTODO DE TRABALHO"}</span>
          <h2 id="como-trabalhamos-titulo" className={styles.title}>
            Do entendimento do problema ao sistema no ar.
          </h2>
          <p className={styles.subtitle}>
            Um processo estruturado para que cada etapa seja previsível, validada
            com você e feita para durar.
          </p>
        </header>

        {/* Linha Visual do Pipeline (Passo a Passo) */}
        <div className={styles.pipelineBar} aria-hidden="true">
          <div className={styles.pipelineItem}>
            <span className={styles.pipelineDot} />
            <span className={styles.pipelineText}>01. Diagnóstico</span>
          </div>
          <div className={styles.pipelineConnector} />
          <div className={styles.pipelineItem}>
            <span className={styles.pipelineDot} />
            <span className={styles.pipelineText}>02. Estrutura</span>
          </div>
          <div className={styles.pipelineConnector} />
          <div className={styles.pipelineItem}>
            <span className={styles.pipelineDot} />
            <span className={styles.pipelineText}>03. Telas</span>
          </div>
          <div className={styles.pipelineConnector} />
          <div className={styles.pipelineItem}>
            <span className={styles.pipelineDot} />
            <span className={styles.pipelineText}>04. Entrega</span>
          </div>
        </div>

        {/* Grid 2x2 das 4 Etapas do Método */}
        <div className={styles.stepsGrid}>
          {etapas.map((etapa) => (
            <article key={etapa.numero} className={styles.stepCard}>
              {/* Marca d'água numérica no fundo */}
              <span className={styles.watermarkNumber} aria-hidden="true">
                {etapa.numero}
              </span>

              {/* Topo do Card: Ícone + Fase + Pill de Momento */}
              <div className={styles.cardTop}>
                <div className={styles.headerLeft}>
                  <div className={styles.iconBox}>{etapa.icone}</div>
                  <div className={styles.stepBadge}>
                    <span className={styles.stepNumber}>{etapa.numero}</span>
                    <span className={styles.stepSlash} aria-hidden="true">
                      {"//"}
                    </span>
                    <span className={styles.stepPhase}>{etapa.fase}</span>
                  </div>
                </div>

                <span className={styles.momentPill}>{etapa.momento}</span>
              </div>

              {/* Conteúdo Principal (Direto e Escaneável) */}
              <div className={styles.cardContent}>
                <h3 className={styles.stepTitle}>{etapa.titulo}</h3>
                <p className={styles.stepDescription}>{etapa.descricao}</p>
              </div>

              {/* Lista Visual de Entregáveis */}
              <div className={styles.deliverablesBox}>
                <ul className={styles.deliverablesList}>
                  {etapa.entregaveis.map((item) => (
                    <li key={item} className={styles.deliverableItem}>
                      <span className={styles.checkIcon} aria-hidden="true">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Faixa Inferior de Destaque / Garantia */}
              <div className={styles.highlightBadge}>
                <span className={styles.highlightDot} aria-hidden="true" />
                <span className={styles.highlightText}>
                  <strong>Garantia:</strong> {etapa.destaque}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Botão de Contato Centralizado */}
        <div className={styles.ctaWrapper}>
          <p className={styles.ctaPrompt}>
            Tem um projeto em mente ou precisa transformar uma operação em software?
          </p>
          <CtaLink
            href="/Contato"
            origin="home_como_trabalhamos"
            className={styles.contactButton}
          >
            <span>Iniciar um projeto</span>
            <svg
              className={styles.contactArrow}
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </CtaLink>
        </div>
      </div>
    </section>
  );
}
