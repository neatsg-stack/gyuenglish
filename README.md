# 규잉글리시 SEO Starter

Next.js App Router 기반 SEO 사이트 스타터입니다.

## 포함
- 지역 동적 페이지 `/[region]`
- 지역 × 과목 페이지 `/[region]/[course]`
- `generateMetadata` 기반 고유 title/description/canonical
- `sitemap.ts`, `robots.ts`
- JSON-LD Breadcrumb 기본 구조
- 지역/과목 데이터를 코드와 분리
- 모바일 우선 기본 CSS

## 가장 먼저 수정할 것
1. `lib/site.ts`의 실제 도메인
2. `data/regions.ts`에 1차 지역 추가
3. 각 과목 허브 페이지의 한국어 콘텐츠 작성
4. 지역×과목 페이지를 실제 공개할 조합만 선별

## 실행
```bash
npm install
npm run dev
```

## 주의
현재 `generateStaticParams()`는 샘플 지역 × 모든 과목 조합을 생성합니다. 실제 SEO 공개 전에는 검색 의도와 콘텐츠가 충분한 조합만 생성하도록 allow-list 방식으로 변경하는 것을 권장합니다.
