"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

type FormData = {
  email: string;
  source: string;
};

const sourceOptions = [
  "Google Search",
  "Facebook",
  "Instagram",
  "Friend or Family",
  "Flyer / Poster",
  "Local Event",
  "Other",
];

export default function MailingListSection() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data: FormData) => {
    console.log("Mailing list signup:", data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-lg mx-auto text-center">
        <h2 className="text-3xl font-extrabold mb-2" style={{ color: "#333333" }}>
          Join Kids Town Mailing List
        </h2>
        <p className="text-sm mb-2" style={{ color: "#E65100", fontWeight: 600 }}>
          🎉 Sign up and receive $10 off your next visit!
        </p>
        <p className="text-gray-500 text-sm mb-8">
          Get the latest updates, promotions, and special offers delivered to your inbox.
        </p>

        {submitted ? (
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-green-800 font-semibold">
            ✅ Thank you for signing up! Check your email for your $10 off coupon.
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="text-left">
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                {...register("email", {
                  required: "Email is required",
                  pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email address" },
                })}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>

            <div className="text-left">
              <label className="block text-sm font-medium text-gray-700 mb-1">Where did you find us?</label>
              <select
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-700"
                {...register("source")}
              >
                <option value="">-- Select an option --</option>
                {sourceOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg text-white font-bold text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#43A047" }}
            >
              Sign Up — Get $10 Off
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
