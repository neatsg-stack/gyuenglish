export const landingPages = [
  { region: 'gangnam', course: 'opic' },
  { region: 'gangnam', course: 'ielts' },
  { region: 'gangnam', course: 'toefl' },
  { region: 'gangnam', course: 'english-interview' },
  { region: 'seocho', course: 'ielts' },
  { region: 'seocho', course: 'toefl' },
  { region: 'songpa', course: 'opic' },
  { region: 'songpa', course: 'international-school' },
  { region: 'bundang', course: 'ielts' },
  { region: 'bundang', course: 'toefl' },
  { region: 'bundang', course: 'english-writing' },
  { region: 'bundang', course: 'study-abroad' },
  { region: 'pangyo', course: 'english-conversation' },
  { region: 'pangyo', course: 'english-interview' },
  { region: 'suwon', course: 'opic' },
  { region: 'suwon', course: 'toeic-speaking' },
  { region: 'suwon', course: 'toeic' },
  { region: 'suwon', course: 'gtelp' },
  { region: 'yongin', course: 'international-school' },
  { region: 'yongin', course: 'toefl' },
  { region: 'yongin', course: 'study-abroad' },
  { region: 'dongtan', course: 'english-conversation' },
  { region: 'dongtan', course: 'opic' },
  { region: 'seongnam', course: 'opic' },
  { region: 'seongnam', course: 'toeic-speaking' },
  { region: 'anyang', course: 'opic' },
  { region: 'anyang', course: 'toeic-speaking' },
  { region: 'pyeongchon', course: 'ielts' },
  { region: 'pyeongchon', course: 'toefl' },
  { region: 'songdo', course: 'ielts' },
  { region: 'songdo', course: 'toefl' },
  { region: 'songdo', course: 'international-school' },
  { region: 'songdo', course: 'english-writing' },
  { region: 'songdo', course: 'study-abroad' },
  { region: 'cheongna', course: 'international-school' },
  { region: 'cheongna', course: 'toefl' },
  { region: 'incheon', course: 'opic' },
  { region: 'incheon', course: 'toeic-speaking' },
  { region: 'daejeon', course: 'opic' },
  { region: 'daejeon', course: 'toeic-speaking' },
  { region: 'daejeon', course: 'ielts' },
  { region: 'sejong', course: 'international-school' },
  { region: 'sejong', course: 'study-abroad' },
  { region: 'cheongju', course: 'opic' },
  { region: 'cheongju', course: 'toeic-speaking' },
  { region: 'cheongju', course: 'gtelp' },
  { region: 'cheongju', course: 'ielts' },
  { region: 'cheonan', course: 'opic' },
  { region: 'cheonan', course: 'toeic-speaking' },
  { region: 'cheonan', course: 'gtelp' },
  { region: 'busan', course: 'ielts' },
  { region: 'busan', course: 'toefl' },
  { region: 'busan', course: 'opic' },
  { region: 'daegu', course: 'opic' },
  { region: 'daegu', course: 'toeic-speaking' },
  { region: 'daegu', course: 'gtelp' },
] as const

export const intentCourses = ['english-conversation','opic','toeic-speaking','toeic','ielts','toefl','gtelp'] as const

export function isBaseLandingPage(region: string, course: string) { return landingPages.some((page) => page.region === region && page.course === course) }
export function isLandingPage(region: string, slug: string) {
  const base = slug.replace(/-(academy|tutoring)$/, '')
  if (!isBaseLandingPage(region, base)) return false
  if (slug === base) return true
  return intentCourses.includes(base as (typeof intentCourses)[number])
}
export function expandedLandingPages() {
  return landingPages.flatMap((page) => intentCourses.includes(page.course as (typeof intentCourses)[number])
    ? [page, {region:page.region, course:`${page.course}-academy`}, {region:page.region, course:`${page.course}-tutoring`}]
    : [page])
}

