# GoDaddy 도메인 → Vercel 연결 (timesharelink.com)

- **메인 주소**: https://www.timesharelink.com  
- **리다이렉트**: https://timesharelink.com → https://www.timesharelink.com (영구 이동)

---

## 1. Vercel에서 도메인 추가

1. Vercel 대시보드 → 해당 프로젝트 선택  
2. **Settings** → **Domains**  
3. **Add** 로 아래 두 개 추가:
   - `www.timesharelink.com` ← **메인(프로덕션)으로 사용할 주소**
   - `timesharelink.com`
4. **Primary Domain**을 `www.timesharelink.com` 으로 설정 (가능한 경우)  
5. 저장 후, 각 도메인에 대해 Vercel이 안내하는 **DNS 레코드** 확인 (다음 단계에서 사용)

---

## 2. GoDaddy DNS 설정

1. [GoDaddy](https://www.godaddy.com) 로그인 → **My Products**  
2. **timesharelink.com** 옆 **DNS** (또는 **Manage DNS**) 클릭  
3. 아래처럼 레코드 추가/수정.

### 2-1. www → Vercel (서브도메인)

| Type | Name | Value | TTL |
|------|------|-------|-----|
| **CNAME** | `www` | `cname.vercel-dns.com` | 600 (또는 1 Hour) |

- **Name**: `www` 만 입력 (도메인명은 빼고)  
- **Value**: `cname.vercel-dns.com`  
- 기존 `www` CNAME/A 레코드가 있으면 **수정**하거나 삭제 후 위로 통일

### 2-2. apex (timesharelink.com) → Vercel (리다이렉트용)

| Type | Name | Value | TTL |
|------|------|-------|-----|
| **A** | `@` | `76.76.21.21` | 600 (또는 1 Hour) |

- **Name**: `@` (또는 비움, “루트/apex” 의미)  
- **Value**: `76.76.21.21` (Vercel 공식 IP)  
- 기존 `@` 에 대한 A 레코드가 있으면 **이 값으로 변경**

(선택) GoDaddy에서 **CNAME Flattening** 또는 **ALIAS**를 지원하면,  
`@` → `cname.vercel-dns.com` 형태로 넣을 수도 있음. 없으면 A 레코드만 위처럼 설정.

### 2-3. 저장

- **Save** 로 DNS 저장  
- 반영까지 보통 10분~몇 시간 (최대 24~48시간)

---

## 3. 리다이렉트 (timesharelink.com → www)

이미 **프로젝트 루트의 `vercel.json`** 에 설정해 두었습니다.

- `timesharelink.com` (및 그 하위 경로) 접속 시  
  → **https://www.timesharelink.com** 으로 **301 영구 이동**

배포만 다시 하면 적용됩니다. (Git 푸시로 자동 배포된 상태라면 별도 작업 없음)

---

## 4. 확인 순서

1. **Vercel → Domains**  
   - `www.timesharelink.com`, `timesharelink.com` 모두 **Valid** / 연결됨 표시 확인  
2. 브라우저에서:
   - https://www.timesharelink.com → 사이트 정상 표시  
   - https://timesharelink.com → https://www.timesharelink.com 로 자동 이동  
3. 문제 있으면:
   - GoDaddy DNS 저장 여부, Name/Value 오타, TTL 지난 후 재확인  
   - Vercel 프로젝트에 두 도메인이 모두 추가됐는지 확인

---

## 요약

| 목적 | GoDaddy 설정 | Vercel |
|------|----------------|--------|
| www 메인 사이트 | CNAME `www` → `cname.vercel-dns.com` | 도메인 추가, Primary = www |
| apex 리다이렉트 | A `@` → `76.76.21.21` | 도메인 추가 + vercel.json 리다이렉트 |

이후에는 **www.timesharelink.com** 만 홈페이지로 사용하고, **timesharelink.com** 은 자동으로 www 로 넘어가게 됩니다.
