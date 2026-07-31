import CardServico from './CardServico';
import styles from './GridServicos.module.css';

export default function GridServicos() {
  return (
    <section className={styles.content}>
      <CardServico 
        iconeSrc="/imagens/iconesServicos/site.svg"
        titulo="Site de Apresentação Institucional"  
        descricao="Criamos sites modernos e responsivos para apresentar sua empresa, fortalecer sua presença digital e transmitir credibilidade aos seus clientes."
        tecnologias={["Next.js", "React", "Tailwind CSS", "TypeScript", "Figma"]}
      />

      <CardServico 
        iconeSrc="/imagens/iconesServicos/mouse.svg"
        titulo="Site com Área Administrativa (CMS)"  
        descricao="Desenvolvemos sites que permitem que você atualize conteúdos, notícias, imagens e páginas de forma simples, sem depender de programação."
        tecnologias={["Next.js", "TypeScript", "Payload", "PostgreSQL"]}
      />

      <CardServico 
        iconeSrc="/imagens/iconesServicos/monitorCelular.svg"
        titulo="Sistemas Web Sob Medida"  
        descricao="Criamos plataformas acessíveis pelo navegador para automatizar processos, centralizar informações e atender às necessidades específicas da sua empresa."
        tecnologias={["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL"]}
      />

      <CardServico 
        iconeSrc="/imagens/iconesServicos/monitor.svg"
        titulo="Softwares Sob Medida"  
        descricao="Projetamos soluções de software adaptadas à realidade da sua empresa, desde ferramentas internas até sistemas completos de gestão."
        tecnologias={["React", "Python", "Django", "PostgreSQL", "Docker"]}
      />
    </section>
  );
}