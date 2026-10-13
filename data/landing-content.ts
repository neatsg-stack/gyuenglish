import { getRegion } from './regions'
import { getCourse } from './courses'
import { isBaseLandingPage } from './landing-pages'
import type { SearchIntent } from './search-intents'
import { getRegionalEnglishLinks } from './region-links'

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


function hashText(value:string) { return [...value].reduce((sum,ch)=>((sum*31)+ch.charCodeAt(0))>>>0, 7) }

function getEnglishConversationContent(regionSlug:string, intent:SearchIntent, region:NonNullable<ReturnType<typeof getRegion>>, course:NonNullable<ReturnType<typeof getCourse>>): LandingContent {
  const h=hashText(regionSlug)
  const intentName=intent==='academy'?'학원':intent==='tutoring'?'과외':''
  const areas=region.localAreas.filter(Boolean)
  const areaText=areas.slice(0,3).join('·') || region.name
  const contextLabels = [
    '퇴근 후 일정에 맞춘 성인 회화', '왕초보의 짧은 문장 만들기', '여행 전 상황별 말하기',
    '업무에서 바로 쓰는 표현', '문법 지식을 실제 발화로 전환하기', '듣고 바로 답하는 반응 속도',
    '자기소개와 일상 설명', '질문을 이어가는 대화 연습', '발음보다 전달력부터 다듬기',
    '짧고 자주 반복하는 복습', '영어를 다시 시작하는 성인 학습', '목표 장면을 정한 맞춤 회화'
  ]
  const intros=[
    `${region.name}에서 영어회화를 다시 시작한다면 교재부터 고르기보다 영어를 실제로 쓰고 싶은 장면을 먼저 정하는 편이 좋습니다. ${areaText}처럼 생활권이 달라도 화상 1:1 수업에서는 이동 거리보다 가능한 시간과 발화량을 기준으로 비교할 수 있습니다.`,
    `${region.name} 영어회화를 찾는 사람의 출발점은 서로 다릅니다. 단어는 알지만 문장이 바로 나오지 않는 경우와 기본 문장 구조부터 필요한 경우는 같은 방식으로 시작하기 어렵습니다. 먼저 질문을 듣고 어느 정도 길이로 답할 수 있는지 확인하는 것이 좋습니다.`,
    `성인 영어회화는 오래 앉아 공부한 시간보다 실제로 입으로 문장을 만들어 본 횟수가 중요합니다. ${region.name}에서 1:1 수업을 비교한다면 설명을 듣는 시간보다 직접 답하고, 수정받고, 같은 내용을 다시 말하는 과정이 충분한지 살펴보세요.`,
    `${region.name}에서 직장인 영어회화를 알아본다면 '주 몇 회'보다 먼저 일정 안에서 반복 가능한 학습량을 계산해보는 것이 현실적입니다. 업무·여행·일상 중 우선순위를 정하면 필요한 표현과 연습 범위도 훨씬 선명해집니다.`,
    `${region.name} 영어회화의 시작점은 영어 지식의 양만으로 정하기 어렵습니다. 읽으면 이해되는 문장도 실제 질문을 들었을 때 바로 나오지 않을 수 있기 때문에 듣기 이해와 문장 생성 속도를 함께 확인해야 합니다.`,
    `${areaText}에서 영어회화를 검색하고 있다면 가까운 수업인지와 함께 내 목표에 맞게 말할 시간이 확보되는지도 비교해보세요. 특히 왕초보와 직장인은 같은 '회화'라도 필요한 문장 길이와 복습 방식이 다를 수 있습니다.`
  ]
  const pool=[
    {title:'왕초보라면 긴 프리토킹보다 짧은 답변부터',paragraphs:[`처음부터 긴 대화를 이어가려 하면 알고 있는 단어도 잘 떠오르지 않을 수 있습니다. 한 문장으로 답한 뒤 이유나 경험을 한 문장 더 붙이는 방식으로 발화 길이를 늘리는 편이 부담이 적습니다.`,`기본 문장을 여러 상황에 바꿔 말해보면 외운 표현을 그대로 반복하는 단계에서 벗어나 실제 대화에 필요한 문장 생성 감각을 만들 수 있습니다.`]},
    {title:'문법은 아는데 입이 멈춘다면 인출 속도를 확인하세요',paragraphs:[`독해나 문법 문제는 풀 수 있는데 대화에서 멈춘다면 새로운 문법 지식보다 이미 아는 표현을 빠르게 꺼내는 연습이 필요할 수 있습니다. 질문을 듣고 제한된 시간 안에 짧게라도 답하는 훈련이 도움이 됩니다.`,`수정된 문장을 눈으로만 확인하지 말고 같은 뜻을 다시 말하거나 다른 주제로 바꿔 말해야 다음 대화에서 사용할 가능성이 높아집니다.`]},
    {title:'직장인 회화는 업무에서 마주치는 장면부터 좁히세요',paragraphs:[`회의, 전화, 해외 고객 응대, 간단한 스몰토크처럼 실제로 영어가 필요한 장면을 나누면 학습 범위를 줄일 수 있습니다. 모든 비즈니스 표현을 외우기보다 자주 만나는 상황을 먼저 반복하는 편이 현실적입니다.`,`일정이 불규칙하다면 긴 수업 한 번보다 수업 사이에 짧은 복습을 넣을 수 있는지까지 함께 고려해야 학습을 유지하기 쉽습니다.`]},
    {title:'여행 영어는 암기한 문장 다음 질문까지 대비해야 합니다',paragraphs:[`공항·호텔·식당처럼 예상 가능한 상황은 핵심 표현을 준비할 수 있지만 실제 대화에서는 추가 질문이 이어집니다. 정해진 문장만 외우기보다 상대의 질문을 확인하고 필요한 정보를 짧게 답하는 연습이 필요합니다.`,`시간, 장소, 숫자, 요청처럼 여행 중 자주 쓰는 요소를 자신의 실제 일정과 연결해 말해보면 기억에도 오래 남고 응용하기도 쉬워집니다.`]},
    {title:'1:1 수업은 피드백 뒤에 다시 말하는 시간이 핵심입니다',paragraphs:[`1:1의 장점은 학습자가 반복해서 틀리는 부분과 막히는 지점을 바로 확인할 수 있다는 점입니다. 모든 오류를 한꺼번에 고치기보다 의미 전달을 방해하는 문제부터 우선순위를 정하는 편이 좋습니다.`,`수업 후에는 무엇이 틀렸는지만 남기기보다 다음에 어떤 표현으로 바꿔 말할지 기록하고 직접 재시도할 수 있어야 합니다.`]},
    {title:'수업 횟수보다 수업 사이의 복습 간격을 함께 보세요',paragraphs:[`주 2회와 주 3회 중 어느 쪽이 항상 더 좋다고 정하기는 어렵습니다. 목표 시점과 생활 패턴, 개인 복습 가능 시간을 함께 봐야 합니다.`,`짧은 음성 연습이나 질문에 다시 답하기처럼 부담이 적은 복습을 수업 사이에 넣으면 다음 시간에 표현을 처음부터 다시 떠올리는 시간을 줄일 수 있습니다.`]},
    {title:`${areaText} 생활권에서 화상 1:1을 비교한다면`,paragraphs:[`${region.name} 안에서도 이동 시간과 생활 패턴은 다릅니다. 화상 수업은 위치보다 가능한 시간대, 수업 빈도, 피드백 방식에 초점을 맞출 수 있다는 장점이 있습니다.`,`온라인 수업도 단순 영상 시청이 아니라 실시간으로 질문을 듣고 답하며 화면 공유나 채팅 기록으로 수정 내용을 남길 수 있는지 확인하는 것이 좋습니다.`]},
    {title:'영어회화 목표를 실제 행동으로 바꿔보세요',paragraphs:[`'자연스럽게 말하고 싶다'는 목표만으로는 진도를 판단하기 어렵습니다. 3분 동안 자기 경험 설명하기, 여행지에서 요청하기, 업무 소개하기처럼 실제 행동으로 바꾸면 필요한 표현을 선별하기 쉽습니다.`,`목표가 구체적이면 어휘와 문장 구조의 범위도 줄일 수 있어 공부할 내용이 지나치게 넓어지는 것을 막을 수 있습니다.`]},
    {title:'듣기와 말하기는 실제 대화처럼 연결해서 연습하세요',paragraphs:[`대화에서는 상대의 질문을 이해해야 답변도 이어집니다. 자주 쓰는 질문 패턴을 듣고 핵심 정보를 잡은 뒤 자신의 문장으로 답하는 연습을 함께 하는 편이 좋습니다.`,`처음에는 천천히 정확하게 답하고 익숙해지면 질문 속도와 표현을 바꾸면서 실제 대화에 가까운 형태로 확장할 수 있습니다.`]},
    {title:'무료 체험에서는 선생님보다 내 발화 시간을 확인하세요',paragraphs:[`체험 수업에서 설명이 친절한지만 보기보다 내가 실제로 얼마나 말했는지, 막힌 표현을 어떻게 수정했는지, 다음 연습 방향이 구체적으로 제시되는지를 살펴보는 편이 좋습니다.`,`현재 수준을 확인하지 않고 모든 학습자에게 같은 교재와 진도를 권한다면 내 목표와 맞는지 한 번 더 비교해볼 필요가 있습니다.`]},
    {title:'발음 교정은 전달을 막는 부분부터 우선하세요',paragraphs:[`처음부터 원어민과 똑같은 발음을 목표로 하면 말하는 것 자체가 부담스러워질 수 있습니다. 상대가 이해하기 어려운 소리, 강세, 끊어 읽기처럼 전달력에 영향을 주는 부분부터 정리하는 편이 효율적입니다.`,`발음만 따로 반복하기보다 실제 문장 안에서 말하고 녹음해보면 자신의 습관을 더 쉽게 확인할 수 있습니다.`]},
    {title:'표현을 많이 외우기보다 자주 쓰는 문장을 내 것으로 만드세요',paragraphs:[`새로운 표현을 계속 추가하면 아는 문장은 늘어도 실제 대화에서 꺼내는 속도는 그대로일 수 있습니다. 자주 필요한 표현을 자신의 경험과 상황에 맞춰 여러 번 바꿔 말하는 과정이 필요합니다.`,`한 번 배운 문장을 질문형, 과거형, 이유 설명처럼 조금씩 변형하면 적은 표현으로도 더 다양한 대화를 만들 수 있습니다.`]}
  ]
  const stride=[1,5,7,11][h%4]
  const start=h%pool.length
  const sections=Array.from({length:6},(_,i)=>pool[(start+i*stride)%pool.length])
  const faqPool=[
    {q:`${region.name}에서 영어 왕초보도 1:1 회화를 시작할 수 있나요?`,a:'가능합니다. 처음에는 긴 프리토킹보다 짧은 기본 문장과 질문·답변부터 시작해 발화 길이를 단계적으로 늘리는 방식이 적합합니다.'},
    {q:'화상 영어회화도 실시간 교정을 받을 수 있나요?',a:'실시간 수업이라면 발화 오류를 바로 수정하고 화면 공유나 채팅으로 표현을 기록할 수 있습니다. 중요한 것은 수정 뒤에 학습자가 직접 다시 말하는 시간이 충분한지입니다.'},
    {q:'직장인은 주 몇 회 영어회화가 적당한가요?',a:'정해진 횟수보다 목표 시점과 복습 가능한 시간을 함께 보는 것이 좋습니다. 수업 사이에 짧게라도 발화를 반복할 수 있는 일정인지 확인해보세요.'},
    {q:'문법 공부와 회화를 같이 해야 하나요?',a:'기초 문장 구성이 어렵다면 필요한 문법을 회화와 함께 보완할 수 있습니다. 이미 문법 지식이 있다면 새로운 이론보다 알고 있는 구조를 실제 문장으로 빠르게 만드는 연습의 비중을 높이는 편이 좋습니다.'},
    {q:`${areaText}에서도 온라인으로 수업할 수 있나요?`,a:`화상 1:1 방식이라면 ${region.name} 내 세부 생활권과 관계없이 일정 조율 후 진행할 수 있습니다. 이동보다 수업 시간과 학습 방식의 적합성을 중심으로 비교할 수 있습니다.`},
    {q:'무료 체험에서 무엇을 확인하면 좋나요?',a:'내가 직접 말한 시간, 오류를 수정하는 방식, 수업 후 복습 방향이 구체적인지 확인해보세요. 현재 수준과 목표에 따라 수업 계획이 달라지는지도 중요한 비교 기준입니다.'}
  ]
  const faq=Array.from({length:3},(_,i)=>faqPool[(h+i*2)%faqPool.length])
  const h1s=[
    `${region.name} 영어회화${intentName}, 성인 1:1 수업을 고르는 기준`,
    `${region.name} 영어회화${intentName} 시작 전 확인할 1:1 학습 방법`,
    `${region.name} 영어회화${intentName}, 왕초보부터 직장인까지 준비하는 법`,
    `${region.name} 1:1 영어회화${intentName}, 말하기가 막힐 때 바꿔야 할 연습`,
    `${region.name} 성인 영어회화${intentName}, 내 수준에 맞춰 시작하는 방법`,
    `${region.name} 영어회화${intentName} 찾을 때 먼저 볼 발화·피드백 기준`
  ]
  const h1=h1s[h%h1s.length]
  const regionalLinks=getRegionalEnglishLinks(regionSlug)
  const related=[
    ...regionalLinks,
    {href:'/english-conversation',label:'영어회화 학습 안내'},
    {href:'/guide/beginner-english',label:'왕초보 영어 시작 가이드'},
    {href:'/opic',label:'오픽'},
    {href:'/toeic-speaking',label:'토익스피킹'}
  ].filter((item,index,arr)=>arr.findIndex(x=>x.href===item.href)===index).slice(0,12)
  return {
    title:`${h1} | 규잉글리시`,
    description:`${region.name} 영어회화${intentName}을 찾는 성인·직장인·왕초보를 위한 안내입니다. ${contextLabels[h%contextLabels.length]}을 중심으로 현재 발화 수준, 1:1 피드백과 복습 방법을 확인해보세요.`,
    eyebrow:`${region.name} · 영어회화${intentName}`,
    h1,
    intro:intros[h%intros.length],
    targetKeywords:[`${region.name} 영어회화${intentName}`,`${region.name} 성인영어회화`,`${region.name} 직장인영어회화`,`${region.name} 1:1 영어회화`],
    sections,
    faq,
    related,
    ctaTitle:'현재 수준과 영어를 쓸 장면부터 확인하세요',
    ctaText:'회화 목표와 가능한 일정이 정리되면 필요한 연습 순서와 수업 빈도를 더 구체적으로 정할 수 있습니다.'
  }
}

