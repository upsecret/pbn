import { ShieldCheck, ArrowLeftRight, RefreshCw, FileText, BarChart3 } from 'lucide-react';

const FEATURES = [
  {
    icon: ShieldCheck,
    name: 'HTTPS 보안 인증 확인',
    color: 'text-green-600 bg-green-100',
    timesharelink: '모든 등록 사이트에 대해 HTTPS 인증을 자동으로 검증합니다. 비보안 사이트는 즉시 경고 표시됩니다.',
    others: '주소아트, 주소팝, 주소박스, 주소어때, 빠른주소, 주소허브, 주소모아 등 대부분의 주소모음 사이트에서는 HTTPS 인증 여부를 별도로 확인하지 않습니다.',
  },
  {
    icon: ArrowLeftRight,
    name: '리다이렉트 추적 검증',
    color: 'text-blue-600 bg-blue-100',
    timesharelink: '링크 클릭 시 최종 도착 페이지까지 전체 리다이렉트 체인을 추적하여 중간 경유 사이트의 안전성도 함께 검증합니다.',
    others: '주소몬, 주소파크, 주소북, 주소콘, 주소가이드 등 경쟁 사이트들은 리다이렉트 추적 기능을 제공하지 않아 중간 경유지의 위험을 파악할 수 없습니다.',
  },
  {
    icon: RefreshCw,
    name: '업데이트 주기',
    color: 'text-orange-600 bg-orange-100',
    timesharelink: '매일 자동 검증을 실행하며, 사용자 제보는 평균 12시간 이내에 검토하여 24시간 내에 반영합니다.',
    others: '사이트모음, 여기여, 주소월드, 주소킹 등은 업데이트 주기가 비정기적이며, 오래된 링크가 그대로 남아 있는 경우가 빈번합니다.',
  },
  {
    icon: FileText,
    name: '검증 이력 투명 공개',
    color: 'text-purple-600 bg-purple-100',
    timesharelink: '검증로그를 날짜별·카테고리별로 전체 공개하여 누구나 검증 과정과 결과를 확인할 수 있습니다.',
    others: '주소모음, 주소어때, 주소파크, 주소북, 주소허브 등 어떤 경쟁 사이트도 검증 이력을 공개적으로 제공하지 않습니다.',
  },
  {
    icon: BarChart3,
    name: '등급 분류 시스템',
    color: 'text-indigo-600 bg-indigo-100',
    timesharelink: '정상·확인필요·주의·위험의 4단계 등급으로 분류하여 사용자가 한눈에 사이트의 안전도를 판단할 수 있습니다.',
    others: '주소아트, 빠른주소, 주소모아, 주소킹, 주소가이드 등은 등급 분류 없이 단순 나열 방식으로 사이트를 제공합니다.',
  },
];

const DetailedComparison = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            주소모음 사이트 기능 비교
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            주소아트, 주소팝, 주소박스, 주소어때 등 다양한 주소모음 사이트가 운영되고 있지만,
            검증 시스템의 유무에서 결정적인 차이가 발생합니다.
          </p>
        </div>

        <div className="space-y-6">
          {FEATURES.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.name}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 px-6 py-4 bg-gray-50 border-b border-gray-200">
                  <div className={`w-8 h-8 rounded-lg ${feat.color} flex items-center justify-center`}>
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{feat.name}</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-green-600 font-bold text-lg">✓</span>
                      <span className="text-sm font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full">
                        timesharelink
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">{feat.timesharelink}</p>
                  </div>

                  <div className="p-6 bg-gray-50/50">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-red-400 font-bold text-lg">✗</span>
                      <span className="text-sm font-semibold text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
                        기타 주소모음 사이트
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed">{feat.others}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DetailedComparison;
