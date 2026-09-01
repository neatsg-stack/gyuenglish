export type SearchIntent = 'general' | 'academy' | 'tutoring'

export type ConversionIntent = {
  course: string
  intent: SearchIntent
  slug: string
  label: string
  heroQuestion: string
  heroCopy: string
  cards: {
    kicker: string
    title: string
    lines: string[]
    emphasis?: string
  }[]
  cta: string
}

const courseCopy: Record<string, {academy:string[]; tutoring:string[]; general:string[]; point:string}> = {
  toefl: {
    academy: ['토플학원 알아보다 오셨나요?', '수업 인원보다 중요한 건 내가 직접 답하고 피드백 받는 시간입니다.', 'Reading·Listening만 따라가고 Speaking·Writing이 남는 경우가 많습니다.'],
    tutoring: ['토플과외 알아보다 오셨나요?', '1:1이라도 선생님 설명만 길면 내 답변은 바뀌지 않습니다.', '현재 점수와 목표 학교를 기준으로 취약 영역부터 잡아야 합니다.'],
    general: ['토플 준비, 어디서부터 해야 할까요?', '네 영역을 똑같이 공부하기보다 현재 점수와 목표 점수 차이를 먼저 봅니다.', 'Speaking·Writing은 직접 답하고 고치는 시간이 중요합니다.'],
    point: '목표 점수부터 정하고, 필요한 영역을 거꾸로 계산합니다.'
  },
  ielts: {
    academy: ['아이엘츠학원 알아보다 오셨나요?', 'Academic과 General, 목표 Band와 약한 영역이 다르면 준비도 달라야 합니다.', '전체 진도보다 Writing·Speaking에서 실제로 무엇이 깎이는지 확인해야 합니다.'],
    tutoring: ['아이엘츠과외 알아보다 오셨나요?', '1:1의 장점은 내 Band를 막는 영역에 시간을 더 쓸 수 있다는 점입니다.', 'Writing 첨삭과 Speaking 피드백이 실제 재작성·재답변으로 이어지는지 확인하세요.'],
    general: ['아이엘츠 점수가 한 영역에서 막히나요?', 'Overall만 보지 말고 Reading·Listening·Writing·Speaking의 차이를 먼저 확인합니다.', '6.0→6.5, 6.5→7.0은 같은 공부량보다 약점 진단이 중요합니다.'],
    point: '내 영역별 점수 차이가 곧 학습 우선순위입니다.'
  },
  opic: {
    academy: ['오픽학원 알아보다 오셨나요?', '많은 스크립트를 외우는 것보다 질문을 듣고 내 경험으로 이어 말하는 힘이 중요합니다.', '돌발 질문에서 막힌다면 암기량보다 답변 구조를 먼저 점검해야 합니다.'],
    tutoring: ['오픽과외 알아보다 오셨나요?', '1:1에서는 내가 실제로 말하는 시간이 충분해야 합니다.', 'IM3·IH·AL 목표에 따라 답변 길이와 확장 방식, 돌발 대응을 다르게 잡습니다.'],
    general: ['오픽, 외운 답변만 늘고 있나요?', '설문 선택부터 자주 쓰는 경험 소재까지 내 답변으로 연결해야 합니다.', '외운 티가 나는 문장보다 질문에 맞춰 자연스럽게 이어가는 연습이 필요합니다.'],
    point: '목표 등급부터 정하고, 실제 발화에서 막히는 지점을 확인합니다.'
  },
  'toeic-speaking': {
    academy: ['토익스피킹학원 알아보다 오셨나요?', '유형 설명을 듣는 것과 제한 시간 안에 직접 답하는 것은 다릅니다.', '목표 레벨에 필요한 파트부터 실전 발화 시간을 확보해야 합니다.'],
    tutoring: ['토익스피킹과외 알아보다 오셨나요?', '1:1이라면 내 녹음과 답변을 기준으로 바로 수정할 수 있어야 합니다.', '자주 틀리는 유형과 말이 끊기는 구간부터 집중합니다.'],
    general: ['토익스피킹, 시간 안에 답이 안 나오나요?', '템플릿을 아는 것보다 제한 시간 안에 문장을 완성하는 연습이 중요합니다.', '목표 레벨과 시험일까지 남은 기간을 기준으로 우선순위를 정합니다.'],
    point: '목표 레벨부터 정하고, 점수가 필요한 파트에 시간을 집중합니다.'
  },
  gtelp: {
    academy: ['지텔프학원 알아보다 오셨나요?', '목표가 65점인지 그 이상인지에 따라 영역별 전략이 달라집니다.', '문법 빈출 포인트와 독해·청취 시간 배분을 목표 점수에 맞춰야 합니다.'],
    tutoring: ['지텔프과외 알아보다 오셨나요?', '1:1에서는 이미 맞히는 문제보다 계속 틀리는 유형에 시간을 더 써야 합니다.', '목표 점수와 시험일까지 남은 기간을 기준으로 학습량을 조정합니다.'],
    general: ['지텔프, 목표 점수만 정해두셨나요?', 'Level 2에서 필요한 점수에 맞춰 문법·청취·독해 우선순위를 정합니다.', '전 영역을 똑같이 공부하지 않고 확보 가능한 점수부터 계산합니다.'],
    point: '목표 점수에서 거꾸로 계산해 필요한 영역부터 잡습니다.'
  },
  toeic: {
    academy: ['토익학원 알아보다 오셨나요?', '진도보다 현재 LC·RC에서 반복해서 잃는 점수를 먼저 확인해야 합니다.', '목표 점수에 따라 파트별 시간 배분과 오답 정리 방식이 달라집니다.'],
    tutoring: ['토익과외 알아보다 오셨나요?', '1:1에서는 이미 아는 파트보다 점수가 새는 구간을 집중적으로 다뤄야 합니다.', '현재 점수와 목표 점수 차이를 파트별로 나눠 준비합니다.'],
    general: ['토익 점수가 계속 비슷한가요?', '문제 수를 늘리기 전에 LC·RC에서 반복되는 오답 원인을 먼저 확인합니다.', '목표 점수에 필요한 파트를 우선해 시간 대비 효율을 높입니다.'],
    point: '현재 점수에서 목표 점수까지, 파트별로 필요한 점수를 계산합니다.'
  },
  'english-conversation': {
    academy: ['영어회화학원 알아보다 오셨나요?', '여럿이 듣는 수업에서 내가 실제로 말하는 시간이 얼마나 되는지 확인하세요.', '왕초보·직장인·성인은 필요한 상황과 시작점이 서로 다릅니다.'],
    tutoring: ['영어회화과외 알아보다 오셨나요?', '1:1의 핵심은 내 수준에서 직접 말하고 바로 피드백 받는 시간입니다.', '문법 설명보다 실제 대화에서 문장을 꺼내는 연습을 늘립니다.'],
    general: ['영어는 오래 했는데 막상 말하려면 막히나요?', '알고 있는 단어와 문법을 실제 문장으로 꺼내는 연습이 부족할 수 있습니다.', '현재 말하기 수준과 필요한 상황부터 확인합니다.'],
    point: '더 많이 외우기 전에, 지금 말문이 막히는 이유부터 찾습니다.'
  }
}

