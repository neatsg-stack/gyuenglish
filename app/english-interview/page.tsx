import type { Metadata } from 'next'
import CourseHub from '@/components/CourseHub'
export const metadata: Metadata = { title: '영어 인터뷰 1:1 수업', description: '취업·외국계·입학 영어면접 실전 대비. 목표별 학습 방향과 지역별 수업 선택 기준을 안내합니다.', alternates: { canonical: '/english-interview' } }
export default function Page(){ return <CourseHub slug="english-interview" /> }
