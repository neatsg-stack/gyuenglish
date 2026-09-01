import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { courses } from '@/data/courses'
import { getRegion, regions } from '@/data/regions'
import { regionContent } from '@/data/region-content'
import { SITE_URL } from '@/lib/site'
import { landingPages } from '@/data/landing-pages'

type Props = { params: Promise<{ region: string }> }

export function generateStaticParams() {
  return regions.map((region) => ({ region: region.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { region: slug } = await params
  const region = getRegion(slug)
  if (!region) return {}

  const title = `${region.name} 영어회화 | 성인·직장인 1:1 영어수업`
  const description = `${region.name} 성인·직장인·왕초보 영어회화부터 오픽, 토익스피킹 등 목표별 1:1 영어수업 선택 기준과 학습 방향을 안내합니다.`

  return {
    title,
    description,
    alternates: { canonical: `/${region.slug}` },
    openGraph: { title, description, url: `${SITE_URL}/${region.slug}`, type: 'website' },
  }
}

export default async function RegionPage({ params }: Props) {
  const { region: slug } = await params
  const region = getRegion(slug)
  if (!region) notFound()

  const custom = regionContent[region.slug]
  const availableCourses = courses.filter((course) =>
    landingPages.some((page) => page.region === region.slug && page.course === course.slug),
  )
  const nearbyRegions = region.nearby.map(getRegion).filter(Boolean)
  const audience = custom?.audience ?? [
    { title: '왕초보', body: '짧은 문장 구성과 기본 질문·답변부터 반복해 실제 발화로 연결합니다.' },
    { title: '성인 영어회화', body: '여행·생활·자기계발 등 실제 사용 상황을 중심으로 필요한 표현을 연습합니다.' },
    { title: '직장인 영어회화', body: '회의·전화·업무 대화 등 실제 직무 상황을 반영해 말하기 훈련을 구성합니다.' },
  ]
  const checkpoints = custom?.checkpoints ?? [
    { title: '현재 수준 진단', body: '문법 지식보다 실제로 듣고 말할 때 어디에서 막히는지 확인합니다.' },
    { title: '목표와 기간 설정', body: '회화·시험·유학 등 목적과 필요한 시점을 기준으로 우선순위를 정합니다.' },
    { title: '직접 말하는 시간', body: '설명을 듣는 시간보다 실제 발화와 피드백 후 재시도 시간이 충분한지 확인합니다.' },
  ]
  const fallbackFaq = [
    { question: '왕초보도 수업이 가능한가요?', answer: '현재 수준을 확인한 뒤 말하기의 기본 문장부터 단계적으로 시작할 수 있습니다.' },
    { question: '시험영어도 함께 준비할 수 있나요?', answer: '오픽, 토익스피킹, IELTS, TOEFL, G-TELP 등 목표에 맞춰 별도 학습 방향을 정할 수 있습니다.' },
    { question: '수업은 어떻게 진행되나요?', answer: '목표와 현재 수준을 확인한 뒤 필요한 영역과 학습 순서를 정해 1:1로 진행하는 방식입니다.' },
  ]
  const faq = custom?.faq ?? fallbackFaq

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        name: `${region.name} 영어회화 | 성인·직장인 1:1 영어수업`,
        url: `${SITE_URL}/${region.slug}`,
        description: `${region.name} 영어회화와 목표별 영어수업을 준비할 때 필요한 학습 방향과 선택 기준을 안내합니다.`,
        breadcrumb: { '@id': `${SITE_URL}/${region.slug}#breadcrumb` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${SITE_URL}/${region.slug}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: '홈', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: `${region.name} 영어수업`, item: `${SITE_URL}/${region.slug}` },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: { '@type': 'Answer', text: item.answer },
        })),
      },
    ],
  }

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <nav className="breadcrumb" aria-label="breadcrumb"><Link href="/">홈</Link> › {region.name}</nav>

      <article>
        <div className="conversion-zone region-conversion">
          <header className="hero compact region-hero conversion-hero">
            <p className="eyebrow">{region.province} · 1:1 ENGLISH</p>
            <h1>{region.name} 영어회화,<br />목표에 맞는 수업부터 찾으세요</h1>
            <p>{region.name}에서 영어수업을 찾고 있다면 수업 횟수보다 먼저 현재 수준과 영어가 필요한 목적을 확인하는 것이 좋습니다.</p>
            <div className="hero-links primary-actions">
              <a href="#quick-fit">나에게 맞는 방향 보기</a>
              <a href="/#trial">무료 시범수업 안내</a>
            </div>
          </header>

          <section id="quick-fit" className="quick-fit-section">
            <div className="section-heading compact-heading">
              <p className="eyebrow">QUICK CHECK</p>
              <h2>지금 가장 가까운 상황을 골라보세요</h2>
            </div>
            <div className="quick-goal-grid three-up">
              {audience.map((item) => (
                <a className="quick-goal-card" href="#how-to-choose" key={item.title}>
                  <strong>{item.title}</strong>
                  <span>{item.body}</span>
                  <em>학습 방향 확인 →</em>
                </a>
              ))}
            </div>
          </section>

          {availableCourses.length > 0 && (
            <section className="course-picker-section">
              <div className="section-heading compact-heading">
                <p className="eyebrow">GOAL</p>
                <h2>시험·목적이 정해져 있다면 바로 확인하세요</h2>
              </div>
              <div className="compact-link-grid">
                {availableCourses.slice(0, 6).map((course) => (
                  <Link key={course.slug} href={`/${region.slug}/${course.slug}`}>
                    <strong>{course.name}</strong><span>→</span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <section className="conversion-panel">
            <div>
              <p className="eyebrow">1:1 LEVEL CHECK</p>
              <h2>수업을 고르기 전에 현재 수준부터 확인하세요</h2>
              <p>목표, 가능한 시간, 현재 발화 수준을 기준으로 우선순위를 정하면 불필요한 시행착오를 줄일 수 있습니다.</p>
            </div>
            <Link className="primary-button" href="/#trial">무료 시범수업 신청하기</Link>
          </section>
        </div>

        <div className="seo-zone region-seo-zone">
          <section id="how-to-choose" className="prose-section seo-reading-section">
            <p className="eyebrow">SEO GUIDE 01</p>
            <h2>{region.name} 영어회화, 수업부터 정하기 전에 목표를 먼저 확인하세요</h2>
            <p>{custom?.intro ?? '영어회화는 수업 횟수만 늘리기보다 현재 듣기·문장 구성·발화 수준과 실제 영어가 필요한 상황을 먼저 구분하는 것이 중요합니다. 기초 회화, 업무 영어, 시험 준비처럼 목표가 달라지면 필요한 수업 방식도 달라집니다.'}</p>
            <p>문법과 독해는 어느 정도 가능하지만 말할 때 문장이 나오지 않는 사람이라면 새로운 교재를 계속 배우기보다 알고 있는 표현을 입 밖으로 꺼내는 연습이 더 필요할 수 있습니다. 반대로 단어와 기본 문장 구조가 익숙하지 않다면 프리토킹보다 짧은 문장을 정확하게 만들어 말하는 단계가 먼저입니다.</p>
          </section>

          <section className="soft-section seo-block">
            <div className="section-heading"><p className="eyebrow">SEO GUIDE 02</p><h2>1:1 영어수업을 고를 때 확인하면 좋은 세 가지</h2></div>
            <div className="check-list">
              {checkpoints.map((item, index) => (
                <div className="check-item" key={item.title}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <div><h3>{item.title}</h3><p>{item.body}</p></div>
                </div>
              ))}
            </div>
          </section>

          <section id="courses" className="seo-block">
            <div className="section-heading"><p className="eyebrow">SEO GUIDE 03</p><h2>점수가 필요하다면 시험에 맞는 준비가 필요합니다</h2></div>
            <p className="section-intro">취업이나 이직을 위한 말하기 시험은 일반 회화와 평가 방식이 다릅니다. 목표 시험이 정해져 있다면 회화 실력을 키우는 것과 동시에 문제 유형과 평가 기준에 맞춘 훈련을 병행하는 편이 효율적입니다.</p>
            {availableCourses.length > 0 && (
              <div className="grid compact-course-grid">
                {availableCourses.map((course) => (
                  <Link key={course.slug} href={`/${region.slug}/${course.slug}`} className="card course-card">
                    <strong>{region.name} {course.name}</strong><span>{course.description}</span><em>자세히 보기 →</em>
                  </Link>
                ))}
              </div>
            )}
          </section>

          {custom && (
            <section className="seo-block">
              <div className="section-heading"><p className="eyebrow">LOCAL AREA</p><h2>{region.name} 주요 생활권에서도 목적에 맞춰 준비할 수 있습니다</h2></div>
              <p>{custom.localNote}</p>
              <div className="area-tags" aria-label={`${region.name} 관련 지역`}>
                {custom.localAreas.map((area) => <span key={area}>{area} 영어회화</span>)}
              </div>
            </section>
          )}

          <section className="prose-section seo-reading-section">
            <p className="eyebrow">SEO GUIDE 04</p>
            <h2>영어회화와 시험영어를 함께 준비한다면</h2>
            <p>오픽과 토익스피킹은 영어로 답변하는 시험이라는 점에서는 회화와 연결되지만, 실제 점수를 만들기 위해서는 유형별 답변 구성과 시간 관리가 필요합니다. IELTS와 TOEFL은 여러 영역을 함께 평가하므로 현재 점수와 목표 점수를 기준으로 우선순위를 정하는 편이 좋습니다.</p>
            <p>영어 라이팅이나 국제학교·유학 준비가 필요한 경우에도 목적이 분명해야 합니다. 일상 회화에서 자연스러운 문장을 만드는 훈련과 시험 또는 아카데믹 Writing에서 논리를 구성하는 훈련은 서로 연결되지만 평가 기준은 다르기 때문입니다.</p>
          </section>

          <section className="link-cloud-section">
            <div className="section-heading"><p className="eyebrow">RELATED</p><h2>함께 확인하면 좋은 과정과 지역</h2></div>
            <div className="related-links chip-links">
              <Link href="/opic">오픽</Link><Link href="/toeic-speaking">토익스피킹</Link><Link href="/ielts">IELTS</Link><Link href="/toefl">TOEFL</Link><Link href="/gtelp">G-TELP</Link><Link href="/english-writing">영어 라이팅</Link><Link href="/english-interview">영어 인터뷰</Link><Link href="/international-school">국제학교</Link><Link href="/study-abroad">유학영어</Link>
              {nearbyRegions.map((nearby) => nearby && <Link key={nearby.slug} href={`/${nearby.slug}`}>{nearby.name} 영어회화</Link>)}
            </div>
          </section>

          <section id="faq" className="faq-section">
            <div className="section-heading"><p className="eyebrow">FAQ</p><h2>{region.name} 영어회화에서 자주 묻는 질문</h2></div>
            {faq.map((item) => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}
          </section>

          <section className="cta-box final-cta">
            <p className="eyebrow">1:1 ENGLISH</p>
            <h2>내게 필요한 영어수업부터 정리해보세요</h2>
            <p>영어가 필요한 목적, 현재 수준, 목표 시기와 가능한 수업 시간을 기준으로 학습 방향을 정할 수 있습니다.</p>
            <Link href="/#trial" className="primary-button">무료 시범수업 신청하기</Link>
          </section>
        </div>
      </article>
    </main>
  )
}
