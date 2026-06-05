import React from 'react';
import { BookOpen, Shield, Bookmark, Globe } from 'lucide-react';

const SEOTextBlock = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            주소모음·링크모음 이용 가이드
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              timesharelink는 <strong className="text-blue-600">주소모음 사이트를 통해 최신 링크를 빠르게 찾는 법</strong>을 제공합니다. 
              매일 업데이트되는 검증된 사이트 목록을 통해 원하시는 웹사이트에 안전하게 접속하실 수 있습니다. 
              모든 링크는 HTTPS 인증과 리다이렉트 검증을 거쳐 사용자의 안전한 인터넷 이용을 보장합니다.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              <strong className="text-blue-600">안전한 링크모음 이용 가이드</strong>를 따라 신뢰할 수 있는 사이트만 이용하세요. 
              각 사이트는 카테고리별로 분류되어 있어 원하는 정보를 쉽게 찾을 수 있습니다. 
              자주 방문하는 사이트는 북마크(Ctrl+D)로 저장하여 더욱 편리하게 이용하실 수 있습니다.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">안전한 접속</h3>
                  <p className="text-sm text-gray-600">
                    모든 링크는 SSL 인증 및 보안 검증을 완료했습니다
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                <Bookmark className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">북마크 추천</h3>
                  <p className="text-sm text-gray-600">
                    Ctrl+D로 자주 찾는 사이트를 저장하세요
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                <Globe className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">DNS 대안</h3>
                  <p className="text-sm text-gray-600">
                    도메인 차단 시 DNS 변경 (1.1.1.1, 8.8.8.8)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                <BookOpen className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">매일 업데이트</h3>
                  <p className="text-sm text-gray-600">
                    최신 주소로 항상 정확한 접속 가능
                  </p>
                </div>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed">
              도메인 차단이나 접속 불가 문제가 발생할 경우, DNS 설정을 변경하시면 대부분 해결됩니다.
              Cloudflare DNS(1.1.1.1) 또는 Google Public DNS(8.8.8.8)를 사용하시면 안정적인 접속이 가능합니다.
              추가적인 도움이 필요하시다면{' '}
              <a href={encodeURI('/주소검증')} className="text-blue-600 font-semibold hover:underline">주소검증 시스템</a>과{' '}
              <a href={encodeURI('/검증로그')} className="text-blue-600 font-semibold hover:underline">검증로그</a>를 참고하세요.
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={encodeURI('/링크모음')}
              className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl text-center"
            >
              링크모음 전체 보기
            </a>
            <a
              href={encodeURI('/주소검증')}
              className="inline-block px-6 py-3 bg-white text-blue-600 border-2 border-blue-600 font-semibold rounded-lg hover:bg-blue-50 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl text-center"
            >
              검증 시스템 자세히 보기
            </a>
            <a
              href={encodeURI('/주소링크제보')}
              className="inline-block px-6 py-3 bg-white text-blue-600 border-2 border-blue-600 font-semibold rounded-lg hover:bg-blue-50 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl text-center"
            >
              링크 제보하기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOTextBlock;