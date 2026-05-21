import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Cookies',
  description: 'Política de cookies del sitio web de Sebastián Merlo Pradas.',
  robots: { index: false, follow: false },
}

export default function Cookies() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="heading-lg mb-12">Política de Cookies</h1>
        <div className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:font-normal">
          <h2>¿Qué son las cookies?</h2>
          <p>
            Las cookies son pequeños archivos de texto que los sitios web guardan en tu dispositivo para recordar
            información sobre tu visita.
          </p>

          <h2>Cookies que utilizamos</h2>

          <h3>Cookies técnicas (necesarias)</h3>
          <p>
            Estas cookies son imprescindibles para el funcionamiento del sitio y no requieren consentimiento.
            Guardan tus preferencias de cookies para no preguntarte cada vez que visitas el sitio.
          </p>

          <h3>Cookies analíticas (opcionales)</h3>
          <p>
            Si las aceptas, utilizamos Google Analytics para medir el uso del sitio de forma anónima y agregada.
            Los datos recogidos incluyen: páginas visitadas, duración de la visita, dispositivo y país de origen.
            No identificamos a usuarios individuales.
          </p>

          <table>
            <thead>
              <tr>
                <th>Cookie</th>
                <th>Proveedor</th>
                <th>Finalidad</th>
                <th>Duración</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>cookie_consent</td>
                <td>sebastianweb.es</td>
                <td>Preferencias de cookies</td>
                <td>1 año</td>
              </tr>
              <tr>
                <td>_ga</td>
                <td>Google Analytics</td>
                <td>Distinguir usuarios</td>
                <td>2 años</td>
              </tr>
              <tr>
                <td>_ga_*</td>
                <td>Google Analytics</td>
                <td>Mantener estado de sesión</td>
                <td>2 años</td>
              </tr>
            </tbody>
          </table>

          <h2>Cómo gestionar tus preferencias</h2>
          <p>
            Puedes aceptar o rechazar las cookies analíticas en el banner que aparece al entrar al sitio.
            También puedes cambiar tus preferencias en cualquier momento desde la configuración de tu navegador.
          </p>

          <p>
            Para más información sobre cómo Google usa los datos:{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              Política de privacidad de Google
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
