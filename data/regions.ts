export type Region = {
  slug: string
  name: string
  province: string
  nearby: string[]
  focus: string[]
}

export const regions: Region[] = [
  {
    slug: 'suwon',
    name: '수원',
    province: '경기',
    nearby: ['yongin', 'hwaseong', 'anyang'],
    focus: ['영어회화', '오픽', '토익스피킹', '토익', '지텔프'],
  },
  {
    slug: 'bundang',
    name: '분당',
    province: '경기',
    nearby: ['seongnam', 'pangyo', 'yongin'],
    focus: ['영어회화', '아이엘츠', '토플', '영어라이팅', '유학영어'],
  },
  {
    slug: 'songdo',
    name: '송도',
    province: '인천',
    nearby: ['incheon', 'yeonsu', 'cheongna'],
    focus: ['영어회화', '아이엘츠', '토플', '국제학교', '유학영어'],
  },
]

export function getRegion(slug: string) {
  return regions.find((region) => region.slug === slug)
}
