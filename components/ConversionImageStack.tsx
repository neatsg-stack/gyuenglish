import Image from 'next/image'

const conversationAlts = [
  '영어공부 방법을 고민하는 학습자 안내',
  '영어공부를 어디서부터 시작할지 고민하는 상황',
  '영어 학습 방향을 함께 해결한다는 안내',
  '일대일 관리형 코칭과 개인 맞춤 피드백 안내',
  '초중고 학생 영어 학습 목표 안내',
  '직장인 영어회화와 시험·면접 준비 안내',
  '주부와 시니어를 위한 생활 영어 학습 안내',
  '성인 기초 영어와 일상 회화 학습 안내',
  '일대일 맞춤형 영어수업 운영 방식 안내',
  '영어수업 상담 연락 안내',
  '영어회화 수업 사례와 학습 피드백 예시',
  '국제학교와 영어회화 수업 사례 예시',
  '영어시험과 인터뷰 수업 사례 예시',
  '토익·지텔프·토플 등 영어시험 수업 사례',
  '직장인과 주부 영어 학습 사례 예시',
  '영어 인터뷰와 해외 진출 준비 수업 사례',
  '무료 상담과 영어수업 문의 안내',
] as const

const bTypeAlts = [
  '영어공부 방법을 고민하는 학습자 안내',
  '영어공부를 어디서부터 시작할지 고민하는 상황',
  '영어 학습 방향을 함께 해결한다는 안내',
  '일대일 관리형 코칭과 개인 맞춤 피드백 안내',
  '영어수업 상담 연락 안내',
  '영어회화 수업 사례와 학습 피드백 예시',
  '국제학교와 영어회화 수업 사례 예시',
  '영어 인터뷰와 해외 진출 준비 수업 사례',
  '영어시험과 인터뷰 수업 사례 예시',
  '토익·지텔프·토플 등 영어시험 수업 사례',
  '영어수업 상담 연락 안내',
  '토플·아이엘츠·오픽·토익스피킹 등 영어시험 과정 안내',
  '성인 직장인 비즈니스와 이민 영어 목표 안내',
  '초중고 학생의 회화·인터뷰·유학·국제학교 영어 목표 안내',
  '일대일 맞춤형 영어수업 운영 방식 안내',
  '실시간 피드백과 영어수업 상담 안내',
  'IELTS와 영국 유학 준비 수업 사례',
  '미국 교과서와 에세이 수업 사례',
  '에세이와 토론 수업 사례',
  'TOEFL과 에세이 수업 사례',
  '국제학교 수업과 라이팅 지도 사례',
  'IELTS 수업과 점수 향상 사례',
  'IELTS 교재와 영어 학습 사례',
  '영어 스피킹 능력과 발음·억양·표현 학습 안내',
  '영어 라이팅 능력과 문장 구성·첨삭 학습 안내',
  '영어 리딩 능력과 스키밍·스캐닝 학습 안내',
  '영어 리스닝 능력과 듣기 학습 안내',
  '무료 상담과 영어수업 문의 안내',
] as const

export default function ConversionImageStack({ courseSlug, courseName }: { courseSlug: string; courseName: string }) {
  const isConversation = courseSlug === 'english-conversation'
  const folder = isConversation ? 'english-conversation' : 'b-type'
  const alts = isConversation ? conversationAlts : bTypeAlts

  return (
    <section className="conversion-image-zone" aria-label={`${courseName} 수업 안내`}>
      <div className="conversion-image-stack">
        {alts.map((alt, index) => {
          const number = index + 1
          return (
            <Image
              key={number}
              src={`/images/${folder}/${number}.png`}
              alt={alt}
              width={1080}
              height={1300}
              sizes="(max-width: 760px) 100vw, 760px"
              priority={number <= 2}
              loading={number <= 2 ? undefined : 'lazy'}
              className="conversion-source-image"
            />
          )
        })}
      </div>
    </section>
  )
}
