import Link from 'next/link'
import ConsultationCTA from '@/components/ConsultationCTA'
import { landingPages } from '@/data/landing-pages'
import { getRegion } from '@/data/regions'
import { getCourse } from '@/data/courses'

const courseGuidance: Record<string, {
  eyebrow: string
  headline: string
  intro: string
  checks: Array<{ title: string; text: string }>
}> = {
  opic: {
    eyebrow: 'OPIc · SPEAKING TEST',
    headline: '외운 문장보다 질문에 맞는 답을 만드는 힘이 중요합니다.',
    intro: 'OPIc은 Background Survey를 바탕으로 한 경험·묘사·비교 질문부터 돌발 질문과 Role-play까지 실제 말하기 대응력을 확인하는 시험입니다. 목표 등급에 맞춰 답변의 길이와 구체성을 조절해야 합니다.',
    checks: [
      { title: '소재 선택', text: 'Background Survey에서 실제 경험을 말하기 쉬운 소재를 먼저 정리합니다.' },
      { title: '답변 구조', text: '경험·묘사·비교 질문에서 핵심 내용을 자연스럽게 확장하는 연습을 합니다.' },
      { title: '실전 대응', text: '돌발 질문, Role-play, 침묵이 생기는 구간을 녹음으로 점검합니다.' },
    ],
  },
  'toeic-speaking': {
    eyebrow: 'TOEIC SPEAKING',
    headline: '문항별 요구에 맞춰 제한 시간 안에 답을 완성해야 합니다.',
    intro: 'TOEIC Speaking은 읽기, 사진 묘사, 질문 답변, 정보 활용, 의견 제시처럼 문항마다 요구하는 수행이 다릅니다. 발음뿐 아니라 답변 구성과 시간 관리까지 함께 연습해야 합니다.',
    checks: [
      { title: '첫 문장 만들기', text: '질문을 들은 뒤 바로 답변을 시작할 수 있도록 문항별 출발 문장을 익힙니다.' },
      { title: '정보 정확성', text: '표와 일정표의 정보를 빠르게 찾아 정확한 문장으로 전달하는 연습을 합니다.' },
      { title: '의견 확장', text: '주장과 이유, 간단한 사례를 연결해 답변을 끝까지 완성합니다.' },
    ],
  },
  toeic: {
    eyebrow: 'TOEIC · LC / RC',
    headline: '점수가 막히는 파트를 찾아 공부 순서를 다시 정합니다.',
    intro: 'TOEIC은 LC와 RC 총점만 보기보다 Part별 정답률과 시간 사용을 함께 봐야 합니다. 특히 RC에서 시간이 부족하다면 문법·어휘와 Part 7 독해 중 어디에서 병목이 생기는지 구분해야 합니다.',
    checks: [
      { title: 'LC', text: '오답이 발음 문제인지 핵심 정보 포착 문제인지 구분합니다.' },
      { title: 'Part 5·6', text: '문법과 어휘를 오답 유형별로 묶어 반복되는 실수를 줄입니다.' },
      { title: 'Part 7', text: '지문 구조와 근거 위치를 찾는 방식, 풀이 시간을 함께 점검합니다.' },
    ],
  },
  gtelp: {
    eyebrow: 'G-TELP · LEVEL 2',
    headline: '목표 점수에 맞춰 영역별 득점 전략을 먼저 세웁니다.',
    intro: 'G-TELP는 문법·청취·독해 및 어휘의 특성이 뚜렷합니다. 목표 점수와 시험일까지 남은 기간을 기준으로 확보할 점수와 보완할 영역을 나누는 것이 효율적입니다.',
    checks: [
      { title: '문법', text: '자주 출제되는 문법 포인트를 근거와 함께 판단하는 연습을 합니다.' },
      { title: '청취', text: '질문과 핵심 정보를 연결하며 대화 흐름을 놓치지 않도록 훈련합니다.' },
      { title: '독해', text: '지문 구조, 근거 문장, 어휘 문항을 구분해 풀이 시간을 관리합니다.' },
    ],
  },
  ielts: {
    eyebrow: 'IELTS · ACADEMIC ENGLISH',
    headline: 'Overall 점수와 각 영역의 Band를 함께 봐야 합니다.',
    intro: 'IELTS는 Reading, Listening, Writing, Speaking 네 영역을 평가합니다. 특히 Writing과 Speaking은 단순 정답 개수보다 평가 기준에 맞춰 현재 답변의 약점을 구체적으로 확인하는 과정이 중요합니다.',
    checks: [
      { title: 'Writing', text: 'Task 요구 충족, 논리 전개, 어휘와 문법 정확성을 기준으로 글을 점검합니다.' },
      { title: 'Speaking', text: 'Part 1·2·3의 질문 특성에 맞춰 답변을 확장하고 자연스럽게 연결합니다.' },
      { title: 'Band 전략', text: 'Overall 목표와 현재 영역별 점수를 비교해 우선순위를 정합니다.' },
    ],
  },
  toefl: {
    eyebrow: 'TOEFL iBT · ACADEMIC ENGLISH',
    headline: '현재 시험 형식에 맞는 학업 영어 능력을 준비해야 합니다.',
    intro: 'TOEFL iBT는 Reading, Listening, Speaking, Writing에서 학업 환경에 필요한 영어 수행 능력을 평가합니다. 2026년 개편 이후에는 최신 문항 유형과 점수 체계를 기준으로 준비하는 것이 중요합니다.',
    checks: [
      { title: 'Reading·Listening', text: '정보의 핵심과 관계를 빠르게 파악하고 필요한 근거를 찾는 연습을 합니다.' },
      { title: 'Speaking', text: '듣고 반복하거나 인터뷰에 응답하는 현재 유형에 맞춰 정확성과 전달력을 높입니다.' },
      { title: 'Writing', text: '문장 구성, 이메일 작성, Academic Discussion 유형에 맞춰 목적별 글쓰기를 연습합니다.' },
    ],
  },
  'english-conversation': {
    eyebrow: '1:1 ENGLISH CONVERSATION',
    headline: '아는 영어를 실제 대화에서 꺼내는 연습이 필요합니다.',
    intro: '여행, 직장, 일상 대화처럼 영어가 필요한 상황은 사람마다 다릅니다. 현재 문장 구성 수준을 확인하고 짧은 답변에서 시작해 질문과 대답을 자연스럽게 이어가는 연습으로 확장합니다.',
    checks: [
      { title: '기초 문장', text: '현재·과거·미래의 기본 문장을 직접 만들어 말하는 연습을 합니다.' },
      { title: '질문과 대답', text: '자주 쓰는 질문에 답하고 다시 질문하며 대화를 이어갑니다.' },
      { title: '상황 연습', text: '여행·업무·일상 등 실제 필요한 상황을 중심으로 표현을 반복합니다.' },
    ],
  },
  'english-writing': {
    eyebrow: 'ACADEMIC WRITING',
    headline: '좋은 문장보다 먼저 글의 구조를 잡아야 합니다.',
    intro: '영어 Writing은 문법적으로 맞는 문장을 쓰는 것에서 끝나지 않습니다. 주장과 근거를 연결하고 paragraph와 essay 전체의 흐름을 만드는 능력이 필요합니다.',
    checks: [
      { title: '문장', text: '문장 구조와 문법 오류를 확인하고 의미가 분명하게 전달되도록 다듬습니다.' },
      { title: '문단', text: 'Topic sentence와 근거, 예시가 하나의 중심 생각을 지지하도록 구성합니다.' },
      { title: '에세이', text: '도입부터 결론까지 논리의 흐름과 문단 간 연결을 점검합니다.' },
    ],
  },
  'english-interview': {
    eyebrow: 'ENGLISH INTERVIEW',
    headline: '외운 답변보다 추가 질문까지 이어지는 준비가 필요합니다.',
    intro: '취업·이직·유학 영어면접은 자기소개만 외우는 방식으로 대비하기 어렵습니다. 지원 동기와 경험을 자신의 언어로 정리하고 예상하지 못한 후속 질문에도 답하는 연습이 필요합니다.',
    checks: [
      { title: '핵심 경험', text: '지원 목적과 연결되는 경험을 짧고 분명한 영어로 정리합니다.' },
      { title: '예상 질문', text: '자기소개·지원 동기·강점과 약점 등 기본 질문을 준비합니다.' },
      { title: '추가 질문', text: 'Why, How, 구체적인 사례를 묻는 후속 질문까지 이어서 연습합니다.' },
    ],
  },
  'international-school': {
    eyebrow: 'INTERNATIONAL SCHOOL',
    headline: '학교 수업에서 실제로 쓰는 영어를 준비해야 합니다.',
    intro: '국제학교에서는 Reading Comprehension, Academic Writing, 발표와 토론 등 과목 학습을 영어로 수행하는 능력이 필요합니다. 단순 회화보다 학업 상황에 맞는 읽기와 표현이 중요합니다.',
    checks: [
      { title: 'Reading', text: '긴 지문에서 중심 생각과 근거를 찾고 내용을 요약하는 연습을 합니다.' },
      { title: 'Writing', text: '문단 구성에서 Essay까지 학년과 과제 수준에 맞춰 확장합니다.' },
      { title: 'Speaking', text: '발표, 토론, 수업 참여에서 자신의 의견을 근거와 함께 표현합니다.' },
    ],
  },
  'study-abroad': {
    eyebrow: 'STUDY ABROAD ENGLISH',
    headline: '출국 전에는 시험 영어와 실제 학업 영어를 함께 봐야 합니다.',
    intro: '유학 준비에는 입학에 필요한 시험 점수뿐 아니라 수업, 과제, 발표, Academic Writing처럼 현지에서 바로 사용하게 될 영어도 필요합니다. 출국 일정과 학교 요구를 기준으로 우선순위를 정합니다.',
    checks: [
      { title: '시험', text: 'TOEFL·IELTS 등 필요한 시험의 목표 점수와 현재 수준을 확인합니다.' },
      { title: '수업', text: '강의 내용을 듣고 질문하거나 의견을 표현하는 학업 영어를 준비합니다.' },
      { title: 'Writing', text: '과제와 리포트에 필요한 Academic Writing의 기본 구조를 익힙니다.' },
    ],
  },
}

