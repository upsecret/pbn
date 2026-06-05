import Link from 'next/link';
import {
  AlertTriangle, RefreshCw, Search, ShieldAlert,
  ShieldCheck, Eye, Zap, CheckCircle, ArrowRight,
} from 'lucide-react';

const REASONS = [
  {
    icon: RefreshCw,
    title: '주소가 수시로 바뀌는 환경',
    description:
      '인기 있는 웹사이트들은 도메인 차단, 서버 이전, 보안 문제 등으로 인해 주소가 자주 변경됩니다. 어제 접속하던 주소가 오늘은 작동하지 않는 일이 빈번하며, 변경된 최신 주소를 빠르게 찾는 것이 점점 어려워지고 있습니다.',
  },
  {
    icon: AlertTriangle,
    title: '피싱·악성코드 위험 증가',
    description:
      '검색 엔진에서 찾은 주소가 피싱 사이트이거나 악성코드가 심어진 페이지일 수 있습니다. 특히 주소가 변경된 사이트를 찾을 때, 검증되지 않은 경로를 통해 접속하면 개인정보 유출이나 금전적 피해로 이어질 수 있습니다.',
  },
  {
    icon: Search,
    title: '검색만으로는 찾기 어려운 정보',
    description:
      '변경된 사이트 주소는 검색 엔진에 즉시 반영되지 않는 경우가 많습니다. 검색 결과에 오래된 주소가 남아 있거나, 유사한 이름의 가짜 사이트가 상위에 노출되기도 합니다. 신뢰할 수 있는 주소모음이 필요한 이유입니다.',
  },
  {
    icon: ShieldAlert,
    title: '검증 없는 주소모음의 한계',
    description:
      '일반적인 주소모음 사이트는 링크를 단순 나열할 뿐, 해당 링크가 안전한지 검증하지 않습니다. 사용자가 직접 안전성을 판별해야 하며, 위험한 사이트가 장기간 방치되는 경우도 있습니다.',
  },
];

const TIMESHARELINK_STRENGTHS = [
  {
    icon: ShieldCheck,
    title: '5단계 자동 보안 검증',
    description: 'HTTPS 인증 → 리다이렉트 추적 → 도메인 응답 → 콘텐츠 일치 → 등급 분류, 모든 링크가 5단계 검증을 거칩니다.',
  },
  {
    icon: Eye,
    title: '검증로그 100% 투명 공개',
    description: '어떤 검증을 언제 실행했는지 날짜별·카테고리별로 누구나 확인할 수 있습니다.',
  },
  {
    icon: Zap,
    title: '매일 자동 업데이트 + 24시간 제보 반영',
    description: '매일 전체 링크를 자동 재검증하고, 사용자 제보는 24시간 내 검토 후 반영합니다.',
  },
  {
    icon: CheckCircle,
    title: '4단계 안전 등급 분류',
    description: '정상·확인필요·주의·위험 4단계로 분류하여 위험 사이트를 즉시 식별하고 제거합니다.',
  },
];

const WhyAddressCollection = () => {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 주소모음이 필요한 이유 */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            주소모음, 왜 필요한가요?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            빠르게 변화하는 웹 환경에서 안전하게 원하는 사이트에 접속하려면
            검증된 주소모음 서비스가 반드시 필요합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {REASONS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* timesharelink의 해결책 */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 sm:p-12">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              timesharelink가 이 문제를 해결합니다
            </h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              단순히 링크를 모아두는 것이 아니라, 기술 기반 검증으로
              안전한 주소만 제공하는 것이 timesharelink의 차이입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {TIMESHARELINK_STRENGTHS.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className="w-5 h-5 text-blue-200 flex-shrink-0" />
                    <h4 className="text-base font-bold text-white">{item.title}</h4>
                  </div>
                  <p className="text-sm text-blue-100 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://jusois.isweb.co.kr/"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
            >
              검증된 주소모음 보기
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/주소검증"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition-colors"
            >
              검증 시스템 자세히 보기
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyAddressCollection;
