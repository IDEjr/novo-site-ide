import Image from "next/image";
import styles from "./NossosParceiros.module.css";

const parceiros = [
  { nome: "INF", img: "/imagens/inf.png" },
  { nome: "UFRGS", img: "/imagens/ufrgs.png" },
];

export default function NossosParceiros() {
  return (
    <section className={styles.parceirosSection}>
      <div className={styles.parceirosBox}>
        <h2>Nossos Parceiros</h2>

        <div className={styles.parceirosList}>
          {parceiros.map((parceiro) => (
            <div key={parceiro.nome} className={styles.parceiroBubble}>
              <Image
                src={parceiro.img}
                alt={parceiro.nome}
                fill
                sizes="520px"
                className={styles.parceiroImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}