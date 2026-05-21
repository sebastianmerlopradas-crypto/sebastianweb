import Link from 'next/link'
import type { PostMeta } from '@/lib/blog'

interface Props {
  posts: PostMeta[]
}

export default function BlogPreview({ posts }: Props) {
  return (
    <section id="insights" className="py-32 border-t border-border scroll-mt-16" aria-labelledby="blog-heading">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <p className="section-label mb-6">Insights</p>
            <div className="divider mb-10" aria-hidden="true" />
            <h2 id="blog-heading" className="heading-lg max-w-xl text-balance">
              Noticias, ideas y artículos sobre{' '}
              <em className="text-accent not-italic">diseño web</em> y negocio digital
            </h2>
          </div>
          <Link href="/blog" className="btn-ghost whitespace-nowrap self-start md:self-end">
            Ver todos →
          </Link>
        </div>

        <div className="mb-10 p-8 rounded-[2rem] border border-accent/15 bg-surface/30 shadow-[0_40px_120px_rgba(0,0,0,0.18)]">
          <div className="flex items-center gap-3 text-sm uppercase tracking-[0.35em] text-accent mb-6">
            <span>✨ Contenido con propósito</span>
          </div>
          <p className="text-muted leading-relaxed max-w-3xl">
            Publica noticias, proyectos y casos de estudio. Añade título, descripción, imagen y texto optimizado para SEO sin tocar el código.
          </p>
        </div>

        <ul className="grid md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block h-full overflow-hidden rounded-[2rem] border border-border bg-surface/20 shadow-[0_24px_80px_rgba(0,0,0,0.12)] transition-all duration-500 hover:border-accent/40 hover:bg-surface/50"
              >
                {post.image ? (
                  <div
                    className="h-48 bg-cover bg-center"
                    style={{ backgroundImage: `url(${post.image})` }}
                  />
                ) : (
                  <div className="h-48 bg-gradient-to-br from-accent/10 via-transparent to-surface" />
                )}
                <div className="p-6">
                  <span className="section-label text-[10px] mb-4 block">{post.category}</span>
                  <h3 className="font-body font-semibold text-text mb-3 leading-snug group-hover:text-accent transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-6 line-clamp-3">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between gap-4 text-xs text-muted">
                    <span>{post.readingTime}</span>
                    <span className="text-accent text-sm group-hover:translate-x-1 transition-transform duration-300 inline-block">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
