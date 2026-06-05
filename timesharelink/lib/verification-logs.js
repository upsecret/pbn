import fs from 'fs';
import path from 'path';

const LOG_FILE = 'verification-update-logs.jsonl';
const CONTENT_DIR = 'content';

/**
 * 오늘 기준 daysAgo일 전의 날짜를 KST(UTC+9) 기준 YYYY-MM-DD 문자열로 반환
 */
function getDateKST(daysAgo = 0) {
  const kst = new Date(Date.now() + 9 * 60 * 60 * 1000);
  kst.setUTCDate(kst.getUTCDate() - daysAgo);
  return kst.toISOString().split('T')[0];
}

/**
 * 컬렉션: 주소, 링크검증 업데이트 로그
 * JSONL 파일에서 검증 로그 목록을 읽어 반환합니다.
 * 날짜는 JSONL의 값을 무시하고, 파일 순서 기준 4개씩 묶어 오늘부터 하루씩 뒤로 동적 할당합니다.
 * @returns {Array<{제목: string, '업데이트 날짜': string, '버전/차수': string, 카테고리: string}>}
 */
export function getVerificationLogs() {
  const filePath = path.join(process.cwd(), CONTENT_DIR, LOG_FILE);
  if (!fs.existsSync(filePath)) return [];
  const raw = fs.readFileSync(filePath, 'utf-8');
  const items = raw
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      try {
        return JSON.parse(line);
      } catch {
        return null;
      }
    })
    .filter(Boolean);

  // 4개씩 묶어 날짜 동적 할당: index 0-3 → 오늘, 4-7 → 어제, 8-11 → 2일 전, ...
  return items.map((item, index) => ({
    ...item,
    '업데이트 날짜': getDateKST(Math.floor(index / 4)),
  }));
}

/**
 * 최신순 정렬된 검증 로그 (업데이트 날짜 내림차순)
 */
export function getVerificationLogsSorted() {
  return getVerificationLogs();
}
