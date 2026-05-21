import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description: 'Política de privacidad del sitio web de Sebastián Merlo Pradas.',
  robots: { index: false, follow: false },
}

export default function Privacidad() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="heading-lg mb-12">Política de Privacidad</h1>
        <div className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:font-normal">
          <h2>Responsable del tratamiento</h2>
          <p>
            Sebastián Merlo Pradas, correo electrónico: sebastianmerlopradas@gmail.com
          </p>

          <h2>Datos que recopilamos</h2>
          <p>
            Únicamente recopilamos los datos que nos facilitas voluntariamente a través del formulario de contacto
            (nombre y correo electrónico) para poder responderte a tu consulta.
          </p>
          <p>
            Si has aceptado las cookies analíticas, Google Analytics recopila de forma anónima datos de uso del
            sitio (páginas visitadas, tiempo en el sitio, dispositivo y país de origen).
          </p>

          <h2>Base legal y finalidad</h2>
          <ul>
            <li><strong>Contacto:</strong> Consentimiento del interesado. Finalidad: responder a tu consulta.</li>
            <li><strong>Analítica:</strong> Consentimiento del interesado. Finalidad: mejorar el sitio web.</li>
          </ul>

          <h2>Conservación de datos</h2>
          <p>
            Los datos de contacto se conservan mientras exista interés mutuo y en ningún caso más de dos años
            sin actividad. Puedes solicitar su eliminación en cualquier momento.
          </p>

          <h2>Tus derechos</h2>
          <p>
            Tienes derecho a acceder, rectificar, suprimir, limitar el tratamiento y oponerte al mismo.
            Puedes ejercerlos escribiendo a sebastianmerlopradas@gmail.com. También tienes derecho a presentar
            una reclamación ante la Agencia Española de Protección de Datos (aepd.es).
          </p>

          <h2>Transferencias internacionales</h2>
          <p>
            Google Analytics puede implicar transferencias a Estados Unidos bajo las garantías del Data Privacy Framework.
            Consulta la política de privacidad de Google para más detalles.
          </p>
        </div>
      </div>
    </div>
  )
}
