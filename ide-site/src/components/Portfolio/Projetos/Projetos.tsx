import Image from "next/image";
import Link from "next/link";
import styles from "./Projetos.module.css";
import { projetos } from "@/data/projetos";

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
                href={`/Portfolio/${projeto.id}`}
                className={styles.link}
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
