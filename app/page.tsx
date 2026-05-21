import Hero from '@/components/Hero'
import Metodo from '@/components/Metodo'
import Proceso from '@/components/Proceso'
import BlogPreview from '@/components/BlogPreview'
import SeoText from '@/components/SeoText'
import ContactSection from '@/components/ContactSection'
import { getAllPosts } from '@/lib/blog'

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3)

  return (
    <>
      <Hero />
      <Metodo />
      <Proceso />
      <BlogPreview posts={posts} />
      <SeoText />
      <ContactSection />
    </>
  )
}
