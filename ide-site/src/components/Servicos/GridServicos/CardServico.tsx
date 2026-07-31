import Image from 'next/image';
import styles from './CardServico.module.css';

type Tecnologia = {
    nome: string;
    imgSrc: string;
};

type CardServicoProps = {
    iconeSrc: string;
    titulo: string;
    descricao: string;
    tecnologias: Tecnologia[];
};

export default function CardServico({ iconeSrc, titulo, descricao, tecnologias }: CardServicoProps) {
  return (
    <div className={styles.cardContainer}>
        <div className={styles.cardIcone}>
            <Image 
                src={iconeSrc} 
                alt={`Ícone representativo de ${titulo}`} 
                width={90}
                height={90} 
                className={styles.icone}
            />
        </div>

        <div className={styles.cardTextos}>
            <h3>{titulo}</h3>
            <p>{descricao}</p>
        </div>

        <div className={styles.cardTecnologias}>
            {tecnologias.map((tech) => (
                <span key={tech.nome} className={styles.tag}>
                    <Image 
                        src={tech.imgSrc} 
                        alt={`Ícone da tecnologia ${tech.nome}`}
                        width={16} 
                        height={16} 
                        className={styles.tagIcone}
                    />
                    {tech.nome}
                </span>
            ))}
        </div>

    </div>
  );
}