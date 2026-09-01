import type { Metadata } from 'next'
import CourseHub from '@/components/CourseHub'
export const metadata: Metadata = { title: '토플 1:1 수업', description: 'TOEFL Speaking·Writing 중심의 시험 대비. 목표별 학습 방향과 지역별 수업 선택 기준을 안내합니다.', alternates: { canonical: '/toefl' } }
export default function Page(){ return <CourseHub slug="toefl" /> }
