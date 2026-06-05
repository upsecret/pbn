import Link from 'next/link';
import {
  ShieldCheck, RefreshCw, ArrowRight, ChevronDown, Send, ScrollText,
  Globe, Star, Zap, Layout, Search, BookOpen, Users, TrendingUp,
} from 'lucide-react';
import { getBrandPageData, getAllBrandSlugs, BRAND_SLUG_MAP } from '@/lib/brand-page-content';
import { notFound } from 'next/navigation';
import BreadcrumbSchema from '@/components/Schema/BreadcrumbSchema';

export const revalidate = 3600;

// ── 정적 파라미터 생성 ───────────────────────────────────
export async function generateStaticParams() {
  return getAllBrandSlugs().map((slug) => ({ slug }));
}

// ── 메타데이터 ───────────────────────────────────────────
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = getBrandPageData(slug);
  if (!data) return {};
  const koreanPath = `/${data.koreanName}`;
  return {
    title: data.title,
    description: data.description,
    alternates: { canonical: koreanPath },
    openGraph: {
      title: data.title,
      description: data.description,
      url: koreanPath,
      type: 'website',
    },
    keywords: [data.koreanName, '주소모음', '링크모음', '사이트모음', '최신주소', 'timesharelink'],
  };
}

// ── 아이콘 풀 (특징 섹션용) ──────────────────────────────
const FEATURE_ICONS = [Star, Zap, Layout, Search, BookOpen, Users, TrendingUp, Globe];

