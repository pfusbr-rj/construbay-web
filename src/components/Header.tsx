"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/95 backdrop-blur-sm border-b border-brand-tan/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-24">
          {/* Logo + Phone */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex flex-col items-start">
              <span style={{
                fontSize: '26px',
                fontWeight: '300',
                color: '#cbb26a',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                fontFamily: 'Georgia, serif',
                lineHeight: 1
              }}>ConstruBay</span>
              <span style={{
                fontSize: '8px',
                color: 'rgba(203,178,106,0.6)',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                marginTop: '4px'
              }}>Licensed General Contractor</span>
            </Link>
            <a
              href="tel:4159689494"
              className="hover:opacity-70 transition-opacity"
              style={{ color: '#cbb26a', fontSize: '17px', letterSpacing: '0.1em', fontWeight: '300' }}
            >
              (415) 968-9494
            </a>
          </div>

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
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
