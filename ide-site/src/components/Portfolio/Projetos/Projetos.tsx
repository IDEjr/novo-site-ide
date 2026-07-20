import Image from "next/image";
import Link from "next/link";
import styles from "./Projetos.module.css";

const projetos = [
  {
    id: 1,
    nome: "Site da TideSat Global",
    descricao:
      "Plataforma web desenvolvida para a TideSat Global, com foco na apresentação institucional de soluções tecnológicas e fortalecimento da presença digital da empresa.",
    imagem: "/imagens/projetos/tidesatLogo.png",
    grande: true,
    link: "https://www.tidesatglobal.com/",
  },
  {
    id: 2,
    nome: "Aplicativo de Inventário da UFRGS",
    descricao:
      "Aplicativo desenvolvido para otimizar o gerenciamento e o controle do inventário patrimonial da UFRGS, proporcionando maior organização e eficiência.",
    imagem: "/imagens/projetos/inventario.png",
    grande: false,
    link: "https://play.google.com/store/apps/details?id=br.ufrgs.cpd.coletainventario&hl=pt_BR",
  },
  {
    id: 3,
    nome: "Site do LEME",
    descricao:
      "Site institucional desenvolvido para apresentar o Laboratório de Ensaios e Modelos Estruturais da UFRGS, destacando sua atuação em ensino, pesquisa, extensão e inovação na Engenharia Civil.",
    imagem: "/imagens/projetos/leme.png",
    grande: false,
    link: "https://www.ufrgs.br/leme/",
  },
  {
    id: 4,
    nome: "Site da Faísca Design",
    descricao:
      "Plataforma desenvolvida para destacar a criatividade, os projetos e as soluções de design da Faísca Design Empresa Júnior.",
    imagem: "/imagens/projetos/faisca.png",
    grande: true,
    link: "https://www.faiscadesignjr.com.br/",
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
            <div className={styles.imageContainer}>
              <Image
                src={projeto.imagem}
                alt={projeto.nome}
                fill
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