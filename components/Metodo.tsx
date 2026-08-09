const features = [
  {
    icon: '⚡',
    title: 'Velocidad sin concesiones',
    description:
      'La IA comprime semanas de diseño en horas, manteniendo calidad premium en cada entrega.',
  },
  {
    icon: '✦',
    title: 'Personalización total',
    description:
      'Cada web es única. Código escrito a medida, sin plantillas genéricas ni soluciones de copia-pega.',
  },
  {
    icon: '🎯',
    title: 'Optimización real',
    description:
      'Performance, SEO y accesibilidad integrados desde el primer commit, no añadidos al final.',
  },
]

export default function Metodo() {
  return (
    <section id="metodo" className="py-32 scroll-mt-16" aria-labelledby="metodo-heading">
      <div className="max-w-6xl mx-auto px-6">
        {/* Label */}
        <p className="section-label mb-6">Mi método</p>

        {/* Divider */}
        <div className="divider mb-10" aria-hidden="true" />

        {/* Heading */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <h2 id="metodo-heading" className="heading-lg text-balance">
            La potencia de la{' '}
            <em className="text-accent not-italic">IA</em> con la precisión
            del código
          </h2>

          <div className="pt-2">
            <p className="body-lg mb-6">
              No elijo entre herramientas: las domino todas. La inteligencia
              artificial acelera cada etapa del diseño y la estructura,
              mientras que el código manual garantiza que cada detalle
              responda exactamente a tu visión.
            </p>
            <p className="body-lg">
              El resultado es una web más rápida, más personal y más
              optimizada de lo que cualquiera de los dos enfoques lograría por
              separado.
            </p>
          </div>
        </div>

        {/* Feature cards */}
        <div className="mt-20 grid md:grid-cols-3 gap-6">
          {features.map(({ icon, title, description }) => (
            <div
              key={title}
              className="group p-8 border border-border hover:border-accent/40 transition-all duration-500 bg-surface/80 hover:bg-surface shadow-sm hover:shadow-md"
            >
              <span className="text-2xl mb-4 block" aria-hidden="true">
                {icon}
              </span>
              <h3 className="font-body font-semibold text-text mb-3 text-base">
                {title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
