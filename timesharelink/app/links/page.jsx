import Link from 'next/link';
import {
  ShieldCheck, RefreshCw, ClipboardCheck, ScrollText,
  ArrowRight, ChevronDown, Send,
  Link2, ArrowLeftRight, FileCheck, Server, Scale, FileText,
} from 'lucide-react';
import { getVerificationLogsSorted } from '@/lib/verification-logs';
import BreadcrumbSchema from '@/components/Schema/BreadcrumbSchema';

export const revalidate = 3600;

export const metadata = {
  title: '링크모음 - 검증된 안전한 사이트 모음',
  description:
    'timesharelink 링크모음 — 5단계 검증 시스템으로 안전성을 확인한 사이트만 모았습니다. HTTPS 인증·리다이렉트·악성코드 검사, 매일 업데이트, 공개 검증로그. 신뢰할 수 있는 링크모음.',
  alternates: { canonical: '/' },
  openGraph: {
    title: '링크모음 - 검증된 안전한 사이트 모음',
    description: 'timesharelink 링크모음 — 5단계 검증 시스템으로 안전성을 확인한 사이트만 모았습니다.',
    url: '/링크모음',
    type: 'website',
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '링크모음 사이트, 정말 안전한가요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'timesharelink는 5단계 검증(HTTPS 인증·리다이렉트 추적·도메인 응답·콘텐츠 일치·등급 분류)을 모두 통과한 사이트만 링크모음에 포함합니다. 모든 검증 결과는 검증로그 페이지에서 누구나 확인할 수 있습니다.',
      },
    },
    {
      '@type': 'Question',
      name: '링크모음은 어떤 기준으로 검증하나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '① HTTPS 인증 확인(SSL 유효성) → ② 리다이렉트 추적(최종 목적지 체인 검증) → ③ 도메인·서버 응답(DNS·응답코드 정상 여부) → ④ 콘텐츠 일치 분석(사이트 설명과 실제 콘텐츠 일치율) → ⑤ 결과 등급 분류(정상/확인필요/주의/위험) 5단계를 거칩니다.',
      },
    },
    {
      '@type': 'Question',
      name: '링크모음은 얼마나 자주 업데이트되나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '매일 자동 검증이 실행되며, 사용자 제보는 평균 12시간 내 검토 후 24시간 내 반영됩니다. 모든 변경 이력은 검증로그 페이지에서 날짜별로 확인 가능합니다.',
      },
    },
    {
      '@type': 'Question',
      name: '링크모음에서 위험한 사이트를 발견하면?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '링크 제보·신고 페이지를 통해 즉시 신고해주세요. 24시간 내 검토 후 위험 판정 시 즉시 링크모음에서 제거하며, 제거 이력은 검증로그에 기록됩니다.',
      },
    },
    {
      '@type': 'Question',
      name: '링크모음에 사이트를 추가 요청할 수 있나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '링크 제보 페이지(/주소링크제보)에서 사이트를 제보하실 수 있습니다. 5단계 안전성 검증 통과 후 평균 12시간 내 링크모음에 추가됩니다.',
      },
    },
  ],
};

// ── 상수 데이터 ──────────────────────────────────────────

const TRUST_BADGES = [
  { icon: ShieldCheck, value: '5단계', label: '자동 검증 시스템' },
  { icon: RefreshCw,   value: '매일',  label: '자동 업데이트' },
  { icon: ClipboardCheck, value: '24h 이내', label: '제보 반영 처리' },
  { icon: ScrollText,  value: '전체 공개', label: '투명한 검증로그' },
];

const VERIFY_STEPS = [
  { step: 1, title: 'HTTPS 인증 확인', desc: 'SSL 인증서 유효성·만료 여부를 자동으로 검사합니다.' },
  { step: 2, title: '리다이렉트 추적', desc: '최종 목적지까지 전체 리다이렉트 체인의 안전성을 검증합니다.' },
  { step: 3, title: '도메인·서버 응답', desc: 'DNS 조회 결과와 HTTP 응답 코드의 정상 여부를 확인합니다.' },
  { step: 4, title: '콘텐츠 일치 분석', desc: '사이트 설명과 실제 콘텐츠의 일치율을 측정해 허위 사이트를 걸러냅니다.' },
  { step: 5, title: '결과 등급 분류', desc: '정상·확인필요·주의·위험 4단계로 분류하고 위험 등급은 즉시 제외합니다.' },
];

const COMPARE_ROWS = [
  {
    feature: 'HTTPS 인증 확인',
    us: '자동 검증 (필수)',
    them: '미확인 또는 수동',
    usGood: true,
  },
  {
    feature: '리다이렉트 추적',
    us: '최종 목적지까지 전체 체인 검증',
    them: '없음',
    usGood: true,
  },
  {
    feature: '콘텐츠 일치 분석',
    us: '사이트 설명↔실제 콘텐츠 자동 비교',
    them: '없음',
    usGood: true,
  },
  {
    feature: '위험 사이트 처리',
    us: '위험 판정 즉시 제거 + 이력 기록',
    them: '느린 처리 또는 방치',
    usGood: true,
  },
  {
    feature: '업데이트 주기',
    us: '매일 자동 검증',
    them: '비정기적',
    usGood: true,
  },
  {
    feature: '검증 이력 공개',
    us: '검증로그 전체 공개 (날짜·카테고리별)',
    them: '비공개',
    usGood: true,
  },
  {
    feature: '사용자 제보 처리',
    us: '24시간 내 검토, 평균 12시간 반영',
    them: '불투명 또는 무응답',
    usGood: true,
  },
  {
    feature: '등급 분류',
    us: '정상·확인필요·주의·위험 4단계',
    them: '없음',
    usGood: true,
  },
];

const FAQS = [
  {
    q: '링크모음 사이트, 정말 안전한가요?',
    a: 'timesharelink는 5단계 검증(HTTPS 인증·리다이렉트 추적·도메인 응답·콘텐츠 일치·등급 분류)을 모두 통과한 사이트만 링크모음에 포함합니다. 모든 검증 결과는 검증로그 페이지에서 누구나 확인할 수 있습니다.',
  },
  {
    q: '링크모음은 어떤 기준으로 검증하나요?',
    a: '① HTTPS 인증 확인 → ② 리다이렉트 체인 검증 → ③ 도메인·서버 응답 확인 → ④ 콘텐츠 일치 분석 → ⑤ 등급 분류 5단계를 거칩니다. 정상 등급만 링크모음에 포함되며, 위험 판정 즉시 제외됩니다.',
  },
  {
    q: '링크모음은 얼마나 자주 업데이트되나요?',
    a: '매일 자동 검증이 실행됩니다. 사용자 제보는 평균 12시간 내 검토 후 24시간 내 반영되며, 모든 변경 이력은 검증로그 페이지에서 날짜별로 확인하실 수 있습니다.',
  },
  {
    q: '링크모음에서 위험한 사이트를 발견하면?',
    a: '페이지 하단 "링크 제보하기" 버튼을 통해 신고해 주세요. 24시간 내 검토 후 위험 판정 시 즉시 링크모음에서 제거하며, 제거 이력은 검증로그에 기록됩니다.',
  },
  {
    q: '링크모음에 사이트를 추가 요청할 수 있나요?',
    a: '링크 제보 페이지(/주소링크제보)에서 사이트를 제보하실 수 있습니다. 5단계 안전성 검증 통과 후 평균 12시간 내 링크모음에 추가됩니다.',
  },
];

const LOG_ICON = {
  'URL 구조 검증':      { icon: Link2,          color: 'text-blue-600 bg-blue-50 border-blue-100' },
  '리다이렉트 검증':    { icon: ArrowLeftRight,  color: 'text-amber-600 bg-amber-50 border-amber-100' },
  '콘텐츠 일치 검증':   { icon: FileCheck,       color: 'text-green-600 bg-green-50 border-green-100' },
  '도메인/서버 응답 검증': { icon: Server,        color: 'text-purple-600 bg-purple-50 border-purple-100' },
  '결과 해석 기준':     { icon: Scale,           color: 'text-indigo-600 bg-indigo-50 border-indigo-100' },
};

// ── 페이지 컴포넌트 ──────────────────────────────────────

