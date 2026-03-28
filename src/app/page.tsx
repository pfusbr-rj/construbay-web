'use client';
import { useState } from 'react';
import Image from "next/image";
import { Cormorant_Garamond, Montserrat } from 'next/font/google';
import ProjectGrid from '@/components/projects/ProjectGrid';
import { projects } from '@/data/projects';
import InquiryModal from '@/components/InquiryModal';

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['300', '400'] });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['300', '400'] });


const testimonials = [
  {
    text: "Quick to respond! They gave us a free estimate in a timely manner. Hired them for several projects on our Home. They do 'Great' work, clean, friendly, fun to work with on a daily basis.",
    author: "The Mathews",
    projectType: "Full home remodel — Mill Valley",
  },
  {
    text: "Great place to work at with great people. Energetic with a great foundation for growth. Organized and focused to perform at a high level of expectation for their customers.",
    author: "Lars & Mary Williams",
    projectType: "Kitchen remodel — Tiburon",
  },
  {
    text: "I dealt with different aspects of their business from converting LLC to corps to working with out of state job projects and licensing. The job was very fast paced and fun.",
    author: "Chris Parks",
    projectType: "Commercial project — San Rafael",
  },
];

function StarIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="#C9A84C" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/hero-bg-1.jpg"
            alt="Luxury home remodel in Marin County by ConstruBay — CSLB #1106798"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.75) 100%)' }} />
        </div>

        <div className="relative z-10 px-4 max-w-4xl mx-auto text-center w-full" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', width: '100%' }}>

          <div style={{ marginBottom: '-20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/svg/logo%20vector-02.svg"
              alt="ConstruBay"
              style={{ height: '220px', width: 'auto' }}
            />
          </div>
          <h1 className={`${cormorant.className} font-light text-4xl sm:text-5xl md:text-7xl text-white mb-6 leading-none text-center w-full mx-auto`}>
            Built Without Compromise
          </h1>
          <p style={{ display: 'none' }} aria-hidden="false">
            Luxury General Contractor serving Marin County, Sonoma County and Napa County. CSLB #1106798. Mill Valley, Tiburon, San Rafael, Sausalito.
          </p>
          <p className={`${montserrat.className} mb-12`} style={{ letterSpacing: '0.25em', textTransform: 'uppercase', fontSize: '13px', textAlign: 'center', width: '100%', display: 'block', color: '#cbb26a' }}>
            Marin, Sonoma &amp; Napa
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <button
              onClick={() => setModalOpen(true)}
              className={`${montserrat.className} group relative inline-flex items-center justify-center overflow-hidden`}
              style={{
                backgroundColor: 'transparent',
                border: '1px solid #cbb26a',
                color: '#cbb26a',
                fontSize: '12px',
                fontWeight: '300',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                padding: '18px 56px',
                cursor: 'pointer',
                position: 'relative',
                minWidth: '240px',
              }}
            >
              <span
                className="absolute inset-0 origin-left scale-x-0 group-hover:scale-x-100"
                style={{
                  backgroundColor: '#cbb26a',
                  transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              />
              <span className="relative z-10 flex items-center gap-4 group-hover:text-[#000000]" style={{ transition: 'color 0.6s ease' }}>
                Inquire
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </button>
          </div>
        </div>
        <div style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px',
          opacity: 0.7,
        }}>
          <p className={montserrat.className} style={{
            fontSize: '9px',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: '#cbb26a',
            margin: 0,
          }}>Scroll</p>
          <div style={{
            width: '1px',
            height: '60px',
            background: 'linear-gradient(to bottom, #cbb26a, transparent)',
            animation: 'scrollPulse 2s ease-in-out infinite',
          }} />
        </div>
      </section>

      {/* EEAT Trust Bar */}
      <section style={{ backgroundColor: '#0a0a0a', borderBottom: '1px solid rgba(203,178,106,0.15)', padding: '0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5" style={{ borderLeft: '1px solid rgba(203,178,106,0.12)' }}>
            {[
              { label: 'CSLB #1106798', value: 'Licensed Since 2009' },
              { label: '$2M Liability', value: 'General Liability Insurance' },
              { label: '10-Year Warranty', value: 'Craftsmanship Guarantee' },
              { label: '5.0 Stars', value: '47 Google Reviews' },
              { label: 'Nextdoor', value: '#1 Contractor Marin County — 2 Consecutive Years' },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  borderRight: '1px solid rgba(203,178,106,0.12)',
                  padding: '28px 32px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                }}
              >
                <p className={montserrat.className} style={{ fontSize: '13px', fontWeight: '400', color: '#cbb26a', letterSpacing: '0.05em', margin: 0 }}>
                  {item.label}
                </p>
                <p className={montserrat.className} style={{ fontSize: '10px', fontWeight: '300', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.12em', textTransform: 'uppercase', margin: 0 }}>
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Points — The Reality of Building in Marin County */}
      <section style={{ padding: '120px 0', backgroundColor: '#000000', borderBottom: '1px solid rgba(203,178,106,0.08)' }}>
        <div className="max-w-5xl mx-auto px-6">
          <p className={montserrat.className} style={{ fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(203,178,106,0.6)', textAlign: 'center', marginBottom: '24px' }}>
            The Reality of Building in Marin County
          </p>
          <h2 className={cormorant.className} style={{ fontSize: 'clamp(32px, 4.5vw, 56px)', fontWeight: '300', color: '#ffffff', textAlign: 'center', marginBottom: '64px', letterSpacing: '0.02em', lineHeight: 1.15 }}>
            Most projects here go over budget.<br />Over schedule. Or both.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1px', backgroundColor: 'rgba(203,178,106,0.1)' }}>
            {[
              {
                number: '01',
                title: 'Permits Take Months',
                body: 'Marin County permit offices are among the slowest in California. Without experienced local relationships, your project stalls before it starts.',
              },
              {
                number: '02',
                title: 'Contractors Disappear',
                body: 'Most GCs juggle too many projects and go silent. Clients are left chasing updates, discovering problems only when it\'s too late to fix them cheaply.',
              },
              {
                number: '03',
                title: 'Budgets Spiral',
                body: 'Vague scopes. Change orders. Hidden costs. Without a fixed-scope contract and transparent pricing, the final number rarely matches the first quote.',
              },
            ].map((item) => (
              <div key={item.number} style={{ backgroundColor: '#000000', padding: '48px 40px' }}>
                <p className={cormorant.className} style={{ fontSize: '13px', fontStyle: 'italic', color: 'rgba(203,178,106,0.4)', marginBottom: '20px', letterSpacing: '0.05em' }}>
                  {item.number}
                </p>
                <h3 className={montserrat.className} style={{ fontSize: '11px', fontWeight: '400', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#cbb26a', marginBottom: '16px' }}>
                  {item.title}
                </h3>
                <p className={montserrat.className} style={{ fontSize: '13px', fontWeight: '300', color: 'rgba(255,255,255,0.5)', lineHeight: 2, letterSpacing: '0.04em' }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why ConstruBay — A Different Standard */}
      <section style={{ padding: '120px 0', backgroundColor: '#050505' }}>
        <div className="max-w-5xl mx-auto px-6">
          <p className={montserrat.className} style={{ fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(203,178,106,0.6)', marginBottom: '24px' }}>
            Why ConstruBay
          </p>
          <h2 className={cormorant.className} style={{ fontSize: 'clamp(32px, 4.5vw, 56px)', fontWeight: '300', color: '#ffffff', marginBottom: '72px', letterSpacing: '0.02em', lineHeight: 1.15, maxWidth: '640px' }}>
            A Different Standard<br />of Building
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              {
                num: '01',
                title: 'Permit-Ready From Day One',
                body: 'We know Marin County\'s planning departments, fire districts, and setback rules. Every project is designed to permit — not redesigned after denial.',
              },
              {
                num: '02',
                title: 'One Point of Contact. Always.',
                body: 'Paulo Fernandes runs every project personally. No hand-offs. No junior PMs. You have his number and he picks up.',
              },
              {
                num: '03',
                title: 'Fixed-Scope Contracts',
                body: 'We price work thoroughly before we start. Our contracts are fixed-scope — what we quote is what you pay, barring owner-directed changes.',
              },
              {
                num: '04',
                title: 'Built to Last a Generation',
                body: 'We back our work with a 10-year craftsmanship warranty. Our clients are long-term Marin homeowners, and our reputation depends on every single build.',
              },
            ].map((item, index) => (
              <div
                key={item.num}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '80px 1fr',
                  gap: '40px',
                  alignItems: 'flex-start',
                  padding: '48px 0',
                  borderTop: index === 0 ? '1px solid rgba(203,178,106,0.15)' : '1px solid rgba(203,178,106,0.08)',
                  borderBottom: index === 3 ? '1px solid rgba(203,178,106,0.15)' : 'none',
                }}
              >
                <p className={cormorant.className} style={{ fontSize: '14px', fontStyle: 'italic', color: 'rgba(203,178,106,0.5)', paddingTop: '4px' }}>
                  {item.num}
                </p>
                <div>
                  <h3 className={cormorant.className} style={{ fontSize: '28px', fontWeight: '300', color: '#ffffff', marginBottom: '12px', letterSpacing: '0.02em' }}>
                    {item.title}
                  </h3>
                  <p className={montserrat.className} style={{ fontSize: '13px', fontWeight: '300', color: 'rgba(255,255,255,0.5)', lineHeight: 2, letterSpacing: '0.04em', maxWidth: '560px' }}>
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <ProjectGrid projects={projects} mode="featured" />

      {/* Services Section */}
      <section style={{ padding: '120px 0', backgroundColor: '#000000' }}>
        <div className="max-w-5xl mx-auto px-6">
          <h2 className={`${cormorant.className}`} style={{
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: '300',
            textAlign: 'center',
            color: '#ffffff',
            marginBottom: '80px',
            letterSpacing: '0.02em',
          }}>
            Our Services
          </h2>

          {[
            { num: '01', title: 'Full Home Remodels', description: 'Complete design-build transformation from structural to luxury finishes.', href: '/services/whole-house-remodel-marin-county' },
            { num: '02', title: 'ADUs & Home Additions', description: 'Fully permitted accessory dwelling units designed for modern living.', href: '/services/adu-builder-marin-county' },
            { num: '03', title: 'Kitchen & Bath', description: 'Custom cabinetry, premium tile, and precision craftsmanship throughout.', href: '/services/kitchen-remodel-marin-county' },
            { num: '04', title: 'Outdoor Living', description: 'Pool houses, decks, and outdoor kitchens seamlessly integrated.', href: '/services' },
          ].map((service, index) => (
            <a
              key={service.num}
              href={service.href}
              className="group block"
              style={{
                borderTop: '1px solid rgba(203,178,106,0.2)',
                borderBottom: index === 3 ? '1px solid rgba(203,178,106,0.2)' : 'none',
                padding: '40px 0',
                display: 'grid',
                gridTemplateColumns: '80px 1fr 40px',
                alignItems: 'center',
                gap: '32px',
                textDecoration: 'none',
                transition: 'all 0.4s ease',
              }}
            >
              <span className={cormorant.className} style={{
                fontSize: '14px',
                fontStyle: 'italic',
                color: '#cbb26a',
                opacity: 0.8,
              }}>{service.num}</span>

              <div>
                <h3 className={`${cormorant.className} group-hover:text-[#cbb26a]`} style={{
                  fontSize: '32px',
                  fontWeight: '300',
                  color: '#ffffff',
                  marginBottom: '8px',
                  transition: 'color 0.3s ease',
                }}>{service.title}</h3>
                <p className={montserrat.className} style={{
                  fontSize: '12px',
                  fontWeight: '300',
                  letterSpacing: '0.08em',
                  color: 'rgba(255,255,255,0.55)',
                  lineHeight: 1.7,
                }}>{service.description}</p>
              </div>

              <svg
                className="group-hover:translate-x-2 group-hover:text-[#cbb26a]"
                width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="#cbb26a" strokeWidth="1"
                style={{ transition: 'all 0.4s ease' }}
              >
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          ))}
        </div>
      </section>


      {/* Testimonials Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className={`${cormorant.className} text-4xl md:text-5xl text-brand-tan font-light mb-6`}>
          Testimonials
        </h2>
        <div className="flex items-center gap-2 mb-16">
          <div className="flex gap-1">
            <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
          </div>
          <span className={`${montserrat.className} text-brand-tan text-xs tracking-[0.15em] uppercase`}>
            5.0 on Google &amp; Yelp
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.author} className="border border-brand-tan/20 p-8">
              <p className={`${montserrat.className} text-white/70 leading-relaxed mb-8 text-sm italic`}>
                &ldquo;{t.text}&rdquo;
              </p>
              <p className={`${cormorant.className} text-brand-tan text-lg`}>&mdash; {t.author}</p>
              <p className={`${montserrat.className} text-xs text-white/40 mt-1 tracking-wider`}>{t.projectType}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: '80px 0', borderBottom: '1px solid rgba(203,178,106,0.15)' }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'How much does a home remodel cost in Marin County?',
                  acceptedAnswer: { '@type': 'Answer', text: 'Home remodel costs in Marin County range from $150,000 for kitchen or bathroom updates to $1M+ for full home transformations. Contact ConstruBay at (415) 968-9494 for a free estimate. CSLB #1106798.' }
                },
                {
                  '@type': 'Question',
                  name: 'Is ConstruBay licensed to work in Marin County?',
                  acceptedAnswer: { '@type': 'Answer', text: 'Yes. ConstruBay holds California Contractors State License #1106798, fully licensed and insured to work throughout Marin, Sonoma and Napa Counties.' }
                },
                {
                  '@type': 'Question',
                  name: 'Do you build ADUs in Marin County?',
                  acceptedAnswer: { '@type': 'Answer', text: 'Yes. ConstruBay specializes in fully permitted ADU construction across Marin County including Mill Valley, Tiburon, San Rafael and Sausalito. We handle the entire permit process.' }
                },
                {
                  '@type': 'Question',
                  name: 'What areas does ConstruBay serve?',
                  acceptedAnswer: { '@type': 'Answer', text: 'ConstruBay serves Marin County (Mill Valley, Tiburon, Sausalito, San Rafael, Belvedere, Ross, Kentfield), Sonoma County (Santa Rosa, Petaluma, Healdsburg) and Napa County (Napa, St. Helena).' }
                },
                {
                  '@type': 'Question',
                  name: 'How long does a kitchen remodel take in Marin County?',
                  acceptedAnswer: { '@type': 'Answer', text: 'A luxury kitchen remodel in Marin County typically takes 8-16 weeks from start to finish. ConstruBay uses AI-powered project management to keep timelines tight and clients informed.' }
                },
              ]
            })
          }}
        />
        <div className="max-w-4xl mx-auto px-6">
          <p className={`${montserrat.className}`} style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#cbb26a', marginBottom: '16px', textAlign: 'center' }}>
            FAQ
          </p>
          <h2 className={`${cormorant.className}`} style={{ fontSize: '40px', fontWeight: 300, color: '#ffffff', textAlign: 'center', marginBottom: '48px' }}>
            Frequently Asked Questions
          </h2>
          {[
            { q: 'How much does a home remodel cost in Marin County?', a: 'Home remodel costs in Marin County range from $150,000 for kitchen or bathroom updates to $1M+ for full home transformations. Every project is unique — contact us for a free estimate.' },
            { q: 'Is ConstruBay licensed to work in Marin County?', a: 'Yes. ConstruBay holds California Contractors State License #1106798, fully licensed and insured throughout Marin, Sonoma and Napa Counties.' },
            { q: 'Do you build ADUs in Marin County?', a: 'Yes. We specialize in fully permitted ADU construction across Marin County. We handle the entire permit process from application to final approval.' },
            { q: 'What areas does ConstruBay serve?', a: 'We serve Marin County (Mill Valley, Tiburon, Sausalito, San Rafael, Belvedere, Ross, Kentfield), Sonoma County (Santa Rosa, Petaluma, Healdsburg) and Napa County.' },
            { q: 'How long does a kitchen remodel take in Marin County?', a: 'A luxury kitchen remodel in Marin County typically takes 8-16 weeks. We use AI-powered project management to keep timelines tight and clients informed throughout.' },
          ].map((faq, i) => (
            <div key={i} style={{ borderBottom: '1px solid rgba(203,178,106,0.15)', padding: '28px 0' }}>
              <h3 className={`${cormorant.className}`} style={{ fontSize: '22px', fontWeight: 300, color: '#ffffff', marginBottom: '10px' }}>{faq.q}</h3>
              <p className={`${montserrat.className}`} style={{ fontSize: '12px', fontWeight: 300, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-brand-tan/20 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto px-6 pb-8" style={{ borderBottom: '1px solid rgba(203,178,106,0.1)', marginBottom: '24px' }}>
          <p className={`${montserrat.className}`} style={{ fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', textAlign: 'center', lineHeight: 2 }}>
            Serving: <a href="/mill-valley-general-contractor" style={{ color: 'rgba(203,178,106,0.5)', textDecoration: 'none' }}>Mill Valley</a> · <a href="/tiburon-general-contractor" style={{ color: 'rgba(203,178,106,0.5)', textDecoration: 'none' }}>Tiburon</a> · <a href="/san-rafael-general-contractor" style={{ color: 'rgba(203,178,106,0.5)', textDecoration: 'none' }}>San Rafael</a> · <a href="/sausalito-general-contractor" style={{ color: 'rgba(203,178,106,0.5)', textDecoration: 'none' }}>Sausalito</a> · Belvedere · Ross · Kentfield · Corte Madera · Larkspur · Novato · Santa Rosa · Petaluma · Napa · St. Helena · Healdsburg
          </p>
        </div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className={`${montserrat.className} text-white/40 text-xs tracking-[0.15em] uppercase`}>
            &copy; {new Date().getFullYear()} ConstruBay &mdash; All rights reserved
          </p>
          <p className={`${montserrat.className} text-white/40 text-xs tracking-[0.15em] uppercase`}>
            CSLB #1106798 &middot; <a href="tel:4159689494" className="hover:text-brand-tan transition-colors">(415) 968-9494</a> &middot; Mill Valley, CA
          </p>
        </div>
      </footer>
      <style>{`
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.2; transform: scaleY(0.3); transform-origin: top; }
          50% { opacity: 1; transform: scaleY(1); transform-origin: top; }
        }
      `}</style>
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
