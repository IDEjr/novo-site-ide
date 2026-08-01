import Link from 'next/link'
import type { Metadata } from 'next'
import type { Where } from 'payload'

import BlogHero from '@/components/Blog/BlogHero/BlogHero'
import CategoryFilter from '@/components/Blog/CategoryFilter/CategoryFilter'
import PostCard from '@/components/Blog/PostCard/PostCard'
import { getPayloadClient } from '@/lib/payload'
import type { PopulatedPost } from '@/lib/blog-types'

import styles from './page.module.css'

const POSTS_PER_PAGE = 6

export const metadata: Metadata = {
  title: 'Blog | IDE Jr',
  description: 'Artigos e novidades da IDE Jr sobre tecnologia, design e empresa júnior.',
}

type BlogPageProps = {
  searchParams: Promise<{ categoria?: string; page?: string }>
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { categoria, page } = await searchParams
  const currentPage = Math.max(1, Number(page) || 1)
  const payload = await getPayloadClient()

  const categoriesResult = await payload.find({
    collection: 'categories',
    limit: 100,
    sort: 'title',
  })

  let featuredPost: PopulatedPost | null = null
  if (currentPage === 1 && !categoria) {
    const featuredResult = await payload.find({
      collection: 'posts',
      where: { status: { equals: 'published' } },
      sort: '-publishedAt',
      limit: 1,
      depth: 2,
    })
    featuredPost = (featuredResult.docs[0] as PopulatedPost) ?? null
  }

  const where: Where = { status: { equals: 'published' } }
  if (categoria) {
    where['categories.slug'] = { equals: categoria }
  }
  if (featuredPost) {
    where.id = { not_equals: featuredPost.id }
  }

  const postsResult = await payload.find({
    collection: 'posts',
    where,
    sort: '-publishedAt',
    limit: POSTS_PER_PAGE,
    page: currentPage,
    depth: 2,
  })
  const posts = postsResult.docs as PopulatedPost[]

  const nextPageHref = `/blog?${categoria ? `categoria=${categoria}&` : ''}page=${currentPage + 1}`

  return (
    <div className={styles.page}>
      {featuredPost && <BlogHero post={featuredPost} />}

      <CategoryFilter categories={categoriesResult.docs} activeSlug={categoria} />

      {posts.length > 0 ? (
        <div className={styles.grid}>
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <p className={styles.empty}>Nenhum post publicado ainda.</p>
      )}

      {postsResult.hasNextPage && (
        <Link href={nextPageHref} className={styles.verMais}>
          Ver mais &darr;
        </Link>
      )}
    </div>
  )
}
