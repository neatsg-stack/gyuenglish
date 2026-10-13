import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'
import { regions } from '@/data/regions'
import { regionContent } from '@/data/region-content'
import { courses } from '@/data/courses'
import { expandedLandingPages } from '@/data/landing-pages'
import { isLandingIndexable } from '@/data/landing-index'
import { parseLandingSlug } from '@/data/search-intents'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const fixed = ['', '/guide', '/guide/opic-ih', '/guide/toeic-speaking-150', '/guide/ielts-65', '/guide/ielts-writing', '/guide/toefl-writing', '/guide/gtelp-65', '/guide/beginner-english', '/guide/international-school-interview', '/guide/international-school-writing', '/guide/study-abroad-english', ...courses.map(c => `/${c.slug}`), '/ielts/writing', '/ielts/speaking', '/toefl/writing', '/toefl/speaking']

  const landing = expandedLandingPages().filter(page => {
    const { courseSlug } = parseLandingSlug(page.course)
    return isLandingIndexable(page.region, courseSlug)
  })

  return [
    ...fixed.map(p => ({ url: `${SITE_URL}${p}`, lastModified: now, changeFrequency: 'weekly' as const, priority: p === '' ? 1 : .8 })),
    ...regions.filter(r => Boolean(regionContent[r.slug])).map(r => ({ url: `${SITE_URL}/${r.slug}`, lastModified: now, changeFrequency: 'weekly' as const, priority: .8 })),
    ...landing.map(p => ({ url: `${SITE_URL}/${p.region}/${p.course}`, lastModified: now, changeFrequency: 'weekly' as const, priority: .7 }))
  ]
}
