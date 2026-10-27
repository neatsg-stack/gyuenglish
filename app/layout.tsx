import type { Metadata } from 'next'
import Link from 'next/link'
import MobileNav from '@/components/MobileNav'
import StickyCTA from '@/components/StickyCTA'
import { SITE_NAME, SITE_URL } from '@/lib/site'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: `${SITE_NAME} | 1:1 영어수업`, template: `%s | ${SITE_NAME}` },
  description: '영어회화, 오픽, 토익스피킹, 아이엘츠, 토플, 지텔프, 영어라이팅, 인터뷰, 국제학교와 유학영어 1:1 수업.',
  robots: { index: true, follow: true },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <header className="site-header">
          <Link href="/" className="logo">규잉글리시</Link>
          <nav className="desktop-nav" aria-label="주요 메뉴">
            <Link href="/english-conversation">영어회화</Link>
            <Link href="/opic">오픽</Link>
            <Link href="/toeic-speaking">토스</Link>
            <Link href="/ielts">IELTS</Link>
            <Link href="/toefl">TOEFL</Link>
            <Link href="/gtelp">지텔프</Link>
          </nav>
          <MobileNav />
        </header>
        {children}
        <StickyCTA />
        <footer>
          <strong>규잉글리시</strong>
          <span>목표별 1:1 영어수업</span>
          <small>© {new Date().getFullYear()} GYU ENGLISH</small>
        </footer>
      </body>
    </html>
  )
}
