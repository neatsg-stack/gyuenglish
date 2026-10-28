import type { Metadata } from 'next'
import GuideArticle from '@/components/GuideArticle'

export const metadata: Metadata = {
  title: '2026 TOEFL iBT Writing 가이드',
  description: '2026년 현재 TOEFL iBT Writing의 Build a Sentence, Write an Email, Write for an Academic Discussion 유형과 준비 방향을 안내합니다.',
  alternates: { canonical: '/guide/toefl-writing' },
}

const sections = [
  {
    "title": '현재 Writing은 세 가지 유형으로 구성됩니다',
    "paragraphs": [
      'Build a Sentence는 주어진 단어나 구를 배열해 문법적인 문장을 만들고, Write an Email은 상황과 목적에 맞는 이메일을 작성합니다. Write for an Academic Discussion은 온라인 학술 토론에서 의견을 제시하고 근거를 덧붙이는 유형입니다.'
    ]
  },
  {
    "title": 'Build a Sentence는 문장 구조 이해가 핵심입니다',
    "paragraphs": [
      '단어 뜻만 알아서는 순서를 정확히 만들기 어렵습니다. 주어와 동사, 수식어, 절의 관계를 빠르게 파악하고 여러 문장 구조를 반복해서 재구성하는 연습이 필요합니다.'
    ]
  },
  {
    "title": 'Write an Email은 목적과 독자를 먼저 봅니다',
    "paragraphs": [
      '요청, 정보 제공, 해결책 제안 등 상황이 무엇인지 파악한 뒤 필요한 내용을 빠뜨리지 않고 명확하게 전달해야 합니다. 상대와 상황에 맞는 어조도 함께 고려해야 합니다.'
    ]
  },
  {
    "title": 'Academic Discussion은 의견과 근거를 분명히 씁니다',
    "paragraphs": [
      '질문에 대한 자신의 입장을 밝히고 이유와 설명을 연결해야 합니다. 다른 관점을 참고하더라도 자신의 기여가 무엇인지 분명하게 드러나도록 작성하는 것이 중요합니다.'
    ]
  },
  {
    "title": '정확성과 전달력을 함께 점검합니다',
    "paragraphs": [
      '문법과 어휘의 정확성만 보지 말고 글의 목적이 분명한지, 아이디어가 논리적으로 이어지는지 함께 확인해야 합니다. 반복되는 오류는 유형별로 기록해 다음 답변에서 줄입니다.'
    ]
  },
  {
    "title": '현재 형식에 맞는 자료로 연습합니다',
    "paragraphs": [
      '2026년 개편 전 자료에는 현재와 다른 Writing 유형이 포함될 수 있습니다. 응시 시점의 ETS 공식 안내와 최신 연습 자료를 기준으로 준비하는 것이 안전합니다.'
    ]
  }
]

export default function Page() {
  return (
    <GuideArticle
      eyebrow='TOEFL iBT WRITING GUIDE'
      title='2026 TOEFL iBT Writing 가이드'
      intro='2026년 1월 21일부터 적용된 TOEFL iBT 개편에 따라 Writing은 Build a Sentence, Write an Email, Write for an Academic Discussion 세 유형을 중심으로 준비해야 합니다.'
      sections={sections}
      courseHref='/toefl'
      courseLabel='TOEFL iBT 수업 안내'
      note='2026년 1월 21일 이후 TOEFL iBT Writing은 ETS 공식 안내 기준 Build a Sentence, Write an Email, Write for an Academic Discussion으로 구성됩니다.'
    />
  )
}
