import Link from 'next/link'
import { courses } from '@/data/courses'
import { regions } from '@/data/regions'

export default function Home() {
  return (
    <main>
      <section className="hero">
        <p className="eyebrow">1:1 영어교육</p>
        <h1>목표에 맞춰 준비하는 1:1 영어수업</h1>
        <p>영어회화부터 오픽·토익스피킹·IELTS·TOEFL·G-TELP, 영어 라이팅과 인터뷰까지 필요한 영역을 선택해 확인해 보세요.</p>
      </section>

      <section>
        <h2>목적별 영어수업</h2>
        <div className="grid">
          <Link href="/english-conversation" className="card"><strong>영어회화</strong><span>성인·직장인·왕초보 회화</span></Link>
          {courses.map((course) => (
            <Link key={course.slug} href={`/${course.slug}`} className="card">
              <strong>{course.name}</strong><span>{course.description}</span>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2>지역별 영어수업</h2>
        <div className="link-list">
          {regions.map((region) => <Link key={region.slug} href={`/${region.slug}`}>{region.name} 영어수업</Link>)}
        </div>
      </section>
    </main>
  )
}
