# Vercel 배포 가이드

Next.js 프로젝트를 Vercel에 배포하는 방법입니다.

## 1. 준비사항

- [Vercel 계정](https://vercel.com/signup) (GitHub/GitLab/Bitbucket 로 가입 권장)
- 프로젝트가 **Git 저장소**에 올라가 있어야 함 (GitHub 등)

## 2. 배포 방법

### 방법 A: Vercel 웹에서 연결 (권장)

1. **저장소 푸시**
   ```bash
   git add .
   git commit -m "Prepare for Vercel deploy"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Vercel 로그인**  
   https://vercel.com → **Login** → GitHub 등으로 로그인

3. **프로젝트 임포트**
   - **Add New...** → **Project**
   - **Import Git Repository**에서 해당 저장소 선택
   - **Import** 클릭

4. **설정 확인** (보통 자동 감지됨)
   - **Framework Preset**: Next.js
   - **Build Command**: `next build` (기본값)
   - **Output Directory**: (비워두기, Next.js 기본값 사용)
   - **Install Command**: `npm install` (기본값)

5. **Deploy** 클릭  
   빌드 후 `https://프로젝트명.vercel.app` 로 배포됨.

### 방법 B: Vercel CLI

1. **CLI 설치 및 로그인**
   ```bash
   npm i -g vercel
   vercel login
   ```

2. **프로젝트 폴더에서 배포**
   ```bash
   cd C:\Users\Administrator\antigravity\addresslink-website
   vercel
   ```
   - 첫 실행 시 프로젝트 연결/생성 질문에 답한 뒤 배포됨.
   - 프로덕션 배포: `vercel --prod`

## 3. 환경 변수 (필요한 경우)

- Vercel 대시보드 → 프로젝트 → **Settings** → **Environment Variables**
- 키/값 입력 후 **Save**  
  (예: `NEXT_PUBLIC_API_URL`, `NEXT_PUBLIC_SITE_URL` 등)

## 4. 도메인 연결 (선택)

- **Settings** → **Domains** 에서  
  `www.timesharelink.com` 등 커스텀 도메인 추가 가능.
- Vercel이 DNS 설정 방법을 안내합니다.

## 5. 참고

- Next.js는 Vercel에서 **자동 감지**되므로 별도 빌드 설정 없이 배포 가능합니다.
- `app/` 라우터, `metadata`, 정적/SSR 페이지 모두 그대로 동작합니다.
- 배포 후 브랜치 푸시 시 **자동 재배포**됩니다 (Git 연동 시).
