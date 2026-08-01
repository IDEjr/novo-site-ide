import type { Category, Media, Post, User } from '@/payload-types'

export type PopulatedPost = Omit<Post, 'coverImage' | 'author' | 'categories'> & {
  coverImage: Media
  author: User
  categories: Category[] | null
}
