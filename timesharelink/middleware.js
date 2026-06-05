import { NextResponse } from 'next/server';

/** 한글 URL → 내부 영문 경로로 rewrite (실제 페이지 렌더링용) */
const KOREAN_REWRITES = {
    // 기존 페이지
    '/주소검증': '/address-verification',
    '/링크모음': '/links',
    '/주소링크제보': '/report',
    '/검증로그': '/updates',
    '/블로그': '/blog',
    // 브랜드 키워드 페이지 (18개)
    '/주소아트': '/brands/jusoart',
    '/주소팝': '/brands/jusopop',
    '/주소박스': '/brands/jusobox',
    '/주소어때': '/brands/jusoottae',
    '/주소몬': '/brands/jusomon',
    '/주소파크': '/brands/jusopark',
    '/주소북': '/brands/jusobook',
    '/주소허브': '/brands/jusohub',
    '/빠른주소': '/brands/ppareunjuso',
    '/주소모음': '/brands/jusomoeum',
    '/주소콘': '/brands/jusokon',
    '/주소가이드': '/brands/jusoguide',
    '/사이트모음': '/brands/sitemoeum',
    '/여기여': '/brands/yeogiyeo',
    '/주소모아': '/brands/jusomoa',
    '/주소월드': '/brands/jusoworld',
    '/주소킹': '/brands/jusoking',
    '/주소탑': '/brands/jusotop',
};

/** 영문 경로 → 한글 URL로 redirect (canonical SEO 처리) */
const ENGLISH_REDIRECTS = {
    // 기존 페이지
    '/address-verification': '/주소검증',
    '/links': '/링크모음',
    '/report': '/주소링크제보',
    '/updates': '/검증로그',
    '/blog': '/블로그',
    // 브랜드 키워드 페이지 (18개)
    '/brands/jusoart': '/주소아트',
    '/brands/jusopop': '/주소팝',
    '/brands/jusobox': '/주소박스',
    '/brands/jusoottae': '/주소어때',
    '/brands/jusomon': '/주소몬',
    '/brands/jusopark': '/주소파크',
    '/brands/jusobook': '/주소북',
    '/brands/jusohub': '/주소허브',
    '/brands/ppareunjuso': '/빠른주소',
    '/brands/jusomoeum': '/주소모음',
    '/brands/jusokon': '/주소콘',
    '/brands/jusoguide': '/주소가이드',
    '/brands/sitemoeum': '/사이트모음',
    '/brands/yeogiyeo': '/여기여',
    '/brands/jusomoa': '/주소모아',
    '/brands/jusoworld': '/주소월드',
    '/brands/jusoking': '/주소킹',
    '/brands/jusotop': '/주소탑',
};

/** 명시된 경로만 허용, 그 외는 홈(/)으로 리다이렉트 */
const ALLOWED_PATHS = new Set([
    '/',
    // 기존 페이지
    '/주소검증',
    '/링크모음',
    '/주소링크제보',
    '/검증로그',
    '/블로그',
    '/sitemap.xml',
    '/robots.txt',
    // 브랜드 키워드 페이지 (18개)
    '/주소아트', '/주소팝', '/주소박스', '/주소어때', '/주소몬',
    '/주소파크', '/주소북', '/주소허브', '/빠른주소', '/주소모음',
    '/주소콘', '/주소가이드', '/사이트모음', '/여기여',
    '/주소모아', '/주소월드', '/주소킹', '/주소탑',
]);

const KO_BLOG_PREFIX = '/블로그/';
const EN_BLOG_PREFIX = '/blog/';

export function middleware(request) {
    const { pathname: rawPathname } = request.nextUrl;

    let pathname;
    try {
        pathname = decodeURIComponent(rawPathname);
    } catch {
        pathname = rawPathname;
    }

    console.log('[middleware] rawPathname:', rawPathname, '| decoded:', pathname);

    // 한글 URL → 내부 영문 경로로 rewrite
    const rewriteTarget = KOREAN_REWRITES[pathname];
    if (rewriteTarget) {
        return NextResponse.rewrite(new URL(rewriteTarget, request.url));
    }

    // 블로그 개별 글: /블로그/{slug} → /blog/{slug} rewrite (한글 slug 그대로 전달)
    if (pathname.startsWith(KO_BLOG_PREFIX) && pathname.length > KO_BLOG_PREFIX.length) {
        const slug = pathname.slice(KO_BLOG_PREFIX.length);
        const url = request.nextUrl.clone();
        url.pathname = `/blog/${slug}`;
        return NextResponse.rewrite(url);
    }

    // 영문 경로 → 한글 canonical URL로 redirect
    const redirectTarget = ENGLISH_REDIRECTS[pathname];
    if (redirectTarget) {
        return NextResponse.redirect(new URL(encodeURI(redirectTarget), request.url), 308);
    }

    // 영문 블로그 개별 글: /blog/{slug} → /블로그/{slug} redirect
    if (pathname.startsWith(EN_BLOG_PREFIX) && pathname.length > EN_BLOG_PREFIX.length) {
        const slug = pathname.slice(EN_BLOG_PREFIX.length);
        return NextResponse.redirect(
            new URL(encodeURI(`/블로그/${slug}`), request.url),
            308,
        );
    }

    if (!ALLOWED_PATHS.has(pathname)) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!_next/static|_next/image|favicon.ico|api/|.*\\.(?:svg|png|jpg|jpeg|gif|ico|webp|xml|txt)$).*)'],
};
