import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ParallaxBackground from '@/components/ParallaxBackground'

const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const BASE_URL = 'https://sebastianweb.es'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Sebastián Merlo Pradas — Diseñador Web Freelance',
    template: '%s | Sebastián Merlo Pradas',
  },
  description:
    'Diseñador y desarrollador web freelance. Creo páginas web a medida con código limpio, IA y criterio estético para negocios, autores, artistas y profesionales.',
  keywords: [
    'diseñador web freelance',
    'creador de páginas web',
    'desarrollo web a medida',
    'páginas web para negocios',
    'diseño web profesional',
    'Sebastián Merlo Pradas',
    'SMP',
    'web developer España',
  ],
  authors: [{ name: 'Sebastián Merlo Pradas', url: BASE_URL }],
  creator: 'Sebastián Merlo Pradas',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: BASE_URL,
    siteName: 'Sebastián Merlo Pradas',
    title: 'Sebastián Merlo Pradas — Diseñador Web Freelance',
    description:
      'Páginas web únicas, rápidas y con identidad propia. Trabajo con IA y código artesanal para crear webs que convierten visitas en clientes.',
  },
  twitter: {
    card: 'summary',
    title: 'Sebastián Merlo Pradas — Diseñador Web Freelance',
    description:
      'Páginas web únicas, rápidas y con identidad propia. Trabajo con IA y código artesanal.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#f7fbfc',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="grain min-h-screen flex flex-col">
        <ParallaxBackground />
        <Navbar />
        <main className="relative z-10 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
