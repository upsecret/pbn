# Phase 2. 한국어 브랜드 + IDN 보강 (Week 1~2)

> **목표**: SERP 1~3위 패턴(한글 의인화)과의 구조적 갭 해소
> **우선순위**: ★★★★
> **예상 효과**: +5~10단 (장기 누적 효과 더 큼)

---

## 2.1 핵심 문제 인식

SERP 1~3위 모두 **한글 의인화 브랜드**:
- 여기여, 주소모아, 빠른주소, 어디야, 주소킹, 주소나라...

timesharelink는 **영문 일반어**라서:
- 한국 사용자 검색 의도와 거리감
- 브랜드 검색량 0에 가까움
- Google이 "이 브랜드는 한국 사용자가 찾는 브랜드"로 인식하기 어려움

---

## 2.2 전략 A: 한국어 보조 브랜드 정착 (즉시 실행)

### 1차 브랜드: "타임쉐어링크"
이미 footer 회사 정보에 "주식회사 타임쉐어링크"로 명시 중 → 이를 **상단·메인·메타에 전면 노출**.

### 2차 의인화 브랜드 후보
한국어 의인화 별칭을 보조 브랜드로 도입.

| 후보 | Punycode (xn--) | 도메인 점유 | 평가 |
|---|---|---|---|
| 주소공유 | xn--bj0bp48aurhpz9b | 확인 필요 | 의미 매칭 ★★★★★ |
| 링크쉐어 | xn--vk1bk7w1ws87a | 확인 필요 | 의미 매칭 ★★★★ |
| 주소함 | xn--bj0bp48auz4a | 확인 필요 | 짧고 의미 ★★★★ |
| 주소상자 | xn--bj0bp48ait3a8gh | 확인 필요 | 박스 메타포 ★★★ |
| 링크함 | xn--vk1bk7wp7c | 확인 필요 | ★★★ |
| 검증주소 | xn--bj0bx2ahy3a8sl | 확인 필요 | 키워드 직결 ★★★★★ |
| 안전주소모음 | xn--289a8sn09a4i8al7jx30b | 확인 필요 | 롱테일 ★★★ |

> Punycode 확인: `node -e "console.log(require('url').domainToASCII('주소공유.com'))"` 또는 https://www.punycoder.com/

**작업**:
- [ ] Cloudflare Registrar / Gabia / GoDaddy에서 후보 punycode 등록 가능 여부 일괄 확인
- [ ] 점유 안 된 1~2개 선택 (우선순위: 검증주소.com > 주소공유.com)
- [ ] 사이트 상단 부제로 노출: "타임쉐어링크 × 주소공유"
- [ ] `lib/constants.js`에 `BRAND_KO_PRIMARY = '타임쉐어링크'`, `BRAND_KO_SECONDARY` 상수화하여 본문 일관 노출

### 노출 강화 지점

| 위치 | 변경 전 | 변경 후 |
|---|---|---|
| 타이틀 | `... - timesharelink` | `... - 타임쉐어링크` |
| H1 | `... 사이트` | `... 사이트 | 타임쉐어링크` |
| Logo 텍스트 | `TS timesharelink` | `타임쉐어링크 (TimeShareLink)` |
| 메타 디스크립션 | `timesharelink에서` | `타임쉐어링크에서` |
| 본문 표현 | "timesharelink" 11회 | "타임쉐어링크" 6회 + 영문 5회 (혼용) |

---

## 2.3 전략 B: 한글 IDN .com 추가 매입 (Week 2)

상위 사이트들이 한글 IDN .com을 적극 활용. timesharelink도 한글 IDN 1~2개 매입 후 301 리다이렉트.

### 후보 도메인

| 한글 도메인 | IDN 변환 (xn--) | 우선순위 |
|---|---|---|
| 타임쉐어링크.com | (등록 시 변환) | ★★★ |
| 주소공유.com | (등록 시 변환) | ★★★★ |
| 검증주소.com | (등록 시 변환) | ★★★★ |
| 안전주소모음.com | (등록 시 변환) | ★★★ |