export default function CourseHub({ slug }: { slug: string }) {
  const course = getCourse(slug)!
  const pages = landingPages
    .filter((page) => page.course === slug)
    .map((page) => getRegion(page.region))
    .filter(Boolean)

  const guide = courseGuidance[slug] || {
    eyebrow: '1:1 ENGLISH',
    headline: `${course.name}, 현재 수준부터 정확히 확인합니다.`,
    intro: `${course.description}. 같은 과정이라도 목표와 현재 수준에 따라 필요한 학습 순서는 달라질 수 있습니다.`,
    checks: [
      { title: '현재 수준', text: '실제 수행을 확인해 어디에서 막히는지 먼저 파악합니다.' },
      { title: '목표', text: '필요한 시점과 목표를 기준으로 학습 우선순위를 정합니다.' },
      { title: '피드백', text: '직접 수행하고 수정한 뒤 다시 시도하는 과정을 반복합니다.' },
    ],
  }

  return (
    <main>
      <section className="course-hero-v2">
        <p className="eyebrow">{guide.eyebrow}</p>
        <h1>{course.name}<br /><span>{guide.headline}</span></h1>
        <p>{guide.intro}</p>

        <div className="home-hero-actions">
          <a className="lead-primary" href="tel:01096218833">010-9621-8833 상담하기</a>
          <a className="lead-secondary" href="#course-guide">학습 방향 보기</a>
        </div>
      </section>

      <section id="course-guide" className="course-guide-v2">
        <div className="home-section-intro">
          <p className="seo-section-label">WHAT TO CHECK</p>
          <h2>{course.name} 준비에서 확인할 세 가지</h2>
        </div>

        <div className="course-check-grid">
          {guide.checks.map((item, index) => (
            <article key={item.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <ConsultationCTA
        compact
        title={`${course.name} 현재 수준부터 확인해보세요`}
        text="현재 실력과 목표, 남은 기간을 함께 보면 어떤 영역부터 공부해야 할지 더 정확하게 정할 수 있습니다."
      />

      <article className="seo-zone seo-tail">
        <section className="seo-intro-section">
          <p className="seo-section-label">{course.name} 학습 정보</p>
          <h2>수업을 정하기 전에 학습 목표부터 구체화하세요</h2>
          <p>
            같은 과정을 준비해도 현재 수준과 필요한 시점에 따라 공부의 우선순위는
            달라집니다. 시험 점수가 필요한지, 실제 말하기나 쓰기 능력을 높여야 하는지,
            그리고 어느 영역에서 가장 많이 막히는지부터 확인하는 것이 좋습니다.
          </p>
        </section>

        {pages.length > 0 && (
          <section className="soft-section seo-block">
            <div className="section-heading">
              <h2>지역별 {course.name} 학습 정보</h2>
            </div>

            <div className="region-link-grid">
              {pages.map((region) => (
                <Link
                  className="mini-link"
                  href={`/${region!.slug}/${slug}`}
                  key={region!.slug}
                >
                  {region!.name} {course.name}
                  <span>→</span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>

      <ConsultationCTA
        title="수업을 시작하기 전에 방향부터 확인하세요"
        text="현재 수준과 목표를 알려주시면 필요한 공부와 적합한 수업 방향을 함께 안내드립니다."
      />
    </main>
  )
}
