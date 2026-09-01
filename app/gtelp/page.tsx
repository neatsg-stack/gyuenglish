import type { Metadata } from 'next'
import CourseHub from '@/components/CourseHub'
export const metadata: Metadata = { title: '지텔프 1:1 수업', description: 'G-TELP 레벨2와 목표 점수별 맞춤 대비. 목표별 학습 방향과 지역별 수업 선택 기준을 안내합니다.', alternates: { canonical: '/gtelp' } }
export default function Page(){ return <CourseHub slug="gtelp" /> }
