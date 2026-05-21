'use client'

import { type FormEvent, useState } from 'react'

interface PostForm {
  title: string
  slug: string
  category: string
  description: string
  image: string
  tags: string
  date: string
  content: string
}

const initialForm: PostForm = {
  title: '',
  slug: '',
  category: 'Noticias',
  description: '',
  image: '',
  tags: '',
  date: new Date().toISOString().slice(0, 10),
  content: '',
}

export default function AdminPage() {
  const [password, setPassword] = useState('')
  const [authenticated, setAuthenticated] = useState(false)
  const [form, setForm] = useState<PostForm>(initialForm)
  const [status, setStatus] = useState<{ type: 'idle' | 'success' | 'error'; message: string }>({
    type: 'idle',
    message: '',
  })
  const [loading, setLoading] = useState(false)

  const handleAuth = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)
    setStatus({ type: 'idle', message: '' })

    try {
      const response = await fetch('/api/admin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'auth', password }),
      })

      const result = await response.json()
      if (!response.ok || !result.ok) {
        throw new Error(result.error || 'Contraseña incorrecta')
      }

      setAuthenticated(true)
      setStatus({ type: 'success', message: 'Acceso concedido. Ya puedes crear contenido.' })
    } catch (error) {
      setStatus({ type: 'error', message: error instanceof Error ? error.message : 'Error de autenticación' })
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)
    setStatus({ type: 'idle', message: '' })

    try {
      const response = await fetch('/api/admin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'create',
          password,
          ...form,
        }),
      })

      const result = await response.json()
      if (!response.ok || !result.ok) {
        throw new Error(result.error || 'No se pudo crear el artículo')
      }

      setStatus({ type: 'success', message: `Artículo publicado correctamente. Ruta: /blog/${result.slug}` })
      setForm({ ...initialForm, date: form.date })
    } catch (error) {
      setStatus({ type: 'error', message: error instanceof Error ? error.message : 'Error al guardar el artículo' })
    } finally {
      setLoading(false)
    }
  }

  const updateField = (field: keyof PostForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section className="pt-32 pb-24 min-h-screen bg-bg">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16">
          <p className="section-label mb-4">Panel Admin</p>
          <h1 className="heading-lg max-w-3xl text-balance">
            Publica noticias, proyectos y artículos sin tocar el código.
          </h1>
          <p className="body-lg mt-6 max-w-2xl">
            Usa este panel seguro para crear el contenido de tu blog. Añade título, descripción, imagen, etiquetas y texto optimizado para SEO.
          </p>
        </div>

        {!authenticated ? (
          <form onSubmit={handleAuth} className="glass-panel p-8 space-y-6">
            <div>
              <label htmlFor="admin-password" className="block text-sm font-medium text-text mb-2">
                Contraseña de administrador
              </label>
              <input
                id="admin-password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="w-full rounded-3xl border border-white/10 bg-white/5 px-5 py-3 text-text outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                placeholder="Escribe tu clave segura"
              />
            </div>
            <button type="submit" className="btn-primary w-full" disabled={loading}>
              {loading ? 'Validando...' : 'Acceder al admin'}
            </button>
            {status.message ? (
              <p className={`text-sm ${status.type === 'error' ? 'text-red-400' : 'text-green-300'}`}>
                {status.message}
              </p>
            ) : null}
          </form>
        ) : (
          <form onSubmit={handleSubmit} className="glass-panel p-8 space-y-8">
            <div className="grid gap-6 md:grid-cols-2">
              <label className="space-y-2 text-sm text-text">
                <span>Título</span>
                <input
                  type="text"
                  value={form.title}
                  onChange={(event) => updateField('title', event.target.value)}
                  required
                  className="w-full rounded-3xl border border-white/10 bg-white/5 px-5 py-3 text-text outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                />
              </label>
              <label className="space-y-2 text-sm text-text">
                <span>Slug</span>
                <input
                  type="text"
                  value={form.slug}
                  onChange={(event) => updateField('slug', event.target.value)}
                  placeholder="mi-articulo-importante"
                  className="w-full rounded-3xl border border-white/10 bg-white/5 px-5 py-3 text-text outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                />
              </label>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <label className="space-y-2 text-sm text-text">
                <span>Categoría</span>
                <input
                  type="text"
                  value={form.category}
                  onChange={(event) => updateField('category', event.target.value)}
                  className="w-full rounded-3xl border border-white/10 bg-white/5 px-5 py-3 text-text outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                />
              </label>
              <label className="space-y-2 text-sm text-text">
                <span>Fecha</span>
                <input
                  type="date"
                  value={form.date}
                  onChange={(event) => updateField('date', event.target.value)}
                  className="w-full rounded-3xl border border-white/10 bg-white/5 px-5 py-3 text-text outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                />
              </label>
            </div>

            <label className="space-y-2 text-sm text-text">
              <span>Descripción breve</span>
              <textarea
                value={form.description}
                onChange={(event) => updateField('description', event.target.value)}
                rows={3}
                required
                className="w-full rounded-3xl border border-white/10 bg-white/5 px-5 py-3 text-text outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                placeholder="Este texto aparecerá en la lista de artículos y en los motores de búsqueda."
              />
            </label>

            <label className="space-y-2 text-sm text-text">
              <span>URL de imagen</span>
              <input
                type="url"
                value={form.image}
                onChange={(event) => updateField('image', event.target.value)}
                placeholder="https://.../imagen.jpg"
                className="w-full rounded-3xl border border-white/10 bg-white/5 px-5 py-3 text-text outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
              />
            </label>

            <div className="grid gap-6 md:grid-cols-2">
              <label className="space-y-2 text-sm text-text">
                <span>Etiquetas (SEO)</span>
                <input
                  type="text"
                  value={form.tags}
                  onChange={(event) => updateField('tags', event.target.value)}
                  placeholder="SEO, diseño web, negocio digital"
                  className="w-full rounded-3xl border border-white/10 bg-white/5 px-5 py-3 text-text outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                />
              </label>
              <label className="space-y-2 text-sm text-text">
                <span>Texto del artículo</span>
                <span className="text-xs text-muted">Markdown simple admitido.</span>
              </label>
            </div>

            <label className="space-y-2 text-sm text-text">
              <span>Contenido completo</span>
              <textarea
                value={form.content}
                onChange={(event) => updateField('content', event.target.value)}
                rows={12}
                required
                className="w-full rounded-3xl border border-white/10 bg-white/5 px-5 py-3 text-text outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                placeholder="Escribe aquí tu artículo. Puedes usar títulos con #, listas, enlaces y estilo básico."
              />
            </label>

            <button type="submit" className="btn-primary w-full" disabled={loading}>
              {loading ? 'Publicando...' : 'Publicar artículo'}
            </button>

            {status.message ? (
              <p className={`text-sm ${status.type === 'error' ? 'text-red-400' : 'text-green-300'}`}>
                {status.message}
              </p>
            ) : null}
          </form>
        )}
      </div>
    </section>
  )
}
