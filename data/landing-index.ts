import { isRegionIndexable } from './region-priority'
import { getRegion } from './regions'
import { getCourse } from './courses'

// V12 이전부터 개별 검토되어 색인되던 비영어회화 랜딩.
const CURATED_INDEXABLE = new Set([
  'anyang/opic','anyang/toeic-speaking','bundang/english-writing','bundang/ielts','bundang/study-abroad','bundang/toefl',
  'busan/ielts','busan/opic','busan/toefl','cheonan/gtelp','cheonan/opic','cheonan/toeic-speaking','cheongju/gtelp','cheongju/ielts',
  'cheongju/opic','cheongju/toeic-speaking','cheongna/international-school','cheongna/toefl','daegu/gtelp','daegu/opic','daegu/toeic-speaking',
  'daejeon/ielts','daejeon/opic','daejeon/toeic-speaking','dongtan/opic','gangnam/english-interview','gangnam/ielts','gangnam/opic','gangnam/toefl',
  'incheon/opic','incheon/toeic-speaking','pangyo/english-interview','pyeongchon/ielts','pyeongchon/toefl','sejong/international-school',
  'sejong/study-abroad','seocho/ielts','seocho/toefl','seongnam/opic','seongnam/toeic-speaking','songdo/english-writing','songdo/ielts',
  'songdo/international-school','songdo/study-abroad','songdo/toefl','songpa/international-school','songpa/opic','suwon/gtelp','suwon/opic',
  'suwon/toeic','suwon/toeic-speaking','yongin/international-school','yongin/study-abroad','yongin/toefl'
])

// V14: Core 지역 중 regions.ts의 focus와 과정이 실제로 일치하는 페이지만 2차 승격.
// 단순히 Core × 모든 과정으로 색인하지 않는다.
const FOCUS_ALIASES: Record<string,string[]> = {
  opic:['오픽'],
  'toeic-speaking':['토익스피킹'],
  toeic:['토익'],
  ielts:['아이엘츠'],
  toefl:['토플'],
  gtelp:['지텔프'],
  'english-writing':['영어 라이팅','영어라이팅'],
  'english-interview':['영어 인터뷰','영어인터뷰'],
  'international-school':['국제학교'],
  'study-abroad':['유학영어']
}

export function isFocusPromotedLanding(regionSlug:string, courseSlug:string) {
  if (!isRegionIndexable(regionSlug)) return false
  const region=getRegion(regionSlug); const course=getCourse(courseSlug)
  if (!region || !course || courseSlug==='english-conversation') return false
  const aliases=FOCUS_ALIASES[courseSlug] || [course.name]
  return region.focus.some(item=>aliases.includes(item))
}

export function isLandingIndexable(region:string, course:string) {
  if (course === 'english-conversation') return isRegionIndexable(region)
  return CURATED_INDEXABLE.has(`${region}/${course}`) || isFocusPromotedLanding(region,course)
}

export function isCuratedCourseLanding(region:string, course:string) {
  return CURATED_INDEXABLE.has(`${region}/${course}`)
}
