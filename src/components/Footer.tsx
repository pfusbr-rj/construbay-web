"use client";

import Link from "next/link";
import { useState, FormEvent } from "react";

export default function Footer() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    projectType: "",
    timeline: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          phone: formData.phone,
          email: formData.email,
          projectType: formData.projectType,
          timeline: formData.timeline,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
        setFormData({ fullName: "", email: "", phone: "", projectType: "", timeline: "" });
      }
    } catch {
      alert("Something went wrong. Please call us at (415) 968-9494.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <footer className="bg-brand-dark border-t border-brand-tan/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-semibold text-brand-tan mb-4">
              Contact Us
            </h2>
            <p className="text-[#C9A84C] font-semibold text-lg mb-6">
              California Licensed General Contractor &mdash; CSLB #1106798
            </p>
            <div className="space-y-4 text-white/80">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-1 text-brand-tan flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>18 El Paseo Ln, Mill Valley, CA 94941</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-brand-tan flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:paulo@construbay.com" className="hover:text-brand-tan transition-colors">
                  paulo@construbay.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-brand-tan flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:4159689494" className="hover:text-brand-tan transition-colors">
                  (415) 968-9494
                </a>
              </div>
            </div>


            {/* Footer Nav */}
            <nav className="mt-10 flex flex-wrap gap-6">
              <Link href="/" className="text-white/60 hover:text-brand-tan text-sm uppercase tracking-wider transition-colors">Home</Link>
              <Link href="/services" className="text-white/60 hover:text-brand-tan text-sm uppercase tracking-wider transition-colors">Services</Link>
              <Link href="/projects" className="text-white/60 hover:text-brand-tan text-sm uppercase tracking-wider transition-colors">Projects</Link>
              <Link href="/about" className="text-white/60 hover:text-brand-tan text-sm uppercase tracking-wider transition-colors">About</Link>
              <Link href="/investments" className="text-white/60 hover:text-brand-tan text-sm uppercase tracking-wider transition-colors">Investments</Link>
              <Link href="/for-homeowners" className="text-white/60 hover:text-brand-tan text-sm uppercase tracking-wider transition-colors">For Homeowners</Link>
              <Link href="/for-architects" className="text-white/60 hover:text-brand-tan text-sm uppercase tracking-wider transition-colors">For Architects</Link>
              <Link href="/request-a-bid" className="text-white/60 hover:text-brand-tan text-sm uppercase tracking-wider transition-colors">Contact</Link>
            </nav>

            <a
              href="tel:4159689494"
              className="inline-block mt-8 border border-white/80 text-white text-sm tracking-[0.15em] uppercase px-8 py-3 hover:bg-white/10 transition-colors"
            >
              Call Now
            </a>
          </div>

          {/* Contact Form */}
          <div>
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-white text-lg font-semibold">Thank you!</p>
                <p className="text-white/60 mt-2">We&apos;ll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-transparent border border-brand-tan/40 text-white placeholder:text-white/40 px-4 py-3 focus:outline-none focus:border-brand-tan transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-transparent border border-brand-tan/40 text-white placeholder:text-white/40 px-4 py-3 focus:outline-none focus:border-brand-tan transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-transparent border border-brand-tan/40 text-white placeholder:text-white/40 px-4 py-3 focus:outline-none focus:border-brand-tan transition-colors"
                />
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full bg-transparent border border-brand-tan/40 text-white px-4 py-3 focus:outline-none focus:border-brand-tan transition-colors appearance-none"
                  required
                >
                  <option value="" disabled className="bg-brand-dark text-white/40">Project Type</option>
                  <option value="New Construction" className="bg-brand-dark">New Construction</option>
                  <option value="Full Home Remodel" className="bg-brand-dark">Full Home Remodel</option>
                  <option value="ADU or Addition" className="bg-brand-dark">ADU or Addition</option>
                  <option value="Custom Pool" className="bg-brand-dark">Custom Pool</option>
                  <option value="Kitchen or Bath" className="bg-brand-dark">Kitchen or Bath</option>
                  <option value="Permit Help" className="bg-brand-dark">Permit Help</option>
                  <option value="Other" className="bg-brand-dark">Other</option>
                </select>
                <select
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  className="w-full bg-transparent border border-brand-tan/40 text-white px-4 py-3 focus:outline-none focus:border-brand-tan transition-colors appearance-none"
                  required
                >
                  <option value="" disabled className="bg-brand-dark text-white/40">Timeline</option>
                  <option value="As soon as possible" className="bg-brand-dark">As soon as possible</option>
                  <option value="1 to 3 months" className="bg-brand-dark">1 to 3 months</option>
                  <option value="3 to 6 months" className="bg-brand-dark">3 to 6 months</option>
                  <option value="Just exploring" className="bg-brand-dark">Just exploring</option>
                </select>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full border border-brand-tan text-brand-tan text-sm tracking-[0.15em] uppercase px-8 py-3 hover:bg-brand-tan/10 transition-colors disabled:opacity-50"
                >
                  {submitting ? "Submitting..." : "Submit"}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* City list */}
        <div className="mt-10 text-center text-white/60 text-sm">
          Serving: Mill Valley &middot; Tiburon &middot; Sausalito &middot; San Rafael &middot; Novato &middot; Petaluma &middot; Sebastopol &middot; Marina &middot; Santa Rosa &middot; Sonoma
        </div>

        <div className="mt-12 pt-8 border-t border-brand-tan/20 text-center text-white/40 text-sm">
          &copy; {new Date().getFullYear()} Construbay. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
