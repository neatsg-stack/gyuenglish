import type { Metadata } from 'next'
import GuideArticle from '@/components/GuideArticle'

export const metadata: Metadata = {
  title: '국제학교 Writing 공부 방법',
  description: '국제학교 Writing에서 필요한 paragraph, essay, 읽기 기반 글쓰기와 Academic Writing의 기본 구조를 안내합니다.',
  alternates: { canonical: '/guide/international-school-writing' },
}

const sections = [
  {
    "title": '한 문장에서 한 문단으로 확장하는 힘이 필요합니다',
    "paragraphs": [
      '좋은 문장 몇 개를 쓰는 것과 하나의 중심 생각을 문단 전체에서 설명하는 것은 다릅니다. 문장 간 연결과 정보의 순서를 함께 연습해야 합니다.'
    ]
  },
  {
    "title": '먼저 paragraph 구조를 안정시킵니다',
    "paragraphs": [
      'Topic sentence, supporting details, concluding idea의 역할을 이해하면 더 긴 essay를 쓸 때도 문단별 기능을 분명하게 나눌 수 있습니다.'
    ]
  },
  {
    "title": '한 문단에는 중심 생각이 하나 있어야 합니다',
    "paragraphs": [
      'Topic sentence가 정한 핵심에서 벗어나지 않도록 이유와 예시를 배치해야 합니다. 내용이 많아도 중심이 흔들리면 글이 산만하게 보일 수 있습니다.'
    ]
  },
  {
    "title": 'Reading과 Writing을 연결해 연습합니다',
    "paragraphs": [
      '국제학교 과제에서는 읽은 내용을 요약하거나 근거로 활용해 자신의 생각을 쓰는 경우가 많습니다. 지문에서 필요한 정보를 골라 표현을 바꾸는 연습이 도움이 됩니다.'
    ]
  },
  {
    "title": '첨삭은 다음 글에서 적용해야 의미가 있습니다',
    "paragraphs": [
      '수정된 문장을 읽고 끝내기보다 왜 고쳤는지 이해하고 다음 글에서 같은 오류를 줄이는 과정이 필요합니다.'
    ]
  },
  {
    "title": '학교 과제의 rubric을 먼저 확인합니다',
    "paragraphs": [
      '내용, 구조, 언어 사용, 근거 제시 등 평가 항목이 있다면 글을 쓰기 전에 확인해야 합니다. 과제마다 요구가 다르므로 하나의 형식만 반복해서 쓰지 않는 것이 좋습니다.'
    ]
  }
]

export default function Page() {
  return (
    <GuideArticle
      eyebrow='INTERNATIONAL SCHOOL WRITING GUIDE'
      title='국제학교 Writing 공부 방법'
      intro='국제학교 Writing은 문법적으로 맞는 문장을 쓰는 것에서 시작하지만 학년이 올라갈수록 문단과 essay 전체의 논리를 구성하는 능력이 중요해집니다.'
      sections={sections}
      courseHref='/english-writing'
      courseLabel='국제학교 Writing 수업 안내'
    />
  )
}
