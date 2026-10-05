import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projetos } from "@/data/projetos";
import styles from "./page.module.css";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProjetoDetalhes({ params }: Props) {
  const { id } = await params;
  const projeto = projetos.find((p) => p.id === parseInt(id));

  if (!projeto) {
    notFound();
  }

  const blocos = projeto.conteudo || [];

  const renderBlock = (bloco: any, index: number) => {
    switch (bloco.type) {
      case "split":
      case "split-reverse":
        return (
          <section key={index} className={`${styles.blockSplit} ${bloco.type === 'split-reverse' ? styles.reverse : ''}`}>
            <div className={styles.splitText}>
              <h2>{bloco.title}</h2>
              <p>{bloco.text}</p>
            </div>
            <div className={styles.splitImagePlaceholder}>
              <span>{bloco.imagePlaceholder}</span>
            </div>
          </section>
        );
      
      case "metrics":
        return (
          <section key={index} className={styles.blockMetrics}>
            {bloco.metrics.map((metric: any, i: number) => (
              <div key={i} className={styles.metricCard}>
                <span className={styles.metricValue}>{metric.value}</span>
                <span className={styles.metricLabel}>{metric.label}</span>
              </div>
            ))}
          </section>
        );

      case "gallery":
        return (
          <section key={index} className={styles.blockGallery}>
            <h2>{bloco.title}</h2>
            <div className={styles.galleryGrid}>
              {bloco.images.map((img: string, i: number) => (
                <div key={i} className={styles.galleryImagePlaceholder}>
                  <span>{img}</span>
                </div>
              ))}
            </div>
          </section>
        );

      default:
        // Fallback for old simple text
        return (
          <section key={index} className={styles.blockText}>
            <h2>{bloco.title}</h2>
            <p>{bloco.text}</p>
          </section>
        );
    }
  };

  return (
    <main className={styles.container}>
      <Link href="/Portfolio" className={styles.backLink}>
        &larr; Voltar para o Portfólio
      </Link>

      <div className={styles.hero}>
        <h1>{projeto.nome}</h1>
        <p>{projeto.descricao}</p>
        
        <div className={styles.imageWrapper}>
          <Image
            src={projeto.imagem}
            alt={projeto.nome}
            fill
            priority
            className={styles.image}
          />
        </div>

        {projeto.link && (
          <a href={projeto.link} target="_blank" rel="noopener noreferrer" className={styles.externalLink}>
            Visitar projeto no ar ↗
          </a>
        )}
      </div>

      <div className={styles.content}>
        {blocos.map(renderBlock)}
      </div>
    </main>
  );
}
