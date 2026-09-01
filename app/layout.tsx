import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_NAME, SITE_URL } from '@/lib/site'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | 1:1 영어수업`,
    template: `%s | ${SITE_NAME}`,
  },
  description: '영어회화, 오픽, 토익스피킹, 아이엘츠, 토플, 지텔프, 영어라이팅, 인터뷰, 국제학교와 유학영어 1:1 수업.',
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>
        <header className="site-header">
          <Link href="/" className="logo">규잉글리시</Link>
          <nav aria-label="주요 메뉴">
            <Link href="/english-conversation">영어회화</Link>
            <Link href="/opic">오픽</Link>
            <Link href="/ielts">IELTS</Link>
            <Link href="/toefl">TOEFL</Link>
            <Link href="/guide">학습가이드</Link>
          </nav>
        </header>
        {children}
        <footer>© {new Date().getFullYear()} 규잉글리시</footer>
      </body>
    </html>
  )
}
