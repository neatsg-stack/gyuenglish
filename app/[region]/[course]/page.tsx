import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ConversionVisuals from '@/components/ConversionVisuals'
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
        <article className="seo-zone seo-tail"><nav className="breadcrumb"><Link href="/">홈</Link> › <Link href={`/${region.slug}`}>{region.name}</Link> › {course.name}</nav><section className="seo-intro-section"><h1>{region.name} {course.name} 1:1 수업</h1><p>이 페이지는 고유 콘텐츠 작성 전 단계로 검색 색인을 차단해 두었습니다.</p></section></article>
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

      <ConversionVisuals
        context={`${region.name} ${course.name}`}
        title={`${content.h1}\n혼자 준비하며 막히고 있나요?`}
        subtitle="필요한 준비는 목표와 현재 수준에 따라 달라집니다. 수업부터 고르기보다 먼저 방향을 확인해보세요."
      />

      <article className="seo-zone course-seo-zone seo-tail">
        <nav className="breadcrumb"><Link href="/">홈</Link> › <Link href={`/${region.slug}`}>{region.name}</Link> › {course.name}</nav>
        <section className="seo-intro-section">
          <p className="seo-section-label">{region.name} {course.name} 학습 정보</p>
          <h1>{content.h1}</h1>
          <p>{content.description}</p>
        </section>

        {content.sections.map((section, index) => (
          <section key={section.title} className={index % 2 === 1 ? 'soft-section prose-section seo-block' : 'prose-section seo-reading-section'}>
            <div className="section-heading"><h2>{section.title}</h2></div>
            {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {section.bullets && <ul className="seo-bullets">{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
          </section>
        ))}

        <section className="link-cloud-section">
          <div className="section-heading"><h2>함께 확인하면 좋은 영어수업</h2></div>
          <div className="related-links chip-links">{content.related.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</div>
        </section>

        <section className="faq-section">
          <div className="section-heading"><h2>{region.name} {course.name} 준비에서 자주 묻는 질문</h2></div>
          {content.faq.map((item) => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}
        </section>
      </article>
    </main>
  )
}
