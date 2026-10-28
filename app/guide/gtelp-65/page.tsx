import type { Metadata } from 'next'
import GuideArticle from '@/components/GuideArticle'

export const metadata: Metadata = {
  title: 'G-TELP 65점 공부 방법',
  description: 'G-TELP Level 2 65점을 목표로 문법, 청취, 독해 및 어휘의 현재 수준을 확인하고 득점 우선순위를 정하는 방법을 안내합니다.',
  alternates: { canonical: '/guide/gtelp-65' },
}

const sections = [
  {
    "title": '먼저 영역별 현재 점수를 확인합니다',
    "paragraphs": [
      '문법, 청취, 독해 및 어휘에서 각각 어느 정도 맞히는지 확인해야 합니다. 총점만 보면 어떤 영역을 먼저 올려야 하는지 판단하기 어렵습니다.'
    ]
  },
  {
    "title": '문법은 근거를 보고 판단하는 연습이 필요합니다',
    "paragraphs": [
      '문법 문제는 익숙한 느낌으로 고르기보다 시제, 가정법, 조동사 등 판단 근거를 짚는 습관이 중요합니다. 틀린 문제는 왜 다른 선택지가 아닌지도 함께 확인합니다.'
    ]
  },
  {
    "title": '청취는 질문과 핵심 정보를 연결합니다',
    "paragraphs": [
      '모든 문장을 완벽하게 해석하려고 하면 다음 내용을 놓칠 수 있습니다. 질문이 요구하는 정보가 무엇인지 먼저 파악하고 인물, 목적, 이유와 같은 핵심을 따라가는 연습이 필요합니다.'
    ]
  },
  {
    "title": '독해는 지문 구조와 근거 위치를 봅니다',
    "paragraphs": [
      '처음부터 끝까지 같은 속도로 읽기보다 문단의 역할과 문제의 근거가 있는 위치를 찾는 연습이 중요합니다. 어휘 문항과 내용 일치 문항도 접근 방식을 나눠야 합니다.'
    ]
  },
  {
    "title": '65점에 필요한 득점 조합을 현실적으로 잡습니다',
    "paragraphs": [
      '강한 영역에서 확보할 점수와 약한 영역에서 최소한 지켜야 할 점수를 나누면 학습 계획이 구체적이 됩니다. 시험이 가까울수록 우선순위가 더 중요합니다.'
    ]
  },
  {
    "title": '기출·모의 문제는 시간까지 재고 풉니다',
    "paragraphs": [
      '한 세트를 푼 뒤 정답만 확인하지 말고 시간 부족, 근거 착각, 어휘 부족처럼 오답 원인을 분류해야 다음 학습에서 같은 실수를 줄일 수 있습니다.'
    ]
  }
]

export default function Page() {
  return (
    <GuideArticle
      eyebrow='G-TELP GUIDE'
      title='G-TELP 65점 공부 방법'
      intro='65점을 목표로 한다면 모든 영역을 똑같이 공부하기보다 현재 정답률과 남은 기간을 기준으로 확보할 점수와 보완할 영역을 나누는 것이 좋습니다.'
      sections={sections}
      courseHref='/gtelp'
      courseLabel='G-TELP 1:1 수업 안내'
    />
  )
}
