import Link from 'next/link'
import { regions } from '@/data/regions'
import { courses } from '@/data/courses'
import ConsultationCTA from '@/components/ConsultationCTA'

const learningPaths = [
  {
    label: 'SPEAKING',
    title: '말하기 시험과 영어회화',
    text: 'OPIc·TOEIC Speaking처럼 제한된 시간 안에 답을 만들어야 하는 시험부터 일상 영어회화까지, 현재 말하기 수준과 목표에 맞춰 필요한 연습을 구체화합니다.',
    links: [
      { href: '/opic', label: 'OPIc' },
      { href: '/toeic-speaking', label: 'TOEIC Speaking' },
      { href: '/english-conversation', label: '영어회화' },
    ],
  },
  {
    label: 'ACADEMIC',
    title: '유학·아카데믹 영어',
    text: 'IELTS·TOEFL과 Academic Writing은 단순한 영어 지식보다 읽고 듣고 정리한 내용을 논리적으로 표현하는 힘이 중요합니다.',
    links: [
      { href: '/ielts', label: 'IELTS' },
      { href: '/toefl', label: 'TOEFL iBT' },
      { href: '/english-writing', label: 'Academic Writing' },
    ],
  },
  {
    label: 'SCORE',
    title: '취업·점수형 시험',
    text: 'TOEIC과 G-TELP는 현재 점수와 목표 점수, 시험까지 남은 기간을 함께 보고 점수를 잃는 파트부터 우선순위를 정하는 것이 중요합니다.',
    links: [
      { href: '/toeic', label: 'TOEIC' },
      { href: '/gtelp', label: 'G-TELP' },
      { href: '/english-interview', label: '영어면접' },
    ],
  },
  {
    label: 'SCHOOL',
    title: '국제학교·유학 준비',
    text: '영어 수업을 따라가기 위한 Reading Comprehension, Essay, 발표와 토론까지 학교에서 실제로 필요한 학업 영어를 준비합니다.',
    links: [
      { href: '/international-school', label: '국제학교' },
      { href: '/study-abroad', label: '유학준비' },
      { href: '/english-writing', label: '영어라이팅' },
    ],
  },
]

const studyChecks = [
  {
    number: '01',
    title: '지금 막히는 지점을 먼저 찾습니다',
    text: '같은 목표라도 필요한 공부는 다를 수 있습니다. 문제 유형별 정답률, 실제 답변 내용, 읽기와 쓰기의 병목을 먼저 확인합니다.',
  },
  {
    number: '02',
    title: '목표와 기간에 맞춰 우선순위를 정합니다',
    text: '모든 영역을 똑같이 공부하기보다 시험일까지 남은 시간과 현재 수준을 고려해 먼저 개선할 부분을 정합니다.',
  },
  {
    number: '03',
    title: '수업에서 배운 내용을 실제로 써봅니다',
    text: 'Speaking은 직접 말하고, Writing은 직접 써봐야 합니다. 설명을 듣는 데서 끝내지 않고 실제 수행과 피드백으로 연결합니다.',
  },
]

