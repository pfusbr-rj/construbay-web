"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/95 backdrop-blur-sm border-b border-brand-tan/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Construbay"
              width={180}
              height={48}
              className="h-10 sm:h-12 w-auto"
              priority
            />
            <span className="text-[#C9A84C] text-xs font-medium hidden sm:inline">CSLB #1106798</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-white text-sm tracking-[0.2em] uppercase hover:text-brand-tan transition-colors"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-white text-sm tracking-[0.2em] uppercase hover:text-brand-tan transition-colors"
            >
              Services
            </Link>
            <Link
              href="/projects"
              className="text-white text-sm tracking-[0.2em] uppercase hover:text-brand-tan transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/request-a-bid"
              className="text-white text-sm tracking-[0.2em] uppercase hover:text-brand-tan transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Call Now Button */}
          <a
            href="tel:4159689494"
            className="hidden md:inline-block border border-white/80 text-white text-sm tracking-[0.15em] uppercase px-6 py-2 hover:bg-white/10 transition-colors"
          >
            Call Now
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-brand-tan/20 pt-4">
            <nav className="flex flex-col gap-4">
              <Link href="/" className="text-white text-sm tracking-[0.2em] uppercase" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link href="/services" className="text-white text-sm tracking-[0.2em] uppercase" onClick={() => setMenuOpen(false)}>Services</Link>
              <Link href="/projects" className="text-white text-sm tracking-[0.2em] uppercase" onClick={() => setMenuOpen(false)}>Projects</Link>
              <Link href="/request-a-bid" className="text-white text-sm tracking-[0.2em] uppercase" onClick={() => setMenuOpen(false)}>Contact</Link>
              <a href="tel:4159689494" className="border border-white/80 text-white text-sm tracking-[0.15em] uppercase px-6 py-2 text-center hover:bg-white/10 transition-colors">Call Now</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
