import type { Metadata } from 'next'
import CourseHub from '@/components/CourseHub'
export const metadata: Metadata = { title: '토익스피킹 1:1 수업', description: '목표 점수에 맞춘 발화 연습과 답변 구조 훈련. 목표별 학습 방향과 지역별 수업 선택 기준을 안내합니다.', alternates: { canonical: '/toeic-speaking' } }
export default function Page(){ return <CourseHub slug="toeic-speaking" /> }
