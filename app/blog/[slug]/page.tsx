import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getPostBySlug, getAllSlugs } from '@/lib/blog'

interface Props {
  params: { slug: string }
}

export const dynamic = 'force-dynamic'

// Genera las rutas estáticas en build time
export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

// Metadata dinámica por post
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `https://sebastianweb.es/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: ['Sebastián Merlo Pradas'],
      url: `https://sebastianweb.es/blog/${post.slug}`,
      images: post.image
        ? [
            {
              url: post.image,
              alt: post.title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: post.image ? [post.image] : undefined,
    },
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    ...(post.image ? { image: post.image } : {}),
    ...(post.tags?.length ? { keywords: post.tags.join(', ') } : {}),
    author: {
      '@type': 'Person',
      name: 'Sebastián Merlo Pradas',
      url: 'https://sebastianweb.es',
    },
    publisher: {
      '@type': 'Person',
      name: 'Sebastián Merlo Pradas',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-xs text-muted mb-12" aria-label="Migas de pan">
            <Link href="/" className="hover:text-accent transition-colors">Inicio</Link>
            <span aria-hidden="true">/</span>
            <Link href="/blog" className="hover:text-accent transition-colors">Blog</Link>
            <span aria-hidden="true">/</span>
            <span className="text-text truncate max-w-[200px]">{post.title}</span>
          </nav>

          <header className="mb-12">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="section-label text-[10px]">{post.category}</span>
                <span className="text-xs text-muted">{post.readingTime}</span>
              </div>
              <time dateTime={post.date} className="text-xs text-muted">
                {new Date(post.date).toLocaleDateString('es-ES', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>

            <h1 className="heading-xl mb-6 text-balance">{post.title}</h1>
            <p className="body-lg mb-8">{post.description}</p>

            {post.tags?.length ? (
              <div className="flex flex-wrap gap-3 mb-8">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-accent/20 px-4 py-2 text-xs font-medium text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}
          </header>

          {post.image ? (
            <figure className="mb-12 overflow-hidden rounded-[2rem] border border-border bg-surface">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-[420px] object-cover"
              />
            </figure>
          ) : null}

          <div
            className="prose prose-invert prose-lg max-w-none
              prose-headings:font-display prose-headings:font-normal
              prose-a:text-accent prose-a:no-underline hover:prose-a:underline
              prose-strong:text-text prose-strong:font-semibold
              prose-blockquote:border-accent prose-blockquote:text-muted
              prose-code:text-accent-light prose-code:text-sm
            "
          >
            <MDXRemote source={post.content} />
          </div>

          <footer className="mt-16 pt-8 border-t border-border">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <p className="text-sm text-muted mb-1">¿Te ha resultado útil?</p>
                <p className="text-sm text-text">
                  Hablemos de cómo mejorar tu presencia online.
                </p>
              </div>
              <Link href="/#contacto" className="btn-primary shrink-0">
                Contactar
              </Link>
            </div>
          </footer>
        </div>
      </article>

      <div className="max-w-3xl mx-auto px-6 pb-16">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"
        >
          ← Volver al blog
        </Link>
      </div>
    </>
  )
}
