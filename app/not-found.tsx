import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p
          aria-hidden="true"
          className="font-display text-[20vw] md:text-[10rem] text-text/5 leading-none mb-4 select-none"
        >
          404
        </p>
        <h1 className="heading-md mb-4">Página no encontrada</h1>
        <p className="text-muted mb-8">
          La página que buscas no existe o ha sido movida.
        </p>
        <Link href="/" className="btn-primary">
          Volver al inicio
        </Link>
      </div>
    </div>
  )
}
