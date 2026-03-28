import { Cormorant_Garamond, Montserrat } from 'next/font/google';
import { getCityBySlug } from '@/lib/cities';
import { generateCityMetadata } from '@/lib/seo';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['300', '400'] });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['300', '400'] });

const city = getCityBySlug('novato');

export const metadata: Metadata = city ? {
  ...generateCityMetadata(city),
  title: 'General Contractor Novato CA | Luxury Home Remodeling | ConstruBay CSLB #1106798',
  description: 'Licensed luxury general contractor in Novato CA. Full home remodels, ADUs, kitchen and bathroom renovations. Largest city in Marin County. CSLB #1106798.',
} : {};

const faqs = [
  {
    q: 'Does ConstruBay work in Novato?',
    a: 'Yes. We work throughout Novato including Hamilton, Ignacio, Bel Marin Keys, Black Point, and Downtown Novato. As Marin County\'s largest city, Novato offers a wide range of project types from ADU builds to full home renovations.',
  },
  {
    q: 'What is the permit process like in Novato?',
    a: 'Novato has its own building department. Residential permits typically take 6–10 weeks for standard projects. ADU permits and projects requiring grading may take longer. We manage the entire permit process on your behalf.',
  },
  {
    q: 'Can you work on Hamilton neighborhood properties?',
    a: 'Absolutely. The Hamilton neighborhood has unique characteristics — converted military housing, newer construction, and a mix of architectural styles. We are experienced working across all of Novato\'s diverse residential areas.',
  },
  {
    q: 'What types of projects do you complete in Novato?',
    a: 'Full home renovations, kitchen and bathroom remodels, ADUs, home additions, and outdoor living projects. Novato\'s newer development areas and larger lots are particularly well suited for ADU construction.',
  },
  {
    q: 'What is your minimum project size in Novato?',
    a: 'We typically work on projects starting at $150,000. In Novato we complete focused kitchen and bathroom renovations as well as complete whole-home transformations and ADU builds.',
  },
];

