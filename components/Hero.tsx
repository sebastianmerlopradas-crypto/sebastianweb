import Link from 'next/link'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden"
      aria-label="Presentación"
    >
      {/* Decorative background glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 w-full">
        {/* Overline */}
        <p className="section-label mb-8 animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
          Diseñador Web Freelance
        </p>

        {/* Main heading — las letras grandes decorativas */}
        <div className="relative mb-8">
          {/* SMP giant letters */}
          <div
            aria-hidden="true"
            className="absolute -top-12 -left-4 font-display font-light text-[22vw] leading-none text-accent/[0.08] select-none pointer-events-none"
          >
            SMP
          </div>

          <h1
            className="heading-xl relative z-10 animate-fade-up text-balance max-w-4xl"
            style={{ animationDelay: '0.2s', opacity: 0 }}
          >
            Creador de sitios web que combinan{' '}
            <em className="text-accent not-italic">inteligencia artificial</em>{' '}
            con código artesanal.
          </h1>
        </div>

        {/* Sub */}
        <p
          className="body-lg max-w-xl mb-10 animate-fade-up"
          style={{ animationDelay: '0.35s', opacity: 0 }}
        >
          Para resultados extraordinarios. Más rápidos, más personales y más
          optimizados de lo que cualquier herramienta automática puede ofrecer.
        </p>

        {/* CTAs */}
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

        {/* Scroll indicator */}
        <div
          className="absolute bottom-10 left-6 hidden md:flex items-center gap-3 text-muted text-xs tracking-widest uppercase animate-fade-up"
          style={{ animationDelay: '0.8s', opacity: 0 }}
          aria-hidden="true"
        >
          <span className="w-8 h-px bg-muted/50" />
          scroll
        </div>
      </div>
    </section>
  )
}
