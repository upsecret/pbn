import { ShieldCheck, RefreshCw, Eye, Award, ArrowRight } from 'lucide-react';

const ADVANTAGES = [
  {
    icon: ShieldCheck,
    title: '5단계 자동 검증 시스템',
    gradient: 'from-green-500 to-emerald-600',
    description:
      '주소아트, 주소팝, 빠른주소 등 일반 주소모음 사이트는 수동으로 링크를 확인하거나 검증 자체를 생략합니다. timesharelink는 HTTPS 인증, 리다이렉트 추적, 콘텐츠 일치 분석, 도메인 응답 확인, 등급 분류까지 5단계를 자동으로 수행합니다.',
  },
  {
    icon: Eye,
    title: '검증로그 100% 투명 공개',
    gradient: 'from-blue-500 to-indigo-600',
    description:
      '주소박스, 주소허브, 주소북, 주소킹 등 기존 서비스는 내부적으로 어떤 검증을 하는지 알 수 없습니다. timesharelink는 모든 검증 이력을 날짜별·카테고리별로 공개하여 완전한 투명성을 보장합니다.',
  },
  {
    icon: RefreshCw,
    title: '매일 자동 업데이트',
    gradient: 'from-orange-500 to-amber-600',
    description:
      '사이트모음, 여기여, 주소월드 등은 업데이트가 비정기적이어서 접속 불가 링크가 방치되곤 합니다. timesharelink는 매일 자동으로 전체 링크를 재검증하고, 사용자 제보도 24시간 내에 반영합니다.',
  },
  {
    icon: Award,
    title: '4단계 안전 등급 분류',
    gradient: 'from-purple-500 to-violet-600',
    description:
      '주소어때, 주소몬, 주소모아, 주소가이드 등은 단순히 링크를 나열할 뿐 안전도를 표시하지 않습니다. timesharelink는 정상·확인필요·주의·위험 4단계 등급으로 분류하여 사용자가 즉시 판단할 수 있게 합니다.',
  },
];

const WhyTimesharelink = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            timesharelink를 선택해야 하는 이유
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            주소파크, 주소콘, 주소모음 등 수많은 주소모음 사이트 중에서
            timesharelink만의 핵심 차별점을 확인하세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ADVANTAGES.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://jusois.isweb.co.kr/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            링크모음 바로가기
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={encodeURI('/주소검증')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300"
          >
            주소검증 시스템 확인
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyTimesharelink;
