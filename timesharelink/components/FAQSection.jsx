import React from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: '주소모음과 링크모음의 차이점은 무엇인가요?',
    answer:
      '주소모음과 링크모음은 본질적으로 같은 개념입니다. 모두 웹사이트의 URL을 모아놓은 것을 의미하며, timesharelink에서는 두 용어를 구분 없이 사용합니다. 카테고리별로 정리된 검증된 사이트 목록을 제공합니다.',
  },
  {
    question: '링크 검증은 어떤 기준으로 이루어지나요?',
    answer:
      '모든 링크는 다음 기준으로 검증됩니다: 1) HTTPS 보안 인증 확인, 2) 리다이렉트 안전성 검사, 3) 실제 접속 가능 여부 확인, 4) 악성코드 및 피싱 위험 검사, 5) 사용자 신고 내역 반영. 매일 자동으로 재검증되어 최신 상태를 유지합니다.',
  },
  {
    question: '업데이트는 얼마나 자주 이루어지나요?',
    answer:
      '링크 검증은 매일 자동으로 실행되며, 신규 사이트 추가 및 변경사항 반영은 실시간으로 이루어집니다. 사용자 제보는 평균 12시간 이내 검토되어 24시간 내 반영됩니다. 모든 변경사항은 업데이트 로그에 투명하게 공개됩니다.',
  },
  {
    question: '사이트 접속이 차단되거나 안 될 때는 어떻게 하나요?',
    answer:
      'DNS 설정을 변경해보세요. Cloudflare DNS(1.1.1.1) 또는 Google Public DNS(8.8.8.8)로 변경하면 대부분의 접속 문제가 해결됩니다. 그래도 안 된다면 VPN 사용을 고려하거나, 해당 사이트를 신고해주시면 대체 주소를 안내해드립니다.',
  },
  {
    question: '제보한 사이트는 언제 반영되나요?',
    answer:
      '제보하신 사이트는 24시간 이내 검토되며, 평균 12시간 내 반영됩니다. 검수 과정에서 안전성 확인, 중복 여부, 카테고리 적합성 등을 종합적으로 검토합니다. 반영 여부는 업데이트 로그에서 확인하실 수 있습니다.',
  },
  {
    question: '모든 카테고리는 무엇이 있나요?',
    answer:
      '주요 카테고리로는 포털, 쇼핑, 동영상, 스트리밍, SNS, 메신저, 개발, 금융, 교육, 뉴스, 커뮤니티, 게임 등이 있습니다. 각 카테고리는 세부 분류로 나뉘어 있어 원하는 사이트를 쉽게 찾으실 수 있습니다.',
  },
  {
    question: '위험한 사이트는 어떻게 신고하나요?',
    answer:
      '접속 불가·위험 신고 버튼을 통해 언제든 신고하실 수 있습니다. 사이트 URL과 문제점을 간단히 기재해주시면 즉시 확인 후 조치합니다. 악성코드, 피싱, 사기 의심 사이트는 우선적으로 처리됩니다.',
  },
  {
    question: '북마크 기능을 사용할 수 있나요?',
    answer:
      '브라우저의 기본 북마크 기능(Ctrl+D)을 사용하시거나, timesharelink를 시작 페이지로 설정하시면 편리합니다. 향후 회원 가입 기능을 통해 개인별 맞춤 북마크 기능도 제공할 예정입니다.',
  },
  {
    question: '모바일에서도 사용할 수 있나요?',
    answer:
      '네, timesharelink는 모든 기기에서 최적화되어 있습니다. 스마트폰, 태블릿, PC 등 어떤 기기에서든 동일한 기능을 사용하실 수 있으며, 반응형 디자인으로 화면 크기에 맞게 자동 조정됩니다.',
  },
  {
    question: '무료로 이용할 수 있나요?',
    answer:
      '네, timesharelink의 모든 기능은 완전 무료입니다. 회원가입 없이도 모든 링크를 자유롭게 이용하실 수 있으며, 광고 수익으로 운영되어 사용자 부담 없이 서비스를 제공합니다.',
  },
  {
    question: '개인정보는 안전한가요?',
    answer:
      'timesharelink는 사용자의 개인정보를 수집하지 않습니다. 회원가입이 필요 없으며, 쿠키는 최소한의 기능 제공 목적으로만 사용됩니다. 모든 데이터는 암호화되어 안전하게 관리됩니다.',
  },
  {
    question: '새로운 기능 제안은 어떻게 하나요?',
    answer:
      '제보 페이지를 통해 기능 제안을 보내주시면 됩니다. 사용자 의견을 적극 반영하여 서비스를 개선하고 있으며, 채택된 제안은 업데이트 로그에 공개됩니다. 여러분의 의견이 더 나은 서비스를 만듭니다.',
  },
];

const FAQSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            자주 묻는 질문
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            timesharelink 이용에 대해 궁금하신 점을 확인해보세요
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <summary className="list-none cursor-pointer">
                <span className="flex items-center justify-between w-full px-6 py-5 text-left hover:bg-blue-50 transition-colors duration-300">
                  <span className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown className="w-6 h-6 text-blue-600 flex-shrink-0 transition-transform duration-300 group-open:rotate-180" />
                </span>
              </summary>
              <div className="px-6 pb-5 pt-2 border-t border-gray-100">
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a href={encodeURI('/링크모음')} className="px-5 py-2.5 bg-blue-100 text-blue-700 font-semibold rounded-lg hover:bg-blue-200 transition-colors">
            링크모음 보기
          </a>
          <a href={encodeURI('/주소검증')} className="px-5 py-2.5 bg-blue-100 text-blue-700 font-semibold rounded-lg hover:bg-blue-200 transition-colors">
            주소검증 시스템
          </a>
          <a href={encodeURI('/검증로그')} className="px-5 py-2.5 bg-blue-100 text-blue-700 font-semibold rounded-lg hover:bg-blue-200 transition-colors">
            검증로그 확인
          </a>
          <a href={encodeURI('/주소링크제보')} className="px-5 py-2.5 bg-blue-100 text-blue-700 font-semibold rounded-lg hover:bg-blue-200 transition-colors">
            링크 제보하기
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
