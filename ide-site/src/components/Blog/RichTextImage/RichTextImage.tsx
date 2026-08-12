import Image from 'next/image'
import type { SerializedUploadNode } from '@payloadcms/richtext-lexical'

import type { Media } from '@/payload-types'

import styles from './RichTextImage.module.css'

// Largura da coluna de leitura em `Blog/[slug]/page.module.css` (.article max-width).
const COLUMN_WIDTH = 800

function alignmentClass(format: SerializedUploadNode['format']) {
  switch (format) {
    case 'left':
    case 'start':
      return styles.left
    case 'right':
    case 'end':
      return styles.right
    default:
      // Sem alinhamento explicito no editor, a imagem fica centralizada.
      return ''
  }
}

export default function RichTextImage({ node }: { node: SerializedUploadNode }) {
  if (typeof node.value !== 'object' || !node.value) return null

  const media = node.value as Media
  // Sem `serverURL` no payload.config.ts a url vem relativa (/api/media/file/...) e o
  // otimizador do Next a trata como local. Se algum dia virar absoluta, next.config.ts
  // precisa de images.remotePatterns.
  const url = media.url
  if (!url) return null

  const alt = (node.fields?.alt as string | undefined) || media.alt || ''

  if (!media.mimeType?.startsWith('image')) {
    return (
      <a href={url} rel="noopener noreferrer" className={styles.fileLink}>
        {media.filename}
      </a>
    )
  }

  const figureClass = `${styles.figure} ${alignmentClass(node.format)}`.trim()

  // Sem dimensoes conhecidas nao da para usar next/image sem distorcer a imagem.
  if (!media.width || !media.height) {
    return (
      <figure className={figureClass}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={url} alt={alt} className={styles.image} />
      </figure>
    )
  }

  // A figure nunca passa da largura natural da imagem nem da coluna, entao o browser
  // nao precisa considerar candidatos maiores que isso no srcSet.
  const displayWidth = Math.min(media.width, COLUMN_WIDTH)

  return (
    <figure className={figureClass} style={{ maxWidth: `${media.width}px` }}>
      <Image
        src={url}
        alt={alt}
        width={media.width}
        height={media.height}
        sizes={`(max-width: ${displayWidth + 64}px) 100vw, ${displayWidth}px`}
        className={styles.image}
      />
    </figure>
  )
}
