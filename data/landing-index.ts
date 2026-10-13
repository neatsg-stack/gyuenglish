import { isRegionIndexable } from './region-priority'

// V12 이전부터 개별 검토되어 색인되던 비영어회화 랜딩입니다.
// V13에서 대량 생성한 과정 페이지는 URL/내부링크는 열어두되, 고유 콘텐츠 검토 전까지 noindex로 유지합니다.
const CURATED_INDEXABLE = new Set([
  'anyang/opic',
  'anyang/toeic-speaking',
  'bundang/english-writing',
  'bundang/ielts',
  'bundang/study-abroad',
  'bundang/toefl',
  'busan/ielts',
  'busan/opic',
  'busan/toefl',
  'cheonan/gtelp',
  'cheonan/opic',
  'cheonan/toeic-speaking',
  'cheongju/gtelp',
  'cheongju/ielts',
  'cheongju/opic',
  'cheongju/toeic-speaking',
  'cheongna/international-school',
  'cheongna/toefl',
  'daegu/gtelp',
  'daegu/opic',
  'daegu/toeic-speaking',
  'daejeon/ielts',
  'daejeon/opic',
  'daejeon/toeic-speaking',
  'dongtan/opic',
  'gangnam/english-interview',
  'gangnam/ielts',
  'gangnam/opic',
  'gangnam/toefl',
  'incheon/opic',
  'incheon/toeic-speaking',
  'pangyo/english-interview',
  'pyeongchon/ielts',
  'pyeongchon/toefl',
  'sejong/international-school',
  'sejong/study-abroad',
  'seocho/ielts',
  'seocho/toefl',
  'seongnam/opic',
  'seongnam/toeic-speaking',
  'songdo/english-writing',
  'songdo/ielts',
  'songdo/international-school',
  'songdo/study-abroad',
  'songdo/toefl',
  'songpa/international-school',
  'songpa/opic',
  'suwon/gtelp',
  'suwon/opic',
  'suwon/toeic',
  'suwon/toeic-speaking',
  'yongin/international-school',
  'yongin/study-abroad',
  'yongin/toefl',
])

export function isLandingIndexable(region:string, course:string) {
  if (course === 'english-conversation') return isRegionIndexable(region)
  return CURATED_INDEXABLE.has(`${region}/${course}`)
}

export function isCuratedCourseLanding(region:string, course:string) {
  return CURATED_INDEXABLE.has(`${region}/${course}`)
}
