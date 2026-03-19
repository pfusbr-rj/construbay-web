"use client";

import { useState } from "react";
import Image from "next/image";

const serviceOptions = [
  "Home Remodeling",
  "Home Additions",
  "Custom Home",
  "Kitchen Remodeling",
  "New Home Construction",
  "Home Extensions",
  "Bathroom Remodeling",
  "Custom Cabinets",
  "Kitchen Design",
  "Custom Kitchen Cabinets",
  "Bathroom Design",
  "Project Management",
];

export default function RequestABidPage() {
  const [selectedService, setSelectedService] = useState("");

  const handleNext = () => {
    if (!selectedService) {
      alert("Please select a service.");
      return;
    }
    alert(`Thank you for your interest in ${selectedService}! We will contact you shortly with a free estimate.`);
  };

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
      <div className="relative z-10 w-full max-w-lg bg-brand-cream p-10 sm:p-12">
        <h1 className="text-2xl sm:text-3xl font-bold text-brand-dark mb-8 leading-snug">
          Answer a few questions to get our free professional estimate.
        </h1>

        <div className="space-y-6">
          <div>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full bg-white border border-gray-300 text-brand-dark px-4 py-3 focus:outline-none focus:border-brand-button appearance-none cursor-pointer"
            >
              <option value="">What service do you need?</option>
              {serviceOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={handleNext}
            className="w-full bg-brand-button text-white text-sm tracking-[0.15em] uppercase py-4 hover:bg-brand-button/90 transition-colors font-semibold"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
