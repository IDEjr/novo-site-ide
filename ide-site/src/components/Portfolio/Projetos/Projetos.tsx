import Image from "next/image";
import Link from "next/link";
import styles from "./Projetos.module.css";

const projetos = [
  {
    id: 1,
    nome: "Sistema Financeiro",
    descricao:
      "Plataforma para gerenciamento financeiro com dashboards e análise em tempo real.",
    imagem: "/imagens/gato-ide.png",
    tecnologias: ["React", "Next.js", "TypeScript"],
    grande: true,
    link: "#",
  },
  {
    id: 2,
    nome: "Aplicativo Mobile",
    descricao:
      "Aplicativo desenvolvido para gestão de cooperativas locais.",
    imagem: "/imagens/gato-ide.png",
    tecnologias: ["Flutter", "Firebase"],
    grande: false,
    link: "#",
  },
  {
    id: 3,
    nome: "Dashboard Analytics",
    descricao:
      "Visualização inteligente de dados para tomada de decisão.",
    imagem: "/imagens/gato-ide.png",
    tecnologias: ["React", "Node.js"],
    grande: false,
    link: "#",
  },
  {
    id: 4,
    nome: "Portal Institucional",
    descricao:
      "Website institucional moderno desenvolvido para uma empresa.",
    imagem: "/imagens/gato-ide.png",
    tecnologias: ["Next.js", "PostgreSQL"],
    grande: true,
    link: "#",
  },
];

export default function Projetos() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {projetos.map((projeto) => (
          <article
            key={projeto.id}
            className={`${styles.card} ${
              projeto.grande ? styles.large : ""
            }`}
          >
            <Image
              src={projeto.imagem}
              alt={projeto.nome}
              fill
              className={styles.image}
            />

            <div className={styles.overlay} />

            <div className={styles.content}>
              <div className={styles.tags}>
                {projeto.tecnologias.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div>
                <h3>{projeto.nome}</h3>
                <p>{projeto.descricao}</p>
              </div>

              <Link href={projeto.link} className={styles.link}>
                Ver projeto
                <span>↗</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}