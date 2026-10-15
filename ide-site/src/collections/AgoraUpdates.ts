import type { CollectionConfig } from 'payload'

export const AgoraUpdates: CollectionConfig = {
  slug: 'agora-updates',
  labels: {
    singular: 'Atualização Agora na IDE',
    plural: 'Agora na IDE',
  },
  admin: {
    useAsTitle: 'mensagem',
    defaultColumns: ['mensagem', 'tag', 'dataTexto', 'commitHash', 'status'],
  },
  access: {
    read: ({ req }) => {
      if (req.user) return true
      return {
        status: {
          equals: 'published',
        },
      }
    },
  },
  fields: [
    {
      name: 'mensagem',
      label: 'Mensagem / Título do Marco',
      type: 'text',
      required: true,
      admin: {
        description: 'Ex: Deploy da v2 do Mural de Bolsas com nova interface para alunos.',
      },
    },
    {
      name: 'tag',
      label: 'Tag / Categoria',
      type: 'select',
      required: true,
      defaultValue: 'DEPLOY',
      options: [
        { label: 'DEPLOY', value: 'DEPLOY' },
        { label: 'PROCESSO SELETIVO', value: 'PROCESSO SELETIVO' },
        { label: 'TECNOLOGIA', value: 'TECNOLOGIA' },
        { label: 'PROJETO', value: 'PROJETO' },
        { label: 'EVENTO', value: 'EVENTO' },
      ],
    },
    {
      name: 'dataTexto',
      label: 'Data Visível',
      type: 'text',
      required: true,
      admin: {
        description: 'Ex: out 2026 ou 14 out',
      },
    },
    {
      name: 'commitHash',
      label: 'Hash de Commit (Opcional)',
      type: 'text',
      admin: {
        description: 'Opcional. Ex: 7c89f1a (se deixar vazio, um hash será gerado automaticamente)',
      },
    },
    {
      name: 'link',
      label: 'Link Externo ou Interno (Opcional)',
      type: 'text',
      admin: {
        description: 'Ex: /Portfolio/1 ou /Blog',
      },
    },
    {
      name: 'status',
      label: 'Status de Publicação',
      type: 'select',
      defaultValue: 'published',
      options: [
        { label: 'Publicado', value: 'published' },
        { label: 'Rascunho', value: 'draft' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
