import Link from 'next/link'
import { landingPages } from '@/data/landing-pages'
import { getRegion } from '@/data/regions'
import { getCourse } from '@/data/courses'

export default function CourseHub({ slug }: { slug: string }) {
  const course = getCourse(slug)!
  const pages = landingPages.filter((p) => p.course === slug).map((p) => getRegion(p.region)).filter(Boolean)

  return (
    <main>
      <div className="conversion-zone course-hub-conversion">
        <section className="hero compact conversion-hero">
          <p className="eyebrow">1:1 ENGLISH · {course.name.toUpperCase()}</p>
          <h1>{course.name} 1:1 수업,<br />목표와 현재 수준부터 확인하세요</h1>
          <p>{course.description}. 수업 형태보다 현재 수준, 목표 시점, 직접 연습하는 시간과 피드백 방식을 먼저 비교하는 것이 좋습니다.</p>
          <div className="hero-links primary-actions"><a href="#learning-guide">준비 기준 보기</a><Link href="/#trial">무료 시범수업 안내</Link></div>
        </section>

        <section id="learning-guide" className="quick-fit-section">
          <div className="section-heading compact-heading"><p className="eyebrow">QUICK CHECK</p><h2>{course.name}을 준비할 때 먼저 볼 것</h2></div>
          <div className="metric-card-grid three-metrics">
            <div className="metric-card"><span>01</span><strong>현재 수준</strong><p>실제로 말하거나 쓰는 수행 수준을 확인합니다.</p></div>
            <div className="metric-card"><span>02</span><strong>목표와 기간</strong><p>결과 기준과 필요한 시점을 구체적으로 정합니다.</p></div>
            <div className="metric-card"><span>03</span><strong>연습과 피드백</strong><p>직접 수행하고 수정 후 다시 시도하는 시간을 봅니다.</p></div>
          </div>
        </section>

        <section className="conversion-panel">
          <div><p className="eyebrow">FREE TRIAL</p><h2>내 목표에 필요한 학습 순서를 먼저 정해보세요</h2><p>현재 수준을 확인하면 무엇을 먼저 보완해야 하는지 더 구체적으로 정할 수 있습니다.</p></div>
          <Link className="primary-button" href="/#trial">무료 시범수업 신청하기</Link>
        </section>
      </div>

      <div className="seo-zone">
        <section className="seo-reading-section">
          <div className="section-heading"><p className="eyebrow">SEO GUIDE</p><h2>{course.name} 수업을 비교할 때 중요한 기준</h2></div>
          <p>같은 과목이라도 시작점과 목표 시점이 다르면 필요한 학습 순서는 달라집니다. 단순히 유명한 교재나 수업 횟수만 비교하기보다 실제 수행 수준, 목표, 과제량, 피드백 방식이 맞는지 확인하는 편이 좋습니다.</p>
          <p>특히 말하기와 쓰기가 포함된 과정은 설명을 듣는 시간보다 직접 수행하는 시간이 중요합니다. 답변하거나 작성한 결과를 피드백받고 다시 시도하는 과정이 반복되어야 실제 변화로 연결되기 쉽습니다.</p>
        </section>

        {pages.length > 0 && (
          <section className="soft-section seo-block">
            <div className="section-heading"><p className="eyebrow">REGION</p><h2>지역별 {course.name} 학습 안내</h2></div>
            <div className="region-link-grid">{pages.map((r) => <Link className="mini-link" href={`/${r!.slug}/${slug}`} key={r!.slug}>{r!.name} {course.name}<span>→</span></Link>)}</div>
          </section>
        )}

        <section className="cta-box final-cta"><h2>목표에 맞는 학습 순서를 정해보세요</h2><p>현재 수준과 영어가 필요한 목적을 확인한 뒤 필요한 영역부터 준비하는 것이 효율적입니다.</p><Link className="primary-button" href="/#trial">무료 시범수업 신청하기</Link></section>
      </div>
    </main>
  )
}
