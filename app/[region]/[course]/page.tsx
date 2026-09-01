import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getCourse } from '@/data/courses'
import { landingPages, isLandingPage } from '@/data/landing-pages'
import { getLandingContent } from '@/data/landing-content'
import { getRegion } from '@/data/regions'
import { SITE_URL } from '@/lib/site'

type Props = { params: Promise<{ region: string; course: string }> }

export function generateStaticParams() {
  return landingPages.map((page) => ({ region: page.region, course: page.course }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { region: regionSlug, course: courseSlug } = await params
  const region = getRegion(regionSlug)
  const course = getCourse(courseSlug)
  const content = getLandingContent(regionSlug, courseSlug)
  if (!region || !course || !isLandingPage(regionSlug, courseSlug)) return {}

  const title = content?.title ?? `${region.name} ${course.name} 1:1 수업`
  const description = content?.description ?? `${region.name} ${course.name} 준비 방법과 1:1 수업 방향을 안내합니다. 현재 수준과 목표에 맞춰 필요한 학습 영역을 확인하세요.`
  const indexable = Boolean(content)

  return {
    title,
    description,
    alternates: { canonical: `/${region.slug}/${course.slug}` },
    robots: { index: indexable, follow: true },
    openGraph: { title, description, url: `${SITE_URL}/${region.slug}/${course.slug}`, type: 'article' },
  }
}

function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />
}

export default async function RegionCoursePage({ params }: Props) {
  const { region: regionSlug, course: courseSlug } = await params
  const region = getRegion(regionSlug)
  const course = getCourse(courseSlug)
  if (!region || !course || !isLandingPage(regionSlug, courseSlug)) notFound()

  const content = getLandingContent(regionSlug, courseSlug)

  if (!content) {
    return (
      <main>
        <nav className="breadcrumb"><Link href="/">홈</Link> › <Link href={`/${region.slug}`}>{region.name}</Link> › {course.name}</nav>
        <article><header className="hero compact"><p className="eyebrow">{region.name} · {course.name}</p><h1>{region.name} {course.name} 1:1 수업</h1><p>이 페이지는 고유 콘텐츠 작성 전 단계로 검색 색인을 차단해 두었습니다.</p></header></article>
      </main>
    )
  }

  const breadcrumbLd = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '홈', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: region.name, item: `${SITE_URL}/${region.slug}` },
      { '@type': 'ListItem', position: 3, name: course.name, item: `${SITE_URL}/${region.slug}/${course.slug}` },
    ],
  }
  const faqLd = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: content.faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })),
  }

  return (
    <main>
      <JsonLd data={breadcrumbLd} /><JsonLd data={faqLd} />
      <nav className="breadcrumb"><Link href="/">홈</Link> › <Link href={`/${region.slug}`}>{region.name}</Link> › {course.name}</nav>
      <article>
        <div className="conversion-zone course-conversion v3-conversion">
          <header className="lead-hero region-lead-hero">
            <div className="lead-hero-inner">
              <p className="eyebrow">{content.eyebrow}</p>
              <h1>{content.h1}</h1>
              <p className="lead-copy">혼자 준비하면서 방향이 맞는지 불안하다면, 먼저 현재 수준과 목표부터 확인해보세요. 필요한 부분부터 우선순위를 정해 안내합니다.</p>
              <div className="lead-actions"><Link className="lead-primary" href="/#trial">무료 시범수업 신청하기</Link><Link className="lead-secondary" href="/#consult">전화문의</Link></div>
              <div className="lead-proof"><span>1:1 수준 확인</span><span>{course.name} 목표 설계</span><span>실전 피드백</span></div>
            </div>
          </header>

          <section className="conversion-story">
            <div className="section-heading conversion-heading"><p className="eyebrow">DOES THIS SOUND FAMILIAR?</p><h2>이런 상태라면 준비 방법부터 바꿔볼 수 있습니다</h2></div>
            <div className="pain-grid three">
              <div className="pain-card"><strong>혼자 해도 답이 맞는지 모르겠어요</strong><p>현재 수행 수준을 확인하고 바로 교정받는 구조가 필요한 경우가 많습니다.</p></div>
              <div className="pain-card"><strong>시험·목표일은 가까운데 불안해요</strong><p>남은 기간에 맞춰 점수와 결과에 직접 연결되는 부분부터 우선순위를 정합니다.</p></div>
              <div className="pain-card"><strong>외운 건 많은데 실전에서 막혀요</strong><p>설명을 더 듣기보다 실제로 말하고 쓰고 다시 수정하는 시간이 중요합니다.</p></div>
            </div>
          </section>

          <section className="conversion-steps"><div className="step-strip"><div><b>01</b><strong>현재 수준</strong></div><div><b>02</b><strong>목표·기간</strong></div><div><b>03</b><strong>학습 방향</strong></div></div></section>
          <section className="conversion-final compact-final"><div><p className="eyebrow">FREE TRIAL</p><h2>{content.ctaTitle}</h2><p>{content.ctaText}</p></div><Link className="lead-primary" href="/#trial">무료 시범수업 신청하기</Link></section>
        </div>

        <div className="seo-zone course-seo-zone seo-tail">
          {content.sections.map((section, index) => (
            <section key={section.title} className={index % 2 === 1 ? 'soft-section prose-section seo-block' : 'prose-section seo-reading-section'}>
              <div className="section-heading"><h2>{section.title}</h2></div>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.bullets && <ul className="seo-bullets">{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
            </section>
          ))}

          <section className="link-cloud-section">
            <div className="section-heading"><p className="eyebrow">RELATED</p><h2>함께 확인하면 좋은 영어수업</h2></div>
            <div className="related-links chip-links">{content.related.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</div>
          </section>

          <section className="faq-section">
            <div className="section-heading"><p className="eyebrow">FAQ</p><h2>{region.name} {course.name} 준비에서 자주 묻는 질문</h2></div>
            {content.faq.map((item) => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}
          </section>

          <section className="cta-box final-cta">
            <p className="eyebrow">1:1 LEVEL CHECK</p><h2>{content.ctaTitle}</h2><p>{content.ctaText}</p><Link className="primary-button" href="/#trial">무료 시범수업 신청하기</Link>
          </section>
        </div>
      </article>
    </main>
  )
}
