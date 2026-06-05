# SEO 체크: 주소모음 / 링크모음 타겟 키워드

## 타겟 키워드
- **주소모음**
- **링크모음**

## CSR 여부 확인 (클라이언트 전용 렌더링)

### ✅ 서버 컴포넌트 (SSR) – 키워드 포함
| 컴포넌트/파일 | 키워드 노출 위치 |
|---------------|------------------|
| `app/layout.jsx` | metadata(title, description, keywords, openGraph, JSON-LD) |
| `app/page.jsx` | metadata, FAQ JSON-LD, 페이지 구조 |
| `app/links/page.jsx` | metadata, h1 "링크모음" |
| `src/components/Header.jsx` | 네비 "주소모음", "링크모음" |
| `src/components/HeroSection.jsx` | h1 "주소모음 & 링크모음", CTA "링크모음 보기" |
| `src/components/FAQSection.jsx` | FAQ Q&A 본문 |
| `src/components/SEOTextBlock.jsx` | h2, 본문 "주소모음·링크모음", "링크모음 이용 가이드" |
| `src/components/TodaysRecommendations.jsx` | 사이트명/카테고리 |
| `src/components/TrustVerificationBox.jsx` | 본문 텍스트 |
| `src/components/UpdateLogPreview.jsx` | 섹션 제목 |
| `src/components/ReportSubmissionCTA.jsx` | 섹션 제목 |
| `src/components/Footer.jsx` | 푸터 텍스트 |

위 컴포넌트에는 **'use client'가 없으며**, 모두 초기 HTML에 포함됩니다.

### 🔵 클라이언트 컴포넌트 ('use client') – 키워드 없음
| 파일 | 역할 | SEO 영향 |
|------|------|----------|
| `src/components/ScrollToTop.jsx` | 라우트 변경 시 스크롤 상단 | **없음** (return null, 텍스트 미노출) |
| `src/components/ui/button.jsx` | 버튼 UI (Radix Slot) | **없음** (앱 라우터 페이지에서 미사용) |
| `src/hooks/use-toast.js` | 토스트 훅 | **없음** (레이아웃/페이지에서 Toaster 미사용) |

타겟 키워드를 포함한 콘텐츠는 **모두 서버에서 렌더링**되며, CSR로만 노출되는 부분은 없습니다.

## 초기 HTML 검증 (실제 응답 기준)

다음 스크립트로 서버 응답 본문에 키워드가 포함되는지 확인할 수 있습니다.

```bash
# 개발 서버 실행 후
npm run dev
node scripts/seo-check.js http://localhost:3000
```

**기대 결과**
- "주소모음" / "링크모음"이 **초기 HTML 본문**에 포함
- 스크립트 내부에만 있고 본문에는 없는 경우는 없음 → **CSR 전용 노출 이슈 없음**

## 요약
- 타겟 키워드가 들어가는 모든 콘텐츠는 **서버 컴포넌트(SSR)** 로만 렌더링됨.
- 남아 있는 'use client' 컴포넌트는 **키워드 미포함**이며, SEO에 영향 없음.

---

## 한글 URL과 SEO

### 결론: 한글 경로 사용 시 SEO 이슈 없음
- **Google**은 한글(비ASCII) URL을 정상 인덱싱·노출하며, 별도 불이익 없음.
- 한국어 검색에서는 URL에 한글 키워드가 있으면 노출·클릭에 도움이 될 수 있음.
- `https://www.timesharelink.com/검증로그` 와 `https://www.timesharelink.com/%EA%B2%80%EC%A6%9D%EB%A1%9C%EA%B7%B8` 는 **동일 URL**로 간주됨(자동 정규화).

### 권장: canonical·sitemap·og:url 형식 통일
- **canonical**, **sitemap `<loc>`**, **openGraph url** 은 모두 **URL 인코딩된 한글 경로**로 통일함.
- 예: `https://www.timesharelink.com/` + `encodeURIComponent('검증로그')` → `.../%EA%B2%80%EC%A6%9D%EB%A1%9C%EA%B7%B8`
- 이렇게 하면 XML·구형 크롤러 호환성과 일관성이 유지됨.

### 적용 현황
| 페이지 | canonical / og:url |
|--------|---------------------|
| 주소검증, 링크모음, 주소링크제보, 검증로그 | `encodeURIComponent(한글경로)` 사용 |
| app/sitemap.js | 한글 경로 모두 인코딩하여 `<loc>`에 사용 |

이렇게 맞춰두면 한글 URL 노출 시 SEO 이슈 없이 유지할 수 있음.
