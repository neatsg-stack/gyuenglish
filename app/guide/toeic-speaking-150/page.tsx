import type { Metadata } from 'next'
import GuideArticle from '@/components/GuideArticle'

export const metadata: Metadata = {
  title: 'TOEIC Speaking 150점 공부 방법',
  description: 'TOEIC Speaking 150점을 목표로 문항별 답변 구성, 발음과 전달력, 제한 시간 관리 방법을 안내합니다.',
  alternates: { canonical: '/guide/toeic-speaking-150' },
}

const sections = [
  {
    "title": '문항별로 요구하는 수행을 먼저 구분합니다',
    "paragraphs": [
      '읽기, 사진 묘사, 질문 답변, 정보 활용, 의견 제시처럼 문항마다 평가받는 행동이 다릅니다. 같은 방식으로 모든 문제를 연습하면 효율이 떨어질 수 있습니다.'
    ]
  },
  {
    "title": '첫 문장을 빠르게 시작하는 연습을 합니다',
    "paragraphs": [
      '질문을 이해하고도 시작을 오래 망설이면 뒤의 내용을 충분히 말하기 어렵습니다. 자주 쓰는 출발 구조를 익혀 생각을 정리하면서도 답변을 시작할 수 있어야 합니다.'
    ]
  },
  {
    "title": '사진 묘사는 보이는 정보를 우선합니다',
    "paragraphs": [
      '복잡한 표현을 만들기보다 장소, 사람, 행동, 위치를 정확한 문장으로 설명하는 것이 먼저입니다. 눈에 보이지 않는 상황을 지나치게 추측하지 않는 편이 좋습니다.'
    ]
  },
  {
    "title": '표와 일정 정보는 정확성이 중요합니다',
    "paragraphs": [
      '정보 제공 문항에서는 날짜, 시간, 장소, 사람을 잘못 전달하지 않도록 질문의 조건과 표의 정보를 빠르게 연결해야 합니다.'
    ]
  },
  {
    "title": '의견 문제는 주장과 이유를 연결합니다',
    "paragraphs": [
      '결론만 말하고 끝내지 않도록 이유와 간단한 사례를 덧붙여야 합니다. 제한 시간 안에서 내용이 완결되도록 구조를 반복해서 연습합니다.'
    ]
  },
  {
    "title": '실전 연습은 반드시 시간을 재고 합니다',
    "paragraphs": [
      '준비 시간이 길 때 잘 말하는 것과 실제 제한 시간 안에 답하는 것은 다릅니다. 녹음과 타이머를 사용해 침묵, 반복 표현, 시간 초과를 함께 점검합니다.'
    ]
  }
]

export default function Page() {
  return (
    <GuideArticle
      eyebrow='TOEIC SPEAKING GUIDE'
      title='TOEIC Speaking 150점 공부 방법'
      intro='150점을 목표로 한다면 단순히 많이 말하기보다 문항별 요구를 이해하고 제한 시간 안에 필요한 내용을 완성하는 연습이 중요합니다.'
      sections={sections}
      courseHref='/toeic-speaking'
      courseLabel='TOEIC Speaking 1:1 수업 안내'
    />
  )
}
