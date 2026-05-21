import fs from 'fs'
import path from 'path'
import { NextResponse } from 'next/server'

const POSTS_DIR = path.join(process.cwd(), 'content/blog')
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD

function normalizeSlug(value: string) {
  return value
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-')
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, '')
    .replace(/--+/g, '-')
    .replace(/^-|-$/g, '')
}

function escapeYaml(value: string) {
  return value.replace(/"/g, '\\"')
}

function parseTags(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value.filter((tag): tag is string => typeof tag === 'string').map((tag) => tag.trim()).filter(Boolean)
  }
  if (typeof value === 'string') {
    return value.split(',').map((tag) => tag.trim()).filter(Boolean)
  }
  return []
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}))

  if (!ADMIN_PASSWORD) {
    return NextResponse.json(
      { ok: false, error: 'ADMIN_PASSWORD no está configurada en el entorno.' },
      { status: 500 },
    )
  }

  const { action, password } = body || {}

  if (password !== ADMIN_PASSWORD) {
    return NextResponse.json(
      { ok: false, error: 'Contraseña incorrecta.' },
      { status: 401 },
    )
  }

  if (action === 'auth') {
    return NextResponse.json({ ok: true })
  }

  if (action !== 'create') {
    return NextResponse.json(
      { ok: false, error: 'Acción no válida.' },
      { status: 400 },
    )
  }

  const title = String(body.title || '').trim()
  const description = String(body.description || '').trim()
  const content = String(body.content || '').trim()
  const rawSlug = String(body.slug || title || '').trim()
  const category = String(body.category || 'Noticias').trim() || 'Noticias'
  const image = String(body.image || '').trim()
  const tags = parseTags(body.tags)
  const date = String(body.date || new Date().toISOString().slice(0, 10)).trim()

  if (!title || !description || !content) {
    return NextResponse.json(
      { ok: false, error: 'Debes completar título, descripción y contenido.' },
      { status: 400 },
    )
  }

  const slug = normalizeSlug(rawSlug)
  if (!slug) {
    return NextResponse.json(
      { ok: false, error: 'El slug no es válido. Usa letras, números y guiones.' },
      { status: 400 },
    )
  }

  if (!fs.existsSync(POSTS_DIR)) {
    fs.mkdirSync(POSTS_DIR, { recursive: true })
  }

  const tagsLine = tags.length
    ? `tags: [${tags.map((tag) => `"${escapeYaml(tag)}"`).join(', ')}]`
    : ''

  const frontmatter = [
    '---',
    `title: "${escapeYaml(title)}"`,
    `description: "${escapeYaml(description)}"`,
    `category: "${escapeYaml(category)}"`,
    `date: "${escapeYaml(date)}"`,
    image ? `image: "${escapeYaml(image)}"` : '',
    tagsLine,
    '---',
    '',
    content.trim(),
    '',
  ]
    .filter(Boolean)
    .join('\n')

  const filePath = path.join(POSTS_DIR, `${slug}.mdx`)
  fs.writeFileSync(filePath, frontmatter, 'utf8')

  return NextResponse.json({ ok: true, slug })
}
