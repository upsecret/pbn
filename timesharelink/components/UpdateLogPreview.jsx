import React from 'react';
import Link from 'next/link';
import { ArrowRight, Link2, ArrowLeftRight, FileCheck, Server, Scale, FileText } from 'lucide-react';

const CATEGORIES = [
  'URL 구조 검증',
  '리다이렉트 검증',
  '콘텐츠 일치 검증',
  '도메인/서버 응답 검증',
  '결과 해석 기준',
];

const CATEGORY_ICON = {
  'URL 구조 검증': { icon: Link2, color: 'text-blue-600 bg-blue-50' },
  '리다이렉트 검증': { icon: ArrowLeftRight, color: 'text-amber-600 bg-amber-50' },
  '콘텐츠 일치 검증': { icon: FileCheck, color: 'text-green-600 bg-green-50' },
  '도메인/서버 응답 검증': { icon: Server, color: 'text-purple-600 bg-purple-50' },
  '결과 해석 기준': { icon: Scale, color: 'text-indigo-600 bg-indigo-50' },
};

/**
 * @param {{ logs?: Array<{제목: string, '업데이트 날짜': string, '버전/차수'?: string, 카테고리?: string}> }} props
 * logs: getVerificationLogsSorted() 결과 (JSONL 기반). 없으면 빈 배열로 아무것도 표시하지 않음.
 */
const UpdateLogPreview = ({ logs = [] }) => {
  const displayLogs = Array.isArray(logs) ? logs.slice(0, 7) : [];

  return (
    <section id="update-log" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            업데이트 로그
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            주소검증 관련 최근 변경사항을 투명하게 공개합니다
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="space-y-4">
            {displayLogs.length === 0 ? (
              <p className="text-center text-gray-500 py-8">
                등록된 업데이트 로그가 없습니다.
              </p>
            ) : (
              displayLogs.map((item, index) => {
                const meta = (item['카테고리'] && CATEGORY_ICON[item['카테고리']]) || { icon: FileText, color: 'text-gray-600 bg-gray-50' };
                const Icon = meta.icon;
                return (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-white rounded-lg border border-blue-100 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 rounded-lg ${meta.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="text-sm font-semibold text-gray-500">
                        {item['업데이트 날짜']}
                      </span>
                      {item['카테고리'] && CATEGORIES.includes(item['카테고리']) && (
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded">
                          {item['카테고리']}
                        </span>
                      )}
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded">
                        1건
                      </span>
                    </div>
                    <p className="text-gray-900 font-medium">
                      {item['제목']}
                    </p>
                  </div>

                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
                </div>
              );
              })
            )}
          </div>

          {displayLogs.length > 0 && (
            <div className="mt-6 text-center">
              <Link
                href={encodeURI('/검증로그')}
                className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700"
              >
                검증로그 전체 보기
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default UpdateLogPreview;
