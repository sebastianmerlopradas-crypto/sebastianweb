const steps = [
  {
    number: '01',
    title: 'Descubrimiento',
    description:
      'Escucho tu proyecto, tus objetivos y tu audiencia. Sin formularios interminables: una conversación directa basta.',
  },
  {
    number: '02',
    title: 'Diseño y prototipo',
    description:
      'Creo un prototipo visual de alta fidelidad para que veas exactamente qué vas a recibir antes de escribir una línea de código.',
  },
  {
    number: '03',
    title: 'Desarrollo',
    description:
      'Código limpio, semántico y veloz. IA + artesanía manual para lograr el equilibrio perfecto entre velocidad y calidad.',
  },
  {
    number: '04',
    title: 'Lanzamiento',
    description:
      'Despliegue, dominio y optimización SEO inicial incluidos. Tu web live y lista para crecer.',
  },
]

export default function Proceso() {
  return (
    <section id="proceso" className="py-32 scroll-mt-16 border-t border-border" aria-labelledby="proceso-heading">
      <div className="max-w-6xl mx-auto px-6">
        <p className="section-label mb-6">Cómo trabajo</p>
        <div className="divider mb-10" aria-hidden="true" />

        <h2 id="proceso-heading" className="heading-lg mb-20 max-w-xl text-balance">
          De idea a web live{' '}
          <em className="text-accent not-italic">en cuatro pasos.</em>
        </h2>

        <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map(({ number, title, description }, i) => (
            <li key={number} className="relative group">
              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div
                  aria-hidden="true"
                  className="hidden lg:block absolute top-5 left-full w-full h-px bg-border -translate-x-0 z-0"
                />
              )}

              <div className="relative z-10">
                <span className="font-display text-5xl text-accent/20 group-hover:text-accent/40 transition-colors duration-500 block mb-4 leading-none">
                  {number}
                </span>
                <h3 className="font-body font-semibold text-text mb-3">{title}</h3>
                <p className="text-sm text-muted leading-relaxed">{description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
