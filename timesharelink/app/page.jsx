import HeroSection from '@/components/HeroSection';
import WhyAddressCollection from '@/components/WhyAddressCollection';
import TrustVerificationBox from '@/components/TrustVerificationBox';
import SEOTextBlock from '@/components/SEOTextBlock';
import BrandSitesIntro from '@/components/BrandSitesIntro';
import BrandSitesTable from '@/components/BrandSitesTable';
import DetailedComparison from '@/components/DetailedComparison';
import WhyTimesharelink from '@/components/WhyTimesharelink';
import UpdateLogPreview from '@/components/UpdateLogPreview';
import CompareTable from '@/components/CompareTable';
import ReportSubmissionCTA from '@/components/ReportSubmissionCTA';
import FAQSection from '@/components/FAQSection';
import BlogPostsPreview from '@/components/BlogPostsPreview';
import { getVerificationLogsSorted } from '@/lib/verification-logs';
import { BRAND_SITES } from '@/lib/brand-sites';
import { getRecentPosts } from '@/lib/blog-posts';
import { BASE_URL } from '@/lib/constants';

export const revalidate = 3600;

export const metadata = {
    title: '주소모음·링크모음 1위 검증 사이트 2026 - 타임쉐어링크',
    description:
        '✅ 주소모음·링크모음 1위 검증 사이트. 매일 자동 검증된 18개 브랜드 최신 주소를 타임쉐어링크에서 한눈에. 5단계 보안 검증 + 검증로그 100% 공개로 가장 안전한 접속을 보장합니다. (2026년 최신 업데이트)',
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: '주소모음·링크모음 1위 검증 사이트 2026 - 타임쉐어링크',
        description: '✅ 주소모음·링크모음 1위. 매일 자동 검증된 18개 브랜드 최신 주소를 타임쉐어링크에서 한눈에. 5단계 보안 검증.',
        url: '/',
    },
};

// 브랜드 사이트 ItemList JSON-LD
const brandSitesJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: '2026 주소모음 사이트 브랜드 목록',
    description: '대한민국 주요 주소모음 사이트 브랜드를 소개합니다',
    numberOfItems: BRAND_SITES.length,
    itemListElement: BRAND_SITES.map((site, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: site.name,
        description: site.description,
    })),
};

// 홈 카드 섹션의 최근 블로그 글 미리보기를 ItemList로 마크업 (블로그 인덱스로 인덱싱 신호)
const recentPostsForJsonLd = getRecentPosts(6);
const blogPreviewJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: '타임쉐어링크 블로그 — 최신 글',
    description: '주소모음·링크모음 심층 가이드 최신 글 미리보기',
    numberOfItems: recentPostsForJsonLd.length,
    itemListElement: recentPostsForJsonLd.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `${BASE_URL}${encodeURI(`/블로그/${p.slug}`)}`,
        name: p.title,
    })),
};

// FAQ JSON-LD 구조화 데이터
const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: '주소모음과 링크모음의 차이점은 무엇인가요?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: '주소모음과 링크모음은 본질적으로 같은 개념입니다. 모두 웹사이트의 URL을 모아놓은 것을 의미하며, timesharelink에서는 두 용어를 구분 없이 사용합니다.',
            },
        },
        {
            '@type': 'Question',
            name: '링크 검증은 어떤 기준으로 이루어지나요?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: '모든 링크는 HTTPS 보안 인증 확인, 리다이렉트 안전성 검사, 실제 접속 가능 여부 확인, 악성코드 및 피싱 위험 검사, 사용자 신고 내역 반영 등 다중 기준으로 검증됩니다.',
            },
        },
        {
            '@type': 'Question',
            name: '업데이트는 얼마나 자주 이루어지나요?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: '링크 검증은 매일 자동으로 실행되며, 사용자 제보는 평균 12시간 이내 검토되어 24시간 내 반영됩니다.',
            },
        },
        {
            '@type': 'Question',
            name: '사이트 접속이 차단되거나 안 될 때는 어떻게 하나요?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Cloudflare DNS(1.1.1.1) 또는 Google Public DNS(8.8.8.8)로 변경하면 대부분의 접속 문제가 해결됩니다.',
            },
        },
    ],
};

export default function HomePage() {
    const verificationLogs = getVerificationLogsSorted();
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(brandSitesJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPreviewJsonLd) }}
            />
            <main className="flex-grow bg-white scroll-smooth">
                <HeroSection />
                <WhyAddressCollection />
                <TrustVerificationBox />
                <SEOTextBlock />
                <BrandSitesIntro />
                <BrandSitesTable />
                <DetailedComparison />
                <WhyTimesharelink />
                <UpdateLogPreview logs={verificationLogs} />
                <BlogPostsPreview />
                <CompareTable />
                <ReportSubmissionCTA />
                <FAQSection />
            </main>
        </>
    );
}
