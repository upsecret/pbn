
import React from 'react';
import { Mail, Phone, MapPin, Building2, CheckCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-blue-900 to-slate-900 pt-16 pb-8 border-t border-blue-800 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand & Intro */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">TS</span>
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                timesharelink
              </span>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed mb-6">
              가장 빠르고 정확한 실시간 웹사이트 주소 안내 및 링크 모음 서비스. 
              안전하게 검증된 최신 사이트 정보를 제공합니다.
            </p>
          </div>

          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-blue-400" />
              회사 정보
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-blue-200">
              <div className="flex flex-col space-y-3">
                <p className="flex items-start gap-2">
                  <span className="text-blue-400 font-medium whitespace-nowrap">상호명:</span>
                  <span>주식회사 타임쉐어링크</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-blue-400 font-medium whitespace-nowrap">대표자:</span>
                  <span>김도윤</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-blue-400 font-medium whitespace-nowrap">사업자등록번호:</span>
                  <span>214-87-73162</span>
                </p>
              </div>
              <div className="flex flex-col space-y-3">
                <p className="flex items-start gap-2">
                  <span className="text-blue-400 font-medium whitespace-nowrap">통신판매업신고:</span>
                  <span>2026-서울강남-0418</span>
                </p>
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="leading-snug">
                    서울특별시 강남구 테헤란로 152,<br />
                    8층 802호(역삼동, 강남파이낸스센터)
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
              <Phone className="w-5 h-5 text-blue-400" />
              고객 지원
            </h3>
            <ul className="space-y-4 text-sm text-blue-200">
              <li>
                <a 
                  href="tel:070-8123-4097" 
                  className="flex items-center gap-3 hover:text-white transition-colors duration-300 group"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-800/50 flex items-center justify-center group-hover:bg-blue-700 transition-colors duration-300">
                    <Phone className="w-4 h-4 text-blue-300" />
                  </div>
                  <span className="font-medium text-lg text-blue-100 group-hover:text-white">070-8123-4097</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@timesharelink.com" 
                  className="flex items-center gap-3 hover:text-white transition-colors duration-300 group"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-800/50 flex items-center justify-center group-hover:bg-blue-700 transition-colors duration-300">
                    <Mail className="w-4 h-4 text-blue-300" />
                  </div>
                  <span>info@timesharelink.com</span>
                </a>
              </li>
              <li className="pt-2">
                <p className="text-xs text-blue-400 flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5" />
                  평일 10:00 - 18:00 (주말/공휴일 휴무)
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-800/60 my-8"></div>

        {/* Bottom Bar */}
        <div className="flex justify-center items-center text-xs text-blue-300">
          <p className="text-blue-400 text-center">
            Copyright © 2026 <span className="font-semibold text-blue-300">TimeShareLink</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
