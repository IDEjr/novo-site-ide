import Image from "next/image";
import Link from "next/link";
import styles from "./Projetos.module.css";

const projetos = [
  {
    id: 1,
    nome: "Site de Mural de Bolsas da UFRGS",
    descricao:
      "Plataforma web para apresentar as oportunidades de bolsas de pesquisa e extensão da UFRGS.",
    imagem: "/imagens/projetos/mural1.png",
    link: "https://www.ufrgs.br/bolsas/",
  },
  {
    id: 2,
    nome: "Aplicativo de Inventário da UFRGS",
    descricao:
      "Aplicativo desenvolvido para otimizar o gerenciamento e o controle do inventário patrimonial da UFRGS.",
    imagem: "/imagens/projetos/inventario.png",
    link: "https://play.google.com/store/apps/details?id=br.ufrgs.cpd.coletainventario&hl=pt_BR",
  },
  {
    id: 3,
    nome: "Site da TideSat Global",
    descricao:
      "Plataforma web para apresentar as soluções tecnológicas da TideSat Global e fortalecer sua presença digital.",
    imagem: "/imagens/projetos/tidesatLogo.png",
    link: "https://www.tidesatglobal.com/",
  },
  {
    id: 4,
    nome: "Site do LEME",
    descricao:
      "Site institucional desenvolvido para apresentar o Laboratório de Ensaios e Modelos Estruturais da UFRGS, destacando sua atuação em ensino, pesquisa, extensão e inovação na Engenharia Civil.",
    imagem: "/imagens/projetos/leme.png",
    link: "https://www.ufrgs.br/leme/",
  },
  {
    id: 5,
    nome: "Site da Faísca Design",
    descricao:
      "Plataforma desenvolvida para destacar a criatividade, os projetos e as soluções de design da Faísca Design Empresa Júnior.",
    imagem: "/imagens/projetos/faisca.png",
    link: "https://www.faiscadesignjr.com.br/",
  },
  {
    id: 6,
    nome: "Site da FIRE",
    descricao:
      "Site institucional da Fire Investigation, Research & Engineering, grupo de pesquisa dedicado aos estudos e aplicações da engenharia de segurança contra incêndios.",
    imagem: "/imagens/projetos/fireLogo.png",
    link: "https://www.ufrgs.br/fire/",
  },
];

export default function Projetos() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {projetos.map((projeto) => (
          <article
            key={projeto.id}
            className={styles.card}
          >
            <div className={styles.imageContainer}>
              <Image
                src={projeto.imagem}
                alt={projeto.nome}
                fill
                priority
                sizes="(max-width: 900px) 520px, 33vw"
                className={styles.image}
              />
            </div>

            <div className={styles.content}>
              <div>
                <h3>{projeto.nome}</h3>
                <p>{projeto.descricao}</p>
              </div>

              <Link
                href={projeto.link}
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
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
