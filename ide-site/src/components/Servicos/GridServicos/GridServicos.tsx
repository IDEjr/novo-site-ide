import CardServico from './CardServico';
import styles from './GridServicos.module.css';

export default function GridServicos() {
  return (
    <section className={styles.content}>
      <CardServico 
        iconeSrc="/imagens/imgServicos/icones/site.svg"
        titulo="Site de Apresentação Institucional"  
        descricao="Criamos sites modernos e responsivos para apresentar sua empresa, fortalecer sua presença digital e transmitir credibilidade aos seus clientes."
        tecnologias={[
          { nome: "Next.js", imgSrc: "/imagens/imgServicos/tecnologias/nextjs.svg"}, 
          { nome: "React", imgSrc: "/imagens/imgServicos/tecnologias/react.svg"},
          { nome: "Tailwind CSS", imgSrc: "/imagens/imgServicos/tecnologias/tailwindcss.svg"},
          { nome: "TypeScript", imgSrc: "/imagens/imgServicos/tecnologias/typescript.svg"}
        ]}
      />

      <CardServico 
        iconeSrc="/imagens/imgServicos/icones/mouse.svg"
        titulo="Site com Área Administrativa (CMS)"  
        descricao="Desenvolvemos sites que permitem que você atualize conteúdos, notícias, imagens e páginas de forma simples, sem depender de programação."
        tecnologias={[
          { nome: "Next.js", imgSrc: "/imagens/imgServicos/tecnologias/nextjs.svg"},
          { nome: "TypeScript", imgSrc: "/imagens/imgServicos/tecnologias/typescript.svg"}, 
          { nome: "Payload", imgSrc: "/imagens/imgServicos/tecnologias/payload.svg"}, 
          { nome: "PostgreSQL", imgSrc: "/imagens/imgServicos/tecnologias/postgreSQL.svg"}
        ]}
      />

      <CardServico 
        iconeSrc="/imagens/imgServicos/icones/monitorCelular.svg"
        titulo="Sistemas Web Sob Medida"  
        descricao="Criamos plataformas acessíveis pelo navegador para automatizar processos, centralizar informações e atender às necessidades específicas da sua empresa."
        tecnologias={[
          { nome: "Next.js", imgSrc: "/imagens/imgServicos/tecnologias/nextjs.svg"},
          { nome: "Node.js", imgSrc: "/imagens/imgServicos/tecnologias/nodejs.svg"},
          { nome: "TypeScript", imgSrc: "/imagens/imgServicos/tecnologias/typescript.svg"},
          { nome: "PostgreSQL", imgSrc: "/imagens/imgServicos/tecnologias/postgreSQL.svg"}
        ]}
      />

      <CardServico 
        iconeSrc="/imagens/imgServicos/icones/monitor.svg"
        titulo="Softwares Sob Medida"  
        descricao="Projetamos soluções de software adaptadas à realidade da sua empresa, desde ferramentas internas até sistemas completos de gestão."
        tecnologias={[
          { nome: "Python", imgSrc: "/imagens/imgServicos/tecnologias/python.svg"},
          { nome: "Django", imgSrc: "/imagens/imgServicos/tecnologias/django.svg"},
          { nome: "PostgreSQL", imgSrc: "/imagens/imgServicos/tecnologias/postgreSQL.svg"},
          { nome: "Docker", imgSrc: "/imagens/imgServicos/tecnologias/docker.svg"}
        ]}
      />
    </section>
  );
}