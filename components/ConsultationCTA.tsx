type ConsultationCTAProps = {
  title?: string
  text?: string
  compact?: boolean
}

export default function ConsultationCTA({
  title = '현재 상황에 맞는 수업 방향을 함께 찾아보세요',
  text = '현재 수준과 목표, 필요한 영어를 확인한 뒤 적합한 학습 방향과 수업을 안내드립니다.',
  compact = false,
}: ConsultationCTAProps) {
  return (
    <aside
      className={compact ? 'consultation-cta compact-consultation-cta' : 'consultation-cta'}
    >
      <div className="consultation-content">
        <p className="consultation-label">1:1 무료 상담 안내</p>
        <h2>{title}</h2>
        <p className="consultation-copy">{text}</p>
      </div>

      <div className="consultation-action">
        <span>전화 상담</span>
        <a
          className="consultation-phone"
          href="tel:01096218833"
          aria-label="010-9621-8833 전화 상담"
        >
          010-9621-8833
        </a>
        <p>무료 체험수업과 수업 방향을 안내드립니다.</p>
      </div>
    </aside>
  )
}
