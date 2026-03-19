"use client";

import Link from "next/link";
import { useState, FormEvent } from "react";

export default function Footer() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Thank you! We will be in touch soon.");
    setFormData({ fullName: "", email: "", phone: "", address: "" });
  };

  return (
    <footer className="bg-brand-dark border-t border-brand-tan/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-semibold text-brand-tan mb-8">
              Contact Us
            </h2>
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
                  415-968-9494
                </a>
              </div>
            </div>

            {/* Footer Nav */}
            <nav className="mt-10 flex flex-wrap gap-6">
              <Link href="/" className="text-white/60 hover:text-brand-tan text-sm uppercase tracking-wider transition-colors">Home</Link>
              <Link href="/services" className="text-white/60 hover:text-brand-tan text-sm uppercase tracking-wider transition-colors">Services</Link>
              <Link href="/projects" className="text-white/60 hover:text-brand-tan text-sm uppercase tracking-wider transition-colors">Projects</Link>
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
                type="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-transparent border border-brand-tan/40 text-white placeholder:text-white/40 px-4 py-3 focus:outline-none focus:border-brand-tan transition-colors"
              />
              <input
                type="tel"
                placeholder="Phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-transparent border border-brand-tan/40 text-white placeholder:text-white/40 px-4 py-3 focus:outline-none focus:border-brand-tan transition-colors"
              />
              <input
                type="text"
                placeholder="Address"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full bg-transparent border border-brand-tan/40 text-white placeholder:text-white/40 px-4 py-3 focus:outline-none focus:border-brand-tan transition-colors"
              />
              <button
                type="submit"
                className="w-full border border-brand-tan text-brand-tan text-sm tracking-[0.15em] uppercase px-8 py-3 hover:bg-brand-tan/10 transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-brand-tan/20 text-center text-white/40 text-sm">
          &copy; {new Date().getFullYear()} Construbay. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
