import { getRegion } from './regions'
import { getCourse } from './courses'
import { isLandingPage } from './landing-pages'

export type LandingContent = { title:string; description:string; eyebrow:string; h1:string; intro:string; targetKeywords:string[]; sections:{title:string; paragraphs:string[]; bullets?:string[]}[]; faq:{q:string;a:string}[]; related:{href:string;label:string}[]; ctaTitle:string;ctaText:string }

const courseAngles: Record<string, {goal:string; score:string; practice:string; second:string}> = {
  'english-conversation': {goal:'실제 대화에서 문장을 바로 꺼내는 것',score:'생활·업무 상황에서 필요한 표현을 안정적으로 사용하는 것',practice:'질문-답변-확장 발화',second:'성인·직장인·왕초보'},
  opic:{goal:'질문을 듣고 자신의 경험을 자연스럽게 이어 말하는 것',score:'IM3·IH·AL 등 목표 등급',practice:'주제별 답변 구성과 돌발 질문 대응',second:'오픽학원·오픽과외'},
  'toeic-speaking':{goal:'제한 시간 안에 유형에 맞는 답변을 완성하는 것',score:'목표 점수와 레벨',practice:'유형별 답변 구조와 녹음 피드백',second:'토익스피킹학원·토익스피킹과외'},
  toeic:{goal:'LC와 RC에서 반복되는 약점을 줄이는 것',score:'700·800·900 등 목표 점수',practice:'파트별 오답 원인 분석과 시간 관리',second:'토익학원·토익과외'},
  ielts:{goal:'네 영역의 현재 밴드와 목표 밴드 차이를 줄이는 것',score:'6.0·6.5·7.0 등 목표 Band',practice:'Speaking 발화와 Writing 논리·첨삭',second:'아이엘츠학원·아이엘츠과외'},
  toefl:{goal:'아카데믹 영어를 읽고 듣고 말하고 쓰는 통합 능력을 높이는 것',score:'지원 학교에 필요한 목표 점수',practice:'Speaking·Writing의 근거 구성과 시간 관리',second:'토플학원·토플과외'},
  gtelp:{goal:'목표 점수에 필요한 문법·청취·독해 점수를 효율적으로 확보하는 것',score:'G-TELP Level 2와 65점 등 목표',practice:'빈출 문법과 영역별 시간 배분',second:'지텔프학원·지텔프과외'},
  'english-writing':{goal:'목적에 맞는 논리와 문장으로 글을 완성하는 것',score:'에세이·아카데믹·시험 Writing 목적',practice:'구조 설계-작성-첨삭-재작성',second:'영어라이팅·영어에세이 첨삭'},
  'english-interview':{goal:'예상 질문에 자신의 경험을 영어로 설득력 있게 전달하는 것',score:'취업·외국계·입학 인터뷰 목적',practice:'답변 구조와 꼬리질문 실전 연습',second:'영어면접·영어인터뷰'},
  'international-school':{goal:'학교 수업과 입학 과정에서 필요한 영어를 준비하는 것',score:'학년·학교·입학 일정에 맞는 목표',practice:'Speaking·Writing·Interview를 목적별로 분리',second:'국제학교 영어·입학준비'},
  'study-abroad':{goal:'출국 이후 실제 학업과 생활에서 필요한 영어를 준비하는 것',score:'출국 시점과 학교 요구 수준',practice:'회화·아카데믹 Writing·Interview',second:'유학영어·출국 전 영어'}
}

