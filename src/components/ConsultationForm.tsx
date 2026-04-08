"use client";

import { useState } from "react";
import { fireFormSubmitConversion } from "@/lib/gtag";

const projectTypes = [
  "New Construction",
  "Full Home Remodel",
  "ADU / Home Addition",
  "Custom Pool",
  "Kitchen Remodel",
  "Bathroom Remodel",
  "Permit Help",
  "Other",
];

const budgetRanges = [
  "Under $100K",
  "$100K – $250K",
  "$250K – $500K",
  "$500K+",
  "Not sure yet",
];

const timelines = [
  "ASAP",
  "1–3 months",
  "3–6 months",
  "Just exploring",
];

type FormData = {
  projectType: string;
  propertyCity: string;
  propertyZip: string;
  budgetRange: string;
  timeline: string;
  fullName: string;
  phone: string;
  email: string;
  message: string;
};

export default function ConsultationForm() {
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState<FormData>({
    projectType: "",
    propertyCity: "",
    propertyZip: "",
    budgetRange: "",
    timeline: "",
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });

  const update = (field: keyof FormData, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const canNext = () => {
    if (step === 1) return form.projectType !== "";
    if (step === 2) return form.budgetRange !== "" && form.timeline !== "";
    if (step === 3) return form.fullName !== "" && form.phone !== "" && form.email !== "";
    return true;
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to submit");
      fireFormSubmitConversion();
      setSubmitted(true);
      setStep(4);
    } catch {
      setError("Something went wrong. Please call us at (415) 968-9494.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Thank you, {form.fullName}!</h3>
          <p className="text-white/70 mb-6">
            We received your request. Book a time below or we&apos;ll call you within 24 hours.
          </p>
        </div>

        {/* Calendly Embed */}
        <div className="border border-white/20 rounded-lg overflow-hidden bg-white">
          <iframe
            src="https://calendly.com/construbay/initial-contractor-consultation-construbay?hide_gdpr_banner=1&primary_color=C9A84C"
            width="100%"
            height="600"
            frameBorder="0"
            title="Schedule a consultation"
          />
        </div>

        <button
          onClick={() => window.location.href = "/"}
          className="w-full text-center text-white/60 text-sm underline hover:text-white transition-colors"
        >
          Skip scheduling — we&apos;ll call you within 24 hours
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Progress Bar */}
      <div className="flex gap-2">
        {[1, 2, 3].map((s) => (
          <div
            key={s}
            className={`h-1.5 flex-1 rounded-full transition-colors ${
              s <= step ? "bg-[#cbb26a]" : "bg-white/20"
            }`}
          />
        ))}
      </div>

      {/* Step 1: Project Type */}
      {step === 1 && (
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-white">What type of project?</h2>
          <div className="grid grid-cols-1 gap-2">
            {projectTypes.map((type) => (
              <button
                key={type}
                onClick={() => update("projectType", type)}
                className={`text-left px-4 py-3 border rounded-lg transition-colors ${
                  form.projectType === type
                    ? "border-[#cbb26a] bg-[#cbb26a]/20 text-white font-medium"
                    : "border-white/30 text-white/80 hover:border-[#cbb26a]/60"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Project Details */}
      {step === 2 && (
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-white">Tell us more about your project</h2>
          <div className="grid grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="City"
              value={form.propertyCity}
              onChange={(e) => update("propertyCity", e.target.value)}
              className="bg-white/10 border border-white/30 text-white placeholder:text-white/50 px-4 py-3 rounded-lg focus:outline-none focus:border-[#cbb26a] transition-colors"
            />
            <input
              type="text"
              placeholder="Zip Code"
              value={form.propertyZip}
              onChange={(e) => update("propertyZip", e.target.value)}
              className="bg-white/10 border border-white/30 text-white placeholder:text-white/50 px-4 py-3 rounded-lg focus:outline-none focus:border-[#cbb26a] transition-colors"
            />
          </div>
          <div>
            <label className="text-sm text-white/80 mb-1 block">Budget Range</label>
            <div className="grid grid-cols-1 gap-2">
              {budgetRanges.map((range) => (
                <button
                  key={range}
                  onClick={() => update("budgetRange", range)}
                  className={`text-left px-4 py-3 border rounded-lg transition-colors ${
                    form.budgetRange === range
                      ? "border-[#cbb26a] bg-[#cbb26a]/20 text-white font-medium"
                      : "border-white/30 text-white/80 hover:border-[#cbb26a]/60"
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="text-sm text-white/80 mb-1 block">Timeline</label>
            <div className="grid grid-cols-2 gap-2">
              {timelines.map((t) => (
                <button
                  key={t}
                  onClick={() => update("timeline", t)}
                  className={`text-left px-4 py-3 border rounded-lg transition-colors ${
                    form.timeline === t
                      ? "border-[#cbb26a] bg-[#cbb26a]/20 text-white font-medium"
                      : "border-white/30 text-white/80 hover:border-[#cbb26a]/60"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Step 3: Contact Info */}
      {step === 3 && (
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-white">How can we reach you?</h2>
          <input
            type="text"
            placeholder="Full Name *"
            required
            value={form.fullName}
            onChange={(e) => update("fullName", e.target.value)}
            className="w-full bg-white/10 border border-white/30 text-white placeholder:text-white/50 px-4 py-3 rounded-lg focus:outline-none focus:border-[#cbb26a] transition-colors"
          />
          <input
            type="tel"
            placeholder="Phone *"
            required
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            className="w-full bg-white/10 border border-white/30 text-white placeholder:text-white/50 px-4 py-3 rounded-lg focus:outline-none focus:border-[#cbb26a] transition-colors"
          />
          <input
            type="email"
            placeholder="Email *"
            required
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className="w-full bg-white/10 border border-white/30 text-white placeholder:text-white/50 px-4 py-3 rounded-lg focus:outline-none focus:border-[#cbb26a] transition-colors"
          />
          <textarea
            placeholder="Anything else we should know? (optional)"
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
            rows={3}
            className="w-full bg-white/10 border border-white/30 text-white placeholder:text-white/50 px-4 py-3 rounded-lg focus:outline-none focus:border-[#cbb26a] transition-colors resize-none"
          />
        </div>
      )}

      {error && (
        <p className="text-red-400 text-sm">{error}</p>
      )}

      {/* Navigation Buttons */}
      <div className="flex gap-3">
        {step > 1 && (
          <button
            onClick={() => setStep(step - 1)}
            className="px-6 py-3 border border-white/30 text-white/70 rounded-lg hover:bg-white/10 transition-colors"
          >
            Back
          </button>
        )}
        {step < 3 ? (
          <button
            onClick={() => canNext() && setStep(step + 1)}
            disabled={!canNext()}
            className={`flex-1 py-3 rounded-lg font-semibold transition-colors ${
              canNext()
                ? "bg-[#cbb26a] hover:bg-[#b89638] text-gray-900"
                : "bg-white/20 text-white/40 cursor-not-allowed"
            }`}
          >
            Next
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={!canNext() || submitting}
            className={`flex-1 py-3 rounded-lg font-semibold transition-colors ${
              canNext() && !submitting
                ? "bg-[#cbb26a] hover:bg-[#b89638] text-gray-900"
                : "bg-white/20 text-white/40 cursor-not-allowed"
            }`}
          >
            {submitting ? "Submitting..." : "Submit & Schedule Consultation"}
          </button>
        )}
      </div>

      <p className="text-center text-white/40 text-xs">
        CSLB #1106798 &middot; Licensed &amp; Insured &middot; (415) 968-9494
      </p>
    </div>
  );
}
