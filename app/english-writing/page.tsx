import type { Metadata } from 'next'
import CourseHub from '@/components/CourseHub'
export const metadata: Metadata = { title: '영어 라이팅 1:1 수업', description: '에세이·아카데믹 라이팅·시험 라이팅 첨삭. 목표별 학습 방향과 지역별 수업 선택 기준을 안내합니다.', alternates: { canonical: '/english-writing' } }
export default function Page(){ return <CourseHub slug="english-writing" /> }
