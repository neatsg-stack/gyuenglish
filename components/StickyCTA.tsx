export default function StickyCTA() {
  return (
    <aside className="sticky-contact-bar" aria-label="빠른 상담 메뉴">
      <a
        className="sticky-phone"
        href="tel:01096218833"
        aria-label="010-9621-8833 전화 상담"
      >
        <span>전화 상담</span>
        <strong>010-9621-8833</strong>
      </a>

      <a className="sticky-trial" href="/#trial">
        무료 시범수업
      </a>
    </aside>
  )
}
