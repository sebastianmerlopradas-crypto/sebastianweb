import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aviso Legal',
  description: 'Información legal del sitio web de Sebastián Merlo Pradas.',
  robots: { index: false, follow: false },
}

export default function AvisoLegal() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="heading-lg mb-12">Aviso Legal</h1>
        <div className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:font-normal">
          <h2>Datos identificativos</h2>
          <p>
            En cumplimiento de la Ley 34/2002, de Servicios de la Sociedad de la Información y del Comercio
            Electrónico (LSSI-CE), se informa de los datos del titular de este sitio web:
          </p>
          <ul>
            <li><strong>Titular:</strong> Sebastián Merlo Pradas</li>
            <li><strong>Actividad:</strong> Diseño y desarrollo web freelance</li>
            <li><strong>Correo electrónico:</strong> sebastianmerlopradas@gmail.com</li>
            <li><strong>Sitio web:</strong> https://sebastianweb.es</li>
          </ul>

          <h2>Objeto y ámbito de aplicación</h2>
          <p>
            El presente aviso legal regula el uso del sitio web sebastianweb.es, del que es titular Sebastián Merlo Pradas.
            La navegación por el sitio web atribuye la condición de usuario e implica la aceptación plena de todas las
            condiciones incluidas en este aviso.
          </p>

          <h2>Propiedad intelectual e industrial</h2>
          <p>
            Los contenidos de este sitio web, incluyendo textos, imágenes, diseño y código, son propiedad de Sebastián
            Merlo Pradas y están protegidos por las leyes de propiedad intelectual. Queda prohibida su reproducción total
            o parcial sin autorización expresa.
          </p>

          <h2>Responsabilidad</h2>
          <p>
            El titular no se responsabiliza de los daños que pudieran derivarse del uso del sitio web ni de la
            información contenida en el mismo. Los enlaces a sitios externos son informativos y el titular no controla
            ni es responsable de su contenido.
          </p>

          <h2>Legislación aplicable</h2>
          <p>
            Este aviso legal se rige por la legislación española. Para cualquier controversia serán competentes
            los juzgados y tribunales españoles.
          </p>
        </div>
      </div>
    </div>
  )
}