export default function NovatoPage() {
  if (!city) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['LocalBusiness', 'GeneralContractor'],
        name: 'ConstruBay',
        description: 'Licensed luxury general contractor serving Novato, CA — Marin County\'s largest city. Full home remodels, ADUs, kitchen and bath. CSLB #1106798.',
        url: 'https://www.construbay.com/novato-general-contractor',
        telephone: '+14159689494',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Novato',
          addressRegion: 'CA',
          postalCode: city.zip,
          addressCountry: 'US',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: city.lat,
          longitude: city.lng,
        },
        areaServed: ['Novato', 'San Rafael', 'Petaluma', 'Black Point', 'Marin County'],
        hasCredential: {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'License',
          licenseNumber: '1106798',
          recognizedBy: { '@type': 'Organization', name: 'California State License Board' },
        },
        priceRange: '$$$',
        openingHours: 'Mo-Fr 08:00-17:00',
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map(faq => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: { '@type': 'Answer', text: faq.a },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main style={{ backgroundColor: '#000000', minHeight: '100vh' }}>

        {/* Hero */}
        <section style={{ position: 'relative', height: '60vh', minHeight: '480px' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={city.heroImage}
            alt="General contractor in Novato, CA — ConstruBay CSLB #1106798"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.85) 100%)' }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '64px 48px', maxWidth: '900px' }}>
            <p className={montserrat.className} style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#cbb26a', marginBottom: '16px' }}>
              {city.county} County · {city.zip}
            </p>
            <h1 className={cormorant.className} style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: '300', color: '#ffffff', lineHeight: 1.1, marginBottom: '20px' }}>
              Licensed General Contractor<br />Novato, California
            </h1>
            <p className={montserrat.className} style={{ fontSize: '13px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', maxWidth: '560px', lineHeight: 1.8 }}>
              {city.description}
            </p>
          </div>
        </section>

        {/* Content */}
        <div className="max-w-5xl mx-auto px-6">

          {/* About */}
          <section style={{ padding: '80px 0', borderBottom: '1px solid rgba(203,178,106,0.15)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'start' }}>
              <div>
                <h2 className={cormorant.className} style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: '300', color: '#ffffff', marginBottom: '24px', lineHeight: 1.2 }}>
                  ConstruBay in {city.name}
                </h2>
                <p className={montserrat.className} style={{ fontSize: '13px', fontWeight: '300', color: 'rgba(255,255,255,0.6)', lineHeight: 1.9, marginBottom: '20px' }}>
                  Novato is Marin County&apos;s largest city — a community that spans historic Hamilton neighborhoods, established residential areas in Ignacio, waterfront properties at Bel Marin Keys, and newer hillside developments throughout North Marin.
                </p>
                <p className={montserrat.className} style={{ fontSize: '13px', fontWeight: '300', color: 'rgba(255,255,255,0.6)', lineHeight: 1.9 }}>
                  ConstruBay brings the same standard of craftsmanship and accountability to Novato that we deliver throughout Marin County. From focused kitchen renovations to complete whole-home transformations and ADU builds, every project is managed personally by Paulo Fernandes. CSLB Licensed #1106798.
                </p>
              </div>
              <div>
                {[
                  { num: '10+', label: 'Years in Marin County' },
                  { num: '150+', label: 'Projects Completed' },
                  { num: '5.0', label: 'Rating on Google & Yelp' },
                  { num: '#1106798', label: 'CSLB License' },
                ].map((stat) => (
                  <div key={stat.label} style={{ borderBottom: '1px solid rgba(203,178,106,0.15)', padding: '20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span className={cormorant.className} style={{ fontSize: '32px', fontWeight: '300', color: '#cbb26a' }}>{stat.num}</span>
                    <span className={montserrat.className} style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)' }}>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Services */}
          <section style={{ padding: '80px 0', borderBottom: '1px solid rgba(203,178,106,0.15)' }}>
            <h2 className={cormorant.className} style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: '300', color: '#ffffff', marginBottom: '48px' }}>
              Services in {city.name}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2px' }}>
              {[
                { title: 'Full Home Remodels', desc: 'Complete renovation across all of Novato\'s neighborhoods — Hamilton, Ignacio, Bel Marin Keys, Black Point and beyond.' },
                { title: 'Kitchen & Bath', desc: 'Custom cabinetry, stone surfaces, and precision craftsmanship for the spaces you use every day.' },
                { title: 'ADUs & Additions', desc: 'Novato\'s larger lots make it ideal for ADU construction. We handle design, permits, and build.' },
                { title: 'Outdoor Living', desc: 'Decks, patios, and outdoor kitchens that take advantage of Novato\'s open spaces and North Marin lifestyle.' },
              ].map((service) => (
                <div key={service.title} style={{ border: '1px solid rgba(203,178,106,0.15)', padding: '36px 28px' }}>
                  <h3 className={cormorant.className} style={{ fontSize: '24px', fontWeight: '300', color: '#ffffff', marginBottom: '12px' }}>{service.title}</h3>
                  <p className={montserrat.className} style={{ fontSize: '11px', fontWeight: '300', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, letterSpacing: '0.04em' }}>{service.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Neighborhoods */}
          <section style={{ padding: '80px 0', borderBottom: '1px solid rgba(203,178,106,0.15)' }}>
            <h2 className={cormorant.className} style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: '300', color: '#ffffff', marginBottom: '32px' }}>
              Neighborhoods We Serve in {city.name}
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {city.neighborhoods.map((n) => (
                <span key={n} className={montserrat.className} style={{ border: '1px solid rgba(203,178,106,0.2)', padding: '8px 20px', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(203,178,106,0.7)' }}>{n}</span>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section style={{ padding: '80px 0', borderBottom: '1px solid rgba(203,178,106,0.15)' }}>
            <h2 className={cormorant.className} style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: '300', color: '#ffffff', marginBottom: '48px' }}>
              Frequently Asked Questions
            </h2>
            {faqs.map((faq, i) => (
              <div key={i} style={{ borderBottom: '1px solid rgba(203,178,106,0.15)', padding: '32px 0' }}>
                <h3 className={montserrat.className} style={{ fontSize: '13px', fontWeight: '400', color: '#ffffff', letterSpacing: '0.05em', marginBottom: '12px' }}>{faq.q}</h3>
                <p className={montserrat.className} style={{ fontSize: '12px', fontWeight: '300', color: 'rgba(255,255,255,0.55)', lineHeight: 1.9 }}>{faq.a}</p>
              </div>
            ))}
          </section>

          {/* CTA */}
          <section style={{ padding: '80px 0', textAlign: 'center' }}>
            <p className={montserrat.className} style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#cbb26a', marginBottom: '20px' }}>
              Ready to Start Your Project?
            </p>
            <h2 className={cormorant.className} style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: '300', color: '#ffffff', marginBottom: '20px' }}>
              Schedule a Free Site Visit
            </h2>
            <p className={montserrat.className} style={{ fontSize: '13px', fontWeight: '300', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, maxWidth: '520px', margin: '0 auto 40px' }}>
              Schedule a free site visit with Paulo. We review your space, understand your goals and provide a fixed-price proposal within 5 business days.
            </p>
            <a
              href="/request-a-bid"
              className={montserrat.className}
              style={{ display: 'inline-block', backgroundColor: '#cbb26a', color: '#000000', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', padding: '18px 56px', textDecoration: 'none', fontWeight: '400' }}
            >
              Schedule a Site Visit
            </a>
          </section>

        </div>
      </main>
    </>
  );
}
