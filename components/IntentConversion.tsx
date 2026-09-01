import Link from 'next/link'
import type { ConversionIntent } from '@/data/search-intents'

export default function IntentConversion({ data }: { data: ConversionIntent }) {
  return (
    <section className="intent-conversion" aria-label={`${data.label} 수업 안내`}>
      <div className="intent-hero">
        <p className="intent-kicker">{data.label}</p>
        <h1>{data.heroQuestion}</h1>
        <p>{data.heroCopy}</p>
        <div className="intent-actions">
          <Link href="/#trial" className="intent-primary">무료 시범수업 신청하기</Link>
          <Link href="/#consult" className="intent-secondary">전화문의</Link>
        </div>
      </div>

      <div className="intent-visual-stack">
        {data.cards.map((card, i) => (
          <div className={`intent-visual-card intent-card-${i+1}`} key={`${card.title}-${i}`}>
            <p className="intent-card-kicker">{card.kicker}</p>
            <h2>{card.title}</h2>
            <div className="intent-card-lines">
              {card.lines.map((line) => <p key={line}>{line}</p>)}
            </div>
            {card.emphasis && <strong className="intent-emphasis">{card.emphasis}</strong>}
          </div>
        ))}
      </div>

      <div className="intent-final-cta">
        <p>처음부터 수업을 결정하지 않아도 됩니다.</p>
        <h2>현재 수준과 목표부터 확인해보세요.</h2>
        <Link href="/#trial" className="intent-primary">{data.cta}</Link>
      </div>
    </section>
  )
}
