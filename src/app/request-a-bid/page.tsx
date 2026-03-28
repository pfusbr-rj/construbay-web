"use client";

import ConsultationForm from "@/components/ConsultationForm";

export default function RequestABidPage() {
  return (
    <div style={{ backgroundColor: '#000000', minHeight: '100vh' }} className="flex items-center justify-center pt-20 pb-12 px-4">
      {/* Card */}
      <div className="w-full max-w-lg bg-brand-cream p-8 sm:p-10 rounded-xl shadow-2xl">
        <h1 className="text-2xl sm:text-3xl font-bold text-brand-dark mb-2 leading-snug">
          Schedule a Consultation
        </h1>
        <p className="text-brand-dark/60 text-sm mb-6">
          Answer a few questions and book a time that works for you.
        </p>
        <ConsultationForm />
      </div>
    </div>
  );
}
