# timesharelink.com SEO 고도화 플랜

> **목표**: "주소모음", "링크모음" 키워드 Google 한국 SERP **1페이지 1~3위** 진입
> **작성일**: 2026-05-13
> **현재 도메인**: https://www.timesharelink.com/
> **운영 스택**: Next.js (App Router) + Vercel Git Integration 자동 배포

---

## 현재 순위 스냅샷 (2026-05-13)

| 키워드 | 현재 순위 | 목표 순위 | 갭 |
|---|---|---|---|
| 주소모음 | **#58** | 1~3위 | -55단 |
| 링크모음 | **100위 밖** | 1~3위 | 미진입 |

## 경쟁 1~3위 분석

| 순위 | 도메인 | 패턴 |
|---|---|---|
| 1 | yugiyu.isweb.co.kr (여기여) | 의인화 한글 + isweb 권위 서브도메인 |
| 2 | xn--ok0bm0vglf7xeba82sl9d.com | 의인화 한글 IDN .com |
| 3 | jusomoa01.isweb.co.kr (주소모아) | 의인화 한글 + isweb 권위 서브도메인 |

**핵심 인사이트**: SERP 상위는 모두 `[한글 의인화 브랜드명] + [권위 도메인]` 패턴. timesharelink.com은 영문 일반 .com이라 구조적 약점 존재.

---

## 플랜 모듈 구조

| 파일 | 단계 | 기간 | 우선순위 |
|---|---|---|---|
| [00-diagnosis.md](./00-diagnosis.md) | 현재 진단 / 갭 분석 | — | — |
| [01-phase1-onpage.md](./01-phase1-onpage.md) | 온페이지 즉시 개선 | Week 1 (3~4일) | ★★★★★ |
| [02-phase2-branding.md](./02-phase2-branding.md) | 한국어 브랜드 + IDN | Week 1~2 | ★★★★ |
| [03-phase3-content.md](./03-phase3-content.md) | 콘텐츠 클러스터 구축 | Week 2~4 | ★★★★ |
| [04-phase4-backlinks.md](./04-phase4-backlinks.md) | 백링크 빌딩 (PBN 포함) | Week 2~6 | ★★★★★ |
| [05-phase5-technical.md](./05-phase5-technical.md) | 기술 SEO + 인덱싱 가속 | Week 1 (즉시) | ★★★★ |
| [06-phase6-monitoring.md](./06-phase6-monitoring.md) | 측정 / 반복 / 자동화 | 지속 | ★★★ |
| [07-timeline.md](./07-timeline.md) | 종합 타임라인 / 마일스톤 | — | — |

---

## 실행 원칙

1. **온페이지 → 인덱싱 가속 → 백링크 → 콘텐츠** 순서로 진행 (가장 빠른 ROI 순)
2. 단일 페이지 H2 통합 패턴 유지 (메모리 `feedback_isweb_blog_single_page` 기준)
3. README.md / LINK.MD 변경 시 동기화 (메모리 `feedback_readme_link_md_sync` 기준)
4. Vercel git integration 자동 배포 (메모리 `feedback_jusomoeum_vercel_cli` 기준)
5. 한국어 콘텐츠 작성 시 파일당 4,500자 이하 모듈 분리 (메모리 `feedback_write_size_limit` 기준)

## 예상 타임라인 요약

| 시점 | 주소모음 목표 | 링크모음 목표 |
|---|---|---|
| Week 2 | #30위권 진입 | #100위 진입 |
| Week 4 | #15위권 | #50위권 |
| Week 6~8 | 1페이지 (#10 이내) | #20위권 |
| Week 10~12 | **1~3위 도전** | 1페이지 정착 |

상세 마일스톤은 [07-timeline.md](./07-timeline.md) 참조.

---

## 사용 SEO 도구 (upsecret-seo-tools MCP)

핵심 도구:
- `google_rank_check` / `google_rank_history` — 순위 추적
- `google_serp_results` / `seo_serp_top_n` — SERP 분석
- `seo_fetch_page` / `seo_compare_headings` — 온페이지 진단
- `ahrefs_site_metrics` / `ahrefs_dr_history` / `ahrefs_backlinks` — 도메인 권위 추적
- `list_pbn_domains` / `generate_pbn_content` / `upload_pbn_content` — PBN 자산 운영
- `deploy_indexnow_key` / `notify_search_engines` / `check_indexing_status` — 인덱싱 가속
- `schedule` (skill) — 주간 자동 추적 태스크 등록
