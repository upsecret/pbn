import Image from "next/image";
import Button from "@/components/ui/Button";

const faqs = [
  {
    question: "How can we help you?",
    answer:
      "Our consulting team is ready to help you achieve your health and wellness goals. Contact us today to learn how we can support you on your journey.",
  },
  {
    question: "Do you offer virtual consultations?",
    answer:
      "Yes, we offer virtual consultations, making our services accessible to anyone, anywhere.",
  },
  {
    question: "What is your approach to health and wellness consulting?",
    answer:
      "Our health and wellness consulting services require a 50% down-payment and 50% final payment 24 hours before the consultation.",
  },
  {
    question: "How do you customize your consulting services?",
    answer:
      "We tailor our services to meet your unique health and wellness needs, taking into consideration your goals and lifestyle.",
  },
  {
    question: "How do I manage my wellness plan?",
    answer:
      "Our online wellness tracking system has an easy-to-use 'Progress' section that you (or we) can manage.",
  },
  {
    question: "Can I get an invoice for my consulting services?",
    answer:
      "Yes, you can. Please contact our customer support and provide your consultation number.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary mb-2">
            Consulting Services
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Expert Consulting
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {faqs.map((faq) => (
            <div key={faq.question} className="bg-white rounded-2xl p-6">
              <p className="font-bold mb-3">{faq.question}</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gray-100 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6">
          <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0">
            <Image
              src="https://images.unsplash.com/photo-1602866672185-e3180d2785e3?w=100&q=80"
              alt="Consultant"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <p className="font-semibold">
              Still have questions about our health and wellness consulting
              services?
            </p>
            <p className="text-sm text-gray-500">
              Can&apos;t find the answer you&apos;re looking for? Let&apos;s
              talk.
            </p>
          </div>
          <Button href="/contact">Transform Your Health</Button>
        </div>
      </div>
    </section>
  );
}
