import React from 'react';
import { Send, AlertTriangle } from 'lucide-react';

const ReportSubmissionCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            주소 제보 / 오류 신고
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            여러분의 소중한 제보로 더 나은 서비스를 만들어갑니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-2xl p-8 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <Send className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              좋은 사이트 추천
            </h3>
            <p className="text-gray-600 mb-6 text-center leading-relaxed">
              유용한 사이트를 알고 계신가요? 다른 사용자들과 공유해주세요.
              검수 후 빠르게 추가하겠습니다.
            </p>
            <a
              href={encodeURI('/주소링크제보')}
              className="block w-full text-center bg-green-600 hover:bg-green-700 text-white font-semibold py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span className="inline-flex items-center justify-center gap-2">
                사이트 추천하기
                <Send className="w-5 h-5" />
              </span>
            </a>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <AlertTriangle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              접속 불가·위험 신고
            </h3>
            <p className="text-gray-600 mb-6 text-center leading-relaxed">
              작동하지 않거나 위험한 사이트를 발견하셨나요?
              즉시 신고해주시면 확인 후 조치하겠습니다.
            </p>
            <a
              href={encodeURI('/주소링크제보')}
              className="block w-full text-center bg-red-600 hover:bg-red-700 text-white font-semibold py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span className="inline-flex items-center justify-center gap-2">
                오류 신고하기
                <AlertTriangle className="w-5 h-5" />
              </span>
            </a>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <p className="text-white text-center text-sm">
            💡 <strong>제보는 검수 후 반영</strong> - 모든 제보는 24시간 내 검토되며, 평균 12시간 이내 반영됩니다
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReportSubmissionCTA;