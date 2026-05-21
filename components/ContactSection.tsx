export default function ContactSection() {
  return (
    <section
      id="contacto"
      className="py-40 border-t border-border scroll-mt-16 relative overflow-hidden"
      aria-labelledby="contacto-heading"
    >
      {/* Background glow */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-accent/5 blur-[100px] rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <p className="section-label mb-8">Contacto</p>
        <div className="divider mx-auto mb-10" aria-hidden="true" />

        <h2 id="contacto-heading" className="heading-lg mb-6 text-balance max-w-2xl mx-auto">
          ¿Listo para crear algo{' '}
          <em className="text-accent not-italic">extraordinario?</em>
        </h2>

        <p className="body-lg mb-10 max-w-md mx-auto">
          Cuéntame tu proyecto. Respondo en menos de 24 horas y siempre con
          ideas claras sobre cómo hacerlo realidad.
        </p>

        <a
          href="mailto:sebastianmerlopradas@gmail.com"
          className="btn-primary text-base px-10 py-4"
          aria-label="Enviar correo electrónico a Sebastián"
        >
          Hablemos
        </a>

        <p className="mt-6 text-sm text-muted">
          <a
            href="mailto:sebastianmerlopradas@gmail.com"
            className="hover:text-accent transition-colors"
          >
            sebastianmerlopradas@gmail.com
          </a>
        </p>
      </div>
    </section>
  )
}
