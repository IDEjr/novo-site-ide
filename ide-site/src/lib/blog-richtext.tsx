import type { JSXConvertersFunction } from '@payloadcms/richtext-lexical/react'

import RichTextImage from '@/components/Blog/RichTextImage/RichTextImage'

/**
 * O conversor padrao do Payload renderiza uploads como <picture><img width={original}>,
 * sem nenhuma restricao de largura -- o que estoura a coluna do post. Aqui a imagem passa
 * pelo otimizador do Next e o alinhamento do editor vira classe no <figure>.
 */
export const blogConverters: JSXConvertersFunction = ({ defaultConverters }) => ({
  ...defaultConverters,
  upload: ({ node }) => <RichTextImage node={node} />,
})
