# Phase 1. 온페이지 즉시 개선 (Week 1, 3~4일)

> **목표**: 코드 변경만으로 #58 → #30~40대 진입
> **우선순위**: ★★★★★
> **예상 효과**: +10~20단
> **갱신일**: 2026-05-13 (현재 코드 상태 반영하여 보강)

---

## 1.1 JSON-LD 구조화 데이터 보강 (수정됨)

### ★ 현재 상태 재진단 (2026-05-13 코드 기준)

`00-diagnosis.md`의 "schema_types: 0개"는 **outdated**. 실제 코드 검증 결과:

| Schema | 현재 구현 위치 | 상태 |
|---|---|---|
| Organization | `app/layout.jsx` (@graph) | ✅ 구현됨 |
| WebSite + SearchAction | `app/layout.jsx` (@graph) | ✅ 구현됨 |
| ItemList (브랜드) | `app/page.jsx` `brandSitesJsonLd` | ✅ 구현됨 |
| ItemList (블로그 토픽) | `app/page.jsx` `blogTopicsJsonLd` | ✅ 구현됨 |
| FAQPage | `app/page.jsx` `faqJsonLd` | ✅ 구현됨 |
| **BreadcrumbList** | (미구현) | ❌ 누락 |
| **VideoObject** | (미구현 — `has_video=false`와 연동) | ❌ 누락 |
| **Article** (블로그 토픽 개별) | ItemList 내부에만 존재 | ⚠ 보강 여지 |

### 추가 작업 항목

#### A. BreadcrumbList 추가 (메인 + 4개 서브 라우트)

서브 라우트: `/address-verification`, `/brands`, `/links`, `/report`, `/updates`

`components/Schema/BreadcrumbSchema.jsx` 신규 생성:

```jsx
import { BASE_URL } from '@/lib/constants';

export default function BreadcrumbSchema({ items }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${BASE_URL}${it.path}`,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
```

각 페이지 사용 예 (`app/brands/page.jsx`):
```jsx
<BreadcrumbSchema items={[
  { name: '홈', path: '/' },
  { name: '브랜드 비교', path: '/brands' },
]} />
```

#### B. VideoObject 추가 (Phase 3 동영상 임베드와 동시 적용)

YouTube 영상 임베드 후 메인 페이지에 1개:

```js
const videoJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: '타임쉐어링크 90초 사용법',
  description: '주소모음·링크모음 1위 검증 플랫폼 사용 가이드',
  thumbnailUrl: `${BASE_URL}/images/video-thumb.jpg`,
  uploadDate: '2026-05-20',
  contentUrl: 'https://www.youtube.com/watch?v=XXXXX',
  embedUrl: 'https://www.youtube.com/embed/XXXXX',
};
```

#### C. Article 스키마 격상 (선택, 효과 ★★)

현재 `blogTopicsJsonLd`는 ItemList 안에 Article만 임베드. 각 토픽을 독립 Article + `mainEntityOfPage`로 격상 시 Article 리치 결과 노출 가능. 단, 단일 페이지 H2 통합 패턴(메모리 `feedback_isweb_blog_single_page`)을 깨지 않도록 `@id`는 fragment(`#topic-xxx`) 유지.

### 작업 체크리스트 (수정)
- [x] Organization / WebSite — 이미 구현됨
- [x] FAQPage / ItemList — 이미 구현됨
- [ ] `components/Schema/BreadcrumbSchema.jsx` 신규 작성
- [ ] 5개 서브 라우트(`/address-verification`, `/brands`, `/links`, `/report`, `/updates`)에 Breadcrumb 삽입
- [ ] VideoObject (Phase 3 동영상 추가 시 동시)
- [ ] `https://search.google.com/test/rich-results` 에 https://www.timesharelink.com/ 통과 확인
- [ ] Google Search Console > 향상 보고서: FAQ / ItemList / Breadcrumb 항목 정상 인식 확인 (배포 후 7~14일)

---

## 1.2 메타 정보 미세조정

### 현재 → 개선안

**타이틀** (39자 → 한국어 브랜드 병기)
```
[현재]  주소모음 | 2026 최신 링크모음 사이트 - timesharelink
[개선]  주소모음·링크모음 1위 검증 사이트 2026 - 타임쉐어링크
```
- "1위" 키워드로 CTR ↑
- "·" 사용으로 두 키워드 모두 강조
- 한국어 브랜드 "타임쉐어링크" 노출

