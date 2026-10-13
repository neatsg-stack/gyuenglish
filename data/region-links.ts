import { regions, getRegion } from './regions'
import { getRegionPriority } from './region-priority'

export type RegionLink = { href: string; label: string }

export function getParentRegionLinks(slug: string): RegionLink[] {
  const region = getRegion(slug)
  if (!region) return []
  const direct = region.nearby
    .map(getRegion)
    .filter((item): item is NonNullable<ReturnType<typeof getRegion>> => Boolean(item))
  return direct.slice(0, 4).map(item => ({ href: `/${item.slug}/english-conversation`, label: `${item.name} 영어회화` }))
}

export function getChildRegionLinks(slug: string): RegionLink[] {
  return regions
    .filter(item => item.nearby.includes(slug))
    .sort((a, b) => {
      const rank = { core: 0, growth: 1, longtail: 2 }
      return rank[getRegionPriority(a.slug)] - rank[getRegionPriority(b.slug)]
    })
    .slice(0, 8)
    .map(item => ({ href: `/${item.slug}/english-conversation`, label: `${item.name} 영어회화` }))
}

export function getSameProvinceLinks(slug: string): RegionLink[] {
  const region = getRegion(slug)
  if (!region) return []
  return regions
    .filter(item => item.slug !== slug && item.province === region.province && getRegionPriority(item.slug) === 'core')
    .slice(0, 6)
    .map(item => ({ href: `/${item.slug}/english-conversation`, label: `${item.name} 영어회화` }))
}

export function getRegionalEnglishLinks(slug: string): RegionLink[] {
  const seen = new Set<string>()
  return [...getParentRegionLinks(slug), ...getChildRegionLinks(slug), ...getSameProvinceLinks(slug)]
    .filter(item => {
      if (seen.has(item.href)) return false
      seen.add(item.href)
      return true
    })
    .slice(0, 10)
}
