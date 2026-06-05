/**
 * SEO 체크: 초기 HTML에 타겟 키워드("주소모음", "링크모음")가 포함되는지 확인
 * CSR로만 렌더되는 부분이 있으면 초기 HTML에 키워드가 없을 수 있음
 *
 * 사용법: 개발 서버 실행 후
 *   node scripts/seo-check.js
 * 또는 빌드 후
 *   npm run build && node scripts/seo-check.js
 *   npx serve .next -p 3000 (별도 터미널)
 *   node scripts/seo-check.js http://localhost:3000
 */

const TARGET_KEYWORDS = ['주소모음', '링크모음'];
const BASE_URL = process.argv[2] || 'http://localhost:3000';

async function fetchInitialHtml(url) {
  const res = await fetch(url, {
    headers: { 'User-Agent': 'Googlebot/2.1 (compatible; +http://www.google.com/bot.html)' },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`);
  return res.text();
}

function countInHtml(html, keyword) {
  const regex = new RegExp(keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
  const matches = html.match(regex);
  return matches ? matches.length : 0;
}

function checkKeywordInScriptOnly(html, keyword) {
  // <script> 태그 안에만 있고 본문에는 없는 경우 (CSR만 노출) 체크
  const scriptMatches = html.match(/<script[^>]*>[\s\S]*?<\/script>/gi) || [];
  const bodyWithoutScripts = html.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
  const inScripts = scriptMatches.some((s) => s.includes(keyword));
  const inBody = bodyWithoutScripts.includes(keyword);
  return { inScripts, inBody };
}

async function run() {
  console.log('=== SEO 체크: 타겟 키워드 초기 HTML 노출 ===\n');
  console.log(`URL: ${BASE_URL}\n`);

  try {
    const html = await fetchInitialHtml(BASE_URL);
    let allOk = true;

    for (const keyword of TARGET_KEYWORDS) {
      const count = countInHtml(html, keyword);
      const { inScripts, inBody } = checkKeywordInScriptOnly(html, keyword);

      const status = count > 0 ? '✓' : '✗';
      if (count === 0) allOk = false;

      console.log(`[${status}] "${keyword}"`);
      console.log(`    초기 HTML 출현 횟수: ${count}`);
      if (count > 0) {
        if (!inBody && inScripts) {
          console.log(`    ⚠ 경고: 스크립트 내부에만 있고 본문(HTML)에는 없음 → CSR 가능성`);
          allOk = false;
        } else if (inBody) {
          console.log(`    ✓ 본문(HTML)에 포함됨 → 크롤러/SSR 노출 양호`);
        }
      }
      console.log('');
    }

    if (allOk) {
      console.log('결과: 타겟 키워드가 초기 HTML에 포함되어 있습니다. CSR 전용 렌더링 이슈 없음.');
    } else {
      console.log('결과: 일부 키워드가 초기 HTML에 없거나 스크립트에만 있습니다. SSR/CSR 구성을 확인하세요.');
      process.exit(1);
    }
  } catch (err) {
    console.error('요청 실패:', err.message);
    console.error('\n개발 서버가 실행 중인지 확인하세요: npm run dev');
    process.exit(1);
  }
}

run();
