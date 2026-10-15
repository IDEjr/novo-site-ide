import Link from 'next/link';
import { getPayloadClient } from '@/lib/payload';
import { fallbackAgoraItems, type AgoraItem } from '@/data/agora-data';
import styles from './AgoraNaIde.module.css';

interface RawAgoraDoc {
  id: string | number;
  mensagem: string;
  tag: string;
  dataTexto: string;
  commitHash?: string | null;
  link?: string | null;
}

const MAX_AGORA_ITEMS = 3;

function generateCommitHash(id: string | number): string {
  const str = String(id);
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  const hex = Math.abs(hash).toString(16).padStart(6, '0');
  return `${hex.slice(0, 6)}f`;
}

async function fetchAgoraItems(): Promise<AgoraItem[]> {
  try {
    const payload = await getPayloadClient();
    const result = await payload.find({
      collection: 'agora-updates' as never,
      where: {
        status: { equals: 'published' },
      },
      sort: '-createdAt',
      limit: MAX_AGORA_ITEMS,
    });

    if (result?.docs && result.docs.length > 0) {
      return (result.docs as unknown as RawAgoraDoc[]).map((doc) => ({
        id: String(doc.id),
        mensagem: doc.mensagem,
        tag: doc.tag,
        dataTexto: doc.dataTexto,
        commitHash: doc.commitHash || generateCommitHash(doc.id),
        link: doc.link || undefined,
      }));
    }
  } catch {
    // Fallback silencioso caso o banco esteja vazio ou em sincronização
  }

  return fallbackAgoraItems.slice(0, MAX_AGORA_ITEMS);
}

export default async function AgoraNaIde() {
  const items = await fetchAgoraItems();

  const getTagStyle = (tag: string) => {
    switch (tag?.toUpperCase()) {
      case 'DEPLOY':
        return styles.tagDeploy;
      case 'PROCESSO SELETIVO':
        return styles.tagPs;
      case 'TECNOLOGIA':
        return styles.tagTech;
      case 'PROJETO':
        return styles.tagProjeto;
      default:
        return styles.tagDefault;
    }
  };

  return (
    <section className={styles.section} aria-labelledby="agora-title">
      <div className={styles.container}>
        <div className={styles.terminalStrip}>
          {/* Barra Superior de Telemetria */}
          <div className={styles.topBar}>
            <div className={styles.topBarLeft}>
              <div className={styles.liveBadge}>
                <span className={styles.liveDot} aria-hidden="true" />
                <span>LIVE</span>
              </div>
              <h2 id="agora-title" className={styles.stripTitle}>
                AGORA NA IDE
              </h2>
              <span className={styles.telemetryTag}>
                {"// feed de atividades & deploys"}
              </span>
            </div>

            <div className={styles.topBarRight}>
              <div className={styles.gitStatus}>
                <span className={styles.gitDot} aria-hidden="true" />
                <span>branch: main</span>
                <span className={styles.gitDivider}>·</span>
                <span>origin: inf-ufrgs</span>
              </div>

              <Link href="/Blog" className={styles.blogLink}>
                <span>Ver Blog</span>
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>

          {/* Lista em Linhas Horizontais com Commit na Direita */}
          <div className={styles.feedRows}>
            {items.map((item, index) => {
              const content = (
                <div className={styles.rowContent}>
                  {/* Esquerda: Tag + Data */}
                  <div className={styles.rowMeta}>
                    <span className={`${styles.tagBadge} ${getTagStyle(item.tag)}`}>
                      [{item.tag}]
                    </span>
                    <span className={styles.dateStamp}>{item.dataTexto}</span>
                  </div>

                  {/* Centro: Mensagem */}
                  <p className={styles.messageText}>{item.mensagem}</p>

                  {/* Direita: Commit Hash + Botão de Ação */}
                  <div className={styles.rowRight}>
                    <span className={styles.commitBadge}>
                      commit: <code>{item.commitHash}</code>
                    </span>

                    <div className={styles.rowAction}>
                      {item.link ? (
                        <span className={styles.linkPill}>
                          <span>Acessar</span>
                          <span className={styles.arrowIcon} aria-hidden="true">↗</span>
                        </span>
                      ) : (
                        <span className={styles.statusDotActive} title="Atividade registrada" />
                      )}
                    </div>
                  </div>
                </div>
              );

              return item.link ? (
                <Link
                  key={item.id || index}
                  href={item.link}
                  className={`${styles.feedRow} ${styles.feedRowClickable}`}
                >
                  {content}
                </Link>
              ) : (
                <div key={item.id || index} className={styles.feedRow}>
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
