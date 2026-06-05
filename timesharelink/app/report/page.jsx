import ContactForm from '@/components/ContactForm';
import BreadcrumbSchema from '@/components/Schema/BreadcrumbSchema';

export const metadata = {
    title: '주소링크제보',
    description: '새로운 유용한 사이트를 제보하거나 끊어진 링크를 신고해주세요.',
    alternates: { canonical: '/주소링크제보' },
    openGraph: {
        title: '주소링크제보 | timesharelink',
        description: '새로운 유용한 사이트를 제보하거나 끊어진 링크를 신고해주세요.',
        url: '/주소링크제보',
    },
};

export default function ReportPage() {
    return (
        <main className="flex-grow flex items-center justify-center p-8 bg-gray-50">
            <BreadcrumbSchema items={[
                { name: '홈', path: '/' },
                { name: '주소링크제보', path: '/주소링크제보' },
            ]} />
            <div className="w-full max-w-2xl">
                <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                    사이트 제보 / 문의
                </h1>
                <ContactForm />
            </div>
        </main>
    );
}
