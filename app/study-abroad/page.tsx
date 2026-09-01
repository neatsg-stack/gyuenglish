import type { Metadata } from 'next'
import CourseHub from '@/components/CourseHub'
export const metadata: Metadata = { title: '유학영어 1:1 수업', description: '출국 전 회화·라이팅·인터뷰 및 유학 준비 영어. 목표별 학습 방향과 지역별 수업 선택 기준을 안내합니다.', alternates: { canonical: '/study-abroad' } }
export default function Page(){ return <CourseHub slug="study-abroad" /> }
