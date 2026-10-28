import type { Metadata } from 'next'
import GuideArticle from '@/components/GuideArticle'

export const metadata: Metadata = {
  title: '왕초보 영어회화 공부 순서',
  description: '영어 왕초보가 짧은 기본 문장부터 질문과 대답, 실제 상황 회화까지 확장하는 학습 순서를 안내합니다.',
  alternates: { canonical: '/guide/beginner-english' },
}

const sections = [
  {
    "title": '기본 문장 몇 개를 확실히 내 것으로 만듭니다',
    "paragraphs": [
      '처음에는 어려운 표현보다 I am, I have, I like, I want, I went처럼 자주 쓰는 기본 구조를 이용해 내 이야기를 직접 만드는 연습이 좋습니다.'
    ]
  },
  {
    "title": '단어를 외우는 것과 문장을 만드는 것은 다릅니다',
    "paragraphs": [
      '단어를 많이 알아도 말할 때 문장으로 조합하지 못하면 대화가 이어지기 어렵습니다. 알고 있는 단어를 짧은 문장 안에서 반복해서 사용하는 연습이 필요합니다.'
    ]
  },
  {
    "title": '현재·과거·미래를 나눠 말해봅니다',
    "paragraphs": [
      '오늘 하는 일, 어제 있었던 일, 앞으로 할 일을 각각 말해보면 기본 시제와 문장 구조를 실제 말하기 속에서 익힐 수 있습니다.'
    ]
  },
  {
    "title": '질문과 대답을 한 세트로 연습합니다',
    "paragraphs": [
      '혼자 문장을 만드는 데서 끝내지 않고 질문을 듣고 답한 뒤 다시 질문하는 연습을 해야 실제 대화의 흐름에 익숙해집니다.'
    ]
  },
  {
    "title": '틀린 문장을 바로 고치고 다시 말합니다',
    "paragraphs": [
      '말하기에서는 오류를 설명만 듣는 것보다 수정된 문장을 직접 다시 말하는 과정이 중요합니다. 반복되는 오류부터 하나씩 줄이는 편이 효과적입니다.'
    ]
  },
  {
    "title": '생활 속에서 자주 쓰는 상황으로 확장합니다',
    "paragraphs": [
      '여행, 식당, 쇼핑, 직장 등 실제 필요한 상황을 정해 같은 기본 문장을 여러 맥락에서 활용하면 표현을 더 오래 기억할 수 있습니다.'
    ]
  }
]

export default function Page() {
  return (
    <GuideArticle
      eyebrow='BEGINNER ENGLISH GUIDE'
      title='왕초보 영어회화 공부 순서'
      intro='처음부터 프리토킹을 오래 하기보다 내가 직접 만들 수 있는 짧은 문장을 늘리고, 질문과 대답으로 연결하는 과정이 필요합니다.'
      sections={sections}
      courseHref='/english-conversation'
      courseLabel='영어회화 1:1 수업 안내'
    />
  )
}
