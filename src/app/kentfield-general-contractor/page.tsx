import { Cormorant_Garamond, Montserrat } from 'next/font/google';
import { getCityBySlug } from '@/lib/cities';
import { generateCityMetadata } from '@/lib/seo';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['300', '400'] });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['300', '400'] });

const city = getCityBySlug('kentfield');

export const metadata: Metadata = city ? {
  ...generateCityMetadata(city),
  title: 'General Contractor Kentfield CA | Luxury Home Remodeling Kentfield | ConstruBay',
  description: 'Licensed luxury general contractor in Kentfield CA. Full home remodels, kitchen & bath, ADUs. Kent Woodlands and Greenbrae. CSLB #1106798.',
} : {};

const faqs = [
  {
    q: 'Does ConstruBay have experience working in Kentfield?',
    a: 'Yes. We have completed multiple projects in Kentfield and the surrounding areas of Greenbrae and Kent Woodlands. We are familiar with Marin County building requirements and the wooded hillside terrain common to Kentfield properties.',
  },
  {
    q: 'What kinds of projects do you build in Kentfield?',
    a: 'We handle full home renovations, kitchen and bathroom remodels, ADUs, home additions, and outdoor living projects. Kentfield\'s mix of craftsman homes and contemporary remodels means we work across a range of architectural styles.',
  },
  {
    q: 'How long does a permit take in Kentfield?',
    a: 'Kentfield falls within Marin County jurisdiction. Most residential permits take 6–10 weeks. Projects requiring grading permits for hillside work may take slightly longer. We factor these timelines into every project schedule from day one.',
  },
  {
    q: 'What is your minimum project size for Kentfield?',
    a: 'We typically work on projects starting at $150,000. In Kentfield we regularly complete full home renovations in the $500,000–$1.5M range as well as focused kitchen and primary suite remodels.',
  },
  {
    q: 'Can you handle hillside and wooded lot construction in Kentfield?',
    a: 'Absolutely. Hillside engineering and tree protection are standard elements of Kentfield projects. We coordinate geotechnical surveys and work with Marin County\'s tree protection requirements from the start of the design phase.',
  },
];

export default function KentfieldPage() {
  if (!city) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['LocalBusiness', 'GeneralContractor'],
        name: 'ConstruBay',
        description: 'Licensed luxury general contractor serving Kentfield, CA. Full home remodels, ADUs, kitchen and bath. CSLB #1106798.',
        url: 'https://www.construbay.com/kentfield-general-contractor',
        telephone: '+14159689494',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Kentfield',
          addressRegion: 'CA',
          postalCode: city.zip,
          addressCountry: 'US',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: city.lat,
          longitude: city.lng,
        },
        areaServed: ['Kentfield', 'Greenbrae', 'Ross', 'San Anselmo', 'Larkspur', 'Marin County'],
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
            alt="General contractor in Kentfield, CA — ConstruBay CSLB #1106798"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.85) 100%)' }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '64px 48px', maxWidth: '900px' }}>
            <p className={montserrat.className} style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#cbb26a', marginBottom: '16px' }}>
              {city.county} County · {city.zip}
            </p>
            <h1 className={cormorant.className} style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: '300', color: '#ffffff', lineHeight: 1.1, marginBottom: '20px' }}>
              Licensed General Contractor<br />Kentfield, California
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
                  Kentfield&apos;s wooded hillsides, historic craftsman homes, and proximity to open space create a unique building environment — one that rewards contractors who understand both the terrain and the architecture.
                </p>
                <p className={montserrat.className} style={{ fontSize: '13px', fontWeight: '300', color: 'rgba(255,255,255,0.6)', lineHeight: 1.9 }}>
                  ConstruBay has worked throughout Kentfield and neighboring Greenbrae and Ross, delivering renovations that honor the character of each home. Every project is managed personally by Paulo Fernandes. CSLB Licensed #1106798.
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
                { title: 'Full Home Remodels', desc: 'Complete renovation of craftsman and contemporary homes throughout Kentfield and Kent Woodlands.' },
                { title: 'Kitchen & Bath', desc: 'Custom cabinetry, stone work, and precision craftsmanship suited to Kentfield\'s architectural character.' },
                { title: 'ADUs & Additions', desc: 'Fully permitted accessory dwelling units and home additions designed for Marin County review.' },
                { title: 'Outdoor Living', desc: 'Decks, terraces, and landscaped outdoor spaces integrated with Kentfield\'s natural wooded setting.' },
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
