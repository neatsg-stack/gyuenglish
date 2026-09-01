import type { Metadata } from 'next'
import CourseHub from '@/components/CourseHub'
export const metadata: Metadata = { title: '아이엘츠 1:1 수업', description: 'IELTS Speaking·Writing을 포함한 목표 점수 대비. 목표별 학습 방향과 지역별 수업 선택 기준을 안내합니다.', alternates: { canonical: '/ielts' } }
export default function Page(){ return <CourseHub slug="ielts" /> }
