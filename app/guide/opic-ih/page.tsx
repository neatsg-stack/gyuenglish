import type { Metadata } from 'next'
import GuideArticle from '@/components/GuideArticle'

export const metadata: Metadata = {
  title: 'OPIc IH 공부 방법',
  description: 'OPIc IH를 목표로 답변 길이와 구체성, 돌발 질문, Role-play와 녹음 점검 방법을 안내합니다.',
  alternates: { canonical: '/guide/opic-ih' },
}

const sections = [
  {
    "title": 'IH 답변은 한두 문장으로 끝나지 않습니다',
    "paragraphs": [
      '질문에 바로 답한 뒤 이유, 구체적인 상황, 느낌이나 결과를 덧붙여 답변을 확장해야 합니다. 길이만 늘리기보다 내용이 자연스럽게 이어지는지가 중요합니다.'
    ]
  },
  {
    "title": 'Background Survey는 실제 경험이 많은 소재로 고릅니다',
    "paragraphs": [
      '말하기 어려운 소재를 억지로 선택하면 준비한 질문에서도 내용이 부족해질 수 있습니다. 자주 하는 활동과 실제 경험이 있는 소재를 중심으로 정하는 편이 좋습니다.'
    ]
  },
  {
    "title": '돌발 질문은 완벽한 스크립트보다 구조가 중요합니다',
    "paragraphs": [
      '처음 보는 질문에서도 핵심 답변, 이유, 간단한 사례 순서로 내용을 만들 수 있어야 합니다. 모르는 주제가 나왔을 때 시간을 끌며 생각을 정리하는 표현도 도움이 됩니다.'
    ]
  },
  {
    "title": 'Role-play는 상황과 목적을 먼저 파악합니다',
    "paragraphs": [
      '상대에게 무엇을 묻거나 요청해야 하는지, 문제가 생겼다면 어떤 해결책을 제안해야 하는지를 먼저 정리한 뒤 필요한 질문과 문장을 구성합니다.'
    ]
  },
  {
    "title": '녹음하면 반복되는 약점이 보입니다',
    "paragraphs": [
      'filler가 지나치게 많은지, 같은 표현만 반복하는지, 시제가 흔들리는지 직접 들으면 수정할 지점이 분명해집니다. 한 번 고친 답변은 다시 녹음해 비교하는 것이 좋습니다.'
    ]
  },
  {
    "title": '시험 직전에는 새 표현보다 완성도를 높입니다',
    "paragraphs": [
      '시험이 가까워질수록 새로운 스크립트를 계속 늘리기보다 익숙한 소재에서 답변을 끝까지 완성하고 돌발 질문에 대응하는 연습을 반복하는 편이 안정적입니다.'
    ]
  }
]

export default function Page() {
  return (
    <GuideArticle
      eyebrow='OPIc GUIDE'
      title='OPIc IH 공부 방법'
      intro='IH를 목표로 할 때는 외운 답변의 개수보다 질문을 듣고 자신의 경험을 구체적으로 이어 말하는 능력을 만드는 것이 중요합니다.'
      sections={sections}
      courseHref='/opic'
      courseLabel='OPIc 1:1 수업 안내'
    />
  )
}
