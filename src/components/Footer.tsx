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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Thank you! We will be in touch soon.");
    setFormData({ fullName: "", email: "", phone: "", projectType: "", timeline: "" });
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
                  415-968-9494
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex gap-4">
              <a href="https://www.facebook.com/construbay" target="_blank" rel="noopener noreferrer" className="text-brand-tan hover:text-brand-tan/70 transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
              <a href="https://www.instagram.com/construbaymarin/" target="_blank" rel="noopener noreferrer" className="text-brand-tan hover:text-brand-tan/70 transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              </a>
              <a href="https://www.yelp.com/biz/construbay-mill-valley" target="_blank" rel="noopener noreferrer" className="text-brand-tan hover:text-brand-tan/70 transition-colors" aria-label="Yelp">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308a1.072 1.072 0 011.596-.206 7.26 7.26 0 011.96 3.105c.262.79-.29 1.607-1.29 1.607zm-7.842 3.04l1.713 4.89c.227.648-.272 1.394-.978 1.462a7.155 7.155 0 01-3.63-.79c-.74-.39-.766-1.3-.066-1.71l4.155-2.446c.432-.255.88-.08.806.594zm-1.458-1.844c.608.756-.096 1.872-1.068 1.692l-5.054-.934c-.72-.134-1.07-.978-.686-1.65a7.276 7.276 0 012.608-2.678c.7-.41 1.488.086 1.594.89l.606 2.68zm-.28-5.636L7.39 5.242c-.504-.49-.21-1.382.458-1.59A7.2 7.2 0 0112 3.098c.73.046 1.16.786.864 1.488l-1.578 4.386c-.224.622-1.072.662-1.706.182zm2.926.282l2.76-4.338c.4-.63 1.394-.53 1.658.166A7.174 7.174 0 0118.2 7.68c-.1.788-.94 1.14-1.596.67l-3.334-2.4c-.46-.332-.378-1.02.236-1.514z" /></svg>
              </a>
              <a href="https://www.houzz.com/professionals/construbay" target="_blank" rel="noopener noreferrer" className="text-brand-tan hover:text-brand-tan/70 transition-colors" aria-label="Houzz">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 5.5V2L6 5.5v3.5l6-3.5zm0 0v7L6 16v-7l6-3.5zm0 0L18 9v7l-6 3.5V12l6-3.5" /></svg>
              </a>
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
              <select
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                className="w-full bg-transparent border border-brand-tan/40 text-white px-4 py-3 focus:outline-none focus:border-brand-tan transition-colors appearance-none"
                required
              >
                <option value="" disabled className="bg-brand-dark text-white/40">Project Type</option>
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
                className="w-full border border-brand-tan text-brand-tan text-sm tracking-[0.15em] uppercase px-8 py-3 hover:bg-brand-tan/10 transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* City list */}
        <div className="mt-10 text-center text-white/60 text-sm">
          Serving: Mill Valley &middot; Tiburon &middot; Sausalito &middot; San Rafael &middot; Novato &middot; Petaluma &middot; Santa Rosa &middot; Sebastopol &middot; Sonoma
        </div>

        <div className="mt-12 pt-8 border-t border-brand-tan/20 text-center text-white/40 text-sm">
          &copy; {new Date().getFullYear()} Construbay. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
