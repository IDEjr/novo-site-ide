import path from 'path'
import { fileURLToPath } from 'url'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import sharp from 'sharp'
import { buildConfig } from 'payload'

import { Users } from './src/collections/Users'
import { Media } from './src/collections/Media'
import { Categories } from './src/collections/Categories'
import { Posts } from './src/collections/Posts'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET || '',
  admin: {
    user: Users.slug,
  },
  collections: [Users, Media, Categories, Posts],
  editor: lexicalEditor(),
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'src/payload-types.ts'),
  },
})
