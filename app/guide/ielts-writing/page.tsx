import type { Metadata } from 'next'
import GuideArticle from '@/components/GuideArticle'

export const metadata: Metadata = {
  title: 'IELTS Writing 가이드',
  description: 'IELTS Academic Writing Task 1과 Task 2의 요구, 평가 기준, 시간 관리와 첨삭 방법을 정리합니다.',
  alternates: { canonical: '/guide/ielts-writing' },
}

const sections = [
  {
    "title": 'Task 1과 Task 2는 요구하는 글이 다릅니다',
    "paragraphs": [
      'Academic Task 1은 그래프, 표, 과정이나 지도 등의 주요 특징을 비교·요약하는 글입니다. Task 2는 주어진 논제에 대해 입장을 정하고 근거를 전개하는 essay입니다.'
    ]
  },
  {
    "title": 'Task 1은 overview가 글의 방향을 잡습니다',
    "paragraphs": [
      '세부 수치를 모두 나열하기보다 가장 두드러지는 특징과 전체적인 경향을 먼저 찾아 overview로 정리하는 연습이 필요합니다.'
    ]
  },
  {
    "title": 'Task 2는 주장과 근거가 끝까지 연결돼야 합니다',
    "paragraphs": [
      '질문이 요구하는 입장을 정확히 정한 뒤 각 문단이 하나의 핵심 주장과 이유, 설명이나 사례로 이어져야 합니다. 문단마다 새로운 이야기가 튀어나오지 않도록 구조를 먼저 잡는 것이 좋습니다.'
    ]
  },
  {
    "title": '평가 기준을 알고 첨삭을 받아야 합니다',
    "paragraphs": [
      'Task Achievement 또는 Task Response, Coherence and Cohesion, Lexical Resource, Grammatical Range and Accuracy를 기준으로 어떤 부분이 Band를 제한하는지 확인해야 합니다.'
    ]
  },
  {
    "title": '반복되는 문법 오류부터 줄입니다',
    "paragraphs": [
      '복잡한 문장을 억지로 늘리기보다 관사, 수일치, 시제, 문장 연결처럼 반복해서 나타나는 오류를 먼저 줄이는 것이 실제 점수 개선에 도움이 됩니다.'
    ]
  },
  {
    "title": '시간 안에 완성하는 연습이 필요합니다',
    "paragraphs": [
      '실전에서는 Task 1과 Task 2를 모두 제한 시간 안에 마쳐야 합니다. 계획, 작성, 검토에 사용할 시간을 정하고 끝까지 완성하는 연습을 반복하는 것이 중요합니다.'
    ]
  }
]

export default function Page() {
  return (
    <GuideArticle
      eyebrow='IELTS WRITING GUIDE'
      title='IELTS Writing 가이드'
      intro='IELTS Writing은 어려운 표현을 많이 쓰는 것보다 과제 요구를 정확히 이해하고 논리를 분명하게 전개하는 것이 중요합니다.'
      sections={sections}
      courseHref='/ielts'
      courseLabel='IELTS Writing 수업 안내'
      note='IELTS 공식 평가 기준과 실제 시험 안내는 응시 시점의 공식 정보를 함께 확인하는 것이 좋습니다.'
    />
  )
}
