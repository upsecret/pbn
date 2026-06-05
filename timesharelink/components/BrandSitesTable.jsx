import Link from 'next/link';
import { ThumbsUp, ThumbsDown } from 'lucide-react';
import { BRAND_SITES } from '@/lib/brand-sites';

const BrandSitesTable = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            주소모음 사이트별 장단점 비교
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            각 주소모음 사이트의 장점과 단점을 한눈에 비교하여 나에게 맞는 서비스를 찾아보세요.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-5 py-4 text-left font-semibold text-gray-700 w-[140px] min-w-[140px]">사이트명</th>
                <th className="px-5 py-4 text-left font-semibold text-green-700">
                  <span className="inline-flex items-center gap-1.5">
                    <ThumbsUp className="w-4 h-4" />
                    장점
                  </span>
                </th>
                <th className="px-5 py-4 text-left font-semibold text-red-600">
                  <span className="inline-flex items-center gap-1.5">
                    <ThumbsDown className="w-4 h-4" />
                    단점
                  </span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {BRAND_SITES.map((site) => (
                <tr key={site.name} className="hover:bg-blue-50/30 transition-colors">
                  <td className="px-5 py-4 font-bold whitespace-nowrap">
                    <Link href={`/${site.name}`} className="text-blue-600 hover:text-blue-800 hover:underline">
                      {site.name}
                    </Link>
                  </td>
                  <td className="px-5 py-4">
                    <ul className="space-y-1">
                      {site.pros.map((pro) => (
                        <li key={pro} className="flex items-start gap-1.5 text-gray-700">
                          <span className="text-green-500 font-bold mt-0.5 flex-shrink-0">+</span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="px-5 py-4">
                    <ul className="space-y-1">
                      {site.cons.map((con) => (
                        <li key={con} className="flex items-start gap-1.5 text-gray-500">
                          <span className="text-red-400 font-bold mt-0.5 flex-shrink-0">−</span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}

              {/* timesharelink 행 - 강조 */}
              <tr className="bg-blue-50 border-t-2 border-blue-200">
                <td className="px-5 py-4 font-bold text-blue-700 whitespace-nowrap">timesharelink</td>
                <td className="px-5 py-4">
                  <ul className="space-y-1">
                    <li className="flex items-start gap-1.5 text-blue-700 font-medium">
                      <span className="text-green-600 font-bold mt-0.5 flex-shrink-0">✓</span>
                      5단계 자동 보안 검증
                    </li>
                    <li className="flex items-start gap-1.5 text-blue-700 font-medium">
                      <span className="text-green-600 font-bold mt-0.5 flex-shrink-0">✓</span>
                      검증로그 100% 투명 공개
                    </li>
                    <li className="flex items-start gap-1.5 text-blue-700 font-medium">
                      <span className="text-green-600 font-bold mt-0.5 flex-shrink-0">✓</span>
                      매일 자동 업데이트
                    </li>
                    <li className="flex items-start gap-1.5 text-blue-700 font-medium">
                      <span className="text-green-600 font-bold mt-0.5 flex-shrink-0">✓</span>
                      4단계 안전 등급 분류
                    </li>
                  </ul>
                </td>
                <td className="px-5 py-4">
                  <span className="text-sm text-gray-500 italic">해당 없음</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-center text-sm text-gray-500">
          위 비교는 각 사이트의 공개된 기능을 기준으로 작성되었습니다. <strong className="text-blue-600">timesharelink</strong>는 모든 항목에서 검증된 안전성을 제공합니다.
        </p>
      </div>
    </section>
  );
};

export default BrandSitesTable;
