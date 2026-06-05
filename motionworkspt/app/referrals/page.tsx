'use client';

import { useState } from "react";

export default function ReferralsPage() {
  const [formData, setFormData] = useState({
    referrerName: "",
    referrerPhone: "",
    referrerEmail: "",
    practice: "",
    patientName: "",
    patientDOB: "",
    patientPhone: "",
    diagnosis: "",
    precautions: "",
    additionalNotes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
            For Healthcare Providers
          </p>
          <h1 className="text-4xl font-extrabold text-white mb-3">Referrals</h1>
          <div className="h-1 w-16" style={{ backgroundColor: "#E8751A" }} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Left: Info */}
          <div className="lg:col-span-1">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Why Refer to MotionWorks?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              We accept referrals from physicians, orthopedic surgeons, chiropractors, and other healthcare providers. Our team will ensure prompt scheduling and timely communication on patient progress.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { heading: "One-on-One Care", body: "Your patient sees the same Doctor of PT every visit — no aides, no substitutions." },
                { heading: "Prompt Scheduling", body: "We work to get referred patients in quickly, typically within 24–48 hours." },
                { heading: "Progress Reports", body: "We provide regular progress notes and maintain open communication with referring providers." },
                { heading: "Evidence-Based", body: "Our therapists use proven manual therapy and rehabilitation techniques for superior outcomes." },
              ].map(({ heading, body }) => (
                <div key={heading} className="flex gap-3">
                  <div
                    className="w-2 flex-shrink-0 mt-1 rounded-full h-full min-h-4"
                    style={{ backgroundColor: "#E8751A" }}
                  />
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">{heading}</p>
                    <p className="text-gray-600 text-sm">{body}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact card */}
            <div
              className="rounded p-5 text-white"
              style={{ backgroundColor: "#3A3A3A" }}
            >
              <h3 className="font-bold mb-3">Contact Our Office</h3>
              <div className="space-y-2 text-sm">
                <p>
                  <span className="text-gray-400">Email:</span>{" "}
                  <a href="mailto:info@motionworkspt.com" className="hover:underline" style={{ color: "#E8751A" }}>
                    info@motionworkspt.com
                  </a>
                </p>
                <p className="text-gray-400 text-xs mt-3">
                  2847 Riverside Drive, Portland, OR 97201
                </p>
              </div>
            </div>
          </div>

          {/* Right: Referral form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded border border-gray-200 shadow-sm p-8">
              <h2 className="text-xl font-bold mb-6" style={{ color: "#E8751A" }}>
                Submit a Referral
              </h2>

              {submitted ? (
                <div
                  className="rounded p-6 text-center"
                  style={{ backgroundColor: "#f0f7ea" }}
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl"
                    style={{ backgroundColor: "#5B8533" }}
                  >
                    ✓
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Referral Submitted!</h3>
                  <p className="text-gray-600">
                    Thank you for referring your patient to MotionWorks Physical Therapy. We will contact you and your patient within one business day to confirm scheduling.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ referrerName: "", referrerPhone: "", referrerEmail: "", practice: "", patientName: "", patientDOB: "", patientPhone: "", diagnosis: "", precautions: "", additionalNotes: "" }); }}
                    className="mt-5 px-5 py-2 rounded text-white font-semibold hover:opacity-90"
                    style={{ backgroundColor: "#E8751A" }}
                  >
                    Submit Another Referral
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Referring provider section */}
                  <div>
                    <h3 className="font-semibold text-gray-700 uppercase text-xs tracking-widest mb-4 pb-2 border-b border-gray-200">
                      Referring Provider Information
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Provider Name <span style={{ color: "#E8751A" }}>*</span>
                        </label>
                        <input
                          type="text"
                          name="referrerName"
                          value={formData.referrerName}
                          onChange={handleChange}
                          required
                          placeholder="Dr. Jane Smith"
                          className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-orange-400"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Practice / Clinic Name
                        </label>
                        <input
                          type="text"
                          name="practice"
                          value={formData.practice}
                          onChange={handleChange}
                          placeholder="Neenah Orthopedics"
                          className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-orange-400"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Phone <span style={{ color: "#E8751A" }}>*</span>
                        </label>
                        <input
                          type="tel"
                          name="referrerPhone"
                          value={formData.referrerPhone}
                          onChange={handleChange}
                          required
                          placeholder="920.000.0000"
                          className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-orange-400"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          name="referrerEmail"
                          value={formData.referrerEmail}
                          onChange={handleChange}
                          placeholder="provider@clinic.com"
                          className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-orange-400"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Patient section */}
                  <div>
                    <h3 className="font-semibold text-gray-700 uppercase text-xs tracking-widest mb-4 pb-2 border-b border-gray-200">
                      Patient Information
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Patient Name <span style={{ color: "#E8751A" }}>*</span>
                        </label>
                        <input
                          type="text"
                          name="patientName"
                          value={formData.patientName}
                          onChange={handleChange}
                          required
                          placeholder="John Doe"
                          className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-orange-400"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Date of Birth
                        </label>
                        <input
                          type="date"
                          name="patientDOB"
                          value={formData.patientDOB}
                          onChange={handleChange}
                          className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-orange-400"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Patient Phone
                        </label>
                        <input
                          type="tel"
                          name="patientPhone"
                          value={formData.patientPhone}
                          onChange={handleChange}
                          placeholder="920.000.0000"
                          className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-orange-400"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Clinical section */}
                  <div>
                    <h3 className="font-semibold text-gray-700 uppercase text-xs tracking-widest mb-4 pb-2 border-b border-gray-200">
                      Clinical Information
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Diagnosis / Reason for Referral <span style={{ color: "#E8751A" }}>*</span>
                        </label>
                        <input
                          type="text"
                          name="diagnosis"
                          value={formData.diagnosis}
                          onChange={handleChange}
                          required
                          placeholder="e.g., Lumbar disc herniation, rotator cuff tear, knee OA"
                          className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-orange-400"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Precautions / Contraindications
                        </label>
                        <input
                          type="text"
                          name="precautions"
                          value={formData.precautions}
                          onChange={handleChange}
                          placeholder="e.g., Non-weight bearing, avoid cervical manipulation"
                          className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-orange-400"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Additional Notes
                        </label>
                        <textarea
                          name="additionalNotes"
                          value={formData.additionalNotes}
                          onChange={handleChange}
                          rows={4}
                          placeholder="Any additional clinical information, imaging findings, post-surgical protocol, etc."
                          className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-orange-400 resize-y"
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded text-white font-bold text-base hover:opacity-90"
                    style={{ backgroundColor: "#E8751A" }}
                  >
                    Submit Referral
                  </button>
                  <p className="text-xs text-gray-400 text-center">
                    Questions? Email us at info@motionworkspt.com
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
