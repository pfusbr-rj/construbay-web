"use client";

import Image from "next/image";
import ConsultationForm from "@/components/ConsultationForm";

export default function RequestABidPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-4">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero-bg-3.jpg"
          alt="Construction background"
          fill
          className="object-cover blur-sm"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Card */}
      <div className="relative z-10 w-full max-w-lg bg-brand-cream p-8 sm:p-10 rounded-xl shadow-2xl">
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
