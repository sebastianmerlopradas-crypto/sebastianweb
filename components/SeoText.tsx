import Link from 'next/link'

export default function SeoText() {
  return (
    <section className="py-32 border-t border-border bg-surface/55" aria-label="Información sobre los servicios">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl">
          <h2 className="heading-md mb-6">
            Creador de páginas web a medida —{' '}
            <span className="text-accent">Sebastián Merlo Pradas</span>
          </h2>

          <div className="space-y-4 text-muted leading-relaxed">
            <p>
              Si estás buscando un <strong className="text-text">creador de páginas web profesional</strong>,
              has llegado al sitio correcto. Soy Sebastián Merlo Pradas, desarrollador web freelance
              especializado en diseño y desarrollo de sitios web personalizados para negocios,
              profesionales, artistas y autores.
            </p>
            <p>
              Cada proyecto que entrego es único: sin plantillas genéricas, sin soluciones de copia-pega.
              Combino <strong className="text-text">inteligencia artificial con código artesanal</strong>{' '}
              para crear páginas web rápidas, visualmente potentes y optimizadas desde el primer día
              para que Google te encuentre.
            </p>
          </div>

          <h3 className="font-body font-semibold text-text mt-10 mb-3">¿Qué tipo de páginas web creo?</h3>
          <p className="text-muted leading-relaxed">
            Trabajo con todo tipo de proyectos: páginas web para pequeños negocios y autónomos, webs
            para escritores y autores (como la de{' '}
            <a
              href="https://lolaolmedoautora.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Lola Olmedo, autora de libros infantiles
            </a>
            ), portfolios para creativos, landing pages de alto rendimiento y sitios corporativos con
            identidad de marca fuerte.
          </p>

          <h3 className="font-body font-semibold text-text mt-8 mb-3">SEO, rendimiento y accesibilidad incluidos</h3>
          <p className="text-muted leading-relaxed">
            Todas las webs que desarrollo incluyen optimización SEO básica: estructura semántica,
            metaetiquetas, velocidad de carga y mobile-first. Una web bonita que nadie encuentra no
            sirve de nada: por eso la visibilidad orgánica forma parte de mi proceso desde el primer día.
          </p>

          <Link href="/#contacto" className="btn-primary mt-10 inline-flex">
            Hablemos de tu proyecto
          </Link>
        </div>
      </div>
    </section>
  )
}
