import React from 'react';
import { ExternalLink, Calendar, Tag } from 'lucide-react';

function getTodayDate() {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

const TodaysRecommendations = () => {
  const todayStr = getTodayDate();

  const recommendations = [
    {
      id: 1,
      name: '주소모음',
      description: '카테고리별로 정리된 대한민국 대표 링크 저장소',
      category: '링크모음',
      url: 'https://jusois.isweb.co.kr'
    },
    {
      id: 2,
      name: '주소미',
      description: '주소미가 제공하는 안전하고 신뢰할 수 있는 주소모음·링크모음 최신 접속 안내 서비스',
      category: '주소모음',
      url: 'https://jusomi.isweb.co.kr/'
    },
    {
      id: 3,
      name: 'labslink',
      description: '검증된 주소모음·링크모음 정보를 한눈에 제공하는 labslink 링크 디렉터리',
      category: '주소모음',
      url: 'https://www.labslink.com/'
    },
    {
      id: 4,
      name: '주소이즈',
      description: '5단계 자동 검증과 4단계 안전 등급 분류로 운영되는 신뢰형 주소모음·링크모음 가이드',
      category: '검증된 주소모음',
      url: 'https://jusois.isweb.co.kr/'
    }
  ];

  return (
    <section id="link-today" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            링크모음 - 오늘의 추천
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            검증된 핵심 사이트 4곳을 엄선하여 추천해 드립니다
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recommendations.map((site) => (
            <div
              key={site.id}
              className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-xl p-6 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full"
            >
              <div className="flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {site.name}
                    </h3>
                    <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded-full w-fit mb-3">
                      <Tag className="w-3 h-3" />
                      <span>{site.category}</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-4 leading-relaxed line-clamp-2">
                  {site.description}
                </p>

                <div className="flex items-center gap-2 text-xs text-gray-500 mb-6">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>검증: {todayStr}</span>
                </div>
              </div>

              <a
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 group-hover:shadow-lg mt-auto py-2.5 px-4"
              >
                방문하기
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={encodeURI('/링크모음')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            링크모음 전체 보기
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TodaysRecommendations;