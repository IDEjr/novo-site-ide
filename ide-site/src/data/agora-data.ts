export interface AgoraItem {
  id: string;
  mensagem: string;
  tag: string;
  dataTexto: string;
  commitHash?: string;
  link?: string;
}

export const fallbackAgoraItems: AgoraItem[] = [
  {
    id: '1',
    tag: 'DEPLOY',
    mensagem: 'Nova versão do Mural de Bolsas colocada em produção para toda a comunidade UFRGS.',
    dataTexto: 'out 2026',
    commitHash: '7c89f1a',
    link: '/Portfolio/1',
  },
  {
    id: '2',
    tag: 'PROCESSO SELETIVO',
    mensagem: 'Novos desenvolvedores e designers do INF integrados às equipes ativas de projetos.',
    dataTexto: 'set 2026',
    commitHash: '3e41b02',
  },
  {
    id: '3',
    tag: 'TECNOLOGIA',
    mensagem: 'Padronização de arquitetura em Next.js 16 e Tailwind CSS nos novos sistemas em desenvolvimento.',
    dataTexto: 'ago 2026',
    commitHash: '9a02d84',
    link: '/Blog',
  },
];
