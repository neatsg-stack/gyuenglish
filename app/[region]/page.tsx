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
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/${region.slug}`,
      type: 'website',
    },
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

  const fallbackFaq = [
    {
      question: '왕초보도 수업이 가능한가요?',
      answer: '현재 수준을 확인한 뒤 말하기의 기본 문장부터 단계적으로 시작할 수 있습니다.',
    },
    {
      question: '시험영어도 함께 준비할 수 있나요?',
      answer: '오픽, 토익스피킹, IELTS, TOEFL, G-TELP 등 목표에 맞춰 별도 학습 방향을 정할 수 있습니다.',
    },
    {
      question: '수업은 어떻게 진행되나요?',
      answer: '목표와 현재 수준을 확인한 뒤 필요한 영역과 학습 순서를 정해 1:1로 진행하는 방식입니다.',
    },
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
      <nav className="breadcrumb" aria-label="breadcrumb">
        <Link href="/">홈</Link> › {region.name}
      </nav>

      <article>
        <header className="hero compact region-hero">
          <p className="eyebrow">{region.province} · 목표별 1:1 영어수업</p>
          <h1>{region.name} 영어회화, 성인·직장인에게 맞는 1:1 영어수업</h1>
          <p>
            영어를 오래 공부했는데도 실제 대화가 어렵다면 공부량보다 먼저 현재 수준과 사용 목적을 살펴볼 필요가 있습니다.
            {region.name} 영어회화를 찾는 성인·직장인·왕초보 학습자를 위해 수업을 선택할 때 확인할 기준과 목표별 학습 방향을 정리했습니다.
          </p>
          <div className="hero-links" aria-label="주요 내용 바로가기">
            <a href="#level">수준별 학습 방향</a>
            <a href="#courses">시험영어 보기</a>
            <a href="#faq">자주 묻는 질문</a>
          </div>
        </header>

        <section className="prose-section">
          <h2>{region.name} 영어회화, 수업부터 정하기 전에 목표를 먼저 확인하세요</h2>
          <p>
            {custom?.intro ??
              '영어회화는 수업 횟수만 늘리기보다 현재 듣기·문장 구성·발화 수준과 실제 영어가 필요한 상황을 먼저 구분하는 것이 중요합니다. 기초 회화, 업무 영어, 시험 준비처럼 목표가 달라지면 필요한 수업 방식도 달라집니다.'}
          </p>
          <p>
            예를 들어 문법과 독해는 어느 정도 가능하지만 말할 때 문장이 나오지 않는 사람이라면 새로운 교재를 계속 배우기보다 알고 있는 표현을 입 밖으로 꺼내는 연습이 더 필요할 수 있습니다. 반대로 단어와 기본 문장 구조가 아직 익숙하지 않다면 프리토킹보다 짧은 문장을 정확하게 만들어 말하는 단계가 먼저입니다.
          </p>
        </section>

        <section id="level">
          <div className="section-heading">
            <p className="eyebrow">LEVEL & PURPOSE</p>
            <h2>같은 영어회화라도 학습 방향은 달라야 합니다</h2>
          </div>
          <div className="grid learning-grid">
            {(custom?.audience ?? [
              { title: '왕초보', body: '짧은 문장 구성과 기본 질문·답변부터 반복해 실제 발화로 연결합니다.' },
              { title: '성인 영어회화', body: '여행·생활·자기계발 등 실제 사용 상황을 중심으로 필요한 표현을 연습합니다.' },
              { title: '직장인 영어회화', body: '회의·전화·업무 대화 등 실제 직무 상황을 반영해 말하기 훈련을 구성합니다.' },
            ]).map((item) => (
              <div className="card learning-card" key={item.title}>
                <strong>{item.title}</strong>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="soft-section">
          <div className="section-heading">
            <p className="eyebrow">CHECK POINT</p>
            <h2>1:1 영어수업을 고를 때 확인하면 좋은 세 가지</h2>
          </div>
          <div className="check-list">
            {(custom?.checkpoints ?? []).map((item, index) => (
              <div className="check-item" key={item.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="courses">
          <div className="section-heading">
            <p className="eyebrow">TEST ENGLISH</p>
            <h2>점수가 필요하다면 시험에 맞는 준비가 필요합니다</h2>
          </div>
          <p className="section-intro">
            취업이나 이직을 위한 말하기 시험은 일반 회화와 평가 방식이 다릅니다. 목표 시험이 정해져 있다면 회화 실력을 키우는 것과 동시에 제한 시간, 문제 유형, 채점 기준에 맞춘 훈련을 병행하는 편이 효율적입니다.
          </p>
          {availableCourses.length > 0 && (
            <div className="grid">
              {availableCourses.map((course) => (
                <Link key={course.slug} href={`/${region.slug}/${course.slug}`} className="card course-card">
                  <strong>{region.name} {course.name}</strong>
                  <span>{course.description}</span>
                  <em>자세히 보기 →</em>
                </Link>
              ))}
            </div>
          )}
          <div className="related-links">
            <Link href="/opic">오픽 학습 안내</Link>
            <Link href="/toeic-speaking">토익스피킹 학습 안내</Link>
            <Link href="/ielts">아이엘츠 학습 안내</Link>
            <Link href="/toefl">토플 학습 안내</Link>
            <Link href="/gtelp">지텔프 학습 안내</Link>
          </div>
        </section>

        {custom && (
          <section>
            <div className="section-heading">
              <p className="eyebrow">LOCAL AREA</p>
              <h2>{region.name} 주요 생활권에서도 목적에 맞춰 준비할 수 있습니다</h2>
            </div>
            <p>{custom.localNote}</p>
            <div className="area-tags" aria-label={`${region.name} 관련 지역`}>
              {custom.localAreas.map((area) => <span key={area}>{area} 영어회화</span>)}
            </div>
          </section>
        )}

        <section className="prose-section">
          <h2>영어회화와 시험영어를 함께 준비한다면</h2>
          <p>
            오픽과 토익스피킹은 영어로 답변하는 시험이라는 점에서는 회화와 연결되지만, 실제 점수를 만들기 위해서는 유형별 답변 구성과 시간 관리가 필요합니다. IELTS와 TOEFL은 Speaking뿐 아니라 Reading, Listening, Writing까지 함께 평가되므로 한 영역만 따로 준비하기보다 현재 점수와 목표 점수를 기준으로 우선순위를 정하는 편이 좋습니다.
          </p>
          <p>
            영어 라이팅이나 국제학교·유학 준비가 필요한 경우에도 목적이 분명해야 합니다. 일상 회화에서 자연스러운 문장을 만드는 훈련과 시험 또는 아카데믹 Writing에서 논리를 구성하는 훈련은 서로 연결되지만 평가 기준은 다르기 때문입니다.
          </p>
          <div className="related-links">
            <Link href="/english-writing">영어 라이팅</Link>
            <Link href="/english-interview">영어 인터뷰</Link>
            <Link href="/international-school">국제학교 영어</Link>
            <Link href="/study-abroad">유학영어</Link>
          </div>
        </section>

        {nearbyRegions.length > 0 && (
          <section>
            <h2>{region.name} 인근 지역 영어수업</h2>
            <div className="related-links">
              {nearbyRegions.map((nearby) => nearby && (
                <Link key={nearby.slug} href={`/${nearby.slug}`}>{nearby.name} 영어회화</Link>
              ))}
            </div>
          </section>
        )}

        <section id="faq">
          <div className="section-heading">
            <p className="eyebrow">FAQ</p>
            <h2>{region.name} 영어회화에서 자주 묻는 질문</h2>
          </div>
          {faq.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </section>

        <section className="cta-box">
          <p className="eyebrow">1:1 ENGLISH</p>
          <h2>수업을 정하기 전에 현재 수준과 목표부터 확인하세요</h2>
          <p>
            영어가 필요한 목적, 현재 말하기 수준, 목표 시기와 가능한 수업 시간을 기준으로 학습 방향을 정하면 불필요한 시행착오를 줄일 수 있습니다.
          </p>
          <Link href="/#contact" className="primary-button">1:1 수업 상담하기</Link>
        </section>
      </article>
    </main>
  )
}
