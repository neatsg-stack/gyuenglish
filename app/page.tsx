import Link from 'next/link'
import { regions } from '@/data/regions'
import { courses } from '@/data/courses'

const painPoints = [
  ['공부는 했는데 말이 안 나와요', '아는 표현을 실제 상황에서 꺼내는 연습이 부족하면 오래 공부해도 말문이 막힐 수 있습니다.'],
  ['시험은 급한데 뭘 해야 할지 모르겠어요', '현재 수준과 목표 시점을 먼저 확인하면 필요한 파트부터 우선순위를 정할 수 있습니다.'],
  ['내 수준에 맞는 수업인지 걱정돼요', '수업을 시작하기 전 현재 수준을 확인하고 맞는 방식인지 먼저 비교해보세요.'],
]

export default function Home() {
  return (
    <main>
      <section className="lead-hero">
        <div className="lead-hero-inner">
          <p className="eyebrow">1:1 ENGLISH · FREE LEVEL CHECK</p>
          <h1>영어를 오래 했는데도<br />막상 말하려면 막히나요?</h1>
          <p className="lead-copy">회화든 시험이든, 먼저 지금 어디에서 막히는지 확인해야 수업 방향이 달라집니다. 현재 수준과 목표를 확인하고 맞는 학습 순서부터 안내해드립니다.</p>
          <div className="lead-actions">
            <a className="lead-primary" href="#trial">무료 시범수업 신청하기</a>
            <a className="lead-secondary" href="#consult">전화문의</a>
          </div>
          <div className="lead-proof"><span>1:1 수준 확인</span><span>목표별 학습 설계</span><span>화상·방문 상담</span></div>
        </div>
      </section>

      <section className="conversion-story">
        <div className="section-heading conversion-heading"><p className="eyebrow">DOES THIS SOUND FAMILIAR?</p><h2>이런 고민이라면 수업부터 정하지 않아도 됩니다</h2></div>
        <div className="pain-grid">{painPoints.map(([title, body]) => <div className="pain-card" key={title}><strong>{title}</strong><p>{body}</p></div>)}</div>
      </section>

      <section className="conversion-steps">
        <div className="section-heading conversion-heading"><p className="eyebrow">HOW IT STARTS</p><h2>먼저 확인하고, 맞는 방향을 정합니다</h2></div>
        <div className="step-strip"><div><b>01</b><strong>현재 수준 확인</strong></div><div><b>02</b><strong>목표·기간 확인</strong></div><div><b>03</b><strong>수업 방향 제안</strong></div></div>
      </section>

      <section id="trial" className="conversion-final">
        <div><p className="eyebrow">FREE TRIAL</p><h2>처음부터 결제하지 않아도 됩니다</h2><p>현재 수준과 목표를 먼저 확인한 뒤 어떤 수업이 필요한지 안내받아보세요.</p></div>
        <a className="lead-primary" href="#consult">무료 시범수업 신청하기</a>
      </section>

      <div className="seo-tail">
        <section>
          <div className="section-heading"><h2>목적별 영어수업 안내</h2><p>회화, 취업 시험, 유학·국제학교 준비처럼 목적에 따라 필요한 연습은 달라집니다.</p></div>
          <div className="grid course-home-grid">{courses.map((c) => <Link className="card course-card" href={`/${c.slug}`} key={c.slug}><strong>{c.name}</strong><span>{c.description}</span><em>학습 안내 →</em></Link>)}</div>
        </section>
        <section className="soft-section"><div className="section-heading"><h2>지역별 영어수업 안내</h2></div><div className="region-link-grid">{regions.map((r) => <Link className="mini-link" href={`/${r.slug}`} key={r.slug}>{r.name} 영어회화<span>→</span></Link>)}</div></section>
        <section className="prose-section"><h2>영어수업을 고를 때 먼저 확인할 점</h2><p>같은 영어수업이라도 직장인 회화와 오픽, IELTS Writing, 국제학교 인터뷰는 필요한 연습이 다릅니다. 수업 횟수나 교재를 먼저 정하기보다 현재 가능한 수준과 목표 시점을 확인하고, 직접 수행하는 시간과 피드백 구조를 비교하는 편이 효율적입니다.</p><p>영어를 오래 공부했더라도 실제 말하기·쓰기 수행에서 막히는 지점은 사람마다 다릅니다. 필요한 목적과 일정에 맞춰 우선순위를 정하면 학습 방향을 더 명확하게 잡을 수 있습니다.</p></section>
        <section id="consult" className="consult-anchor-panel"><h2>상담 및 시범수업 문의</h2><p>하단의 고정 버튼을 통해 언제든 전화문의 또는 무료 시범수업 신청으로 이동할 수 있습니다.</p></section>
      </div>
    </main>
  )
}
