import type { Metadata } from 'next'
import CourseHub from '@/components/CourseHub'
export const metadata: Metadata = { title: '오픽 1:1 수업', description: 'IM3·IH·AL 목표에 맞춘 발화와 답변 구조 훈련. 목표별 학습 방향과 지역별 수업 선택 기준을 안내합니다.', alternates: { canonical: '/opic' } }
export default function Page(){ return <CourseHub slug="opic" /> }
