import Link from 'next/link'
import { landingPages } from '@/data/landing-pages'
import { getRegion } from '@/data/regions'
import { getCourse } from '@/data/courses'

export default function CourseHub({ slug }: { slug: string }) {
  const course = getCourse(slug)!
  const pages = landingPages.filter((p) => p.course === slug).map((p) => getRegion(p.region)).filter(Boolean)
  return (
    <main>
      <div className="conversion-zone course-hub-conversion v3-conversion">
        <section className="lead-hero"><div className="lead-hero-inner"><p className="eyebrow">1:1 ENGLISH · {course.name.toUpperCase()}</p><h1>{course.name},<br />혼자 준비하며 막히고 있나요?</h1><p className="lead-copy">{course.description}. 수업부터 고르기보다 현재 수준과 목표 시점을 먼저 확인하면 필요한 준비를 더 빠르게 정할 수 있습니다.</p><div className="lead-actions"><Link className="lead-primary" href="/#trial">무료 시범수업 신청하기</Link><Link className="lead-secondary" href="/#consult">전화문의</Link></div><div className="lead-proof"><span>1:1 수준 확인</span><span>목표별 학습 설계</span><span>실전 피드백</span></div></div></section>
        <section className="conversion-story"><div className="section-heading conversion-heading"><p className="eyebrow">COMMON WORRIES</p><h2>이런 고민이 있다면 먼저 방향을 확인하세요</h2></div><div className="pain-grid three"><div className="pain-card"><strong>어디서부터 해야 할지 모르겠어요</strong><p>현재 수준을 기준으로 필요한 순서를 먼저 정합니다.</p></div><div className="pain-card"><strong>결과가 빨리 필요해요</strong><p>목표 시점에 맞춰 우선순위를 압축합니다.</p></div><div className="pain-card"><strong>혼자 하면 피드백이 없어요</strong><p>직접 수행하고 수정하는 시간을 확보합니다.</p></div></div></section>
        <section className="conversion-steps"><div className="step-strip"><div><b>01</b><strong>현재 수준</strong></div><div><b>02</b><strong>목표·기간</strong></div><div><b>03</b><strong>수업 방향</strong></div></div></section>
        <section className="conversion-final compact-final"><div><p className="eyebrow">FREE TRIAL</p><h2>수업을 정하기 전에 먼저 확인해보세요</h2><p>현재 수준과 목표를 확인한 뒤 필요한 준비부터 안내합니다.</p></div><Link className="lead-primary" href="/#trial">무료 시범수업 신청하기</Link></section>
      </div>
      <div className="seo-zone seo-tail">
        <section className="seo-reading-section"><div className="section-heading"><h2>{course.name} 수업을 비교할 때 중요한 기준</h2></div><p>같은 과목이라도 시작점과 목표 시점이 다르면 필요한 학습 순서는 달라집니다. 단순히 유명한 교재나 수업 횟수만 비교하기보다 실제 수행 수준, 목표, 과제량, 피드백 방식이 맞는지 확인하는 편이 좋습니다.</p><p>특히 말하기와 쓰기가 포함된 과정은 설명을 듣는 시간보다 직접 수행하는 시간이 중요합니다. 답변하거나 작성한 결과를 피드백받고 다시 시도하는 과정이 반복되어야 실제 변화로 연결되기 쉽습니다.</p></section>
        {pages.length > 0 && <section className="soft-section seo-block"><div className="section-heading"><h2>지역별 {course.name} 학습 안내</h2></div><div className="region-link-grid">{pages.map((r) => <Link className="mini-link" href={`/${r!.slug}/${slug}`} key={r!.slug}>{r!.name} {course.name}<span>→</span></Link>)}</div></section>}
      </div>
    </main>
  )
}