### 매입 후 처리
1. Cloudflare DNS 등록 (`cf_create_dns_record`)
2. timesharelink.com으로 301 리다이렉트 (`cf_create_redirect`)
3. 다이렉트 트래픽 + 백링크 누적
4. 일부는 분리 자산으로 운영 검토

### 301 리다이렉트 구현 방법 3가지 (선택)

**A. Cloudflare Bulk Redirect (권장 — 코드 수정 없음)**
- Cloudflare 대시보드 > 새 도메인 > Rules > Bulk Redirects
- Source URL: `https://검증주소.com/*` → Target URL: `https://www.timesharelink.com/$1`
- Status 301, Preserve query string ON

**B. Vercel `vercel.json` redirects (timesharelink 도메인이 같은 프로젝트에 alias된 경우)**
```json
{
  "redirects": [
    { "source": "/:path*",
      "has": [{ "type": "host", "value": "xn--bj0bx2ahy3a8sl.com" }],
      "destination": "https://www.timesharelink.com/:path*",
      "permanent": true }
  ]
}
```

**C. `middleware.js` 호스트 기반 라우팅 (이미 timesharelink는 middleware.js 존재 — A 대비 비추천)**

### 매입 후 인덱싱 신호
- 새 도메인을 GSC에 등록 후 sitemap 제출 (timesharelink와 동일 sitemap)
- `Link: <https://www.timesharelink.com/>; rel="canonical"` 헤더 추가
- IDN 도메인은 자체 콘텐츠 없이 즉시 301하면 Google이 mirror로 인식 → SEO 효과 낮음. **랜딩 페이지 1장이라도 운영 후 301하는 것이 효과적**

---

## 2.4 전략 C: 자매 사이트와의 브랜드 연계

현재 jusomoeum 프로젝트 내 자매 사이트 (2026-05-13 인벤토리):

### Next.js 운영 사이트 (Vercel 배포 가능)
- **timesharelink** (현재)
- **jusoguide** / **jusoguidecom** (jusoguide.com — 신규 Tier-1 위성, 2026-05-13 신설 — 메모리 git log 참조)
- **jusominet** (주소모음.net)
- **jusolink** (jusolink.info → jusoguide.com 일괄 재라우팅 완료)
- **jusomoeumnet** / **jusomoeum-info**
- **juso-moeum** / **juso-top**
- **link-bridge** / **link-farm** / **labslink** / **nettensor** / **deepbot**

### isweb 정적 사이트 (jusohub-isweb-pages 워킹 트리)
- **isweb-jusois** (jusois.isweb.co.kr — Hero CTA에서 이미 직접 링크 중, `HeroSection.jsx:42`)
- **isweb-jusotown** (jusotown.isweb.co.kr)
- **isweb-jusomoeum** (jusomoeum.isweb.co.kr)
- **isweb-jusolook**, **isweb-jusomi**

### 자매 사이트 활용 전략
1. **풋터/사이드바에 "함께 이용하면 좋은 사이트" 섹션** — 자매 사이트 3~5개 링크
2. **앵커 텍스트는 자매 사이트의 한글 브랜드명** 사용 (timesharelink 브랜드 연관성 강화)
3. **상호 링크는 자연스러운 맥락에서만** — 과도하면 PBN 패턴으로 감지될 수 있음
4. **현재 Hero CTA에 `jusois.isweb.co.kr` 직접 링크 존재** → 추가 2~3개 자매 사이트 자연 인용

### 우선순위 매트릭스 (timesharelink → 자매 링크)

| 자매 사이트 | 링크 위치 | 앵커 텍스트 | 이유 |
|---|---|---|---|
| jusois.isweb.co.kr | Hero (현재) | "링크모음 바로가기" → "주소이즈 링크모음" | 한글 브랜드 노출 강화 |
| jusoguide.com | 본문 (검증 시스템) | "주소가이드 검증 절차" | 신규 위성 사이트 인덱싱 push |
| jusotown.isweb.co.kr | FAQ 하단 | "주소타운에서 더 보기" | 토픽 권위 분산 |
| jusominet | Footer | "주소모음.net" | 키워드 브랜드 일치 |

