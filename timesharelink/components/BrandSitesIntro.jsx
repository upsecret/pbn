import Link from 'next/link';
import { Globe } from 'lucide-react';
import { BRAND_SITES } from '@/lib/brand-sites';

const COLORS = [
  'from-blue-500 to-blue-600',
  'from-indigo-500 to-indigo-600',
  'from-purple-500 to-purple-600',
  'from-cyan-500 to-cyan-600',
  'from-teal-500 to-teal-600',
  'from-sky-500 to-sky-600',
  'from-violet-500 to-violet-600',
];

const BrandSitesIntro = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            2026 주소모음 사이트 브랜드 총정리
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            현재 운영 중인 주요 주소모음 사이트를 한눈에 확인하세요.
            각 브랜드의 특징과 서비스 내용을 비교하여 안전한 선택을 도와드립니다.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {BRAND_SITES.map((site, index) => (
            <Link
              key={site.name}
              href={`/${site.name}`}
              className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${COLORS[index % COLORS.length]} flex items-center justify-center flex-shrink-0`}>
                  <Globe className="w-4.5 h-4.5 text-white" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-blue-600">
                  {site.name}
                </h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {site.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-gray-500 mb-3">
            위 사이트들은 정보 제공 목적으로 소개되었으며, <strong className="text-blue-600">timesharelink</strong>는 독자적인 5단계 검증 시스템을 통해 이들과 차별화된 안전한 링크모음을 제공합니다.
          </p>
          <p className="text-sm text-gray-500">
            함께 이용하면 좋은 자매 서비스로{' '}
            <a
              href="https://jusolook.isweb.co.kr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold hover:underline"
            >
              주소look
            </a>
            을 추천합니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BrandSitesIntro;
