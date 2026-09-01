import Image from 'next/image'
import Link from 'next/link'

const visuals = [
  { src: '/images/conversion/01-empathy.webp', alt: '영어 학습에서 말문이 막히거나 방향을 잡기 어려운 대표적인 고민' },
  { src: '/images/conversion/02-cause.webp', alt: '영어 공부를 오래 해도 변화가 적을 때 확인할 수 있는 학습 원인' },
  { src: '/images/conversion/03-method.webp', alt: '현재 수준과 목표를 확인한 뒤 수업 방향을 정하는 1대1 영어수업 진행 과정' },
  { src: '/images/conversion/04-goals.webp', alt: '영어회화와 영어시험, 유학 및 국제학교 준비 등 목표별 영어수업 안내' },
]

export default function ConversionVisuals({
  context,
  title,
  subtitle,
}: {
  context: string
  title: string
  subtitle: string
}) {
  return (
    <div className="visual-conversion-area">
      <header className="visual-hero">
        <p className="visual-kicker">{context}</p>
        <p className="visual-hero-title">{title}</p>
        <p className="visual-hero-copy">{subtitle}</p>
        <div className="visual-hero-actions">
          <Link href="/#trial" className="visual-primary">무료 시범수업 신청하기</Link>
          <Link href="/#consult" className="visual-secondary">전화문의</Link>
        </div>
      </header>

      <section className="conversion-image-stack" aria-label="수업 안내">
        {visuals.map((visual) => (
          <Image
            key={visual.src}
            src={visual.src}
            alt={`${context} ${visual.alt}`}
            width={1080}
            height={visual.src.includes('03-') || visual.src.includes('04-') ? 830 : 760}
            sizes="(max-width: 760px) 100vw, 820px"
            className="conversion-graphic"
          />
        ))}
      </section>

      <section className="visual-trial-cta">
        <Image
          src="/images/conversion/05-trial.webp"
          alt={`${context} 무료 시범수업 진행 과정`}
          width={1080}
          height={560}
          sizes="(max-width: 760px) 100vw, 820px"
          className="conversion-graphic"
        />
        <Link href="/#trial" className="visual-primary visual-wide-button">무료 시범수업 신청하기</Link>
      </section>
    </div>
  )
}
