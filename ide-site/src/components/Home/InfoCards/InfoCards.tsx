import Image from "next/image";
import styles from "./InfoCards.module.css";

const infoCards = [
  {
    titulo: "Desenvolvimento Web",
    texto:
      "Sistemas escaláveis e interfaces que convertem, utilizando as stacks mais modernas do mercado.",
  },
  {
    titulo: "Cultura Junior",
    texto:
      "Preços acessíveis com qualidade sênior. Investimos 100% do nosso faturamento na capacitação dos nossos membros.",
  },
  {
    titulo: "UI/UX Design",
    texto:
      "Experiências centradas no usuário com design minimalista e fluxos intuitivos.",
  },
];

export default function InfoCards() {
  return (
    <section className={styles.infoCardsSection}>
      <div className={styles.infoCardsBox}>
        <h2>Excelência UFRGS em cada pixel</h2>

        <p>
          Nascida dentro do Instituto de Informática da UFRGS, a IDE une o rigor
          acadêmico das melhores mentes de TI do país com a agilidade de uma
          startup moderna. Somos mais que desenvolvedores; somos estrategistas
          digitais.
        </p>

        <div className={styles.cardsWrapper}>
          <div className={styles.infoRow}>
            {infoCards.map((card) => (
              <div key={card.titulo} className={styles.infoCard}>
                <h3>{card.titulo}</h3>
                <p>{card.texto}</p>
              </div>
            ))}
          </div>

          <div className={styles.statRow}>
            <div className={styles.statCard}>
              <strong>+10</strong>
              <span>anos de história</span>
            </div>

            <div className={styles.fotoCard}>
              <Image
                src="/imagens/membros-ide.jpg"
                alt="Membros da IDE"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 55vw"
                className={styles.foto}
              />
            </div>

            <div className={styles.statCard}>
              <strong>3</strong>
              <span>premiações</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}