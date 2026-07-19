import CardServico from './CardServico';
import styles from './GridServicos.module.css';

export default function GridServicos() {
  return (
    <section className={styles.content}>
      <CardServico 
        iconeSrc="/imagens/cardServicoIcone.png"
        titulo="Tecnology Title"  
        descricao="Plataformas escaláveis e robustas. Criamos desde MVPs até ecossistemas complexos de backend e frontend utilizando as tecnologias mais modernas do mercado."
        tecnologias={["JavaScript", "React Native", "flutter"]}
      />

      <CardServico 
        iconeSrc="/imagens/cardServicoIcone.png"
        titulo="Tecnology Title"  
        descricao="Plataformas escaláveis e robustas. Criamos desde MVPs até ecossistemas complexos de backend e frontend utilizando as tecnologias mais modernas do mercado."
        tecnologias={["node", "react", "flutter"]}
      />

      <CardServico 
        iconeSrc="/imagens/cardServicoIcone.png"
        titulo="Tecnology Title"  
        descricao="Plataformas escaláveis e robustas. Criamos desde MVPs até ecossistemas complexos de backend e frontend utilizando as tecnologias mais modernas do mercado."
        tecnologias={["node", "react", "flutter"]}
      />

      <CardServico 
        iconeSrc="/imagens/cardServicoIcone.png"
        titulo="Tecnology Title"  
        descricao="Plataformas escaláveis e robustas. Criamos desde MVPs até ecossistemas complexos de backend e frontend utilizando as tecnologias mais modernas do mercado."
        tecnologias={["node", "react", "flutter"]}
      />

      <CardServico 
        iconeSrc="/imagens/cardServicoIcone.png"
        titulo="Tecnology Title"  
        descricao="Plataformas escaláveis e robustas. Criamos desde MVPs até ecossistemas complexos de backend e frontend utilizando as tecnologias mais modernas do mercado."
        tecnologias={["node", "react", "flutter"]}
      />

      <CardServico 
        iconeSrc="/imagens/cardServicoIcone.png"
        titulo="Tecnology Title"  
        descricao="Plataformas escaláveis e robustas. Criamos desde MVPs até ecossistemas complexos de backend e frontend utilizando as tecnologias mais modernas do mercado."
        tecnologias={["node", "react", "flutter"]}
      />
    </section>
  );
}