// ── 페이지 컴포넌트 ─────────────────────────────────────
export default async function BrandPage({ params }) {
  const { slug } = await params;
  const data = getBrandPageData(slug);
  if (!data) notFound();

  // FAQ JSON-LD
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };

  // 관련 브랜드 데이터
  const relatedBrandsData = data.relatedBrands
    .map((rSlug) => {
      const name = BRAND_SLUG_MAP[rSlug];
      return name ? { slug: rSlug, name } : null;
    })
    .filter(Boolean);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <BreadcrumbSchema items={[
        { name: '홈', path: '/' },
        { name: data.koreanName, path: `/${data.koreanName}` },
      ]} />

      <main className="flex-grow bg-white">

        {/* ── 섹션 1: 히어로 ── */}
        <section className="bg-gradient-to-br from-blue-700 to-blue-500 py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              {data.heroTitle}
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 mb-4 max-w-2xl mx-auto leading-relaxed">
              {data.heroSubtitle}
            </p>
            <p className="text-base text-blue-200 mb-10 max-w-2xl mx-auto">
              {data.koreanName}의 특징 · 장단점 · 이용 방법 · timesharelink 비교
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

        {/* ── 섹션 2: 소개 ── */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
              {data.koreanName}은(는) 어떤 서비스인가요?
            </h2>
            <div className="bg-blue-50 rounded-2xl p-8 space-y-5 text-gray-700 leading-relaxed">
              {data.introParagraphs.map((p, i) => (
                <p key={i}>
                  {i === data.introParagraphs.length - 1 ? (
                    <>
                      {p.split('timesharelink').map((part, j, arr) =>
                        j < arr.length - 1 ? (
                          <span key={j}>
                            {part}
                            <strong className="text-blue-700">timesharelink</strong>
                          </span>
                        ) : (
                          <span key={j}>{part}</span>
                        )
                      )}
                    </>
                  ) : (
                    p
                  )}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* ── 섹션 3: 주요 특징 ── */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10 text-center">
              {data.koreanName}의 주요 특징
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.features.map((feat, i) => {
                const Icon = FEATURE_ICONS[i % FEATURE_ICONS.length];
                return (
                  <div
                    key={i}
                    className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">{feat.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{feat.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── 섹션 4: 이용 방법 ── */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10 text-center">
              {data.koreanName} 이용 방법
            </h2>
            <div className="space-y-4">
              {data.howItWorks.map(({ step, title, description }) => (
                <div
                  key={step}
                  className="flex items-start gap-5 p-5 bg-white border border-blue-100 rounded-xl shadow-sm"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {step}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
                    <p className="text-sm text-gray-600">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 섹션 5: timesharelink 비교 (+α) ── */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 text-center">
              {data.koreanName} vs timesharelink 비교
            </h2>
            <p className="text-center text-gray-500 mb-10">
              검증 시스템의 차이가 안전한 주소모음을 만듭니다
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 브랜드 장단점 */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-gray-600" />
                  {data.koreanName}
                </h3>
                <div className="mb-4">
                  <p className="text-sm font-semibold text-green-700 mb-2">장점</p>
                  <ul className="space-y-1">
                    {data.pros.map((pro) => (
                      <li key={pro} className="flex items-start gap-1.5 text-sm text-gray-700">
                        <span className="text-green-500 font-bold mt-0.5 flex-shrink-0">+</span>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-red-600 mb-2">단점</p>
                  <ul className="space-y-1">
                    {data.cons.map((con) => (
                      <li key={con} className="flex items-start gap-1.5 text-sm text-gray-500">
                        <span className="text-red-400 font-bold mt-0.5 flex-shrink-0">−</span>
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* timesharelink 강점 */}
              <div className="bg-blue-50 rounded-2xl border-2 border-blue-200 p-6 shadow-sm">
                <h3 className="text-lg font-bold text-blue-700 mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5" />
                  timesharelink
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm text-blue-800">
                    <span className="text-green-600 font-bold mt-0.5 flex-shrink-0">✓</span>
                    <span><strong>5단계 자동 보안 검증</strong> — HTTPS 인증, 리다이렉트 추적, 도메인 응답, 콘텐츠 일치, 등급 분류</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-blue-800">
                    <span className="text-green-600 font-bold mt-0.5 flex-shrink-0">✓</span>
                    <span><strong>검증로그 100% 투명 공개</strong> — 날짜·카테고리별 검증 이력 확인</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-blue-800">
                    <span className="text-green-600 font-bold mt-0.5 flex-shrink-0">✓</span>
                    <span><strong>매일 자동 업데이트</strong> — 최신 주소 실시간 반영</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-blue-800">
                    <span className="text-green-600 font-bold mt-0.5 flex-shrink-0">✓</span>
                    <span><strong>4단계 안전 등급 분류</strong> — 정상/확인필요/주의/위험</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-blue-800">
                    <span className="text-green-600 font-bold mt-0.5 flex-shrink-0">✓</span>
                    <span><strong>24시간 내 제보 처리</strong> — 위험 판정 즉시 제거</span>
                  </li>
                </ul>
                <div className="mt-5">
                  <Link
                    href="/주소검증"
                    className="inline-flex items-center gap-2 text-blue-700 font-semibold text-sm hover:text-blue-900 transition-colors"
                  >
                    검증 시스템 자세히 보기
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 섹션 6: FAQ ── */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
              {data.koreanName} 자주 묻는 질문
            </h2>
            <div className="space-y-4">
              {data.faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
                >
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

        {/* ── 섹션 7: 다른 브랜드 크로스 링크 (+α) ── */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
              다른 주소모음 사이트도 알아보세요
            </h2>
            <p className="text-center text-gray-500 mb-10">
              각 사이트의 특징과 장단점을 비교하여 안전한 선택을 도와드립니다
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {relatedBrandsData.map((rb) => (
                <Link
                  key={rb.slug}
                  href={`/${rb.name}`}
                  className="bg-white border border-gray-200 rounded-xl p-4 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Globe className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-sm font-bold text-gray-900">{rb.name}</span>
                </Link>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors"
              >
                주소모음 전체 비교 보기
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── 섹션 8: CTA ── */}
        <section className="py-16 px-4 bg-blue-600">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              안전한 주소모음, timesharelink에서 확인하세요
            </h2>
            <p className="text-blue-100 mb-8">
              유용한 사이트를 알고 계신가요? 제보해 주시면 5단계 검증 후 링크모음에 추가합니다.
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
