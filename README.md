# sebastianweb.es — Next.js 14

Web personal de Sebastián Merlo Pradas, migrada de one-page HTML a Next.js 14 con App Router.

## Stack

- **Framework:** Next.js 14 (App Router)
- **Estilos:** Tailwind CSS + tipografía @tailwindcss/typography
- **Blog:** MDX con `next-mdx-remote` + `gray-matter`
- **Fuentes:** Cormorant Garamond (display) + DM Sans (cuerpo) — vía `next/font/google`
- **Imágenes:** `next/image` con optimización AVIF/WebP
- **Deploy:** Netlify + `@netlify/plugin-nextjs`

## Arrancar en local

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Estructura de carpetas

```
app/
  layout.tsx         # Root layout (fuentes, navbar, footer, metadata global)
  page.tsx           # Página de inicio
  blog/
    page.tsx         # Listado de artículos
    [slug]/page.tsx  # Artículo individual
  aviso-legal/
  privacidad/
  cookies/
  sitemap.ts         # Sitemap dinámico (se genera en build)
  robots.ts          # robots.txt
  not-found.tsx      # Página 404

components/
  Navbar.tsx
  Footer.tsx
  Hero.tsx
  Metodo.tsx
  Proceso.tsx
  BlogPreview.tsx    # Muestra los 3 últimos posts en home
  SeoText.tsx
  ContactSection.tsx

content/
  blog/              # ← AÑADE AQUÍ TUS ARTÍCULOS (.mdx)
    por-que-un-negocio-necesita-web.mdx
    instagram-no-sustituye-web.mdx
    negocio-sin-web.mdx

lib/
  blog.ts            # Utilidades para leer y parsear los MDX

public/
  images/            # ← PON AQUÍ TUS IMÁGENES
  og-image.jpg       # ← IMAGEN OPEN GRAPH (1200×630 px)
```

## Cómo añadir un artículo nuevo

1. Crea un archivo `.mdx` en `content/blog/` con el slug como nombre.
2. Añade el frontmatter al principio:

```mdx
---
title: "Título del artículo"
date: "2024-05-10"
description: "Descripción breve (aparece en listados y SEO)."
category: "Diseño web"
---

Contenido en Markdown...
```

3. Guarda. El artículo aparece automáticamente en `/blog` y en la home.

## Cómo usar next/image

```tsx
import Image from 'next/image'

<Image
  src="/images/mi-foto.jpg"
  alt="Descripción accesible"
  width={800}
  height={600}
  priority   // ← solo para imágenes above-the-fold
/>
```

Las imágenes se sirven automáticamente en WebP/AVIF y con el tamaño correcto por dispositivo.

## URLs antiguas — Redirects

Las URLs originales del one-page redirigen automáticamente:

| URL antigua       | URL nueva                                    |
|-------------------|----------------------------------------------|
| /articulo1        | /blog/por-que-un-negocio-necesita-web        |
| /articulo2        | /blog/instagram-no-sustituye-web             |
| /articulo3        | /blog/negocio-sin-web                        |

## Deploy en Netlify

1. Conecta el repositorio en Netlify.
2. Build command: `next build`
3. Publish directory: `.next`
4. El plugin `@netlify/plugin-nextjs` se instala automáticamente desde `netlify.toml`.

> **Importante:** Instala el plugin de Netlify antes del primer deploy:
> ```bash
> npm install @netlify/plugin-nextjs
> ```

## Paquetes que añadir antes del primer deploy

```bash
npm install @netlify/plugin-nextjs @tailwindcss/typography
```

## SEO incluido de serie

- Metadata API de Next.js 14 (title template, OG, Twitter cards)
- `sitemap.ts` → genera `/sitemap.xml` automáticamente con todas las páginas y posts
- `robots.ts` → genera `/robots.txt`
- JSON-LD de `Article` en cada post
- Canonical URLs en todas las páginas
- Redirects 301 desde las URLs antiguas
- Headers de seguridad (X-Frame-Options, nosniff, etc.)
- Cache headers agresivos para assets estáticos
