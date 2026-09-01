import type { Metadata } from 'next'
export const metadata: Metadata = { title: '영어 학습 가이드', description: '오픽, 토익스피킹, IELTS, TOEFL, G-TELP, 영어라이팅과 인터뷰 준비에 도움이 되는 영어 학습 가이드입니다.', alternates: { canonical: '/guide' } }
export default function GuidePage(){return <main><header className="hero compact"><h1>영어 학습 가이드</h1><p>검색 의도가 분명한 정보성 콘텐츠를 축적하는 허브입니다.</p></header></main>}
