import Link from 'next/link'

const legalLinks = [
  { href: '/aviso-legal', label: 'Aviso legal' },
  { href: '/privacidad', label: 'Privacidad' },
  { href: '/cookies', label: 'Cookies' },
]

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-border bg-surface/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-display text-2xl text-text tracking-wider hover:text-accent transition-colors"
            >
              SMP
            </Link>
            <p className="mt-2 text-sm text-muted">Diseñado y desarrollado por Sebastián Merlo Pradas</p>
          </div>

          {/* Nav */}
          <nav aria-label="Navegación del pie de página">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {legalLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-muted hover:text-accent transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Sebastián Merlo Pradas · Hecho con código y criterio.
          </p>
          <Link
            href="mailto:sebastianmerlopradas@gmail.com"
            className="text-xs text-muted hover:text-accent transition-colors"
          >
            sebastianmerlopradas@gmail.com
          </Link>
        </div>
      </div>
    </footer>
  )
}
