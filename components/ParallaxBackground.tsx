'use client'

import { useEffect, useRef } from 'react'

export default function ParallaxBackground() {
  const sceneRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scene = sceneRef.current
    if (!scene) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (prefersReducedMotion.matches) return

    let frame = 0

    const updateParallax = () => {
      frame = 0
      const scrollY = window.scrollY

      scene.style.setProperty('--parallax-slow', `${scrollY * -0.045}px`)
      scene.style.setProperty('--parallax-medium', `${scrollY * -0.085}px`)
      scene.style.setProperty('--parallax-fast', `${scrollY * -0.14}px`)
    }

    const requestUpdate = () => {
      if (frame) return
      frame = window.requestAnimationFrame(updateParallax)
    }

    updateParallax()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)

    return () => {
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div ref={sceneRef} className="parallax-scene" aria-hidden="true">
      <div className="parallax-layer parallax-layer--wash" />
      <div className="parallax-layer parallax-layer--sun" />
      <div className="parallax-layer parallax-layer--waves" />
      <div className="parallax-layer parallax-layer--shimmer" />
      <div className="parallax-greeting">Sebastianweb os desea un feliz verano</div>
      <div className="parallax-bubble parallax-bubble--one" />
      <div className="parallax-bubble parallax-bubble--two" />
      <div className="parallax-bubble parallax-bubble--three" />
    </div>
  )
}
