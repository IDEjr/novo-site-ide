export const projetos = [
  {
    id: 1,
    nome: "Site de Mural de Bolsas da UFRGS",
    descricao:
      "Plataforma web para apresentar as oportunidades de bolsas de pesquisa e extensão da UFRGS.",
    imagem: "/imagens/projetos/mural1.png",
    link: "https://www.ufrgs.br/bolsas/",
    conteudo: [
      { 
        type: "split", 
        title: "O Desafio", 
        text: "A UFRGS possui centenas de laboratórios e projetos oferecendo bolsas. Porém, a divulgação era feita em murais físicos pelos corredores ou páginas isoladas, gerando desinformação e limitando o acesso dos alunos.",
        imagePlaceholder: "Mural físico antigo vs Telas espalhadas" 
      },
      { 
        type: "metrics", 
        metrics: [
          { value: "+500", label: "Vagas mapeadas" },
          { value: "3 Meses", label: "De pesquisa e design" },
          { value: "300%", label: "Aumento nas inscrições" }
        ]
      },
      { 
        type: "split-reverse", 
        title: "Nossa Abordagem", 
        text: "Rodamos testes de usabilidade no Figma com dezenas de estudantes antes de programar. A arquitetura foi desenvolvida em React com Node.js, integrada ao login da Universidade.",
        imagePlaceholder: "Foto da equipe ou wireframe do Figma" 
      },
      { 
        type: "gallery", 
        title: "Interface & Telas Finais", 
        images: ["Tela de Busca", "Dashboard do Aluno", "Visão do Professor"] 
      },
      {
        type: "team",
        title: "Equipe do Projeto",
        members: [
          { name: "João Silva", linkedin: "https://linkedin.com", photo: "https://ui-avatars.com/api/?name=João+Silva&background=0B68BE&color=fff" },
          { name: "Maria Souza", linkedin: "https://linkedin.com", photo: "https://ui-avatars.com/api/?name=Maria+Souza&background=BE73FF&color=fff" },
          { name: "Carlos Gomes", linkedin: "https://linkedin.com", photo: "https://ui-avatars.com/api/?name=Carlos+Gomes&background=7726BD&color=fff" }
        ]
      }
    ]
  },
  {
    id: 2,
    nome: "Aplicativo de Inventário da UFRGS",
    descricao:
      "Aplicativo desenvolvido para otimizar o gerenciamento e o controle do inventário patrimonial da UFRGS.",
    imagem: "/imagens/projetos/inventario.png",
    link: "https://play.google.com/store/apps/details?id=br.ufrgs.cpd.coletainventario&hl=pt_BR",
    conteudo: [
      { 
        type: "split-reverse", 
        title: "O Problema Analógico", 
        text: "O inventário patrimonial da UFRGS era feito com pranchetas de papel. Servidores anotavam códigos manualmente e depois passavam dias digitando no sistema, causando lentidão e altos índices de erro.",
        imagePlaceholder: "Foto de prancheta e papel" 
      },
      { 
        type: "gallery", 
        title: "O Aplicativo", 
        images: ["Tela de Leitura de QR Code", "Lista de Bens Lidos", "Sincronização"] 
      },
      { 
        type: "split", 
        title: "A Tecnologia", 
        text: "Usamos Flutter para criar o app mobile (câmera veloz para QR codes) e Python/Django no backend para integrar de forma segura com os bancos de dados legados da Universidade.",
        imagePlaceholder: "Diagrama de arquitetura simples" 
      },
      { 
        type: "metrics", 
        metrics: [
          { value: "-70%", label: "Tempo de conferência" },
          { value: "Zero", label: "Digitação manual" }
        ]
      }
    ]
  },
  {
    id: 3,
    nome: "Site da TideSat Global",
    descricao:
      "Plataforma web para apresentar as soluções tecnológicas da TideSat Global e fortalecer sua presença digital.",
    imagem: "/imagens/projetos/tidesatLogo.png",
    link: "https://www.tidesatglobal.com/",
  },
  {
    id: 4,
    nome: "Site do LEME",
    descricao:
      "Site institucional desenvolvido para apresentar o Laboratório de Ensaios e Modelos Estruturais da UFRGS, destacando sua atuação em ensino, pesquisa, extensão e inovação na Engenharia Civil.",
    imagem: "/imagens/projetos/leme.png",
    link: "https://www.ufrgs.br/leme/",
  },
  {
    id: 5,
    nome: "Site da Faísca Design",
    descricao:
      "Plataforma desenvolvida para destacar a criatividade, os projetos e as soluções de design da Faísca Design Empresa Júnior.",
    imagem: "/imagens/projetos/faisca.png",
    link: "https://www.faiscadesignjr.com.br/",
  },
  {
    id: 6,
    nome: "Site da FIRE",
    descricao:
      "Site institucional da Fire Investigation, Research & Engineering, grupo de pesquisa dedicado aos estudos e aplicações da engenharia de segurança contra incêndios.",
    imagem: "/imagens/projetos/fireLogo.png",
    link: "https://www.ufrgs.br/fire/",
  },
];
