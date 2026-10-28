import type { Metadata } from 'next'
import GuideArticle from '@/components/GuideArticle'

export const metadata: Metadata = {
  title: 'IELTS 6.5 공부 방법',
  description: 'IELTS Overall 6.5를 목표로 네 영역의 현재 Band를 확인하고 Reading, Listening, Writing, Speaking의 우선순위를 정하는 방법을 안내합니다.',
  alternates: { canonical: '/guide/ielts-65' },
}

const sections = [
  {
    "title": 'Overall 목표와 영역별 현재 점수를 함께 봅니다',
    "paragraphs": [
      'Reading과 Listening이 강해도 Writing이나 Speaking이 낮으면 원하는 Overall을 만들기 어려울 수 있습니다. 현재 점수와 목표 점수의 차이를 영역별로 확인하는 것이 먼저입니다.'
    ]
  },
  {
    "title": 'Reading은 정답 근거와 paraphrase를 찾습니다',
    "paragraphs": [
      '문장을 모두 번역하는 것보다 문제의 핵심어와 지문 속 paraphrase를 연결하는 연습이 중요합니다. 틀린 문제는 근거를 놓쳤는지 어휘가 부족했는지 구분합니다.'
    ]
  },
  {
    "title": 'Listening은 놓친 이유를 구체적으로 나눕니다',
    "paragraphs": [
      '발음을 알아듣지 못했는지, 질문을 놓쳤는지, 철자나 단복수에서 실수했는지에 따라 보완 방법이 달라집니다. 오답 원인을 나눈 뒤 필요한 구간을 반복해서 듣습니다.'
    ]
  },
  {
    "title": 'Writing은 평가 기준을 기준으로 고칩니다',
    "paragraphs": [
      'IELTS Writing은 Task Achievement 또는 Task Response, Coherence and Cohesion, Lexical Resource, Grammatical Range and Accuracy를 기준으로 평가됩니다. 첨삭도 이 기준에 맞춰 무엇을 바꿔야 하는지 구체적으로 확인해야 합니다.'
    ]
  },
  {
    "title": 'Speaking은 Part별 답변의 깊이가 달라집니다',
    "paragraphs": [
      'Part 1은 짧고 자연스럽게, Part 2는 주어진 주제를 일정 시간 이어 말하고, Part 3는 이유와 근거를 더 논리적으로 설명하는 연습이 필요합니다.'
    ]
  },
  {
    "title": '모의 점수보다 반복되는 약점을 기록합니다',
    "paragraphs": [
      '매번 점수만 확인하면 다음 공부가 막연해질 수 있습니다. 자주 틀리는 유형과 반복되는 표현·문법 오류를 기록해 다음 연습의 목표로 연결하는 것이 좋습니다.'
    ]
  }
]

export default function Page() {
  return (
    <GuideArticle
      eyebrow='IELTS GUIDE'
      title='IELTS 6.5 공부 방법'
      intro='Overall 6.5를 목표로 할 때는 총점만 보기보다 각 영역의 현재 Band와 필요한 점수를 함께 확인해야 효율적인 계획을 세울 수 있습니다.'
      sections={sections}
      courseHref='/ielts'
      courseLabel='IELTS 1:1 수업 안내'
    />
  )
}
