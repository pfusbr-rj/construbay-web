"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const tier1Services = [
    { label: "New Construction",       href: "/services/new-construction-marin-county" },
    { label: "Full Home Remodel",      href: "/services/whole-house-remodel-marin-county" },
    { label: "Kitchen Remodel",        href: "/services/kitchen-remodel-marin-county" },
    { label: "Bathroom Remodel",       href: "/services/bathroom-remodel-marin-county" },
    { label: "ADU &amp; Garage Conversion", href: "/services/adu-builder-marin-county" },
    { label: "Home Addition",          href: "/services/home-addition-marin-county" },
    { label: "Basement Finishing",     href: "/services/basement-finishing-marin-county" },
    { label: "Deck &amp; Outdoor Living",   href: "/services/deck-outdoor-living-marin-county" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-brand-tan/20" style={{ backgroundColor: '#000000' }}>
      <div style={{ paddingLeft: '2rem', paddingRight: '2rem' }}>

        {/* Main row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '96px' }}>

          {/* Left: CSLB + Logo */}
          <div className="flex items-center" style={{ gap: '1.5rem' }}>
            <span className="hidden md:block" style={{
              color: 'rgba(203,178,106,0.5)',
              fontSize: '11px',
              letterSpacing: '0.15em',
              fontWeight: '300',
              textTransform: 'uppercase',
              fontFamily: 'Montserrat, sans-serif',
              paddingRight: '1rem',
              borderRight: '1px solid rgba(203,178,106,0.3)',
              whiteSpace: 'nowrap',
            }}>
              CSLB #1106798
            </span>
            <Link href="/" className="flex items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/svg/logo%20vector-02.svg"
                alt="ConstruBay"
                style={{ height: '110px', width: 'auto' }}
              />
            </Link>
          </div>

          {/* Center: Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-white text-sm tracking-[0.2em] uppercase hover:text-[#cbb26a] transition-colors duration-300">Home</Link>

            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className="text-white text-sm tracking-[0.2em] uppercase hover:text-[#cbb26a] transition-colors duration-300 flex items-center gap-1 bg-transparent border-0 cursor-pointer p-0"
                onClick={() => setServicesOpen(!servicesOpen)}
                aria-haspopup="true"
                aria-expanded={servicesOpen}
              >
                Services
                <svg
                  className="w-3 h-3 mt-px"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {servicesOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 z-50"
                  style={{ paddingTop: '8px' }}
                >
                  <div
                    style={{
                      backgroundColor: '#0a0a0a',
                      border: '1px solid rgba(203,178,106,0.25)',
                      minWidth: '230px',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.6)',
                    }}
                  >
                  {tier1Services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block hover:text-[#cbb26a] hover:bg-white/5 transition-colors duration-200"
                      style={{
                        color: 'rgba(255,255,255,0.85)',
                        fontSize: '11px',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: '300',
                        padding: '10px 20px',
                        display: 'block',
                        borderBottom: '1px solid rgba(203,178,106,0.1)',
                        whiteSpace: 'nowrap',
                      }}
                      dangerouslySetInnerHTML={{ __html: service.label }}
                    />
                  ))}
                  {/* Tier 2: View All Services */}
                  <Link
                    href="/services"
                    className="block hover:text-[#cbb26a] hover:bg-white/5 transition-colors duration-200"
                    style={{
                      color: '#cbb26a',
                      fontSize: '11px',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: '400',
                      padding: '12px 20px',
                      display: 'block',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    View All Services &rarr;
                  </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/pricing" className="text-white text-sm tracking-[0.2em] uppercase hover:text-[#cbb26a] transition-colors duration-300">Pricing</Link>
            <Link href="/process" className="text-white text-sm tracking-[0.2em] uppercase hover:text-[#cbb26a] transition-colors duration-300">Process</Link>
            <Link href="/locations" className="text-white text-sm tracking-[0.2em] uppercase hover:text-[#cbb26a] transition-colors duration-300">Locations</Link>
            <Link href="/projects" className="text-white text-sm tracking-[0.2em] uppercase hover:text-[#cbb26a] transition-colors duration-300">Projects</Link>
            <Link href="/about" className="text-white text-sm tracking-[0.2em] uppercase hover:text-[#cbb26a] transition-colors duration-300">About</Link>
            <Link href="/blog" className="text-white text-sm tracking-[0.2em] uppercase hover:text-[#cbb26a] transition-colors duration-300">Blog</Link>
            <Link href="/request-a-bid" className="text-white text-sm tracking-[0.2em] uppercase hover:text-[#cbb26a] transition-colors duration-300">Contact</Link>
            <Link
              href="/request-a-bid"
              className="hover:bg-transparent hover:text-[#cbb26a] transition-all duration-300"
              style={{
                backgroundColor: '#cbb26a',
                color: '#000000',
                border: '1px solid #cbb26a',
                fontSize: '11px',
                fontWeight: '400',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                padding: '10px 24px',
                textDecoration: 'none',
                fontFamily: 'Montserrat, sans-serif',
                whiteSpace: 'nowrap',
                display: 'inline-block',
              }}
            >
              Start a Project
            </Link>
          </nav>

          {/* Right: Phone (desktop) + Hamburger (mobile) */}
          <div className="flex items-center">
            <a
              href="tel:4159689494"
              className="hidden md:block hover:opacity-70 transition-opacity"
              style={{
                background: 'linear-gradient(135deg, #bb8b4a, #f7eb9e)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontSize: '24px',
                letterSpacing: '0.1em',
                fontWeight: '300',
                whiteSpace: 'nowrap',
              }}
            >
              (415) 968-9494
            </a>
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

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-brand-tan/20 pt-4">
            <nav className="flex flex-col gap-4">
              <Link href="/" className="text-white text-sm tracking-[0.2em] uppercase" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link href="/services" className="text-white text-sm tracking-[0.2em] uppercase" onClick={() => setMenuOpen(false)}>Services</Link>
              {tier1Services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="text-white/60 text-xs tracking-[0.15em] uppercase pl-4"
                  onClick={() => setMenuOpen(false)}
                  dangerouslySetInnerHTML={{ __html: service.label }}
                />
              ))}
              <Link href="/process" className="text-white text-sm tracking-[0.2em] uppercase" onClick={() => setMenuOpen(false)}>Process</Link>
              <Link href="/locations" className="text-white text-sm tracking-[0.2em] uppercase" onClick={() => setMenuOpen(false)}>Locations</Link>
              <Link href="/projects" className="text-white text-sm tracking-[0.2em] uppercase" onClick={() => setMenuOpen(false)}>Projects</Link>
              <Link href="/about" className="text-white text-sm tracking-[0.2em] uppercase" onClick={() => setMenuOpen(false)}>About</Link>
              <Link href="/blog" className="text-white text-sm tracking-[0.2em] uppercase" onClick={() => setMenuOpen(false)}>Blog</Link>
              <Link href="/request-a-bid" className="text-white text-sm tracking-[0.2em] uppercase" onClick={() => setMenuOpen(false)}>Contact</Link>
            </nav>
          </div>
        )}

      </div>
    </header>
  );
}
