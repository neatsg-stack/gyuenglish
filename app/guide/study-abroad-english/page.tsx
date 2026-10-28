import type { Metadata } from 'next'
import GuideArticle from '@/components/GuideArticle'

export const metadata: Metadata = {
  title: '유학 전 영어 준비 방법',
  description: '유학 출국 전 시험 점수뿐 아니라 강의 듣기, 수업 참여, 발표와 Academic Writing까지 준비하는 방법을 안내합니다.',
  alternates: { canonical: '/guide/study-abroad-english' },
}

const sections = [
  {
    "title": '시험 점수와 학업 영어는 같은 목표가 아닙니다',
    "paragraphs": [
      'TOEFL이나 IELTS 점수가 입학 조건을 충족하더라도 강의를 듣고 질문하거나 과제를 쓰는 일이 바로 쉬워지는 것은 아닙니다. 출국 전 두 목표를 구분해 준비하는 것이 좋습니다.'
    ]
  },
  {
    "title": '강의를 들으며 핵심을 메모하는 연습을 합니다',
    "paragraphs": [
      '모든 문장을 받아 적기보다 주제, 핵심 주장, 예시와 결론을 구분해 메모하는 습관이 실제 수업 이해에 도움이 됩니다.'
    ]
  },
  {
    "title": '수업에서 질문하고 의견을 말하는 연습이 필요합니다',
    "paragraphs": [
      '알아듣는 것과 직접 참여하는 것은 다른 능력입니다. 이해하지 못한 내용을 다시 묻고 자신의 의견을 짧게 설명하는 표현을 반복해서 연습합니다.'
    ]
  },
  {
    "title": '발표는 내용 구성과 전달을 함께 봅니다',
    "paragraphs": [
      '발표 영어는 발음만 교정하기보다 도입, 핵심 내용, 예시, 마무리의 구조를 먼저 잡고 청중이 이해하기 쉬운 속도로 전달하는 것이 중요합니다.'
    ]
  },
  {
    "title": '생활 영어도 출국 전에 준비하면 부담이 줄어듭니다',
    "paragraphs": [
      '기숙사, 은행, 병원, 쇼핑, 교통처럼 처음 정착할 때 자주 마주치는 상황을 미리 연습하면 현지 적응에 필요한 부담을 줄일 수 있습니다.'
    ]
  },
  {
    "title": 'Academic Writing은 기본 구조부터 익힙니다',
    "paragraphs": [
      '대학 과제에서는 문법뿐 아니라 주장과 근거, 문단 구성과 출처 활용이 중요합니다. 짧은 paragraph에서 시작해 essay와 리포트 형태로 확장하는 연습이 필요합니다.'
    ]
  }
]

export default function Page() {
  return (
    <GuideArticle
      eyebrow='STUDY ABROAD ENGLISH GUIDE'
      title='유학 전 영어 준비 방법'
      intro='유학 준비는 입학에 필요한 점수를 만드는 단계와 현지 수업을 실제로 따라가기 위한 영어를 준비하는 단계를 함께 봐야 합니다.'
      sections={sections}
      courseHref='/study-abroad'
      courseLabel='유학 영어 수업 안내'
    />
  )
}