const fallback = courseCopy['english-conversation']

export function parseLandingSlug(slug:string): {courseSlug:string; intent:SearchIntent} {
  if (slug.endsWith('-academy')) return { courseSlug: slug.slice(0,-8), intent:'academy' }
  if (slug.endsWith('-tutoring')) return { courseSlug: slug.slice(0,-9), intent:'tutoring' }
  return { courseSlug:slug, intent:'general' }
}

export function getConversionIntent(courseSlug:string, intent:SearchIntent, regionName:string, courseName:string): ConversionIntent {
  const copy = courseCopy[courseSlug] ?? fallback
  const lines = copy[intent]
  const intentLabel = intent === 'academy' ? '학원' : intent === 'tutoring' ? '과외' : '1:1 수업'
  const heroQuestion = lines[0].replace(`${courseName}${intentLabel}`, `${regionName} ${courseName}${intentLabel}`)
  return {
    course: courseSlug,
    intent,
    slug: intent === 'general' ? courseSlug : `${courseSlug}-${intent}`,
    label: `${regionName} ${courseName}${intent === 'general' ? '' : intentLabel}`,
    heroQuestion,
    heroCopy: lines[1],
    cards: [
      { kicker:'검색하신 이유부터 봅니다', title:lines[0], lines:[lines[1], lines[2]], emphasis:copy.point },
      { kicker:'같은 시험도 준비는 달라집니다', title:'내 목표에서 거꾸로 계산합니다', lines:['현재 수준과 목표 결과를 먼저 확인합니다.','이미 되는 영역보다 결과를 막는 영역에 시간을 더 배분합니다.'], emphasis:copy.point },
      { kicker:'수업을 비교할 때', title:intent === 'academy' ? '진도보다 내가 직접 하는 시간을 보세요' : intent === 'tutoring' ? '1:1이라는 이름보다 피드백 방식을 보세요' : '설명보다 실제 수행과 피드백을 보세요', lines:['직접 말하거나 쓰고, 피드백을 받은 뒤 다시 해보는 과정이 있어야 합니다.','무료 시범수업에서 현재 수준과 수업 방향을 먼저 확인할 수 있습니다.'] },
    ],
    cta: `${regionName} ${courseName} 무료 시범수업 신청하기`,
  }
}