export function getLandingContent(regionSlug:string, courseSlug:string): LandingContent | undefined {
  if(!isLandingPage(regionSlug,courseSlug)) return undefined
  const region=getRegion(regionSlug); const course=getCourse(courseSlug); const angle=courseAngles[courseSlug]
  if(!region||!course||!angle) return undefined
  const areaText=region.localAreas.slice(0,3).join('·')
  return {
    title:`${region.name} ${course.name} 1:1 수업 | 목표별 준비`,
    description:`${region.name} ${course.name} 준비 방법과 1:1 수업 선택 기준을 안내합니다. 현재 수준, 목표, 시험·사용 목적에 맞춰 필요한 연습을 확인하세요.`,
    eyebrow:`${region.name} · ${course.name}`,
    h1:`${region.name} ${course.name}, 목표에 맞는 1:1 준비 방법`,
    intro:`${region.name}에서 ${course.name} 수업을 찾는다면 위치나 수업 횟수부터 정하기보다 현재 수준과 목표를 먼저 확인하는 것이 좋습니다. ${course.name}에서 중요한 것은 ${angle.goal}입니다. ${areaText} 등 어느 생활권에서 검색하더라도 화상 수업이라면 이동 거리보다 실제 연습량과 피드백 방식을 우선해 비교할 수 있습니다.`,
    targetKeywords:[`${region.name} ${course.name}`,`${region.name} ${angle.second.split('·')[0]}`,`${region.name} ${angle.second.split('·')[1]||'1:1 수업'}`,angle.score],
    sections:[
      {title:`${course.name} 준비 전, 현재 수준부터 확인하세요`,paragraphs:[`같은 목표를 가지고 있어도 시작점은 다릅니다. 이미 기본 문장을 빠르게 만들 수 있는 학습자와 단어를 조합해 짧게 답하는 학습자는 같은 교재를 같은 속도로 진행할 필요가 없습니다. 첫 단계에서는 ${angle.score}만 정하기보다 실제 수행 수준을 확인해야 합니다.`,`진단에서는 알고 있는 지식보다 실제로 말하거나 쓰는 과정에서 어디에서 막히는지를 보는 편이 좋습니다. 그 결과를 기준으로 학습량을 배분하면 불필요한 반복을 줄일 수 있습니다.`]},
      {title:`${region.name}에서 수업을 비교할 때 '내가 직접 하는 시간'을 보세요`,paragraphs:[`${course.name}은 설명을 오래 듣는 것만으로 결과를 확인하기 어렵습니다. 수업 중 ${angle.practice}을 직접 수행하고, 피드백을 받은 뒤 다시 시도하는 시간이 충분한지 확인하는 것이 중요합니다.`,`특히 일정이 바쁜 성인이나 학생이라면 한 번의 수업 시간을 길게 잡는 것보다 복습과 재연습이 가능한 주기를 만드는 것이 더 효과적일 수 있습니다.`],bullets:['현재 수준에 맞는 과제량','수업 중 직접 말하거나 쓰는 시간','피드백 후 재시도 과정']},
      {title:`${angle.score}에 맞춰 학습 우선순위를 정하세요`,paragraphs:[`목표가 명확할수록 모든 영역을 같은 비중으로 공부할 필요는 없습니다. ${course.name}에서 자주 막히는 영역과 결과에 직접 영향을 주는 요소를 먼저 찾아 우선순위를 정하는 편이 효율적입니다.`,`단기간 목표라면 실전 형식에 익숙해지는 과정이 중요하고, 기초가 부족하다면 실전 문제만 반복하기보다 필요한 문장·어휘·구조를 함께 보완해야 합니다.`]},
      {title:`${areaText} 등 ${region.name} 생활권에서 화상 1:1을 활용한다면`,paragraphs:[`화상 수업은 지역 내 이동 시간을 줄이고 일정 선택 폭을 넓힐 수 있습니다. 다만 온라인이라는 이유만으로 좋은 수업이 되는 것은 아닙니다. 화면을 통해서도 학습자가 직접 수행하고 즉시 피드백을 받는 구조가 있어야 합니다.`,`따라서 ${region.name} ${course.name}을 찾을 때는 가까운 곳이라는 조건과 함께 목표 진단, 수업 기록, 복습 방식까지 확인해보는 것이 좋습니다.`]}
    ],
    faq:[
      {q:`${course.name} 왕초보도 시작할 수 있나요?`,a:'가능합니다. 다만 기초 단계에서는 실전 문제만 반복하기보다 필요한 문장 구조와 핵심 표현을 함께 보완하면서 난도를 높이는 편이 좋습니다.'},
      {q:'1:1 수업은 어떤 점을 확인해야 하나요?',a:'현재 수준 진단, 학습자가 직접 수행하는 시간, 피드백 후 재시도 과정, 목표에 맞는 과제량이 있는지 확인하는 것이 좋습니다.'},
      {q:`${region.name} 외 지역에서도 화상 수업이 가능한가요?`,a:'화상 방식이라면 거주 지역과 관계없이 일정 조율 후 진행할 수 있습니다. 지역 페이지는 해당 지역 검색자의 선택 기준을 돕기 위한 안내입니다.'}
    ],
    related:[{href:`/${region.slug}`,label:`${region.name} 영어회화`},{href:`/${course.slug}`,label:`${course.name} 학습 안내`},{href:'/english-writing',label:'영어 라이팅'},{href:'/english-interview',label:'영어 인터뷰'}],
    ctaTitle:`${course.name} 목표와 현재 수준부터 확인하세요`,
    ctaText:'목표만 정해두기보다 지금 가능한 수준을 확인하면 필요한 학습 기간과 우선순위를 더 구체적으로 정할 수 있습니다.'
  }
}
