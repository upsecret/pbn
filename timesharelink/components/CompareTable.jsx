import { ShieldCheck } from 'lucide-react';

const COMPARE_ROWS = [
  { feature: 'HTTPS 인증 확인',   us: '자동 검증 (필수)',                      them: '미확인 또는 수동' },
  { feature: '리다이렉트 추적',   us: '최종 목적지까지 전체 체인 검증',         them: '없음' },
  { feature: '콘텐츠 일치 분석',  us: '사이트 설명↔실제 콘텐츠 자동 비교',     them: '없음' },
  { feature: '위험 사이트 처리',  us: '위험 판정 즉시 제거 + 이력 기록',       them: '느린 처리 또는 방치' },
  { feature: '업데이트 주기',     us: '매일 자동 검증',                         them: '비정기적' },
  { feature: '검증 이력 공개',    us: '검증로그 전체 공개 (날짜·카테고리별)',   them: '비공개' },
  { feature: '사용자 제보 처리',  us: '24시간 내 검토, 평균 12시간 반영',      them: '불투명 또는 무응답' },
  { feature: '등급 분류',         us: '정상·확인필요·주의·위험 4단계',          them: '없음' },
];

const CompareTable = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 text-center">
          timesharelink vs 일반 링크모음 사이트
        </h2>
        <p className="text-center text-gray-500 mb-10">
          검증 시스템의 차이가 안전한 링크모음을 만듭니다
        </p>

        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-5 py-4 text-left font-semibold text-gray-600 w-1/3">항목</th>
                <th className="px-5 py-4 text-center font-semibold text-blue-700 w-1/3">
                  <span className="inline-flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4" />
                    timesharelink
                  </span>
                </th>
                <th className="px-5 py-4 text-center font-semibold text-gray-500 w-1/3">
                  일반 링크모음 사이트
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {COMPARE_ROWS.map(({ feature, us, them }) => (
                <tr key={feature} className="hover:bg-blue-50/30 transition-colors">
                  <td className="px-5 py-4 font-medium text-gray-700">{feature}</td>
                  <td className="px-5 py-4 text-center">
                    <span className="inline-flex flex-col items-center gap-1">
                      <span className="text-green-600 font-bold text-base leading-none">✓</span>
                      <span className="text-blue-700 font-medium">{us}</span>
                    </span>
                  </td>
                  <td className="px-5 py-4 text-center">
                    <span className="inline-flex flex-col items-center gap-1">
                      <span className="text-red-400 font-bold text-base leading-none">✗</span>
                      <span className="text-gray-400">{them}</span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default CompareTable;
