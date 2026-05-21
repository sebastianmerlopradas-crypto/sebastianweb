import Link from 'next/link'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      aria-label="Presentación"
    >
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-12 w-[320px] h-[320px] rounded-full bg-accent/15 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full bg-surface/80 blur-[140px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 w-full grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center">
        <div>
          <p className="section-label mb-8 animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
            Diseñador Web Freelance
          </p>

          <div className="relative mb-8">
            <div
              aria-hidden="true"
              className="absolute -top-12 -left-4 font-display font-light text-[22vw] leading-none text-text/[0.03] select-none pointer-events-none"
            >
              SMP
            </div>

            <h1
              className="heading-xl relative z-10 animate-fade-up text-balance max-w-4xl"
              style={{ animationDelay: '0.2s', opacity: 0 }}
            >
              Creando experiencias web visuales,<strong> inteligentes</strong> y pensadas para conversiones.
            </h1>
          </div>

          <p
            className="body-lg max-w-xl mb-10 animate-fade-up"
            style={{ animationDelay: '0.35s', opacity: 0 }}
          >
            Diseño estratégico, contenido optimizado y una presencia digital que genera confianza desde el primer vistazo.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-up"
            style={{ animationDelay: '0.5s', opacity: 0 }}
          >
            <Link href="/#contacto" className="btn-primary">
              Inicia tu proyecto
            </Link>
            <Link href="/#metodo" className="btn-ghost">
              Cómo trabajo
            </Link>
          </div>
        </div>

        <aside className="hidden lg:block glass-panel border border-white/10 p-8 shadow-[0_40px_100px_rgba(0,0,0,0.25)]">
          <p className="text-sm uppercase tracking-[0.35em] text-accent mb-4">Diseño con foco comercial</p>
          <h2 className="font-display text-3xl text-text mb-6">
            Más que una web: una historia digital que vende.
          </h2>
          <ul className="space-y-4 text-sm text-muted">
            <li>✔ Contenido que posiciona y conecta con tu cliente ideal.</li>
            <li>✔ Estructura visual que guía la mirada y destaca tus proyectos.</li>
            <li>✔ Web rápida, moderna y lista para crecer.</li>
          </ul>
        </aside>
      </div>
    </section>
  )
}