export default function LinksPage() {
  const logs = getVerificationLogsSorted().slice(0, 5);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <BreadcrumbSchema items={[
        { name: '홈', path: '/' },
        { name: '링크모음', path: '/링크모음' },
      ]} />

      <main className="flex-grow bg-white">

        {/* ── 섹션 1: 히어로 ── */}
        <section className="bg-gradient-to-br from-blue-700 to-blue-500 py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              링크모음 — 검증된 안전한 사이트만
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 mb-4 max-w-2xl mx-auto leading-relaxed">
              timesharelink의 모든 링크는 <strong className="text-white">5단계 보안 검증</strong>을 통과한 사이트만 포함됩니다.
            </p>
            <p className="text-base text-blue-200 mb-10 max-w-2xl mx-auto">
              HTTPS 인증 · 리다이렉트 안전성 · 콘텐츠 일치 · 악성코드 검사 · 등급 분류
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://jusois.isweb.co.kr/"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
              >
                <ArrowRight className="w-5 h-5" />
                주소모음 보기
              </a>
              <Link
                href="/검증로그"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition-colors"
              >
                <ScrollText className="w-5 h-5" />
                검증 로그
              </Link>
            </div>
          </div>
        </section>

        {/* ── 섹션 2: 신뢰 지표 ── */}
        <section className="py-12 bg-gray-50 border-b border-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {TRUST_BADGES.map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex flex-col items-center text-center p-5 bg-white rounded-2xl shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-3">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="text-xl font-bold text-gray-900">{value}</span>
                  <span className="text-sm text-gray-500 mt-1">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 섹션 3: SEO 본문 + 5단계 검증 ── */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
              신뢰할 수 있는 링크모음의 기준
            </h2>

            <div className="bg-blue-50 rounded-2xl p-8 mb-10 space-y-5 text-gray-700 leading-relaxed">
              <p>
                인터넷에는 수많은 링크모음 사이트가 존재하지만, 피싱 사이트·악성코드·불법 리다이렉트가 뒤섞인 경우
                이용자가 직접 피해를 입을 수 있습니다. 단순히 링크를 모아두는 것과
                <strong className="text-blue-700"> 검증된 링크모음</strong>은 근본적으로 다릅니다.
              </p>
              <p>
                timesharelink는 이 문제를 해결하기 위해 <strong className="text-blue-700">5단계 자동 검증 시스템</strong>을 운영합니다.
                검증을 통과한 사이트만 링크모음에 포함되며, 모든 검증 이력은{' '}
                <Link href="/검증로그" className="text-blue-600 underline hover:text-blue-800 font-medium">
                  검증로그
                </Link>
                에 날짜·카테고리별로 투명하게 공개됩니다.
              </p>
            </div>

            <div className="space-y-4">
              {VERIFY_STEPS.map(({ step, title, desc }) => (
                <div key={step} className="flex items-start gap-5 p-5 bg-white border border-blue-100 rounded-xl shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {step}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
                    <p className="text-sm text-gray-600">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/주소검증"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors shadow-lg"
              >
                <ShieldCheck className="w-5 h-5" />
                주소검증 시스템 자세히 보기
              </Link>
            </div>
          </div>
        </section>

        {/* ── 섹션 4: 검증로그 미리보기 ── */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
              투명하게 공개되는 링크모음 검증 이력
            </h2>
            <p className="text-center text-gray-500 mb-10">
              어떤 기준으로 언제 업데이트됐는지 누구나 확인할 수 있습니다
            </p>

            <div className="bg-white rounded-2xl shadow border border-gray-100 overflow-hidden">
              <ul className="divide-y divide-gray-100">
                {logs.map((item, i) => {
                  const meta = (item['카테고리'] && LOG_ICON[item['카테고리']]) ||
                    { icon: FileText, color: 'text-gray-600 bg-gray-50 border-gray-200' };
                  const Icon = meta.icon;
                  return (
                    <li key={i} className="p-4 sm:p-5 flex items-start gap-4 hover:bg-blue-50/40 transition-colors">
                      <div className={`flex-shrink-0 w-10 h-10 rounded-lg border ${meta.color} flex items-center justify-center`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className="text-sm font-medium text-gray-500">{item['업데이트 날짜']}</span>
                          {item['카테고리'] && (
                            <span className="text-xs text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                              {item['카테고리']}
                            </span>
                          )}
                        </div>
                        <p className="text-gray-900 font-medium leading-snug">{item['제목']}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="mt-6 text-center">
              <Link
                href="/검증로그"
                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors"
              >
                검증로그 전체 보기
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── 섹션 5: 비교 테이블 ── */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
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

        {/* ── 섹션 6: FAQ ── */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
              링크모음 자주 묻는 질문
            </h2>

            <div className="space-y-4">
              {FAQS.map((faq, i) => (
                <details key={i} className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <summary className="list-none cursor-pointer">
                    <span className="flex items-center justify-between w-full px-6 py-5 text-left hover:bg-blue-50 transition-colors duration-200">
                      <span className="text-base font-semibold text-gray-900 pr-4">{faq.q}</span>
                      <ChevronDown className="w-5 h-5 text-blue-600 flex-shrink-0 transition-transform duration-300 group-open:rotate-180" />
                    </span>
                  </summary>
                  <div className="px-6 pb-5 pt-2 border-t border-gray-100">
                    <p className="text-gray-700 leading-relaxed text-sm">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── 섹션 7: CTA ── */}
        <section className="py-16 px-4 bg-blue-600">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              더 좋은 링크모음을 함께 만들어요
            </h2>
            <p className="text-blue-100 mb-8">
              유용한 사이트를 알고 계신가요? 제보해 주시면 검증 후 링크모음에 추가합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/주소링크제보"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
              >
                <Send className="w-5 h-5" />
                링크 제보하기
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition-colors"
              >
                홈으로 돌아가기
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
