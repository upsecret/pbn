import './globals.css';
import Script from 'next/script';
import { DM_Sans } from 'next/font/google';
import ScrollToTop from '@/components/ScrollToTop';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BASE_URL, BRAND_ALIASES, COMPANY_NAME, COMPANY_EMAIL, COMPANY_PHONE, SISTER_SITES } from '@/lib/constants';

const GA_ID = 'G-2NDD2RE97K';

const dmSans = DM_Sans({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-dm-sans',
});

export const metadata = {
    metadataBase: new URL(BASE_URL),
    title: {
        default: '주소모음·링크모음 1위 검증 사이트 2026 - 타임쉐어링크',
        template: '%s | 타임쉐어링크',
    },
    description:
        '✅ 주소모음·링크모음 1위 검증 사이트. 매일 자동 검증된 18개 브랜드 최신 주소를 타임쉐어링크에서 한눈에. 5단계 보안 검증 + 검증로그 100% 공개로 가장 안전한 접속을 보장합니다. (2026년 최신 업데이트)',
    keywords: [
        '주소모음', '링크모음', '사이트모음', '최신주소', '안전링크', 'timesharelink',
        '주소아트', '주소팝', '주소박스', '주소어때', '주소몬', '주소파크',
        '주소북', '주소허브', '빠른주소', '주소콘', '주소가이드', '여기여',
        '주소모아', '주소월드', '주소킹', '주소탑',
    ],
    authors: [{ name: '주식회사 타임쉐어링크' }],
    creator: '주식회사 타임쉐어링크',
    publisher: '주식회사 타임쉐어링크',
    formatDetection: { email: false, address: false, telephone: false },
    alternates: {
        canonical: '/',
    },
    openGraph: {
        type: 'website',
        locale: 'ko_KR',
        siteName: '타임쉐어링크',
        title: '주소모음·링크모음 1위 검증 사이트 2026 - 타임쉐어링크',
        description: '✅ 주소모음·링크모음 1위. 매일 자동 검증된 18개 브랜드 최신 주소를 타임쉐어링크에서 한눈에. 5단계 보안 검증.',
        url: BASE_URL,
    },
    twitter: {
        card: 'summary_large_image',
        title: '주소모음·링크모음 1위 검증 사이트 2026 - 타임쉐어링크',
        description: '✅ 주소모음·링크모음 1위. 매일 자동 검증된 18개 브랜드 최신 주소를 타임쉐어링크에서 한눈에. 5단계 보안 검증.',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

// JSON-LD 구조화 데이터
const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'Organization',
            '@id': `${BASE_URL}/#organization`,
            name: COMPANY_NAME,
            alternateName: BRAND_ALIASES,
            url: BASE_URL,
            email: COMPANY_EMAIL,
            telephone: COMPANY_PHONE,
            logo: {
                '@type': 'ImageObject',
                url: `${BASE_URL}/logo.svg`,
                width: 512,
                height: 512,
            },
            sameAs: SISTER_SITES.map((s) => s.url),
            address: {
                '@type': 'PostalAddress',
                streetAddress: '테헤란로 152, 8층 802호(역삼동, 강남파이낸스센터)',
                addressLocality: '강남구',
                addressRegion: '서울특별시',
                addressCountry: 'KR',
            },
        },
        {
            '@type': 'WebSite',
            '@id': `${BASE_URL}/#website`,
            url: BASE_URL,
            name: '타임쉐어링크',
            alternateName: BRAND_ALIASES,
            description: '검증된 안전한 사이트만 엄선하여 제공하는 주소모음·링크모음 1위 검증 플랫폼',
            publisher: { '@id': `${BASE_URL}/#organization` },
            inLanguage: 'ko-KR',
            potentialAction: {
                '@type': 'SearchAction',
                target: {
                    '@type': 'EntryPoint',
                    urlTemplate: `${BASE_URL}/링크모음?q={search_term_string}`,
                },
                'query-input': 'required name=search_term_string',
            },
        },
    ],
};

export default function RootLayout({ children }) {
    return (
        <html lang="ko" className={dmSans.variable}>
            <head>
                <Script
                    src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${GA_ID}');
                    `}
                </Script>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className="font-sans antialiased min-h-screen flex flex-col">
                <ScrollToTop />
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
