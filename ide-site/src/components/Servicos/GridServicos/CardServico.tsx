import Image from 'next/image';
import styles from './CardServico.module.css';

type CardServicoProps = {
    iconeSrc: string;
    titulo: string;
    descricao: string;
    tecnologias: string[];
};

export default function CardServico({ iconeSrc, titulo, descricao, tecnologias }: CardServicoProps) {
  return (
    <div className={styles.cardContainer}>
        <div className={styles.cardIcone}>
            <Image 
                src={iconeSrc} 
                alt={"Ícone representativo de ${titulo}"} 
                width={100}
                height={100} 
                className={styles.icone}
            />
        </div>

        <div className={styles.cardTextos}>
            <h3>{titulo}</h3>
            <p>{descricao}</p>
        </div>

        <div className={styles.cardTecnologias}>
            {tecnologias.map((tech) => (
                <span key={tech} className={styles.tag}>
                    {tech}
                </span>
            ))}
        </div>

    </div>
  );
}