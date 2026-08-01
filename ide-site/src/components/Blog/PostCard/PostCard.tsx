import Image from 'next/image'
import Link from 'next/link'

import type { PopulatedPost } from '@/lib/blog-types'

import styles from './PostCard.module.css'

export default function PostCard({ post }: { post: PopulatedPost }) {
  const cover = post.coverImage
  const imageUrl = cover.sizes?.card?.url || cover.url || ''
  const category = post.categories?.[0]

  return (
    <Link href={`/blog/${post.slug}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={cover.alt}
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            className={styles.image}
          />
        )}
        {category && <span className={styles.tag}>{category.title}</span>}
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{post.title}</h3>
        {post.excerpt && <p className={styles.excerpt}>{post.excerpt}</p>}
      </div>
    </Link>
  )
}
