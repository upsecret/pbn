import React from 'react';
import Image from 'next/image';
import { ArrowRight, BookmarkPlus } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with CSS gradient fallback for Googlebot */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600">
        <Image
          src="https://images.unsplash.com/photo-1681749140155-784fe0ddff30"
          alt="Modern digital network and connectivity visualization"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/85 to-blue-600/80" />
      </div>

      {/* Content - SSR: no client motion, semantic HTML for SEO */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            주소모음·링크모음 1위 검증 플랫폼
            <br />
            <span className="text-blue-200 text-3xl sm:text-4xl lg:text-5xl">타임쉐어링크 (2026 최신)</span>
          </h1>
        </div>

        <div>
          <p className="text-xl sm:text-2xl text-blue-100 mb-4 leading-relaxed max-w-3xl mx-auto">
            타임쉐어링크는 5단계 보안 검증을 통과한 안전한 사이트만 엄선합니다.
          </p>
          <p className="text-lg sm:text-xl text-blue-200 mb-12 leading-relaxed max-w-3xl mx-auto">
            매일 자동 검증된 18개 브랜드 최신 주소로 빠르고 정확한 접속을 보장합니다.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://jusois.isweb.co.kr/"
            className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 group"
          >
            링크모음 바로가기
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          <a
            href={encodeURI('/주소검증')}
            className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-6 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 group"
          >
            주소검증 시스템
            <BookmarkPlus className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
          </a>
          <a
            href="https://www.jusomoeum.info/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-6 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 group"
          >
            주소모음.info
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
};

export default HeroSection;