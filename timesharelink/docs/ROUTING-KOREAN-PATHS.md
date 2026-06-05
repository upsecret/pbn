# 한글 경로 라우팅 이슈 및 점검 가이드

## 1. 이슈 요약: `/검증로그`가 Vercel에서 홈으로 리다이렉트됨

### 증상
- **로컬**: `https://localhost:3000/검증로그` → 검증로그 페이지 정상 표시
- **Vercel(프로덕션)**: `https://www.timesharelink.com/검증로그` → **홈(/)으로 리다이렉트**됨

### 원인
**Middleware** (`middleware.js`)가 한글 경로를 두 단계로 처리하기 때문입니다.

1. **`KOREAN_REWRITES`**  
   한글 path → 실제 서빙 경로(영문)로 **rewrite**. 여기에 없으면 rewrite가 일어나지 않음.
2. **`ALLOWED_PATHS`**  
   rewrite 후에도, “허용된 path”가 아니면 **홈(/)으로 리다이렉트**.

`/검증로그`가 두 곳 모두에 없었기 때문에:
- rewrite되지 않았고
- 허용 목록에도 없어  
→ **“그 외는 홈으로 리다이렉트”** 로직에 걸려 `/`로 이동함.

로컬에서는 `next.config.js`의 rewrites가 먼저 적용되어 동작했고, Vercel에서는 **middleware가 먼저 실행**되므로 이 동작이 그대로 드러남.

### 해결 방법
`middleware.js`에서 다음 두 가지를 반드시 함께 수정해야 합니다.

| 수정 위치 | 추가할 값 | 설명 |
|-----------|-----------|------|
| **`KOREAN_REWRITES`** | `'/검증로그': '/updates'` | `/검증로그` 요청을 `/updates` 페이지로 rewrite |
| **`ALLOWED_PATHS`** | `'/검증로그'` | 허용 목록에 포함해 “그 외 → 홈 리다이렉트”에서 제외 |

한글 경로를 **새로 추가할 때마다** 위 두 곳을 모두 갱신해야 Vercel에서도 동일하게 동작합니다.

---

## 2. 한글 경로 추가 시 점검 목록

새 한글 URL(예: `/새메뉴`)을 추가할 때 아래를 순서대로 확인하세요.

### 2.1. Middleware (`middleware.js`)
- [ ] **`KOREAN_REWRITES`**에 `'/새메뉴': '/실제-영문-경로'` 추가
- [ ] **`ALLOWED_PATHS`**에 `'/새메뉴'` 추가

### 2.2. Next.js 설정 (`next.config.js`)
- [ ] **`rewrites`**에 추가  
  - `{ source: '/새메뉴', destination: '/실제-영문-경로' }`
  - `{ source: '/URL인코딩된한글', destination: '/실제-영문-경로' }` (필요 시)

### 2.3. Vercel 설정 (`vercel.json`) — 선택
- [ ] 한글 경로가 여전히 리다이렉트되면 **`rewrites`**에 동일 규칙 추가

### 2.4. 앱 라우팅 (`app/[...slug]/page.jsx`) — slug로 한글 처리하는 경우만
- [ ] **`KOREAN_ROUTES`**에 `'새메뉴': { component: ..., metadata: null }` 추가
- [ ] **`generateMetadata`**의 `titles`에 `'새메뉴': '새메뉴'` 추가

### 2.5. 네비게이션 (`src/components/Header.jsx`)
- [ ] **`navItems`**에 `{ name: '표시명', href: '/새메뉴' }` 추가 (필요 시 인코딩은 팀 규칙에 따름)

---

## 3. 현재 한글 경로 매핑 정리

| 한글 경로 (URL) | 실제 서빙 경로 | 비고 |
|-----------------|----------------|------|
| `/주소검증` | `/address-verification` | |
| `/링크모음` | `/links` | |
| `/주소링크제보` | `/report` | |
| `/검증로그` | `/updates` | middleware + next.config + vercel.json 모두 반영 |

---

## 4. 참고: 리다이렉트 vs Rewrite

- **Redirect** (`next.config.js` redirects): 브라우저 URL이 **바뀜** (예: `/updates` → `/검증로그`).
- **Rewrite**: 브라우저 URL은 **그대로** 두고, 서버가 다른 경로의 콘텐츠를 보여줌 (예: 요청은 `/검증로그`, 실제로는 `/updates` 페이지 응답).

한글 URL을 노출하려면 **rewrite**로 한글 path → 영문 path 매핑을 하고,  
영문 URL 접근 시 한글 URL로 보내려면 **redirect**를 사용하면 됩니다.