export default function Home() {
  return (
    <main>
      <section className="home-hero-v2">
        <div className="home-hero-copy">
          <p className="eyebrow">규쌤과외 · 1:1 ENGLISH</p>
          <h1>
            영어 공부를 더 하는 것보다
            <br />
            <span>지금 필요한 공부를 찾는 것</span>이 먼저입니다.
          </h1>
          <p className="home-hero-description">
            영어회화부터 OPIc, TOEIC Speaking, IELTS, TOEFL iBT,
            국제학교·유학 준비까지. 현재 수준과 목표를 먼저 확인하고
            필요한 학습 방향과 수업을 설계합니다.
          </p>

          <div className="home-hero-actions">
            <a className="lead-primary" href="tel:01096218833">
              010-9621-8833 상담하기
            </a>
            <a className="lead-secondary" href="#courses">
              과정별 학습 방향 보기
            </a>
          </div>

          <div className="home-trust-row">
            <span>1:1 맞춤 수업</span>
            <span>현재 수준 진단</span>
            <span>과목별 전문 교사</span>
            <span>무료 체험수업</span>
          </div>
        </div>

        <aside className="home-hero-panel">
          <p className="home-panel-label">STARTING POINT</p>
          <h2>수업을 시작하기 전에<br />세 가지를 먼저 봅니다.</h2>

          <ol className="home-check-list">
            <li>
              <strong>어디에서 점수를 잃고 있나요?</strong>
              <span>문법 · 어휘 · 독해 · 청취 · 말하기 · 시간 관리</span>
            </li>
            <li>
              <strong>어떤 영어가 필요한가요?</strong>
              <span>시험 · 영어회화 · 영어면접 · 유학 · Academic Writing</span>
            </li>
            <li>
              <strong>언제까지 만들어야 하나요?</strong>
              <span>시험일 · 입학일 · 출국일 · 취업 일정</span>
            </li>
          </ol>
        </aside>
      </section>

      <section className="home-problem-section">
        <div className="home-section-intro">
          <p className="seo-section-label">WHY IT STALLS</p>
          <h2>공부를 오래 해도<br />실력이 멈추는 이유가 있습니다.</h2>
          <p>
            같은 영어라도 막히는 지점은 사람마다 다릅니다. 단어를 더 외워야 하는지,
            문제를 푸는 방식을 바꿔야 하는지, 실제로 말하고 쓰는 연습이 부족한지부터
            구분해야 공부의 방향을 제대로 잡을 수 있습니다.
          </p>
        </div>

        <div className="home-diagnosis-grid">
          <article>
            <span>말하기</span>
            <h3>알고 있는 영어가 바로 나오지 않습니다</h3>
            <p>
              표현을 많이 알고 있어도 질문을 듣고 짧은 시간 안에 답을 구성하는
              연습이 부족하면 실제 시험과 대화에서는 말이 막힐 수 있습니다.
            </p>
          </article>

          <article>
            <span>독해</span>
            <h3>읽었는데 정답 근거가 보이지 않습니다</h3>
            <p>
              단어 뜻을 아는 것과 지문의 구조를 파악하는 것은 다릅니다.
              반복해서 읽는 습관과 근거를 찾는 방식을 함께 점검해야 합니다.
            </p>
          </article>

          <article>
            <span>Writing</span>
            <h3>아이디어는 있는데 글이 이어지지 않습니다</h3>
            <p>
              문법 지식만으로 좋은 글을 만들기는 어렵습니다. 주장과 근거를 연결하고
              문단을 구성하는 연습이 실제 첨삭과 함께 이루어져야 합니다.
            </p>
          </article>
        </div>
      </section>

      <section className="home-method-section">
        <div className="home-section-intro">
          <p className="seo-section-label">HOW WE APPROACH</p>
          <h2>1:1 수업은 많이 가르치는 것보다<br />필요한 공부를 정확히 하는 데 집중합니다.</h2>
        </div>

        <div className="home-method-list">
          {studyChecks.map((item) => (
            <article key={item.number}>
              <span className="home-method-number">{item.number}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <ConsultationCTA
        title="어떤 수업이 필요한지부터 함께 확인해보세요"
        text="현재 수준, 필요한 영어, 목표 일정에 따라 같은 과목이라도 공부 방향은 달라질 수 있습니다. 상담 후 적합한 수업 방향을 안내드립니다."
      />

      <section id="courses" className="home-course-paths">
        <div className="home-section-intro">
          <p className="seo-section-label">LEARNING PATH</p>
          <h2>목표가 다르면<br />공부하는 방식도 달라야 합니다.</h2>
          <p>
            시험 이름만 보고 수업을 정하기보다 실제로 필요한 영어 능력과
            현재 막히는 지점을 기준으로 학습 방향을 잡습니다.
          </p>
        </div>

        <div className="home-path-grid">
          {learningPaths.map((path) => (
            <article className="home-path-card" key={path.label}>
              <p className="home-path-label">{path.label}</p>
              <h3>{path.title}</h3>
              <p>{path.text}</p>
              <div className="home-path-links">
                {path.links.map((link) => (
                  <Link href={link.href} key={link.href}>
                    {link.label} <span>→</span>
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="home-example-section">
        <div className="home-section-intro">
          <p className="seo-section-label">EXAMPLE</p>
          <h2>예를 들어 OPIc을 준비한다면</h2>
        </div>

        <div className="home-example-layout">
          <div className="home-example-main">
            <h3>스크립트를 더 외우는 것이 답일까요?</h3>
            <p>
              외운 문장은 익숙한 질문에서는 도움이 되지만 질문의 표현이나 소재가 달라지면
              준비한 답을 그대로 사용하기 어려울 수 있습니다.
            </p>
            <p>
              그래서 OPIc에서는 Background Survey에 맞는 소재를 정리하고,
              경험·묘사·비교 질문에서 핵심 내용을 빠르게 구성하는 연습이 필요합니다.
              Role-play와 돌발 질문에도 같은 방식으로 대응할 수 있어야 합니다.
            </p>
            <p>
              녹음한 답변을 들으며 침묵이 길어지는 부분, 같은 표현의 반복,
              시제와 문장 연결이 흔들리는 지점을 확인하면 다음 연습의 목표가 분명해집니다.
            </p>
          </div>

          <aside className="home-example-side">
            <p>OPIc 학습 체크</p>
            <ul>
              <li>Background Survey와 소재 선택</li>
              <li>경험·묘사·비교 답변 구조</li>
              <li>돌발 질문과 Role-play 대응</li>
              <li>녹음 후 반복 오류와 전달력 점검</li>
            </ul>
            <Link href="/opic">OPIc 학습 방향 자세히 보기 →</Link>
          </aside>
        </div>
      </section>

      <section className="home-selection-section">
        <div className="home-section-intro">
          <p className="seo-section-label">BEFORE YOU CHOOSE</p>
          <h2>과외를 선택할 때<br />꼭 확인해야 할 기준이 있습니다.</h2>
        </div>

        <div className="home-selection-grid">
          <article>
            <strong>01</strong>
            <h3>현재 수준을 먼저 확인하는가</h3>
            <p>목표만 묻기보다 실제 답변과 문제 풀이를 보고 시작점을 확인해야 합니다.</p>
          </article>
          <article>
            <strong>02</strong>
            <h3>과목에 맞는 지도가 가능한가</h3>
            <p>영어회화와 IELTS Writing은 필요한 지도 경험과 수업 방식이 다릅니다.</p>
          </article>
          <article>
            <strong>03</strong>
            <h3>수업 후 무엇을 해야 하는가</h3>
            <p>수업 시간뿐 아니라 복습과 과제까지 이어질 수 있는 학습 방향이 필요합니다.</p>
          </article>
          <article>
            <strong>04</strong>
            <h3>목표와 일정이 반영되는가</h3>
            <p>시험일이나 출국 일정이 있다면 남은 기간에 맞는 우선순위가 필요합니다.</p>
          </article>
        </div>
      </section>

      <section className="home-all-courses">
        <div className="home-section-intro">
          <p className="seo-section-label">ALL COURSES</p>
          <h2>규쌤과외 전체 영어 과정</h2>
        </div>

        <div className="grid course-home-grid">
          {courses.map((course) => (
            <Link className="card course-card" href={`/${course.slug}`} key={course.slug}>
              <strong>{course.name}</strong>
              <span>{course.description}</span>
              <em>학습 방향 보기 →</em>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-regions">
        <div className="home-section-intro">
          <p className="seo-section-label">REGIONS</p>
          <h2>지역별 1:1 영어 과외</h2>
          <p>
            온라인 화상수업을 중심으로 지역과 관계없이 현재 수준과 목표에 맞는
            1:1 영어 수업을 안내하고 있습니다.
          </p>
        </div>

        <div className="region-link-grid">
          {regions.map((region) => (
            <Link className="mini-link" href={`/${region.slug}`} key={region.slug}>
              {region.name} 영어과외 <span>→</span>
            </Link>
          ))}
        </div>
      </section>

      <section id="trial" className="home-final-cta">
        <p className="eyebrow">FREE TRIAL · 1:1 CONSULTATION</p>
        <h2>
          바로 수업을 결정하기보다
          <br />
          먼저 현재 상태를 확인해보세요.
        </h2>
        <p>
          필요한 공부와 수업 방향, 목표까지의 학습 순서를 함께 확인한 뒤
          적합한 선생님과 수업을 안내드립니다.
        </p>
        <a href="tel:01096218833">010-9621-8833</a>
      </section>
    </main>
  )
}
