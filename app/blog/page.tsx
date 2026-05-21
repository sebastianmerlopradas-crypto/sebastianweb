import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Artículos sobre diseño web, negocio digital, SEO y tendencias en desarrollo web. Por Sebastián Merlo Pradas.',
  alternates: {
    canonical: 'https://sebastianweb.es/blog',
  },
  openGraph: {
    title: 'Blog — Sebastián Merlo Pradas',
    description: 'Artículos sobre diseño web, negocio digital, SEO y tendencias.',
    url: 'https://sebastianweb.es/blog',
  },
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <header className="mb-16">
          <p className="section-label mb-6">Blog</p>
          <div className="divider mb-10" aria-hidden="true" />
          <h1 className="heading-xl max-w-2xl text-balance">
            Ideas sobre{' '}
            <em className="text-accent not-italic">diseño web</em> y negocio digital
          </h1>
          <p className="body-lg mt-6 max-w-lg">
            Tendencias, consejos y reflexiones sobre desarrollo web, visibilidad online
            y por qué cualquier negocio necesita una web profesional.
          </p>
        </header>

        {/* Posts list */}
        {posts.length === 0 ? (
          <p className="text-muted">Próximamente...</p>
        ) : (
          <ul className="divide-y divide-border">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col md:flex-row md:items-center justify-between gap-6 py-10 hover:pl-2 transition-all duration-300"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="section-label text-[10px]">{post.category}</span>
                      <span className="text-xs text-muted">{post.readingTime}</span>
                    </div>
                    <h2 className="font-display text-2xl md:text-3xl text-text group-hover:text-accent transition-colors duration-300 mb-2">
                      {post.title}
                    </h2>
                    <p className="text-muted text-sm leading-relaxed max-w-2xl">
                      {post.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <time
                      dateTime={post.date}
                      className="text-xs text-muted"
                    >
                      {new Date(post.date).toLocaleDateString('es-ES', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                    <span className="text-accent text-lg group-hover:translate-x-1 transition-transform duration-300 inline-block">
                      →
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