**메타 디스크립션** (114자 → 클릭률 최적화)
```
[현재]  주소모음 & 링크모음 사이트를 찾고 계신가요? timesharelink에서 매일 검증된 최신 링크를 카테고리별로 한눈에 확인하세요. HTTPS 보안 인증 완료, 실시간 업데이트로 안전한 접속을 보장합니다.

[개선]  ✅ 주소모음·링크모음 1위 사이트. 매일 자동 검증된 18개 브랜드 최신 주소를 한눈에. 5단계 보안 검증 + 검증로그 100% 공개로 가장 안전한 접속을 보장합니다. (2026년 5월 업데이트)
```
- 체크마크 이모지로 시각 신호
- 구체 숫자(18개 브랜드, 5단계)로 신뢰도
- 최신 월 명시로 freshness 신호

**H1**
```
[현재]  주소모음 2026 최신 링크모음 사이트
[개선]  주소모음·링크모음 1위 검증 플랫폼 (2026 최신)
```

### 적용 위치 (실제 파일 매핑)

| 변경 항목 | 파일 | 라인 / 키 |
|---|---|---|
| 타이틀 (default) | `app/layout.jsx` | `metadata.title.default` (line 20) |
| 타이틀 (홈) | `app/page.jsx` | `metadata.title` (line 22) |
| 메타 디스크립션 | `app/layout.jsx` | `metadata.description` (line 23~24) |
| OG title/description | `app/layout.jsx` | `metadata.openGraph` (line 38~45) |
| OG title/description (홈) | `app/page.jsx` | `metadata.openGraph` (line 28~32) |
| Twitter title/description | `app/layout.jsx` | `metadata.twitter` (line 46~50) |
| H1 | `components/HeroSection.jsx` | 24~28번째 줄 |

### 검증 명령
```powershell
# 빌드 후 메타 반영 확인
npm run build
# 배포 후 SERP에서 미리보기 강제 갱신 (Search Console)
# https://search.google.com/search-console > URL 검사 > "라이브 URL 테스트" → "색인 생성 요청"
```

---

## 1.3 이미지 10~15장 추가

현재 2개 (Hero unsplash 1장 + `public/logo.svg`) → 12개 이상으로 확장.
**현재 `public/images/` 디렉토리 자체가 없음** → 신규 생성 필요.

### 추가 위치 / 권장 내용

| 위치 | 이미지 | alt 텍스트 예시 |
|---|---|---|
| Hero 섹션 | 메인 비주얼 | "주소모음 링크모음 1위 사이트 timesharelink 메인" |
| 검증 시스템 섹션 | 5단계 검증 플로우 다이어그램 | "5단계 자동 보안 검증 프로세스" |
| 브랜드 총정리 (18개) | 브랜드별 로고/스크린샷 썸네일 | "주소킹 주소모음 사이트 스크린샷" 등 |
| 장단점 비교 | 비교 인포그래픽 | "주소모음 사이트 18개 비교 차트" |
| FAQ 섹션 | Q&A 일러스트 | "주소모음 자주 묻는 질문" |

### 기술적 요건
- 모든 이미지 WebP 변환 (Next.js `next/image` 자동)
- 적절한 width/height 명시 (CLS 방지)
- alt에 키워드 자연스럽게 포함 (스터핑 금지)
- public/images/ 하위에 카테고리별 정리

### 디렉토리 구조 (제안)

```
public/
  images/
    hero/
      main-visual.webp
      main-visual@2x.webp
    verification/
      flow-5step.webp
      flow-icon-https.svg
      flow-icon-redirect.svg
    brands/
      jusoking.webp
      yugiyu.webp
      ... (18개)
    compare/
      compare-chart.webp
    faq/
      faq-illustration.webp
```

### 외부 의존성 정리
- 현재 Hero 배경: `images.unsplash.com/photo-1681749140155-...` → **자체 호스팅 권장** (외부 의존 제거, CWV LCP 개선)
- 다운로드 후 `public/images/hero/`로 이동, `next/image` `src` 변경

### 작업 명령 예
```powershell
# 이미지 일괄 webp 변환 (cwebp 사용)
cwebp -q 80 source.png -o public\images\brands\jusoking.webp
```

---

## 1.4 앵커 텍스트 다양화

현재 내부 링크 64개. 동일 앵커 텍스트 반복 시 스팸 신호 가능.

### 다양화 전략

| 카테고리 | 앵커 텍스트 변형 |
|---|---|
| 검증 시스템 페이지 링크 | "검증 시스템 자세히 보기" / "5단계 검증 방법" / "주소 검증 절차" / "검증 로그 확인" |
| 메인 페이지 링크 | "주소모음 메인" / "링크모음 홈" / "전체 사이트 목록" |
| 제보 페이지 링크 | "주소 제보하기" / "오류 신고" / "사이트 추천" |
| 카테고리 페이지 | "포털 주소모음" / "스트리밍 링크모음" 등 |

