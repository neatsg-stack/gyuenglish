import Link from 'next/link'
import Image from 'next/image'
import { regions } from '@/data/regions'
import { courses } from '@/data/courses'

export default function Home() {
  return (
    <main>
      <section className="lead-hero">
        <div className="lead-hero-inner">
          <p className="eyebrow">1:1 ENGLISH · FREE LEVEL CHECK</p>
          <h1>영어를 오래 했는데도<br />막상 말하려면 막히나요?</h1>
          <p className="lead-copy">회화도 시험도 현재 막히는 지점부터 찾아야 합니다. 지금 수준과 목표를 먼저 확인하고 필요한 학습 순서를 안내합니다.</p>
          <div className="lead-actions">
            <a className="lead-primary" href="#trial">무료 시범수업 신청하기</a>
            <a className="lead-secondary" href="#consult">전화문의</a>
          </div>
          <div className="lead-proof"><span>1:1 수준 확인</span><span>목표별 학습 설계</span><span>화상·방문 상담</span></div>
        </div>
      </section>

      <section className="conversion-story">
        <div className="section-heading conversion-heading"><h2>혹시 이런 고민을 하고 있나요?</h2></div>
        <div className="pain-grid">
          <div className="pain-card"><strong>공부는 오래 했는데 말이 안 나와요</strong><p>아는 표현을 실제 상황에서 꺼내는 연습이 부족할 수 있습니다.</p></div>
          <div className="pain-card"><strong>시험은 급한데 어디서부터 해야 할지 모르겠어요</strong><p>목표 시험과 남은 기간에 따라 필요한 준비의 우선순위가 달라집니다.</p></div>
          <div className="pain-card"><strong>내 수준에 맞는 수업인지 걱정돼요</strong><p>같은 교재를 사용해도 현재 수준에 따라 시작점은 달라야 합니다.</p></div>
        </div>
      </section>

      <section className="conversion-image-stack home-conversion-visuals">
        <Image src="/images/conversion/02-cause.webp" alt="영어 공부를 오래 해도 변화가 적을 때 확인할 수 있는 학습 원인" width={1080} height={760} className="conversion-graphic" />
        <Image src="/images/conversion/03-method.webp" alt="현재 수준과 목표를 확인하고 학습 방향을 정하는 규잉글리시 수업 진행 과정" width={1080} height={830} className="conversion-graphic" />
      </section>

      <section className="conversion-story">
        <div className="section-heading conversion-heading"><h2>목표에 따라 필요한 준비가 달라집니다</h2><p>상단에서는 서비스를 많이 설명하기보다 내 목적에 맞는 수업이 있는지만 빠르게 확인할 수 있도록 구성했습니다.</p></div>
        <div className="grid course-home-grid home-service-grid">
          {courses.slice(0, 8).map((c) => <Link className="card course-card" href={`/${c.slug}`} key={c.slug}><strong>{c.name}</strong><span>{c.description}</span><em>확인하기 →</em></Link>)}
        </div>
      </section>

      <section id="trial" className="conversion-final">
        <div><p className="eyebrow">FREE TRIAL</p><h2>수업부터 결정하지 않아도 됩니다</h2><p>현재 수준과 목표를 먼저 확인한 뒤 필요한 방향을 안내받아보세요.</p></div>
        <a className="lead-primary" href="#consult">무료 시범수업 신청하기</a>
      </section>

      <div className="seo-tail">
        <section className="seo-intro-section">
          <p className="seo-section-label">영어 학습 정보</p>
          <h2>규잉글리시 1:1 영어수업 안내</h2>
          <p>영어회화, 오픽, 토익스피킹, IELTS, TOEFL, G-TELP, 영어 라이팅, 인터뷰, 국제학교와 유학 준비처럼 목적에 따라 필요한 연습은 달라집니다. 수업 횟수나 교재를 먼저 정하기보다 현재 가능한 수준과 목표 시점을 확인하고 직접 수행하는 시간과 피드백 구조를 비교하는 것이 중요합니다.</p>
        </section>

        <section className="soft-section">
          <div className="section-heading"><h2>목적별 영어수업</h2></div>
          <div className="grid course-home-grid">{courses.map((c) => <Link className="card course-card" href={`/${c.slug}`} key={c.slug}><strong>{c.name}</strong><span>{c.description}</span><em>학습 안내 →</em></Link>)}</div>
        </section>

        <section className="soft-section"><div className="section-heading"><h2>지역별 영어수업 안내</h2></div><div className="region-link-grid">{regions.map((r) => <Link className="mini-link" href={`/${r.slug}`} key={r.slug}>{r.name} 영어회화<span>→</span></Link>)}</div></section>

        <section className="prose-section"><h2>영어수업을 고를 때 먼저 확인할 점</h2><p>같은 영어수업이라도 직장인 회화와 오픽, IELTS Writing, 국제학교 인터뷰는 필요한 연습이 다릅니다. 영어를 오래 공부했더라도 실제 말하기·쓰기 수행에서 막히는 지점은 사람마다 다르므로 필요한 목적과 일정에 맞춰 우선순위를 정하는 것이 좋습니다.</p></section>

        <section id="consult" className="consult-anchor-panel"><h2>상담 및 시범수업 문의</h2><p>모바일에서는 화면 하단의 전화문의 또는 무료 시범수업 신청 버튼을 언제든 이용할 수 있습니다.</p></section>
      </div>
    </main>
  )
}
