# Phase 3. 콘텐츠 클러스터 구축 (Week 2~4)

> **목표**: 토픽 권위(Topical Authority) 구축으로 SERP 신뢰도 향상
> **우선순위**: ★★★★
> **예상 효과**: +5~15단 (누적), 롱테일 키워드 다수 진입
> **갱신일**: 2026-05-13 (현재 코드 상태 반영하여 보강)

---

## 3.1 콘텐츠 전략 원칙

메모리 `feedback_isweb_blog_single_page`에 따라:

> **isweb 블로그는 단일 페이지 H2 통합 패턴 사용**.
> 인덱스+개별글 분리 금지. 모든 글을 /블로그 한 페이지에 H2 article로 통합.
> (yugiyu 모방 + 운영 단순화)

이를 timesharelink에도 동일 적용.

### ★ 현재 구현 상태 (2026-05-13 코드 기준)

플랜의 "신설" 표현은 **outdated**. 실제로는:

| 항목 | 상태 | 위치 |
|---|---|---|
| 블로그 단일 페이지 통합 | ✅ 구현됨 | `app/page.jsx` → `BlogTopicSection` 컴포넌트 |
| 토픽 모듈 분리 | ✅ 구현됨 | `lib/blog-topics/topic1~6.js` (배럴 export) |
| ItemList(Article) Schema | ✅ 구현됨 | `app/page.jsx` `blogTopicsJsonLd` |
| 메인 내부 통합 (H2 article 패턴) | ✅ 구현됨 | `BlogTopicSection` 렌더링 |
| 토픽 수 | 6편 / 목표 10편 | 4편 추가 필요 |

→ **보강 액션은 토픽 4편 추가 + 각 토픽 SEO 표준화 + 카테고리 페이지 신설.**

---

## 3.2 블로그 콘텐츠 통합 (현재: 메인 페이지 내 H2 통합)

### 현재 구현 (수정 — 이미 적용됨)

별도 `/블로그` 라우트 신설 없이 **메인 페이지(`/`) 내 `BlogTopicSection`에 H2 article 6편 통합** 운영 중.

- 파일: `components/BlogTopicSection.jsx`
- 데이터 소스: `lib/blog-topics/index.js` (배럴) → `topic1~6.js`
- 각 토픽 객체 구조: `{ id, title, subtitle, intro, sections[h3, body], highlightBox, faq, internalLinks }`
- JSON-LD: `app/page.jsx`의 `blogTopicsJsonLd` (Article × 6 in ItemList)

### 토픽 추가 절차 (신규 4편 추가 시)

```
1. lib/blog-topics/topic7-xxx.js 신규 파일
2. lib/blog-topics/index.js의 배럴에 import + 배열 push
3. 빌드 → BlogTopicSection이 자동 렌더링 + ItemList Schema 자동 확장
4. sitemap.xml은 단일 페이지이므로 변경 불필요
5. fragment URL (#topic-xxx)로 GSC URL 검사 (직접 인덱싱은 메인 URL)
```

### 페이지 구조 (현행)

```
<main>
  <HeroSection />                   # H1: 주소모음 ...
  <WhyAddressCollection />          # H2: 주소모음이 필요한 이유
  <TrustVerificationBox />          # H2: 신뢰 검증
  <BrandSitesIntro/Table />         # H2: 18개 브랜드
  <DetailedComparison />            # H2: 상세 비교
  <BlogTopicSection topics={6} />   # H2: 토픽 1~6 (각 article)
  <FAQSection />                    # H2: FAQ
  ...
</main>
```

---

## 3.3 콘텐츠 10편 매핑 (현재 6편 + 신규 4편)

### 현재 구현된 토픽 (6편)

| # | id | 제목 (실제) | 타깃 키워드 (추정) |
|---|---|---|---|
| 1 | verified-vs-general | 검증된 주소모음 vs 일반 주소모음의 결정적 차이 | 검증된 주소모음, 주소모음 비교 |
| 2 | access-troubleshooting | (접속 트러블슈팅) | 사이트 접속 안됨, 차단 우회 |
| 3 | safe-checkpoints | (안전 체크포인트) | 주소모음 안전, 안전 체크 |
| 4 | trends-2026 | (2026 트렌드) | 2026 주소모음, 트렌드 |
| 5 | category-guide | (카테고리 가이드) | 카테고리별 주소모음 |
| 6 | security-precautions | (보안 주의사항) | 주소모음 보안, 피싱 방지 |

