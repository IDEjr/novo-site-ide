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

  // Tópicos mockados da nossa POC para visualizar como fica o layout longo
  const mockTopics = [
    { title: "Contexto", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
    { title: "Problema", text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { title: "Processo", text: "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida." },
    { title: "Sistema", text: "Praesent imperdiet diam ac urna. Vestibulum scelerisque mi in libero. Curabitur vel lectus. Nulla eget dui. Mauris id eros." },
    { title: "Pessoas", text: "Donec neque velit, ultrices vestibulum, vehicula sed, sodales nec, purus. Mauris viverra dui sed nibh. Integer varius. Pellentesque in urna." },
    { title: "Resultado", text: "Morbi pellentesque, leo sed rutrum pharetra, ante nulla varius velit, ac blandit magna lacus at massa. Curabitur nec risus eu neque pellentesque ultrices." },
    { title: "Artefatos", text: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc hendrerit. Phasellus ut odio in lectus ullamcorper cursus." },
  ];

  return (
    <main className={styles.container}>
      <Link href="/Portfolio" style={{ color: '#aaa', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
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
        {mockTopics.map((topic, index) => (
          <section key={index}>
            <h2>{topic.title}</h2>
            <p>{topic.text}</p>
          </section>
        ))}
      </div>
    </main>
  );
}
