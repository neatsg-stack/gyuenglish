import Link from 'next/link'
import { CONTACT_PHONE } from '@/lib/site'

export default function StickyCTA() {
  const tel = CONTACT_PHONE.replace(/[^0-9+]/g, '')
  const phoneHref = tel ? `tel:${tel}` : '/#consult'

  return (
    <aside className="sticky-contact-bar" aria-label="빠른 상담 메뉴">
      <a className="sticky-phone" href={phoneHref}>
        <span aria-hidden="true">☎</span>
        <span>전화문의</span>
      </a>
      <Link className="sticky-trial" href="/#trial">무료 시범수업 신청하기</Link>
    </aside>
  )
}
