# Phase 6. 측정 / 반복 / 자동화 (지속)

> **목표**: 데이터 기반 의사결정과 자동화로 지속적인 순위 개선
> **우선순위**: ★★★
> **예상 효과**: 직접 순위 영향은 없으나, 다른 단계 효과를 극대화

---

## 6.1 주간 자동 추적 태스크

### `schedule` skill로 매주 월요일 09:00 자동 실행

자동 추적 항목:
1. `주소모음` 순위 (Google KR)
2. `링크모음` 순위 (Google KR)
3. 롱테일 키워드 5~10개 (Phase 3 콘텐츠 타깃)
4. DR / 참조 도메인 추이
5. 인덱싱 상태
6. 핵심 페이지의 SERP CTR (Search Console 데이터 연동 시)

### 실행 도구

```
google_rank_check (keyword=주소모음, domain=timesharelink.com)
google_rank_check (keyword=링크모음, domain=timesharelink.com)
google_rank_history (keyword=주소모음, domain=timesharelink.com, period=last_30d)
ahrefs_dr_history (target=timesharelink.com)
ahrefs_referring_domains (target=timesharelink.com)
ahrefs_organic_keywords (target=timesharelink.com)
```

### 결과 저장
- Google Sheets에 자동 적재 (`sheets_append_rows`)
- 시트명: `timesharelink-weekly-tracking`
- 컬럼: 날짜, 키워드, 순위, 전주 대비 변동, DR, 참조 도메인 수, 비고

---

## 6.2 경쟁사 동향 모니터링

### 1~5위 경쟁사 변동 추적

| 도메인 | 추적 빈도 | 추적 항목 |
|---|---|---|
| yugiyu.isweb.co.kr | 주 1회 | 콘텐츠 변경, 신규 페이지, 백링크 변동 |
| xn--ok0bm0vglf7xeba82sl9d.com | 주 1회 | 동일 |
| jusomoa01.isweb.co.kr | 주 1회 | 동일 |
| namu.wiki/w/빠른주소 | 월 1회 | 위키 변경 사항 |

### 도구
- **Claude in Chrome 익스텐션 필수** (메모리 `feedback_competitor_analysis` 준수)
- 브라우저 익스텐션으로 직접 방문 분석
- `seo_fetch_page`는 보조용 (Cloudflare 차단 시 한계)

### 분석 시 확인할 신호
- 신규 H2/H3 추가 (콘텐츠 보강 패턴)
- 신규 JSON-LD 스키마
- 이미지/동영상 추가
- 메타 정보 변경
- 백링크 신규 출처

---

## 6.3 14일 단위 PDCA 사이클

### Plan (D1)
- 지난 14일 데이터 분석
- 효과적인 액션 / 비효과적인 액션 식별
- 다음 14일 액션 계획

### Do (D2~D12)
- 액션 실행

### Check (D13)
- 순위 변동 측정
- 신규 백링크 효과 분석
- 콘텐츠 KPI 점검

### Act (D14)
- 다음 사이클 액션 조정
- 메모리 업데이트 (효과적/비효과적 패턴 기록)

---

## 6.4 Search Console 활용

### 정기 점검 항목 (주 1회)
- [ ] 성과 보고서: 클릭, 노출, CTR, 평균 순위 추이
- [ ] 커버리지: 인덱싱 오류, 제외된 페이지
- [ ] 향상: 모바일 사용성, FAQ 리치 결과, BreadcrumbList
- [ ] 핵심 활성 지표: Core Web Vitals 실측치
- [ ] 보안 문제: 해킹·악성 콘텐츠 경고
- [ ] 수동 조치: 패널티 알림

### 핵심 KPI 자동 추출
- Search Console API → Google Sheets 자동 적재
- 매주 노출/클릭/CTR/순위를 키워드별로 추적

---

## 6.5 패널티 / 위험 신호 모니터링

### 위험 신호 체크리스트 (주 1회)

| 신호 | 점검 방법 | 대응 |
|---|---|---|
| 갑작스러운 순위 하락 (10단 이상) | google_rank_check | Search Console 수동 조치 확인 |
| 인덱싱 페이지 수 급감 | check_indexing_status | sitemap·robots 재점검 |
| 트래픽 급감 | Search Console 성과 | 알고리즘 업데이트 확인 |
| 신규 백링크에 스팸 URL | ahrefs_backlinks | Disavow 파일 업데이트 |
| 브랜드 검색 시 페널티 신호 | check_brand_query_penalty | 즉시 점검 |
| Google 알고리즘 업데이트 | 업계 뉴스 | 변동 분석 후 대응 |

### `check_brand_query_penalty` 활용
타임쉐어링크 브랜드 검색 시 자사 사이트 1위 노출 점검. 1위 아니면 페널티 의심 신호.

---

## 6.6 콘텐츠 갱신 자동화

### 메인 페이지 동적 콘텐츠
- 업데이트 로그 자동 갱신 (이미 구현됨)
- "최종 검증일" 매일 자동 업데이트
- 카테고리별 사이트 개수 자동 카운트

### 블로그 갱신
- 신규 글 발행 시 sitemap 자동 갱신 → IndexNow ping
- 오래된 글 (3개월+) 자동 식별 → 갱신 알림

---

## 6.7 메모리 시스템 업데이트

작업 중 학습한 패턴을 메모리에 기록 (재사용 가능 지식 축적):

### 기록할 패턴 예시
- timesharelink 특정 변경이 효과적이었던 경우
- 비효과적이거나 패널티 위험 패턴
- 경쟁사가 새로 적용한 효과적 SEO 전술
- 한국 SERP에서 잘 통한 콘텐츠 포맷

---

## 6.8 월간 종합 리포트 자동 생성

### 매월 1일 자동 생성
- 키워드 순위 변동 차트
- 트래픽 변동 분석
- 백링크 증감 요약
- 콘텐츠 KPI 달성률
- 다음 달 우선순위 액션

### 도구
- `schedule` skill로 월간 트리거
- Google Sheets에서 차트 자동 생성
- 결과를 `gmail_send`로 자기 메일 발송 또는 Slack 알림

---

## 6.9 추적 대시보드 (옵션, Week 4+)

### Artifact로 라이브 대시보드 구축

`mcp__cowork__create_artifact`로 매번 최신 데이터 보여주는 대시보드 생성:

내용:
- 주소모음·링크모음 순위 추이 차트
- DR / 참조 도메인 추이
- 인덱싱 상태
- 최근 SERP 변동 알림

호출:
```javascript
window.cowork.callMcpTool('google_rank_check', {keyword: '주소모음', domain: 'timesharelink.com'})
```

---

## 6.10 모니터링 KPI 요약

| KPI | 측정 주기 | 도구 | 목표 |
|---|---|---|---|
| 주소모음 순위 | 주 1회 | google_rank_check | Week 12: 1~3위 |
| 링크모음 순위 | 주 1회 | google_rank_check | Week 12: 1페이지 |
| DR | 주 1회 | ahrefs_dr_history | Week 12: +15~20 |
| 참조 도메인 | 주 1회 | ahrefs_referring_domains | Week 12: +120~200 |
| 인덱싱 URL 수 | 주 1회 | check_indexing_status | Week 8: 30개 |
| Core Web Vitals | 주 1회 | PageSpeed Insights | LCP <2.5s, CLS <0.1 |
| 브랜드 검색 1위 | 주 1회 | check_brand_query_penalty | 항상 1위 |
| 자연 트래픽 | 일 1회 | Search Console | 월 +50% |
