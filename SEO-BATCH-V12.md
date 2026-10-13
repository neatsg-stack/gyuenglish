# 규잉글리시 대규모 지역 SEO V12

## 적용 범위
- 지역 데이터 393개 유지, slug 393개 전부 고유
- 영어회화 랜딩 URL 393개 생성 가능
- Core 103 / Growth 160 / Longtail 130 색인 단계 유지
- Core 영어회화 페이지만 1차 sitemap/index 대상으로 유지
- Growth/Longtail은 페이지 접근 및 내부 링크는 허용하되 noindex, follow 유지

## 이번 대규모 개선
1. 영어회화 하단 HTML 콘텐츠를 12개 주제 풀, 6개 도입 유형, 6개 H1 유형, 6개 FAQ 풀의 조합으로 확대
2. 지역 slug hash에 따라 섹션 시작점과 순서를 다르게 구성해 페이지 구조 반복을 축소
3. 지역별 localAreas를 실제 문장과 FAQ에 반영
4. 상위/인접 지역(nearby), 하위 생활권, 같은 광역권 Core 페이지를 자동 연결하는 내부 링크 그래프 추가
5. 하단 SEO 첫 문단이 meta description 복제가 아니라 실제 고유 intro를 출력하도록 수정
6. 왕초보 가이드, 영어회화 허브, 오픽, 토익스피킹 등 주제 허브와 연결
7. SEO QA 스크립트 추가: scripts/seo-qa.mjs

## 색인 정책
대규모 생성 페이지를 한 번에 모두 색인시키지 않습니다. 네이버/Google의 중복·대량 저가치 콘텐츠 리스크를 줄이기 위해 Core만 우선 색인하고, Growth/Longtail은 실제 콘텐츠 보강 후 승격합니다.

## 검증
- regions=393
- unique slugs=393
- core=103
- growth=160
- longtail=130
- 로컬 npm install은 실행 환경 제한으로 완료되지 않아 next build는 미검증. Vercel Preview/Production build에서 최종 확인 필요.
