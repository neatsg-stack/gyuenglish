import type { Metadata } from 'next'
import CourseHub from '@/components/CourseHub'
export const metadata: Metadata = { title: '영어회화 1:1 수업', description: '성인·직장인·왕초보를 위한 목표별 1:1 회화. 목표별 학습 방향과 지역별 수업 선택 기준을 안내합니다.', alternates: { canonical: '/english-conversation' } }
export default function Page(){ return <CourseHub slug="english-conversation" /> }
