import Image from "next/image";
import styles from "./NossosParceiros.module.css";

const parceiros = [
  {
    nome: "INF",
    img: "/imagens/infTransparente.png",
    link: "https://www.inf.ufrgs.br/site/",
  },
  {
    nome: "UFRGS",
    img: "/imagens/ufrgsLogo2.png",
    link: "https://www.ufrgs.br/site/",
  },
];

export default function NossosParceiros() {
  return (
    <section className={styles.parceirosSection}>
      <div className={styles.parceirosBox}>
        <h2>Nossos Parceiros</h2>

        <div className={styles.parceirosList}>
          {parceiros.map((parceiro) => (
            <a
              key={parceiro.nome}
              href={parceiro.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.parceiroLink}
              aria-label={`Visitar o site da ${parceiro.nome}`}
            >
              <div className={styles.parceiroBubble}>
                <Image
                  src={parceiro.img}
                  alt={parceiro.nome}
                  fill
                  sizes="520px"
                  className={styles.parceiroImage}
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}