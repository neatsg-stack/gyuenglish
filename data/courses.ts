export type Course = { slug: string; name: string; description: string }

export const courses: Course[] = [
  { slug: 'english-conversation', name: '영어회화', description: '성인·직장인·왕초보를 위한 목표별 1:1 회화' },
  { slug: 'opic', name: '오픽', description: 'IM3·IH·AL 목표에 맞춘 발화와 답변 구조 훈련' },
  { slug: 'toeic-speaking', name: '토익스피킹', description: '목표 점수에 맞춘 발화 연습과 답변 구조 훈련' },
  { slug: 'toeic', name: '토익', description: '기초부터 목표 점수까지 LC·RC 학습 설계' },
  { slug: 'ielts', name: '아이엘츠', description: 'IELTS Speaking·Writing을 포함한 목표 점수 대비' },
  { slug: 'toefl', name: '토플', description: 'TOEFL Speaking·Writing 중심의 시험 대비' },
  { slug: 'gtelp', name: '지텔프', description: 'G-TELP 레벨2와 목표 점수별 맞춤 대비' },
  { slug: 'english-writing', name: '영어 라이팅', description: '에세이·아카데믹 라이팅·시험 라이팅 첨삭' },
  { slug: 'english-interview', name: '영어 인터뷰', description: '취업·외국계·입학 영어면접 실전 대비' },
  { slug: 'international-school', name: '국제학교', description: '국제학교 영어·라이팅·인터뷰 준비' },
  { slug: 'study-abroad', name: '유학영어', description: '출국 전 회화·라이팅·인터뷰 및 유학 준비 영어' },
]

export function getCourse(slug: string) { return courses.find((course) => course.slug === slug) }
