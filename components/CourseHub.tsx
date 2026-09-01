import Link from 'next/link'
import ConversionVisuals from '@/components/ConversionVisuals'
import { landingPages } from '@/data/landing-pages'
import { getRegion } from '@/data/regions'
import { getCourse } from '@/data/courses'

export default function CourseHub({ slug }: { slug: string }) {
  const course = getCourse(slug)!
  const pages = landingPages.filter((p) => p.course === slug).map((p) => getRegion(p.region)).filter(Boolean)

  return (
    <main>
      <ConversionVisuals
        context={`1:1 ${course.name}`}
        title={`${course.name},\n혼자 준비하며 막히고 있나요?`}
        subtitle="현재 수준과 목표 시점을 먼저 확인하면 필요한 준비의 우선순위를 더 빠르게 정할 수 있습니다."
      />

      <article className="seo-zone seo-tail">
        <section className="seo-intro-section">
          <p className="seo-section-label">{course.name} 학습 정보</p>
          <h1>{course.name} 1:1 수업 안내</h1>
          <p>{course.description}. 같은 과목이라도 시작점과 목표 시점이 다르면 필요한 학습 순서는 달라집니다. 교재나 수업 횟수보다 실제 수행 수준, 목표, 과제량, 피드백 방식이 맞는지 확인하는 편이 좋습니다.</p>
          <p>특히 말하기와 쓰기가 포함된 과정은 설명을 듣는 시간보다 직접 수행하는 시간이 중요합니다. 답변하거나 작성한 결과를 피드백받고 다시 시도하는 과정이 반복되어야 실제 변화로 연결되기 쉽습니다.</p>
        </section>
        {pages.length > 0 && (
          <section className="soft-section seo-block">
            <div className="section-heading"><h2>지역별 {course.name} 학습 안내</h2></div>
            <div className="region-link-grid">{pages.map((r) => <Link className="mini-link" href={`/${r!.slug}/${slug}`} key={r!.slug}>{r!.name} {course.name}<span>→</span></Link>)}</div>
          </section>
        )}
      </article>
    </main>
  )
}
