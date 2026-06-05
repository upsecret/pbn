import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Patient Info | MotionWorks Physical Therapy",
  description:
    "Everything you need to know before your first visit at MotionWorks Physical Therapy — insurance info, what to bring, FAQs, and forms.",
};

const faqs = [
  {
    q: "Do I need a referral from my doctor?",
    a: "In Wisconsin, you can see a physical therapist directly without a physician referral (direct access). However, some insurance plans may require a referral for coverage. We recommend checking with your insurance provider. We are happy to help you verify your benefits.",
  },
  {
    q: "How long is a typical appointment?",
    a: "Initial evaluations are typically 60 minutes. Follow-up treatment sessions are generally 45–60 minutes. Because we provide one-on-one care, your therapist dedicates the full session time to you.",
  },
  {
    q: "How many visits will I need?",
    a: "The number of visits depends on your diagnosis, severity, and individual response to treatment. Your Doctor of Physical Therapy will give you a realistic expectation during your initial evaluation and will continually reassess your progress.",
  },
  {
    q: "What should I wear to my appointment?",
    a: "Wear comfortable, loose-fitting clothing that allows access to the area being treated. For lower extremity conditions, shorts are ideal. For shoulder or neck conditions, a tank top or loose shirt works well.",
  },
  {
    q: "Do you accept my insurance?",
    a: "We work with most major insurance providers including Medicare, Medicaid, and many commercial plans. Please contact our office so we can verify your specific benefits prior to your first visit.",
  },
  {
    q: "What is your cancellation policy?",
    a: "We ask that you provide at least 24 hours notice if you need to cancel or reschedule an appointment. This allows us to offer your slot to another patient who needs care.",
  },
];

const insuranceProviders = [
  "Medicare",
  "Medicaid / Forward Health",
  "Blue Cross Blue Shield",
  "United Healthcare",
  "Aetna",
  "Humana",
  "Quartz",
  "Network Health",
  "Dean Health Plan",
  "Workers Compensation",
  "Most Major Commercial Plans",
];

export default function PatientInfoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page header with hero banner */}
      <div className="relative border-b border-gray-200 py-10 overflow-hidden">
        <img
          src="/images/hero-banner.svg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative max-w-7xl mx-auto px-4">
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#E8751A" }}>
            What to Expect
          </p>
          <h1 className="text-4xl font-extrabold text-white mb-3">Patient Information</h1>
          <div className="h-1 w-16" style={{ backgroundColor: "#E8751A" }} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">

        {/* First Visit */}
        <section className="bg-white rounded border border-gray-200 shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold mb-5" style={{ color: "#E8751A" }}>
            Your First Visit
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3 text-lg">What to Bring</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                {[
                  "Photo ID (driver's license or state ID)",
                  "Insurance card(s)",
                  "Any physician referral or prescription (if applicable)",
                  "List of current medications",
                  "Relevant imaging reports (X-ray, MRI, etc.)",
                  "Completed new patient forms (see below)",
                  "Comfortable, loose-fitting clothing",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span style={{ color: "#E8751A" }} className="flex-shrink-0">◆</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3 text-lg">What to Expect</h3>
              <ol className="space-y-4 text-gray-600 text-sm">
                {[
                  { step: "1", title: "Check-In", body: "Arrive 10–15 minutes early to complete any remaining paperwork and get settled." },
                  { step: "2", title: "Evaluation", body: "Your Doctor of PT will conduct a thorough evaluation including health history, movement assessment, and hands-on examination." },
                  { step: "3", title: "Diagnosis & Plan", body: "You'll receive a clear diagnosis and a personalized treatment plan with goals and an estimated timeline." },
                  { step: "4", title: "Initial Treatment", body: "In most cases, you'll begin treatment at your first visit — so you'll leave feeling better than when you arrived." },
                ].map(({ step, title, body }) => (
                  <li key={step} className="flex gap-3">
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: "#E8751A" }}
                    >
                      {step}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{title}</p>
                      <p>{body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Insurance */}
        <section className="bg-white rounded border border-gray-200 shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#E8751A" }}>
            Insurance Information
          </h2>
          <p className="text-gray-600 mb-5 leading-relaxed">
            We accept most major insurance plans. Please{" "}
            <a href="/contact" className="font-semibold hover:underline" style={{ color: "#E8751A" }}>contact us</a>{" "}
            prior to your first appointment so our team can verify your benefits and explain any co-pays or deductibles.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {insuranceProviders.map((provider) => (
              <div
                key={provider}
                className="bg-gray-50 border border-gray-200 rounded px-3 py-2 text-sm text-gray-700 flex items-center gap-2"
              >
                <span style={{ color: "#5B8533" }}>✓</span>
                {provider}
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-xs mt-4">
            * Insurance coverage varies by plan. Contact us to verify your specific benefits.
          </p>
        </section>

        {/* Forms */}
        <section className="bg-white rounded border border-gray-200 shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#E8751A" }}>
            Patient Forms
          </h2>
          <p className="text-gray-600 mb-5">
            Save time at your first visit by completing these forms in advance. Download, print, and bring them with you.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "New Patient Registration Form",
              "Medical History Form",
              "Insurance Authorization Form",
              "HIPAA Privacy Acknowledgment",
            ].map((form) => (
              <a
                key={form}
                href="#"
                className="flex items-center gap-3 p-4 border border-gray-200 rounded hover:border-orange-300 group"
              >
                <div
                  className="w-10 h-10 rounded flex items-center justify-center flex-shrink-0 text-white"
                  style={{ backgroundColor: "#E8751A" }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="12" y1="18" x2="12" y2="12" />
                    <line x1="9" y1="15" x2="15" y2="15" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm group-hover:underline">{form}</p>
                  <p className="text-xs text-gray-500">PDF Download</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white rounded border border-gray-200 shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#E8751A" }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-5">
            {faqs.map(({ q, a }, i) => (
              <div key={i} className="border-b border-gray-100 pb-5 last:border-0 last:pb-0">
                <h3 className="font-semibold text-gray-800 mb-2">{q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div
          className="rounded p-8 text-center"
          style={{ backgroundColor: "#3A3A3A" }}
        >
          <h2 className="text-xl font-bold text-white mb-3">Still Have Questions?</h2>
          <p className="text-gray-300 mb-5">
            Our team is happy to help. Send us a message anytime.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/contact"
              className="px-6 py-3 rounded text-white font-bold hover:opacity-90"
              style={{ backgroundColor: "#E8751A" }}
            >
              Contact Us
            </a>
            <a
              href="mailto:info@motionworkspt.com"
              className="px-6 py-3 rounded text-white font-bold border border-gray-500 hover:border-gray-400"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
