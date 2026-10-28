import type { Metadata } from 'next'
import GuideArticle from '@/components/GuideArticle'

export const metadata: Metadata = {
  title: '국제학교 영어 면접 준비',
  description: '국제학교 영어 면접에서 자주 필요한 자기소개, 지원 동기, 경험 설명과 후속 질문 대응 방법을 안내합니다.',
  alternates: { canonical: '/guide/international-school-interview' },
}

const sections = [
  {
    "title": '자기소개는 학교생활과 관심사를 중심으로 정리합니다',
    "paragraphs": [
      '이름과 나이만 말하기보다 좋아하는 과목, 활동, 관심 분야를 연결하면 이후 질문으로 자연스럽게 이어질 수 있습니다.'
    ]
  },
  {
    "title": '지원 동기는 본인의 경험과 연결합니다',
    "paragraphs": [
      '학교가 좋다는 일반적인 표현보다 어떤 수업이나 활동에 관심이 있고 그것이 자신의 경험과 어떻게 이어지는지 구체적으로 설명하는 편이 좋습니다.'
    ]
  },
  {
    "title": 'Why 질문에는 이유와 사례가 필요합니다',
    "paragraphs": [
      '좋아한다, 하고 싶다는 결론만 말하기보다 왜 그렇게 생각하는지와 실제 경험 한 가지를 덧붙이면 답변이 훨씬 설득력 있어집니다.'
    ]
  },
  {
    "title": '후속 질문까지 이어서 연습합니다',
    "paragraphs": [
      '첫 답변을 외우는 것만으로는 충분하지 않습니다. Why, How, Can you give an example처럼 앞선 답변을 더 구체적으로 묻는 질문까지 이어서 연습해야 합니다.'
    ]
  },
  {
    "title": '모르는 질문에도 침착하게 대응합니다',
    "paragraphs": [
      '질문을 바로 이해하지 못했을 때 다시 요청하는 표현과 잠시 생각할 시간을 확보하는 표현을 익혀두면 예상 밖의 질문에도 대응하기 쉽습니다.'
    ]
  },
  {
    "title": '내용과 전달 방식을 함께 점검합니다',
    "paragraphs": [
      '답변 내용뿐 아니라 말의 속도, 시선, 지나치게 긴 침묵과 반복 표현도 함께 확인해야 실제 면접에서 더 자연스럽게 전달할 수 있습니다.'
    ]
  }
]

export default function Page() {
  return (
    <GuideArticle
      eyebrow='INTERNATIONAL SCHOOL GUIDE'
      title='국제학교 영어 면접 준비'
      intro='국제학교 면접은 외운 문장을 정확히 말하는 것보다 자신의 경험과 생각을 질문에 맞춰 영어로 설명하는 능력을 보여주는 것이 중요합니다.'
      sections={sections}
      courseHref='/international-school'
      courseLabel='국제학교 영어 수업 안내'
    />
  )
}