export function getLandingContent(regionSlug:string, courseSlug:string, intent:SearchIntent='general'): LandingContent | undefined {
  if(!isBaseLandingPage(regionSlug,courseSlug)) return undefined
  const region=getRegion(regionSlug); const course=getCourse(courseSlug); const angle=courseAngles[courseSlug]
  if(!region||!course||!angle) return undefined
  if(courseSlug==='english-conversation') return getEnglishConversationContent(regionSlug,intent,region,course)
  const areaText=region.localAreas.slice(0,3).join('·')
  return {
    title:`${region.name} ${course.name}${intent==='academy'?'학원':intent==='tutoring'?'과외':' 1:1 수업'} | 목표별 준비`,
    description:`${region.name} ${course.name}${intent==='academy'?'학원':intent==='tutoring'?'과외':' 1:1 수업'}을 찾을 때 확인할 준비 방법과 선택 기준을 안내합니다. 현재 수준, 목표, 시험·사용 목적에 맞춰 필요한 연습을 확인하세요.`,
    eyebrow:`${region.name} · ${course.name}${intent==='academy'?'학원':intent==='tutoring'?'과외':''}`,
    h1:`${region.name} ${course.name}${intent==='academy'?'학원':intent==='tutoring'?'과외':''}, 목표에 맞는 준비 방법`,
    intro:`${region.name}에서 ${course.name}${intent==='academy'?'학원':intent==='tutoring'?'과외':' 수업'}을 찾는다면 위치나 수업 횟수부터 정하기보다 현재 수준과 목표를 먼저 확인하는 것이 좋습니다. ${course.name}에서 중요한 것은 ${angle.goal}입니다. ${areaText} 등 어느 생활권에서 검색하더라도 화상 수업이라면 이동 거리보다 실제 연습량과 피드백 방식을 우선해 비교할 수 있습니다.`,
    targetKeywords:[`${region.name} ${course.name}${intent==='academy'?'학원':intent==='tutoring'?'과외':''}`,`${region.name} ${angle.second.split('·')[0]}`,`${region.name} ${angle.second.split('·')[1]||'1:1 수업'}`,angle.score],
    sections:[
      {title:`${course.name} 준비 전, 현재 수준부터 확인하세요`,paragraphs:[`같은 목표를 가지고 있어도 시작점은 다릅니다. 이미 기본 문장을 빠르게 만들 수 있는 학습자와 단어를 조합해 짧게 답하는 학습자는 같은 교재를 같은 속도로 진행할 필요가 없습니다. 첫 단계에서는 ${angle.score}만 정하기보다 실제 수행 수준을 확인해야 합니다.`,`진단에서는 알고 있는 지식보다 실제로 말하거나 쓰는 과정에서 어디에서 막히는지를 보는 편이 좋습니다. 그 결과를 기준으로 학습량을 배분하면 불필요한 반복을 줄일 수 있습니다.`]},
      {title:`${region.name}에서 수업을 비교할 때 '내가 직접 하는 시간'을 보세요`,paragraphs:[`${course.name}은 설명을 오래 듣는 것만으로 결과를 확인하기 어렵습니다. 수업 중 ${angle.practice}을 직접 수행하고, 피드백을 받은 뒤 다시 시도하는 시간이 충분한지 확인하는 것이 중요합니다.`,`특히 일정이 바쁜 성인이나 학생이라면 한 번의 수업 시간을 길게 잡는 것보다 복습과 재연습이 가능한 주기를 만드는 것이 더 효과적일 수 있습니다.`],bullets:['현재 수준에 맞는 과제량','수업 중 직접 말하거나 쓰는 시간','피드백 후 재시도 과정']},
      {title:`${angle.score}에 맞춰 학습 우선순위를 정하세요`,paragraphs:[`목표가 명확할수록 모든 영역을 같은 비중으로 공부할 필요는 없습니다. ${course.name}에서 자주 막히는 영역과 결과에 직접 영향을 주는 요소를 먼저 찾아 우선순위를 정하는 편이 효율적입니다.`,`단기간 목표라면 실전 형식에 익숙해지는 과정이 중요하고, 기초가 부족하다면 실전 문제만 반복하기보다 필요한 문장·어휘·구조를 함께 보완해야 합니다.`]},
      {title:`${course.name}${intent==='academy'?'학원':intent==='tutoring'?'과외':' 수업'}을 고를 때 확인할 기준`,paragraphs:[`검색 결과가 많을수록 수업 이름이나 광고 문구보다 실제 진행 방식을 비교하는 편이 좋습니다. ${course.name}에서는 ${angle.practice}이 핵심이므로, 설명을 듣는 시간과 학습자가 직접 수행하는 시간이 어떻게 구성되는지 확인해보세요.`,`또한 목표까지 남은 기간에 따라 수업의 우선순위가 달라질 수 있습니다. 시간이 충분하다면 기초와 실전 적용을 함께 쌓을 수 있지만, 시험이나 출국 일정이 가까운 경우에는 결과에 직접 영향을 주는 약점을 먼저 정리하는 방식이 현실적입니다.`],bullets:['첫 수업 전 현재 수준을 확인하는지','목표와 기간에 맞춰 진도를 조정하는지','수업 후 복습할 자료나 피드백이 남는지','약점이 바뀌면 수업 계획도 함께 조정되는지']},
      {title:`${region.name} ${course.name}, 단기간 준비와 장기 준비는 다릅니다`,paragraphs:[`단기간에는 새로운 내용을 넓게 배우기보다 이미 알고 있는 내용을 실제 결과로 연결하는 연습의 비중을 높이는 편이 좋습니다. 반대로 기초부터 준비할 시간이 있다면 어휘·문장 구조·이해력 같은 기반을 보완하면서 실전 난도를 단계적으로 높일 수 있습니다.`,`따라서 상담 단계에서 단순히 주 몇 회 수업을 할지 결정하기보다 목표 시점, 현재 수준, 개인적으로 확보할 수 있는 복습 시간을 함께 확인해야 합니다. 같은 ${angle.score}을 목표로 하더라도 이 조건에 따라 필요한 수업 계획은 달라질 수 있습니다.`]},
      {title:`${areaText} 등 ${region.name} 생활권에서 화상 1:1을 활용한다면`,paragraphs:[`화상 수업은 지역 내 이동 시간을 줄이고 일정 선택 폭을 넓힐 수 있습니다. 다만 온라인이라는 이유만으로 좋은 수업이 되는 것은 아닙니다. 화면을 통해서도 학습자가 직접 수행하고 즉시 피드백을 받는 구조가 있어야 합니다.`,`따라서 ${region.name} ${course.name}을 찾을 때는 가까운 곳이라는 조건과 함께 목표 진단, 수업 기록, 복습 방식까지 확인해보는 것이 좋습니다. 특히 일정이 불규칙하다면 고정 시간만 가능한지, 사전에 조율할 수 있는 범위가 어디까지인지도 함께 살펴보면 실제 학습을 오래 유지하는 데 도움이 됩니다.`]}
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
