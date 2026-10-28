import Link from 'next/link'
import ConsultationCTA from '@/components/ConsultationCTA'

export type GuideSection = {
  title: string
  paragraphs: string[]
  bullets?: string[]
}

type GuideArticleProps = {
  eyebrow: string
  title: string
  intro: string
  sections: GuideSection[]
  courseHref: string
  courseLabel: string
  note?: string
}

export default function GuideArticle({
  eyebrow,
  title,
  intro,
  sections,
  courseHref,
  courseLabel,
  note,
}: GuideArticleProps) {
  return (
    <main className="guide-page-v2">
      <article>
        <header className="guide-hero-v2">
          <nav className="breadcrumb" aria-label="breadcrumb">
            <Link href="/">홈</Link> › <Link href="/guide">영어 학습 가이드</Link>
          </nav>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="guide-lead">{intro}</p>
          <div className="guide-hero-actions">
            <a className="lead-primary" href="tel:01096218833">010-9621-8833 상담</a>
            <a className="lead-secondary" href="#guide-content">학습 내용 바로 보기</a>
          </div>
        </header>

        <div id="guide-content" className="guide-reading-layout">
          {sections.map((section, index) => (
            <div key={`${section.title}-${index}`}>
              <section className="guide-knowledge-section">
                <span className="guide-section-number">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h2>{section.title}</h2>
                  {section.paragraphs.map((paragraph, paragraphIndex) => (
                    <p key={`${index}-${paragraphIndex}`}>{paragraph}</p>
                  ))}
                  {section.bullets && (
                    <ul className="guide-point-list">
                      {section.bullets.map((bullet, bulletIndex) => (
                        <li key={`${index}-bullet-${bulletIndex}`}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>

              {index === 2 && (
                <ConsultationCTA
                  compact
                  title="현재 공부 방향이 맞는지 확인해보세요"
                  text="현재 수준과 목표, 남은 기간을 함께 확인하면 어떤 영역을 먼저 공부해야 할지 우선순위를 정할 수 있습니다."
                />
              )}
            </div>
          ))}
        </div>

        {note && <p className="guide-update-note">{note}</p>}

        <section className="guide-next-step">
          <p className="seo-section-label">NEXT STEP</p>
          <h2>가이드를 읽은 뒤에는 현재 수준을 확인할 차례입니다</h2>
          <p>
            같은 목표라도 시작점과 남은 기간에 따라 필요한 학습 순서는 달라집니다.
            실제 답변이나 문제 풀이를 확인한 뒤 부족한 영역부터 구체적으로 정하는 편이 효율적입니다.
          </p>
          <div className="related-links">
            <Link href={courseHref}>{courseLabel}</Link>
            <Link href="/guide">다른 영어 학습 가이드</Link>
          </div>
        </section>

        <ConsultationCTA
          title="내게 필요한 영어 공부부터 확인해보세요"
          text="현재 상황을 간단히 알려주시면 목표에 맞는 학습 방향과 적합한 수업 과정을 안내드립니다."
        />
      </article>
    </main>
  )
}
