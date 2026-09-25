# AGENTS.md - Novo Site da IDE

## Stack
- **Next.js 16** + TypeScript + TailwindCSS v4
- **Payload CMS**: PostgreSQL, Lexical rich text, Resend email
- Collections: `users`, `media`, `categories`, `posts`

## Estrutura Rota
- `/` - Home (components: FrontHome, InfoCards, NossosParceiros, MVVCards, CTAHome)
- `/blog` - Posts (admin apenas `status: published`)
- `/manual` - Área restrita (auth via `MANUAL_PASSWORD` no `.env`)
- `/api/*` - Payload admin routes

## Collections Payload

### Users
```ts
slug: 'users', auth: true,
fields: [email, name, avatar],
access: create/read = user logged in,
validate: email deve terminar em @idejr.com.br
```

### Media
```ts
upload: { staticDir: 'media', imageSizes: [{name:'thumbnail', width:400,height:300},{name:'card',width:768,height:512}] },
fields: [alt(required)]
```

### Categories
```ts
slug: 'categories',
fields: [title, slug(unique)],
hooks: beforeValidate → slug = title.toLowerCase().normalize('NFD')...
```

### Posts
```ts
slug: 'posts',
fields: [
  title(text), 
  slug(text unique auto-generate from title), 
  excerpt(textarea optional), 
  coverImage(upload required → media),
  content(richText lexical required),
  author(relationship users required),
  categories(relationships categories many:true),
  status(select draft|published default:draft),
  publishedAt(date auto-set when status=published)
],
access: read = user || status==='published'
```

## Env Vars (.env)
- `RESEND_API_KEY`, `EMAIL_FROM`, `CONTACT_EMAIL` → validados em `src/env.ts`
- `MANUAL_PASSWORD` → auth manual area
- `PAYLOAD_SECRET` → config payload
- `DATABASE_URI` → PostgreSQL connection

## Frontend
- Layout: `(frontend)/layout.tsx` (Navbar + Footer + Background)
- CSS module: `(frontend)/page.module.css` (hero flex-column padding 1.5rem 2rem 3rem)
- Fonts: Dela_Gothic_One (--font-titulo), Bai_Jamjuree (--font-principal), Open_Sans (--font-secundaria)

## Scripts package.json
```json
"dev": "next dev",
"build": "next build",
"start": "next start",
"lint": "eslint"
```

## Notas Importantes
1. **Next image optimize**: URLs relativas do Payload são tratadas automaticamente pelo otimizador
2. **Slug auto-generate**: title → slug lowercase, acentos removidos, espaços por traços
3. **PublishedAt**: auto-set no momento do publish se status=published
4. **Admin users**: apenas email @idejr.com.br pode criar conta via Payload auth