### 신규 추가 토픽 4편 (Week 2~3)

| # | 권장 id | 제목 | 타깃 키워드 | 분량 |
|---|---|---|---|---|
| 7 | top-20-ranking-2026 | 2026 링크모음 사이트 순위 TOP 20 비교 | 링크모음 순위, 링크모음 비교 | 2,000자 |
| 8 | brand-comparison-big3 | 주소킹·여기여·주소모아 3대 사이트 비교 분석 | 주소킹, 여기여, 주소모아 | 1,800자 |
| 9 | mobile-fast-access | 모바일에서 주소모음 사이트 빠르게 이용하기 | 모바일 주소모음 | 1,200자 |
| 10 | bookmark-vs-collection | 북마크와 주소모음 사이트의 차이점 | 북마크, 주소 저장 | 1,200자 |

> 기존 토픽 1~6이 이미 "안전/검증/피싱/보안/HTTPS/DNS/접속" 영역을 커버 → 중복 회피 위해 위 4편으로 좁힘.

### 토픽 추가 시 표준 SEO 체크리스트 (글당)

```
□ id 영문 케밥케이스 (Article @id의 fragment로 사용)
□ title: 60자 이내, 타깃 키워드 1회 포함, 숫자/연도 1회 포함
□ subtitle: 30~50자, 타깃 LSI 키워드 1~2개
□ intro: 150~200자, 첫 100자 내 타깃 키워드 2회, "타임쉐어링크" 1회
□ sections: H3 4~6개, 각 H3에 LSI 키워드 1개, body 200~300자
□ highlightBox: 5~7개 bullet, 각 8~20자
□ faq: 글 끝 Q&A 2~3개 (FAQPage Schema 자동 연동)
□ internalLinks: ['/links', '/brands', '/address-verification'] 중 2개 + 다른 토픽 fragment 1개
□ 표절 검사 통과 (Copyscape 또는 sapling.ai)
□ 한국어 어색함 검수 (수동)
```

### 콘텐츠 작성 원칙 (유지)
- **각 글마다 timesharelink 메인/서브로 자연스러운 내부 링크 2~3개**
- **타깃 키워드를 title/h3/intro 100자에 분산 배치** (스터핑 금지)
- **이미지 1~2장** (Phase 1.3 이미지 추가와 통합 — `public/images/blog/topic-N/`)
- **글 말미 "다음 추천 글" 2개 fragment 링크** (예: `#topic-verified-vs-general`)

### 작성 방법
- AI 초안 생성 → 수동 검수 + 한국어 어색함 수정
- `generate_pbn_content` 도구로 초안 생성 가능
- 검수 시 표절 검사 (Copyscape 등)
- **메모리 `feedback_write_size_limit` 준수**: 파일당 4,500자 이하 → 토픽 1개 = 1파일 (자연스럽게 모듈 분리 충족)

---

## 3.4 2차 카테고리 페이지 (Week 3~4)

기존 단일 메인 페이지 외에, **카테고리별 랜딩 페이지** 신설. 합법 범위 내에서만.

### 카테고리 페이지 후보

| 경로 | 타겟 키워드 | 콘텐츠 |
|---|---|---|
| `/포털주소모음` | 포털 주소모음, 검색엔진 주소 | 네이버/다음/구글/줌 등 정리 |
| `/쇼핑주소모음` | 쇼핑몰 주소모음 | 11번가/쿠팡/G마켓 등 |
| `/스트리밍주소모음` | 스트리밍 주소모음, OTT 주소 | 넷플릭스/디즈니+/티빙 등 |
| `/뉴스주소모음` | 뉴스 주소모음 | 주요 언론사 |
| `/금융주소모음` | 금융 사이트 주소모음 | 은행/증권사 |
| `/SNS주소모음` | SNS 링크모음 | 인스타/페북/X 등 |

### 페이지 구성
- H1: "[카테고리] 주소모음 - 검증된 사이트 모음"
- 카테고리 설명 200~300자
- 사이트 카드 10~20개 (HTTPS 검증 배지 포함)
- FAQ 3~5개 (카테고리 관련)
- 메인 페이지 + 다른 카테고리로 내부 링크

---

## 3.5 동영상 콘텐츠 추가 (Week 4)

현재 `has_video: false` → 동영상 1~2개 임베드.

### 후보 콘텐츠
1. **"timesharelink 사용법 90초"** — 사이트 소개 영상 (YouTube)
2. **"5단계 검증 시스템 설명"** — 차별점 설명 영상

