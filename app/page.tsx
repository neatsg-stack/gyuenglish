import Link from 'next/link'
import { regions } from '@/data/regions'
import { courses } from '@/data/courses'

const goals = [
  { title: '말하기가 막혀요', body: '왕초보·성인·직장인 회화', href: '/english-conversation' },
  { title: '취업 점수가 필요해요', body: '오픽·토익스피킹·지텔프', href: '/opic' },
  { title: '유학을 준비해요', body: 'IELTS·TOEFL·라이팅', href: '/ielts' },
  { title: '학교·면접을 준비해요', body: '국제학교·영어인터뷰', href: '/international-school' },
]

export default function Home() {
  return (
    <main>
      <div className="conversion-zone home-conversion">
        <section className="hero home-hero">
          <p className="eyebrow">1:1 ENGLISH · LEVEL CHECK</p>
          <h1>영어가 필요한 이유부터<br />수업 방향을 정합니다</h1>
          <p>회화, 취업 시험, IELTS·TOEFL, 국제학교·유학 준비까지. 목표와 현재 수준이 다르면 필요한 연습도 달라져야 합니다.</p>
          <div className="hero-links primary-actions">
            <a href="#quick-goals">내 목표 먼저 찾기</a>
            <a href="#trial">무료 시범수업 안내</a>
          </div>
        </section>

        <section id="quick-goals" className="quick-goal-section">
          <div className="section-heading compact-heading">
            <p className="eyebrow">QUICK START</p>
            <h2>지금 가장 가까운 고민을 골라보세요</h2>
          </div>
          <div className="quick-goal-grid">
            {goals.map((goal) => (
              <Link className="quick-goal-card" href={goal.href} key={goal.title}>
                <strong>{goal.title}</strong>
                <span>{goal.body}</span>
                <em>맞는 수업 보기 →</em>
              </Link>
            ))}
          </div>
        </section>

        <section id="trial" className="conversion-panel">
          <div>
            <p className="eyebrow">FREE TRIAL</p>
            <h2>수업을 정하기 전에 현재 수준부터 확인하세요</h2>
            <p>목표, 가능한 시간, 현재 영어 수준을 확인한 뒤 어떤 순서로 준비할지 안내받을 수 있습니다.</p>
          </div>
          <a className="primary-button" href="#consult">무료 시범수업 신청하기</a>
        </section>
      </div>

      <div className="seo-zone">
        <section id="courses">
          <div className="section-heading">
            <p className="eyebrow">COURSES</p>
            <h2>목적별 영어수업</h2>
            <p>검색한 과목 이름보다 실제 목표와 필요한 수행 능력을 기준으로 비교해보세요.</p>
          </div>
          <div className="grid course-home-grid">
            {courses.map((c) => (
              <Link className="card course-card" href={`/${c.slug}`} key={c.slug}>
                <strong>{c.name}</strong><span>{c.description}</span><em>학습 안내 →</em>
              </Link>
            ))}
          </div>
        </section>

        <section id="regions" className="soft-section">
          <div className="section-heading">
            <p className="eyebrow">REGIONS</p>
            <h2>지역별 영어수업</h2>
            <p>지역 대표 페이지에서 생활권과 목적별 영어수업 정보를 함께 확인할 수 있습니다.</p>
          </div>
          <div className="region-link-grid">
            {regions.map((r) => <Link className="mini-link" href={`/${r.slug}`} key={r.slug}>{r.name} 영어회화<span>→</span></Link>)}
          </div>
        </section>

        <section className="prose-section seo-reading-section">
          <p className="eyebrow">ENGLISH GUIDE</p>
          <h2>지역보다 먼저, 영어가 필요한 목적을 확인하세요</h2>
          <p>같은 영어수업이라도 직장인 회화와 오픽, IELTS Writing, 국제학교 인터뷰는 필요한 연습이 다릅니다. 지역 페이지와 과목 페이지를 연결해 자신의 목표에 맞는 정보를 빠르게 찾을 수 있도록 구성했습니다.</p>
          <p>영어를 오래 공부했더라도 실제 말하기·쓰기 수행에서 막히는 지점은 사람마다 다릅니다. 따라서 수업 횟수나 교재를 먼저 정하기보다 현재 가능한 수준과 목표 시점을 확인하고, 직접 수행하는 시간과 피드백 구조를 비교하는 편이 효율적입니다.</p>
        </section>

        <section id="consult" className="consult-anchor-panel">
          <p className="eyebrow">CONSULT</p>
          <h2>어떤 과정이 맞는지부터 확인해도 됩니다</h2>
          <p>전화번호 연결 전에는 이 영역으로 이동합니다. 실제 상담 전화번호를 연결하면 하단의 ‘전화문의’ 버튼을 누르는 즉시 전화 앱이 열리도록 설정할 수 있습니다.</p>
        </section>
      </div>
    </main>
  )
}
