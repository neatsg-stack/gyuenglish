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
            <Link href="/">?</Link> ? <Link href="/guide">?? ?? ???</Link>
          </nav>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="guide-lead">{intro}</p>
          <div className="guide-hero-actions">
            <a className="lead-primary" href="tel:01096218833">010-9621-8833 ??</a>
            <a className="lead-secondary" href="#guide-content">?? ?? ?? ??</a>
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
                  title="?? ?? ??? ??? ?? ??????"
                  text="?? ??, ??, ?? ?? ?? ??? ??? ??? ??? ? ????? ?? ???????."
                />
              )}
            </div>
          ))}
        </div>

        {note && <p className="guide-update-note">{note}</p>}

        <section className="guide-next-step">
          <p className="seo-section-label">NEXT STEP</p>
          <h2>??? ???? ?? ? ??? ?? ???? ???</h2>
          <p>
            ?? ???? ?? ?? ??? ??? ? ?? ?? ??? ??? ??? ?? ??? ?????.
            ?? ??? ???? ?? ?? ??? ???? ???? ???? ?? ????.
          </p>
          <div className="related-links">
            <Link href={courseHref}>{courseLabel}</Link>
            <Link href="/guide">?? ?? ?? ???</Link>
          </div>
        </section>

        <ConsultationCTA
          title="??? ???? ??? ???? ?????"
          text="??? ???? ????? ?? ??? ??? ?? ???? ??? ?? ??? ???????."
        />
      </article>
    </main>
  )
}
