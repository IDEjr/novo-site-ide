import Image from 'next/image'
import Link from 'next/link'

import type { PopulatedPost } from '@/lib/blog-types'

import styles from './BlogHero.module.css'

export default function BlogHero({ post }: { post: PopulatedPost }) {
  const cover = post.coverImage
  const imageUrl = cover.sizes?.card?.url || cover.url || ''
  const category = post.categories?.[0]
  const avatarUrl =
    typeof post.author.avatar === 'object' && post.author.avatar
      ? post.author.avatar.sizes?.thumbnail?.url || post.author.avatar.url
      : null

  return (
    <div className={styles.hero}>
      <h1 className={styles.title}>Por dentro da IDE</h1>

      <Link href={`/Blog/${post.slug}`} className={styles.featured}>
        <div className={styles.imageWrapper}>
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={cover.alt}
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              className={styles.image}
              priority
            />
          )}
        </div>

        <div className={styles.content}>
          {category && <span className={styles.tag}>{category.title}</span>}
          <h2 className={styles.featuredTitle}>{post.title}</h2>
          {post.excerpt && <p className={styles.excerpt}>{post.excerpt}</p>}

          <div className={styles.footer}>
            <div className={styles.author}>
              <span className={styles.avatar}>
                {avatarUrl && (
                  <Image src={avatarUrl} alt={post.author.name} fill className={styles.avatarImage} />
                )}
              </span>
              {post.author.name}
            </div>

            <span className={styles.readMore}>Ler artigo &rarr;</span>
          </div>
        </div>
      </Link>
    </div>
  )
}
