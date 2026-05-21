'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/#metodo', label: 'Método' },
  { href: '/#proceso', label: 'Proceso' },
  { href: '/blog', label: 'Blog' },
  { href: '/#contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Cierra el menú al cambiar de ruta
  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-bg/90 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-display text-2xl text-text hover:text-accent transition-colors duration-300 tracking-wider"
          aria-label="Inicio — Sebastián Merlo Pradas"
        >
          SMP
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-sm tracking-wide transition-colors duration-200 ${
                  pathname === href || (href === '/blog' && pathname.startsWith('/blog'))
                    ? 'text-accent'
                    : 'text-muted hover:text-text'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA desktop */}
        <Link
          href="/#contacto"
          className="hidden md:inline-flex btn-primary text-sm"
        >
          Inicia tu proyecto
        </Link>

        {/* Hamburger mobile */}
        <button
          className="md:hidden w-8 h-8 flex flex-col justify-center gap-1.5 group"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          <span className={`block h-px bg-text transition-all duration-300 ${open ? 'rotate-45 translate-y-2.5' : ''}`} />
          <span className={`block h-px bg-text transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-px bg-text transition-all duration-300 ${open ? '-rotate-45 -translate-y-2.5' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          open ? 'max-h-96 bg-bg/95 backdrop-blur-md border-b border-border' : 'max-h-0'
        }`}
      >
        <ul className="px-6 pb-6 pt-2 flex flex-col gap-4">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="block text-base text-muted hover:text-text transition-colors py-1"
              >
                {label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <Link href="/#contacto" className="btn-primary w-full justify-center">
              Inicia tu proyecto
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