---

## 1.5 콘텐츠 미세 보강

### 추가/수정 권장 사항

- **상단 인트로 첫 100자에 "주소모음 링크모음" 자연스럽게 2회 포함** (현재 양호하나 더 강화)
- **"1위" 키워드 자연 삽입** — "주소모음 1위 검증 플랫폼" 표현 5~7회 분산
- **LSI 키워드 보강** — "사이트 순위", "최신 주소 확인", "안전 검증", "도메인 변경", "대체 주소" 등
- **숫자/통계 강화** — "18개 브랜드 비교", "5단계 검증", "매일 N회 업데이트" 등 구체 숫자

---

## 1.6 작업 순서 (3~4일 일정)

| Day | 작업 | 산출물 |
|---|---|---|
| Day 1 (AM) | JSON-LD 5종 컴포넌트 작성 | `components/Schema/*` |
| Day 1 (PM) | Layout/Page에 스키마 삽입 + Rich Results Test | 스키마 검증 통과 |
| Day 2 | 이미지 10~15장 제작/추가 + alt 작성 | `public/images/*` |
| Day 3 (AM) | 타이틀/메타/H1 변경 | metadata 객체 갱신 |
| Day 3 (PM) | 콘텐츠 보강 + 앵커 다양화 | page.js 본문 갱신 |
| Day 4 | 빌드/배포/검증 + Search Console 제출 | Vercel 배포 + GSC URL 검사 |

---

## 1.7 검증 방법

배포 후 다음 도구로 검증:

```
seo_fetch_page (url=https://www.timesharelink.com)
  → schema_types 5개 확인
  → image_count 12+ 확인
  → 새 타이틀/메타 반영 확인

google_rank_check (keyword=주소모음, domain=timesharelink.com)
  → 배포 후 7일 후 재측정 (목표 #40 이내)
```

Google Rich Results Test: https://search.google.com/test/rich-results
PageSpeed Insights로 Core Web Vitals 측정.

---

## 1.8 인덱싱 가속 (Phase 5와 연계)

온페이지 배포가 완료되는 즉시 다음을 병렬 실행해서 Google 재크롤을 강제한다.

### 1.8.1 Search Console URL Inspection
- 메인 URL 1개 + 신규/변경 서브 라우트 전부 `https://search.google.com/search-console` > "URL 검사" > "색인 생성 요청"
- 일일 quota 약 10~12개 → 우선순위: `/` > `/links` > `/brands` > `/address-verification` > `/updates` > `/report` 순

### 1.8.2 Sitemap ping (Bing/Yandex만 동작 — Google은 GSC에서 처리)
```powershell
# Bing
curl "https://www.bing.com/ping?sitemap=https://www.timesharelink.com/sitemap.xml"
# Yandex
curl "https://webmaster.yandex.com/ping?sitemap=https://www.timesharelink.com/sitemap.xml"
```
> Google은 `google.com/ping?sitemap=` 엔드포인트를 2023년 deprecate. **Search Console > Sitemaps > "제출" 사용 필수.**

### 1.8.3 IndexNow (Bing/Yandex/Naver 즉시 알림)
프로젝트 루트에 IndexNow 키 파일 배포 후:
```powershell
$KEY = "<32자 키>"
$BODY = @{
  host = "www.timesharelink.com"
  key  = $KEY
  keyLocation = "https://www.timesharelink.com/$KEY.txt"
  urlList = @(
    "https://www.timesharelink.com/",
    "https://www.timesharelink.com/links",
    "https://www.timesharelink.com/brands",
    "https://www.timesharelink.com/address-verification",
    "https://www.timesharelink.com/updates",
    "https://www.timesharelink.com/report"
  )
} | ConvertTo-Json
Invoke-RestMethod -Method Post -Uri "https://api.indexnow.org/IndexNow" -ContentType "application/json" -Body $BODY
```

### 1.8.4 GA4 / GSC 베이스라인 캡처
변경 전/후 비교를 위해 배포 직전 다음 데이터를 캡처:
- GSC > 성능 > 28일 데이터 CSV 저장 (`baseline_2026-05-13.csv`)
- 평균 게재순위(주소모음 / 링크모음 / 타임쉐어링크 / 18개 브랜드명)
- 클릭률 / 노출수 / 클릭수
