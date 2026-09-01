import type { Metadata } from 'next'
import CourseHub from '@/components/CourseHub'
export const metadata: Metadata = { title: '국제학교 1:1 수업', description: '국제학교 영어·라이팅·인터뷰 준비. 목표별 학습 방향과 지역별 수업 선택 기준을 안내합니다.', alternates: { canonical: '/international-school' } }
export default function Page(){ return <CourseHub slug="international-school" /> }
