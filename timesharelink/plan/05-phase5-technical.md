# Phase 5. 기술 SEO + 인덱싱 가속 (Week 1, 즉시)

> **목표**: 변경사항이 SERP에 빠르게 반영되도록 인덱싱 가속 + Core Web Vitals 최적화
> **우선순위**: ★★★★
> **예상 효과**: 직접 순위 영향은 +2~5단, 다만 다른 단계 효과를 빠르게 SERP에 반영

---

## 5.1 IndexNow 배포 (즉시)

Bing, Yandex, Naver 등에 변경 즉시 알림.

```
deploy_indexnow_key (host=www.timesharelink.com)
```

### 구현
- API 키 파일을 `public/[key].txt`에 배치
- 페이지 변경 시 IndexNow ping 자동화 (Vercel build hook 또는 Next.js ISR)
- 한 번에 ping 가능한 URL: 최대 10,000개

### 효과
- Bing 인덱싱: 평균 24시간 → **수 분 이내**
- Google은 IndexNow 미사용이나, 다중 검색엔진 노출 가속

---

## 5.2 Sitemap + Robots 점검

### sitemap.xml 점검 항목
- [ ] 모든 페이지 포함 (메인 + 블로그 + 카테고리)
- [ ] `lastmod` 자동 업데이트 (콘텐츠 변경 시)
- [ ] `priority` 차등 설정 (메인 1.0, 카테고리 0.8, 블로그 0.6)
- [ ] `changefreq` 합리적 설정 (메인 daily, 블로그 weekly)
- [ ] gzip 압축 미적용 (sitemap.xml.gz 별도)

### Next.js App Router 자동 sitemap
```javascript
// app/sitemap.js
export default function sitemap() {
  return [
    { url: 'https://www.timesharelink.com', lastModified: new Date(), priority: 1.0 },
    { url: 'https://www.timesharelink.com/블로그', lastModified: new Date(), priority: 0.8 },
    // ...
  ];
}
```

### robots.txt 점검
- [ ] `Sitemap: https://www.timesharelink.com/sitemap.xml` 포함
- [ ] `User-agent: *` + `Allow: /` (전체 허용)
- [ ] 관리/내부 페이지만 `Disallow` (`/admin`, `/api`)

---

## 5.3 Search Console 알림 자동화

```
notify_search_engines (sitemap_url=https://www.timesharelink.com/sitemap.xml)
```

### 자동화 시점
- 메인 페이지 변경 시
- 블로그 신규 글 발행 시
- 카테고리 페이지 변경 시
- Vercel deploy hook과 연동 검토

---

## 5.4 인덱싱 상태 모니터링

### 주기적 점검

```
check_indexing_status (url=https://www.timesharelink.com)
check_indexing_status (url=https://www.timesharelink.com/블로그)
... (카테고리별 / 블로그별)
```

### 대응
- 미인덱싱 URL → Search Console에서 수동 색인 요청
- 인덱싱 지연 → IndexNow 재 ping
- 인덱싱 거부 (`noindex`, `robots.txt 차단`) → 코드 점검

---

## 5.5 Core Web Vitals 최적화

### 현재 측정 필요 (PageSpeed Insights)
- LCP (Largest Contentful Paint): 목표 < 2.5s
- INP (Interaction to Next Paint): 목표 < 200ms
- CLS (Cumulative Layout Shift): 목표 < 0.1

### Next.js 최적화 권장
- [ ] `next/image` 사용 (자동 WebP, lazy loading, srcset)
- [ ] `next/font` 사용 (FOIT/FOUT 방지)
- [ ] Critical CSS inline (Tailwind 자동 처리)
- [ ] 폰트 preload (`<link rel="preload" as="font">`)
- [ ] Hero 이미지 priority 설정
- [ ] 폰트 fallback display: swap

### 측정 도구
- PageSpeed Insights: https://pagespeed.web.dev/
- Lighthouse CI (GitHub Actions 자동화 가능)
- Web Vitals 라이브러리로 RUM 수집

---

## 5.6 모바일 최적화 점검

| 항목 | 현재 | 목표 |
|---|---|---|
| viewport meta | 확인 필요 | `width=device-width, initial-scale=1` |
| 터치 타깃 크기 | 확인 필요 | 최소 48x48px |
| 폰트 크기 | 확인 필요 | 본문 16px+ |
| 가로 스크롤 | 발생 안 함 | 발생 안 함 유지 |
| 모바일 친화성 테스트 | 확인 필요 | 통과 |

Search Console의 모바일 사용성 보고서로 점검.

---

## 5.7 HTTP 헤더 / 보안 최적화

### 권장 헤더 (Next.js `next.config.js`)

```javascript
async headers() {
  return [{
    source: '/(.*)',
    headers: [
      { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { key: 'Permissions-Policy', value: 'geolocation=(), microphone=()' },
      { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' },
    ]
  }];
}
```

### Cloudflare 설정 점검
- [ ] HTTPS 강제 (Always Use HTTPS)
- [ ] HTTP/2, HTTP/3 활성화
- [ ] Brotli 압축 활성화
- [ ] Auto Minify (HTML/CSS/JS)
- [ ] Rocket Loader 비활성 (Next.js와 충돌 가능)

---

## 5.8 구조화 데이터 검증

### Phase 1에서 추가한 JSON-LD 검증

도구:
- Google Rich Results Test: https://search.google.com/test/rich-results
- Schema Markup Validator: https://validator.schema.org/
- Search Console "향상" 보고서

### 모니터링 대상
- FAQPage 리치 결과 노출 비율
- BreadcrumbList SERP 표시
- Sitelinks Searchbox 활성화 (WebSite Schema)

---

## 5.9 페이지 속도 추가 최적화

### 우선순위 작업
- [ ] LCP 이미지 priority + preload
- [ ] 폰트 self-host (Google Fonts CDN 의존도 ↓)
- [ ] Third-party script defer/async (광고/분석)
- [ ] 큰 비교표는 lazy render (Intersection Observer)
- [ ] 메인 페이지 6,275단어 → 코드 split (필요 시)

### Lighthouse 목표
- Performance: 90+
- Accessibility: 95+
- Best Practices: 100
- SEO: 100

---

## 5.10 실행 체크리스트 (Week 1)

| 우선순위 | 작업 | 소요 |
|---|---|---|
| 1 | IndexNow 키 배포 | 30분 |
| 2 | sitemap.xml / robots.txt 점검 | 1시간 |
| 3 | Search Console URL 검사 요청 | 30분 |
| 4 | Core Web Vitals 측정 + 우선 개선 | 4시간 |
| 5 | 보안/캐싱 헤더 설정 | 1시간 |
| 6 | 모바일 친화성 점검 | 1시간 |
| 7 | Rich Results Test 통과 확인 | 30분 |
