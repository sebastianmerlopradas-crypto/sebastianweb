import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const POSTS_DIR = path.join(process.cwd(), 'content/blog')

export interface PostMeta {
  slug: string
  title: string
  date: string
  description: string
  category: string
  image?: string
  tags?: string[]
  readingTime: string
}

export interface Post extends PostMeta {
  content: string
}

function parseDate(dateStr: string): number {
  const value = new Date(dateStr).getTime()
  return Number.isNaN(value) ? 0 : value
}

function parseTags(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value
      .filter((tag): tag is string => typeof tag === 'string')
      .map((tag) => tag.trim())
      .filter(Boolean)
  }

  if (typeof value === 'string') {
    return value
      .split(',')
      .map((tag) => tag.trim())
      .filter(Boolean)
  }

  return []
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(POSTS_DIR)) return []

  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith('.mdx'))

  return files
    .map((fileName): PostMeta => {
      const slug = fileName.replace(/\.mdx$/, '')
      const raw = fs.readFileSync(path.join(POSTS_DIR, fileName), 'utf8')
      const { data, content } = matter(raw)
      const rt = readingTime(content)

      return {
        slug,
        title: data.title ?? slug,
        date: data.date ?? '',
        description: data.description ?? '',
        category: data.category ?? 'Sin categoría',
        image: typeof data.image === 'string' ? data.image : undefined,
        tags: parseTags(data.tags),
        readingTime: rt.text,
      }
    })
    .sort((a, b) => parseDate(b.date) - parseDate(a.date))
}

export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(raw)
  const rt = readingTime(content)

  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? '',
    description: data.description ?? '',
    category: data.category ?? 'Sin categoría',
    image: typeof data.image === 'string' ? data.image : undefined,
    tags: parseTags(data.tags),
    readingTime: rt.text,
    content,
  }
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return []
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''))
}