### 상호 링크 안전선 (PBN 회피)
- timesharelink → 자매 외부 링크: **5개 이하**, dofollow
- 자매 → timesharelink: **각 사이트 1개**, 본문 자연 맥락
- 앵커 분포: 정확매치 30% / 부분매치 40% / 브랜드 20% / 일반 10%
- 양방향 링크 풀 메시(full mesh) 금지 — 트라이앵글 패턴 권장

### 사용 도구
- `list_pbn_domains` — 보유 도메인 전체 목록 확인
- `list_pbn_worksheets` — PBN 자산 시트
- `get_pbn_worksheet_content` — 자매 사이트별 운영 상태

---

## 2.5 브랜드 일관성 체크리스트

배포 후 다음 항목 점검:

- [ ] 타이틀에 한국어 브랜드 노출
- [ ] H1 헤더에 한국어 브랜드 노출
- [ ] Logo 영역 한국어 표기 우선
- [ ] OG title/description 한국어 브랜드 사용
- [ ] 본문 내 "타임쉐어링크" 표현 5회 이상
- [ ] FAQ 답변 내 한국어 브랜드 자연 노출
- [ ] Footer 회사 정보 일관성
- [ ] Organization Schema의 name/alternateName 양국어 표기

```json
{
  "@type": "Organization",
  "name": "타임쉐어링크",
  "alternateName": ["TimeShareLink", "timesharelink"],
  "url": "https://www.timesharelink.com"
}
```

---

## 2.6 예상 효과

| 시점 | 예상 효과 |
|---|---|
| 즉시 (Week 1 말) | 한국어 키워드 매칭 강화 → +3~5단 |
| Week 4 | 브랜드 검색량 발생 시작 → 직접 검색 트래픽 |
| Week 8+ | IDN 백링크 누적 → 도메인 권위 향상 |

브랜드 강화는 단독 효과보다 **Phase 3 콘텐츠 + Phase 4 백링크와 시너지**가 더 큼.

---

## 2.7 작업 순서 (Week 1~2 일정)

| Day | 작업 | 산출물 |
|---|---|---|
| Day 1 | 브랜드 상수화 (`lib/constants.js`) + Header/Footer 한글 표기 | `BRAND_KO_PRIMARY` 추가 |
| Day 2 | 타이틀/메타/OG에 "타임쉐어링크" 반영 | layout.jsx / page.jsx 갱신 |
| Day 3 | HeroSection H1 + Logo 한글 변경 | HeroSection.jsx, logo.svg |
| Day 4 | 본문/FAQ 답변에 "타임쉐어링크" 5회 자연 노출 | components/*.jsx |
| Day 5 | Organization Schema `alternateName` 보강 | layout.jsx jsonLd |
| Day 6~10 | IDN 후보 등록 가능 여부 일괄 확인 + 1~2개 매입 | Cloudflare 도메인 |
| Day 11 | 매입 도메인 301 리다이렉트 구성 | Cloudflare Bulk Redirect |
| Day 12 | 자매 사이트 링크 5개 본문 자연 삽입 | 본문 보강 |

---

## 2.8 Organization Schema 보강 코드 예 (실제 적용)

`app/layout.jsx` line 67~82의 Organization 블록을 다음과 같이 확장:

```diff
 {
   '@type': 'Organization',
   '@id': `${BASE_URL}/#organization`,
   name: '주식회사 타임쉐어링크',
+  alternateName: ['타임쉐어링크', 'TimeShareLink', 'timesharelink'],
+  logo: {
+    '@type': 'ImageObject',
+    url: `${BASE_URL}/logo.svg`,
+    width: 512,
+    height: 512,
+  },
+  sameAs: [
+    'https://jusois.isweb.co.kr/',
+    'https://jusotown.isweb.co.kr/',
+    'https://jusoguide.com/',
+  ],
   url: BASE_URL,
   ...
 }
```
