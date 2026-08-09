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

        {/* Featured project */}
        <div className="mb-8 p-8 border border-accent/20 bg-surface/80 hover:bg-surface shadow-sm hover:shadow-md transition-all duration-500 group">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-accent text-xs tracking-widest uppercase">✨ Proyecto reciente</span>
          </div>
          <h3 className="heading-md mb-3 group-hover:text-accent transition-colors duration-300">
            Web para Lola Olmedo, autora de libros infantiles
          </h3>
          <p className="text-muted text-sm leading-relaxed mb-6 max-w-2xl">
            Diseño y desarrollo de la web oficial de Lola Olmedo, educadora e ilustradora con cinco
            publicaciones en Amazon. Una página que refleja la ternura y creatividad de su obra:
            presentación de libros, sección sobre la autora y formulario de contacto directo.
          </p>
          <a
            href="https://lolaolmedoautora.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost text-sm"
          >
            Ver el proyecto →
          </a>
        </div>

        {/* Blog posts grid */}
        <ul className="grid md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block h-full p-6 border border-border hover:border-accent/40 transition-all duration-500 bg-surface/80 hover:bg-surface shadow-sm hover:shadow-md"
              >
                <span className="section-label text-[10px] mb-4 block">{post.category}</span>
                <h3 className="font-body font-semibold text-text mb-3 leading-snug group-hover:text-accent transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-6 line-clamp-3">
                  {post.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted">{post.readingTime}</span>
                  <span className="text-accent text-sm group-hover:translate-x-1 transition-transform duration-300 inline-block">
                    →
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
