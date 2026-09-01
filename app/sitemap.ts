import type { MetadataRoute } from 'next'
import { courses } from '@/data/courses'
import { landingContent } from '@/data/landing-content'
import { regions } from '@/data/regions'
import { SITE_URL } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const staticPages = ['', '/english-conversation', ...courses.map(c => `/${c.slug}`), '/guide']
  const regionPages = regions.map(r => `/${r.slug}`)
  const regionCoursePages = landingContent.map(p => `/${p.region}/${p.course}`)
  return [...staticPages, ...regionPages, ...regionCoursePages].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path.split('/').length <= 2 ? 0.8 : 0.7,
  }))
}
