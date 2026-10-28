import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '영어 학습 가이드',
  description: 'OPIc, TOEIC Speaking, IELTS, TOEFL iBT, G-TELP, 영어회화, 국제학교와 유학 준비에 필요한 영어 학습 정보를 안내합니다.',
  alternates: { canonical: '/guide' },
}

const guides = [
  ['OPIc IH', 'IH 목표를 위한 답변 구조, 돌발 질문, 녹음 점검 방법', '/guide/opic-ih'],
  ['TOEIC Speaking 150', '문항별 답변 구성과 제한 시간 안에 말하는 연습', '/guide/toeic-speaking-150'],
  ['IELTS 6.5', '네 영역의 현재 Band를 확인하고 우선순위를 정하는 방법', '/guide/ielts-65'],
  ['IELTS Writing', 'Task 1·2의 요구와 평가 기준을 이해하는 글쓰기 준비', '/guide/ielts-writing'],
  ['2026 TOEFL iBT Writing', '현재 Build a Sentence, Email, Academic Discussion 유형 정리', '/guide/toefl-writing'],
  ['G-TELP 65', '문법·청취·독해 및 어휘의 득점 우선순위 정하기', '/guide/gtelp-65'],
  ['왕초보 영어회화', '짧은 기본 문장에서 실제 대화까지 확장하는 방법', '/guide/beginner-english'],
  ['국제학교 면접', '자기소개와 지원 동기부터 후속 질문까지 준비하기', '/guide/international-school-interview'],
  ['국제학교 Writing', '문단과 Essay로 이어지는 Academic Writing 기초', '/guide/international-school-writing'],
  ['유학 전 영어', '시험 점수와 실제 학업 영어를 함께 준비하는 방법', '/guide/study-abroad-english'],
]

export default function Page() {
  return (
    <main className="guide-index-v2">
      <header className="guide-index-hero">
        <p className="eyebrow">GYU ENGLISH KNOWLEDGE</p>
        <h1>영어 공부의 방향을 잡는 데<br />필요한 내용을 정리했습니다.</h1>
        <p>시험 영어부터 영어회화·국제학교·유학까지 목표별로 먼저 확인할 학습 정보를 살펴보세요.</p>
      </header>

      <section className="guide-index-section">
        <div className="guide-index-grid">
          {guides.map(([title, description, href], index) => (
            <Link className="guide-index-card" href={href} key={href}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{title}</strong>
              <p>{description}</p>
              <em>가이드 보기 →</em>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
