import React from 'react';
import Link from 'next/link';
import { Shield, Calendar, FileText, GitBranch } from 'lucide-react';

function formatTodayDate() {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

const TrustVerificationBox = () => {
  const todayDate = formatTodayDate();

  const cards = [
    {
      icon: Shield,
      title: 'HTTPS/리다이렉트 검증',
      description: '모든 링크는 SSL 인증 및 안전한 리다이렉트를 확인합니다',
      status: '실시간 검증',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Calendar,
      title: '최종 검증일',
      description: '매일 자동으로 링크 유효성을 검증합니다',
      status: todayDate,
      color: 'from-green-500 to-green-600'
    },
    {
      icon: FileText,
      title: '제보/신고 반영',
      description: '사용자 제보는 24시간 내 검토 후 반영됩니다',
      status: '평균 12시간',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: GitBranch,
      title: '공개 업데이트 로그',
      description: '모든 변경사항은 투명하게 공개됩니다',
      status: '실시간 공개',
      color: 'from-orange-500 to-orange-600',
      href: encodeURI('/검증로그')
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            신뢰할 수 있는 검증 시스템
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            안전하고 정확한 링크 제공을 위해 다층 검증 시스템을 운영합니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => {
            const Wrapper = card.href ? Link : 'div';
            const wrapperProps = card.href ? { href: card.href } : {};
            return (
            <Wrapper
              key={index}
              {...wrapperProps}
              className={`${card.href ? 'block ' : ''}bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden group`}
            >
              <div className={`h-2 bg-gradient-to-r ${card.color}`} />
              <div className="p-6">
                <div className={`w-12 h-12 bg-gradient-to-br ${card.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <card.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {card.description}
                </p>
                <div className="pt-4 border-t border-gray-100">
                  <span className="text-xs font-semibold text-gray-500 uppercase">
                    상태
                  </span>
                  <p className="text-sm font-bold text-blue-600 mt-1">
                    {card.status}
                  </p>
                </div>
              </div>
            </Wrapper>
          );
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href={encodeURI('/주소검증')}
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            검증 상세 정보
          </a>
        </div>
      </div>
    </section>
  );
};

export default TrustVerificationBox;
