import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { RichText } from '@payloadcms/richtext-lexical/react'

import { getPayloadClient } from '@/lib/payload'
import type { PopulatedPost } from '@/lib/blog-types'

import styles from './page.module.css'

type PostPageProps = {
  params: Promise<{ slug: string }>
}

async function getPost(slug: string): Promise<PopulatedPost | null> {
  const payload = await getPayloadClient()
  const result = await payload.find({
    collection: 'posts',
    where: {
      slug: { equals: slug },
      status: { equals: 'published' },
    },
    depth: 2,
    limit: 1,
  })

  return (result.docs[0] as PopulatedPost) ?? null
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) return {}

  return {
    title: `${post.title} | Blog IDE Jr`,
    description: post.excerpt ?? undefined,
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    notFound()
  }

  const cover = post.coverImage
  const imageUrl = cover.sizes?.card?.url || cover.url || ''
  const avatarUrl =
    typeof post.author.avatar === 'object' && post.author.avatar
      ? post.author.avatar.sizes?.thumbnail?.url || post.author.avatar.url
      : null
  const publishedDate = post.publishedAt
    ? new Intl.DateTimeFormat('pt-BR', { dateStyle: 'long' }).format(new Date(post.publishedAt))
    : null

  return (
    <div className={styles.page}>
      <article className={styles.article}>
        <Link href="/Blog" className={styles.back}>
          &larr; Voltar para o blog
        </Link>

        {post.categories && post.categories.length > 0 && (
          <div className={styles.tags}>
            {post.categories.map((category) => (
              <span key={category.id} className={styles.tag}>
                {category.title}
              </span>
            ))}
          </div>
        )}

        <h1 className={styles.title}>{post.title}</h1>

        <div className={styles.meta}>
          <span className={styles.avatar}>
            {avatarUrl && (
              <Image src={avatarUrl} alt={post.author.name} fill className={styles.avatarImage} />
            )}
          </span>
          <span className={styles.authorName}>{post.author.name}</span>
          {publishedDate && <span>&middot; {publishedDate}</span>}
        </div>

        {imageUrl && (
          <div className={styles.imageWrapper}>
            <Image
              src={imageUrl}
              alt={cover.alt}
              fill
              sizes="(max-width: 800px) 100vw, 800px"
              className={styles.image}
              priority
            />
          </div>
        )}

        <RichText data={post.content} className={styles.content} />
      </article>
    </div>
  )
}
