"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type ScheduleForm = {
  parentName: string;
  email: string;
  phone: string;
  location: string;
  date: string;
  time: string;
  childName: string;
  childAge: string;
  notes: string;
};

export default function SchedulePage() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ScheduleForm>();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data: ScheduleForm) => {
    console.log("Schedule form:", data);
    setSubmitted(true);
    reset();
  };

  return (
    <main>
      <section className="relative h-64 md:h-72 flex items-end overflow-hidden">
        <Image
          src="/images/schedule.jpg"
          alt="Schedule your visit at KidsTown"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(27, 94, 32, 0.68)" }} />
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 pb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2">Schedule Your Visit</h1>
          <p className="text-green-100 text-lg">Reserve a spot — walk-ins are always welcome too!</p>
        </div>
      </section>

      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-md p-8">
          {submitted ? (
            <div className="text-center py-8">
              <div className="text-5xl mb-4">🎉</div>
              <h2 className="text-2xl font-bold text-green-700 mb-2">Reservation Submitted!</h2>
              <p className="text-gray-600 text-sm mb-6">We will confirm your visit via email shortly. We look forward to seeing your child!</p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-3 rounded-full text-white font-bold text-sm"
                style={{ backgroundColor: "#43A047" }}
              >
                Schedule Another Visit
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <h2 className="text-xl font-bold mb-1" style={{ color: "#2E7D32" }}>Reservation Details</h2>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Parent / Guardian Name *</label>
                  <input
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                    {...register("parentName", { required: "Required" })}
                  />
                  {errors.parentName && <p className="text-red-500 text-xs mt-1">{errors.parentName.message}</p>}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Email *</label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                    {...register("email", { required: "Required" })}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                    {...register("phone")}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Location *</label>
                  <select
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-700"
                    {...register("location", { required: "Required" })}
                  >
                    <option value="">-- Select Location --</option>
                    <option>Highlands Ranch</option>
                    <option>Parker</option>
                    <option>Smoky Hill</option>
                  </select>
                  {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location.message}</p>}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Preferred Date *</label>
                  <input
                    type="date"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                    {...register("date", { required: "Required" })}
                  />
                  {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date.message}</p>}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Drop-off Time</label>
                  <input
                    type="time"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                    {...register("time")}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Child&apos;s Name *</label>
                  <input
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                    {...register("childName", { required: "Required" })}
                  />
                  {errors.childName && <p className="text-red-500 text-xs mt-1">{errors.childName.message}</p>}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Child&apos;s Age *</label>
                  <select
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-700"
                    {...register("childAge", { required: "Required" })}
                  >
                    <option value="">-- Select Age --</option>
                    {Array.from({ length: 13 }, (_, i) => i + 1).map((age) => (
                      <option key={age}>{age} {age === 1 ? "year" : "years"} old</option>
                    ))}
                  </select>
                  {errors.childAge && <p className="text-red-500 text-xs mt-1">{errors.childAge.message}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Special Notes or Instructions</label>
                <textarea
                  rows={3}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Allergies, special needs, pickup instructions..."
                  {...register("notes")}
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg text-white font-bold text-sm hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#43A047" }}
              >
                Submit Reservation
              </button>

              <p className="text-center text-xs text-gray-400">
                Walk-ins always welcome.{" "}
                <Link href="/pricing" className="underline" style={{ color: "#2E7D32" }}>View Pricing</Link>
              </p>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
