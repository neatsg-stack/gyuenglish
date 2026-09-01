import type { Metadata } from 'next'
import CourseHub from '@/components/CourseHub'
export const metadata: Metadata = { title: '토익 1:1 수업', description: '기초부터 목표 점수까지 LC·RC 학습 설계. 목표별 학습 방향과 지역별 수업 선택 기준을 안내합니다.', alternates: { canonical: '/toeic' } }
export default function Page(){ return <CourseHub slug="toeic" /> }