### 이점
- 페이지 체류 시간 증가 → 사용자 신호 개선
- VideoObject Schema 추가 가능 → 리치 결과 노출 가능
- YouTube 백링크 효과 (자체 채널 운영 시)

---

## 3.6 콘텐츠 갱신 주기

| 자산 | 갱신 주기 | 방법 |
|---|---|---|
| 블로그 신규 글 | 주 2~3편 | 수동/AI 혼합 |
| 메인 페이지 업데이트 로그 | 매일 | 자동 (이미 운영 중) |
| 카테고리 페이지 사이트 목록 | 주 1회 | 자동 검증 + 수동 추가 |
| 비교표 갱신 | 월 1회 | 수동 |

---

## 3.7 콘텐츠 KPI

| 지표 | Week 4 목표 | Week 8 목표 |
|---|---|---|
| 블로그 글 수 | 10편 | 20편 |
| 카테고리 페이지 | 3개 | 6개 |
| 인덱싱된 URL 수 | 15개 | 30개 |
| 롱테일 키워드 진입 | 5개 (100위 이내) | 15개 |
| 평균 페이지 체류 시간 | +20% | +40% |

---

## 3.8 메인 페이지 영향 주의

블로그·카테고리 페이지 추가 시 **메인 페이지의 키워드 집중도 분산**될 수 있음.

### 대응
- 모든 하위 페이지에서 **메인으로 강한 내부 링크** (앵커: "주소모음 메인", "주소모음 1위 사이트" 등)
- 메인 페이지 H1/타이틀은 **"주소모음", "링크모음" 핵심 키워드 그대로 유지**
- 하위 페이지는 **롱테일 키워드 위주**로 설정 (메인 키워드 카니발리제이션 회피)

### 키워드 카니발리제이션 회피 맵 (필수)

| 페이지 | 주력 키워드 (canonical) | 회피해야 할 키워드 |
|---|---|---|
| `/` (메인) | 주소모음, 링크모음 | — (메인 독점) |
| `/links` | 링크모음 사이트, 카테고리별 링크 | "주소모음" 단독 키워드 X |
| `/brands` | 주소모음 브랜드 비교, 18개 브랜드 | "주소모음" 일반어 X |
| `/address-verification` | 주소 검증, 검증 시스템, 5단계 검증 | "주소모음" X |
| `/updates` | 주소 업데이트, 최신 주소 | "주소모음" X |
| `/report` | 주소 제보, 사이트 신고 | "주소모음" X |
| 카테고리 페이지 (신설 시) | "포털 주소모음" 등 복합어만 | 단일 "주소모음" X |
| 블로그 토픽 1~10 | 각 토픽 롱테일 (id별) | 메인 키워드 단독 사용 X |

### 카니발리제이션 자가 진단 (월 1회)

```
google_serp_results (keyword=주소모음)
  → timesharelink.com URL이 2개 이상 SERP 상위에 동시 노출되는지 확인
  → 동시 노출 시 약한 쪽 페이지의 H1/title에서 키워드 제거
```

---

## 3.9 콘텐츠 → 인덱싱 연계 (Phase 5와 동기)

토픽 1편 추가 시마다 다음을 실행:

```
1. 빌드 + Vercel 배포 (git push로 자동)
2. 메인 페이지 변경이므로 https://www.timesharelink.com/ URL을 GSC URL 검사 → 색인 생성 요청
3. IndexNow 핑 (Phase 1.8.3 PowerShell 스크립트 재사용, urlList는 "/" 1개만)
4. 7일 후 google_rank_check로 신규 롱테일 키워드 100위 진입 여부 확인
```

---

## 3.10 메모리 정합성 체크 (작업 전 필수 확인)

본 Phase 작업 시 다음 메모리와의 정합성을 매번 확인:

| 메모리 키 | 적용 |
|---|---|
| `feedback_isweb_blog_single_page` | 메인 내 H2 통합 패턴 유지, 별도 라우트 분리 금지 |
| `feedback_write_size_limit` | 토픽 1개 = 1파일 (4,500자 이하) |
| `feedback_readme_link_md_sync` | README/LINK.MD 변경 시 동기화 |
| `feedback_jusomoeum_vercel_cli` | Vercel CLI 대신 git push 사용 |
| `project_serp_pattern_juso_link` | 의인화 브랜드 + 권위 도메인 패턴 — 본문 인용 시 활용 |
