import Link from 'next/link';
import { getVerificationLogsSorted } from '@/lib/verification-logs';
import { ArrowRight, Link2, ArrowLeftRight, FileCheck, Server, Scale, FileText } from 'lucide-react';
import BreadcrumbSchema from '@/components/Schema/BreadcrumbSchema';

export const revalidate = 3600;

const CATEGORIES = [
  'URL 구조 검증',
  '리다이렉트 검증',
  '콘텐츠 일치 검증',
  '도메인/서버 응답 검증',
  '결과 해석 기준',
];

const CATEGORY_ICON = {
  'URL 구조 검증': { icon: Link2, color: 'text-blue-600 bg-blue-50 border-blue-100' },
  '리다이렉트 검증': { icon: ArrowLeftRight, color: 'text-amber-600 bg-amber-50 border-amber-100' },
  '콘텐츠 일치 검증': { icon: FileCheck, color: 'text-green-600 bg-green-50 border-green-100' },
  '도메인/서버 응답 검증': { icon: Server, color: 'text-purple-600 bg-purple-50 border-purple-100' },
  '결과 해석 기준': { icon: Scale, color: 'text-indigo-600 bg-indigo-50 border-indigo-100' },
};

export const metadata = {
    title: '검증로그',
    description: '주소·링크검증 업데이트 로그. 주소검증 관련 변경사항을 투명하게 공개합니다.',
    alternates: {
        canonical: '/검증로그',
    },
    openGraph: {
        title: '검증로그 | timesharelink',
        description: '주소·링크검증 업데이트 로그. 변경사항을 투명하게 공개합니다.',
        url: '/검증로그',
    },
};

export default function VerificationLogsPage() {
    const logs = getVerificationLogsSorted();

    return (
        <main className="flex-grow py-12 sm:py-16 bg-gray-50">
            <BreadcrumbSchema items={[
                { name: '홈', path: '/' },
                { name: '검증로그', path: '/검증로그' },
            ]} />
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8 text-center">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                        검증로그
                    </h1>
                    <p className="text-lg text-gray-600">
                        주소·링크검증 업데이트 로그 — 홈페이지 업데이트 로그 섹션과 동일한 데이터를 리스트로 제공합니다.
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                    {logs.length === 0 ? (
                        <div className="p-12 text-center text-gray-500">
                            등록된 검증 로그가 없습니다. JSONL 파일에 항목을 추가해 주세요.
                        </div>
                    ) : (
                        <ul className="divide-y divide-gray-100">
                            {logs.map((item, index) => {
                                const meta = (item['카테고리'] && CATEGORY_ICON[item['카테고리']]) || { icon: FileText, color: 'border-gray-200 bg-gray-50 text-gray-600' };
                                const Icon = meta.icon;
                                return (
                                <li key={index} className="p-4 sm:p-5 hover:bg-blue-50/50 transition-colors">
                                    <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                                        <div className={`flex-shrink-0 w-10 h-10 rounded-lg border ${meta.color} flex items-center justify-center`}>
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex flex-wrap items-center gap-2 mb-1">
                                                <span className="text-sm font-medium text-gray-500">
                                                    {item['업데이트 날짜']}
                                                </span>
                                                {item['버전/차수'] && (
                                                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                                                        {item['버전/차수']}
                                                    </span>
                                                )}
                                                {item['카테고리'] && CATEGORIES.includes(item['카테고리']) && (
                                                    <span className="text-xs text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                                                        {item['카테고리']}
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-gray-900 font-medium leading-snug">
                                                {item['제목']}
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                );
                            })}
                        </ul>
                    )}
                </div>

                <div className="mt-8 flex justify-center">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        주소모음/링크모음 페이지 이동
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </main>
    );
}
