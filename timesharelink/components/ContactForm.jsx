'use client';

import React, { useState } from 'react';

const ContactForm = () => {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        // 실제 전송 없이 제출된 것처럼 처리
        setSubmitted(true);
    };

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    if (submitted) {
        return (
            <div className="bg-white p-12 rounded-2xl shadow-sm max-w-2xl w-full text-center">
                <div className="py-8">
                    <p className="text-xl font-semibold text-green-600 mb-2">
                        제출되었습니다. 감사합니다.
                    </p>
                    <p className="text-gray-600 text-sm">
                        확인 후 연락드리겠습니다.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-sm max-w-2xl w-full">
            <h2 className="text-xl font-bold text-gray-900 mb-6">문의하기</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        이름
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder:text-gray-400"
                        placeholder="이름을 입력하세요"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        이메일
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder:text-gray-400"
                        placeholder="example@email.com"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        메시지
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder:text-gray-400 resize-y"
                        placeholder="내용을 입력하세요"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
                >
                    제출하기
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
