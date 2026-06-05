'use client';

import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  return (
    <div>
      {/* Hero Banner */}
      <div
        className="relative py-14 overflow-hidden"
        style={{ backgroundColor: "#4A4A4A" }}
      >
        <img
          src="/images/hero-banner.svg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#E8751A" }}>
            Get In Touch
          </p>
          <h1 className="text-4xl font-extrabold text-white">Contact Us</h1>
          <p className="text-gray-300 mt-3 max-w-xl mx-auto">
            Have a question or want to schedule an appointment? Send us a message and we&apos;ll get back to you promptly.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Left: Info cards */}
          <div className="space-y-5">
            {/* Location */}
            <div className="bg-white border border-gray-200 rounded shadow-sm p-6">
              <div
                className="w-10 h-10 rounded flex items-center justify-center text-white mb-3"
                style={{ backgroundColor: "#E8751A" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-1">Our Location</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                2847 Riverside Drive<br />
                Portland, OR 97201
              </p>
            </div>

            {/* Email */}
            <div className="bg-white border border-gray-200 rounded shadow-sm p-6">
              <div
                className="w-10 h-10 rounded flex items-center justify-center text-white mb-3"
                style={{ backgroundColor: "#E8751A" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-1">Email</h3>
              <a
                href="mailto:info@motionworkspt.com"
                className="text-sm hover:underline"
                style={{ color: "#E8751A" }}
              >
                info@motionworkspt.com
              </a>
            </div>

            {/* Hours */}
            <div className="bg-white border border-gray-200 rounded shadow-sm p-6">
              <div
                className="w-10 h-10 rounded flex items-center justify-center text-white mb-3"
                style={{ backgroundColor: "#5B8533" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Office Hours</h3>
              <table className="text-sm w-full">
                <tbody>
                  {[
                    { day: "Mon", time: "8:00am – 5:00pm" },
                    { day: "Tue", time: "8:00am – 5:30pm" },
                    { day: "Wed", time: "8:00am – 5:00pm" },
                    { day: "Thu", time: "8:00am – 5:00pm" },
                    { day: "Fri", time: "8:00am – 4:30pm" },
                    { day: "Sat", time: "By Appointment" },
                  ].map(({ day, time }) => (
                    <tr key={day} className="border-b border-gray-100 last:border-0">
                      <td className="py-1 pr-3 text-gray-500 font-medium w-10">{day}</td>
                      <td className="py-1 text-gray-700">{time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-200 rounded shadow-sm p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-4"
                    style={{ backgroundColor: "#5B8533" }}
                  >
                    ✓
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">Message Sent!</h2>
                  <p className="text-gray-600 mb-6">
                    Thank you for reaching out. We&apos;ll be in touch with you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="px-6 py-2 rounded text-white font-bold hover:opacity-90"
                    style={{ backgroundColor: "#E8751A" }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-bold mb-1" style={{ color: "#E8751A" }}>
                    Send Us a Message
                  </h2>
                  <p className="text-gray-500 text-sm mb-6">
                    Fill out the form below and we&apos;ll respond within one business day.
                  </p>

                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    {/* Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                          Full Name <span style={{ color: "#E8751A" }}>*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Jane Smith"
                          className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 ${
                            errors.name ? "border-red-400 focus:ring-red-200" : "border-gray-300 focus:ring-orange-200"
                          }`}
                        />
                        {errors.name && (
                          <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                          Email Address <span style={{ color: "#E8751A" }}>*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="jane@example.com"
                          className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 ${
                            errors.email ? "border-red-400 focus:ring-red-200" : "border-gray-300 focus:ring-orange-200"
                          }`}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Subject <span style={{ color: "#E8751A" }}>*</span>
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 bg-white ${
                          errors.subject ? "border-red-400 focus:ring-red-200" : "border-gray-300 focus:ring-orange-200"
                        }`}
                      >
                        <option value="">Select a subject...</option>
                        <option value="Schedule an Appointment">Schedule an Appointment</option>
                        <option value="Insurance Question">Insurance Question</option>
                        <option value="Free Injury Screening">Free Injury Screening</option>
                        <option value="General Question">General Question</option>
                        <option value="Other">Other</option>
                      </select>
                      {errors.subject && (
                        <p className="text-red-500 text-xs mt-1">{errors.subject}</p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Message <span style={{ color: "#E8751A" }}>*</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        placeholder="Tell us how we can help you..."
                        className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 resize-none ${
                          errors.message ? "border-red-400 focus:ring-red-200" : "border-gray-300 focus:ring-orange-200"
                        }`}
                      />
                      {errors.message && (
                        <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 rounded text-white font-bold text-base hover:opacity-90 transition-opacity"
                      style={{ backgroundColor: "#E8751A" }}
                    >
                      Send Message
                    </button>

                    <p className="text-xs text-gray-400 text-center">
                      We respect your privacy. Your information will never be shared.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
