import Link from 'next/link'

import type { Category } from '@/payload-types'

import styles from './CategoryFilter.module.css'

export default function CategoryFilter({
  categories,
  activeSlug,
}: {
  categories: Category[]
  activeSlug?: string
}) {
  return (
    <nav className={styles.filter} aria-label="Filtrar por categoria">
      <Link href="/Blog" className={!activeSlug ? styles.linkActive : styles.link}>
        Todos
      </Link>
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/Blog?categoria=${category.slug}`}
          className={activeSlug === category.slug ? styles.linkActive : styles.link}
        >
          {category.title}
        </Link>
      ))}
    </nav>
  )
}
