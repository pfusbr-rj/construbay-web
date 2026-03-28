import { Cormorant_Garamond, Montserrat } from 'next/font/google';
import { getCityBySlug } from '@/lib/cities';
import { generateCityMetadata } from '@/lib/seo';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['300', '400'] });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['300', '400'] });

const city = getCityBySlug('san-rafael');

export const metadata: Metadata = city ? generateCityMetadata(city) : {};

const faqs = [
  {
    q: 'How does San Rafael\'s permit process compare to other Marin cities?',
    a: 'San Rafael has the highest permit volume in Marin County and has invested in digital submission tools (eTrakit). Standard residential permits are typically running 6–8 weeks. Their online portal makes status tracking straightforward.',
  },
  {
    q: 'Do you work in the Dominican and hillside neighborhoods of San Rafael?',
    a: 'Yes. Dominican and the San Rafael hillside areas are some of our most common project locations. We\'re familiar with the slope requirements and view corridor regulations in these neighborhoods.',
  },
  {
    q: 'Do you build ADUs in San Rafael?',
    a: 'Yes. San Rafael is generally ADU-friendly and has streamlined several approval paths since 2020. We handle the full process from feasibility to final inspection.',
  },
  {
    q: 'What is your experience with historic homes in San Rafael?',
    a: 'San Rafael has a significant stock of Craftsman, Victorian, and mid-century homes — many in the West End and downtown areas. We approach historic renovations with care for original character while meeting current code requirements.',
  },
  {
    q: 'Do you handle commercial projects in San Rafael?',
    a: 'Our primary focus is residential remodeling. For mixed-use or light commercial work adjacent to residential projects, contact us to discuss the scope.',
  },
];

export default function SanRafaelPage() {
  if (!city) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': 'https://construbay.com/#business',
        name: 'ConstruBay',
        description: `General contractor serving ${city.name}, CA`,
        url: 'https://construbay.com',
        telephone: '+14159689494',
        address: {
          '@type': 'PostalAddress',
          addressLocality: city.name,
          addressRegion: 'CA',
          postalCode: city.zip,
          addressCountry: 'US',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: city.lat,
          longitude: city.lng,
        },
        areaServed: city.name,
        hasCredential: 'CSLB #1106798',
        priceRange: '$$$',
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

        <section style={{ position: 'relative', height: '60vh', minHeight: '480px' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={city.heroImage} alt={`General contractor in ${city.name}, CA`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.85) 100%)' }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '64px 48px', maxWidth: '900px' }}>
            <p className={montserrat.className} style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#cbb26a', marginBottom: '16px' }}>
              {city.county} County · {city.zip}
            </p>
            <h1 className={cormorant.className} style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: '300', color: '#ffffff', lineHeight: 1.1, marginBottom: '20px' }}>
              General Contractor<br />{city.name}, CA
            </h1>
            <p className={montserrat.className} style={{ fontSize: '13px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', maxWidth: '560px', lineHeight: 1.8 }}>
              {city.description}
            </p>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-6">

          <section style={{ padding: '80px 0', borderBottom: '1px solid rgba(203,178,106,0.15)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'start' }}>
              <div>
                <h2 className={cormorant.className} style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: '300', color: '#ffffff', marginBottom: '24px', lineHeight: 1.2 }}>
                  ConstruBay in {city.name}
                </h2>
                <p className={montserrat.className} style={{ fontSize: '13px', fontWeight: '300', color: 'rgba(255,255,255,0.6)', lineHeight: 1.9, marginBottom: '20px' }}>
                  San Rafael is Marin&apos;s largest city, and its diversity of neighborhoods — from the historic Mission corridor to the hillside estates of Dominican — reflects a wide range of remodeling needs. ConstruBay has served San Rafael homeowners since 2015.
                </p>
                <p className={montserrat.className} style={{ fontSize: '13px', fontWeight: '300', color: 'rgba(255,255,255,0.6)', lineHeight: 1.9 }}>
                  Licensed and insured in California. CSLB #1106798.
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

          <section style={{ padding: '80px 0', borderBottom: '1px solid rgba(203,178,106,0.15)' }}>
            <h2 className={cormorant.className} style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: '300', color: '#ffffff', marginBottom: '48px' }}>
              Services in {city.name}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2px' }}>
              {[
                { title: 'Full Home Remodels', desc: 'Complete design-build transformation from structural to luxury finishes.' },
                { title: 'Kitchen & Bath', desc: 'Custom cabinetry, premium stone, and precision craftsmanship.' },
                { title: 'ADUs & Additions', desc: 'Fully permitted accessory dwelling units and home additions.' },
                { title: 'Outdoor Living', desc: 'Decks, patios, pool houses, and outdoor kitchens.' },
              ].map((service) => (
                <div key={service.title} style={{ border: '1px solid rgba(203,178,106,0.15)', padding: '36px 28px' }}>
                  <h3 className={cormorant.className} style={{ fontSize: '24px', fontWeight: '300', color: '#ffffff', marginBottom: '12px' }}>{service.title}</h3>
                  <p className={montserrat.className} style={{ fontSize: '11px', fontWeight: '300', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, letterSpacing: '0.04em' }}>{service.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section style={{ padding: '80px 0', borderBottom: '1px solid rgba(203,178,106,0.15)' }}>
            <h2 className={cormorant.className} style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: '300', color: '#ffffff', marginBottom: '32px' }}>
              Neighborhoods We Serve
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {city.neighborhoods.map((n) => (
                <span key={n} className={montserrat.className} style={{ border: '1px solid rgba(203,178,106,0.2)', padding: '8px 20px', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(203,178,106,0.7)' }}>{n}</span>
              ))}
            </div>
          </section>

          <section style={{ padding: '80px 0', borderBottom: '1px solid rgba(203,178,106,0.15)' }}>
            <h2 className={cormorant.className} style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: '300', color: '#ffffff', marginBottom: '48px' }}>
              Frequently Asked Questions
            </h2>
            <div>
              {faqs.map((faq, i) => (
                <div key={i} style={{ borderBottom: '1px solid rgba(203,178,106,0.15)', padding: '32px 0' }}>
                  <h3 className={montserrat.className} style={{ fontSize: '13px', fontWeight: '400', color: '#ffffff', letterSpacing: '0.05em', marginBottom: '12px' }}>{faq.q}</h3>
                  <p className={montserrat.className} style={{ fontSize: '12px', fontWeight: '300', color: 'rgba(255,255,255,0.55)', lineHeight: 1.9 }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section style={{ padding: '80px 0', textAlign: 'center' }}>
            <p className={montserrat.className} style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#cbb26a', marginBottom: '20px' }}>Start Your Project</p>
            <h2 className={cormorant.className} style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: '300', color: '#ffffff', marginBottom: '20px' }}>
              Ready to Build in {city.name}?
            </h2>
            <p className={montserrat.className} style={{ fontSize: '13px', fontWeight: '300', color: 'rgba(255,255,255,0.5)', marginBottom: '40px', lineHeight: 1.8 }}>
              Free consultations for qualified projects. Call us or use the inquiry form.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="tel:4159689494" className={montserrat.className} style={{ border: '1px solid #cbb26a', color: '#cbb26a', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', padding: '16px 48px', textDecoration: 'none', display: 'inline-block' }}>
                (415) 968-9494
              </a>
              <a href="/" className={montserrat.className} style={{ border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.6)', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', padding: '16px 48px', textDecoration: 'none', display: 'inline-block' }}>
                Request a Bid
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
