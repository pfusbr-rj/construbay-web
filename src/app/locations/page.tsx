import { Cormorant_Garamond, Montserrat } from 'next/font/google';
import Link from 'next/link';
import { cities } from '@/lib/cities';
import type { Metadata } from 'next';

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['300', '400'] });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['300', '400'] });

export const metadata: Metadata = {
  title: 'Service Areas | ConstruBay — General Contractor Marin, Sonoma & Napa County',
  description: 'ConstruBay serves Marin County, Sonoma County and Napa County. Licensed luxury general contractor CSLB #1106798 serving Mill Valley, Tiburon, San Rafael, Sausalito and more.',
  alternates: { canonical: 'https://www.construbay.com/locations' },
};

export default function LocationsPage() {
  const marinCities = cities.filter(c => c.county === 'Marin');
  const otherCities = cities.filter(c => c.county !== 'Marin');

  return (
    <main style={{ backgroundColor: '#000000', minHeight: '100vh', paddingTop: '120px' }}>
      <div className="max-w-6xl mx-auto px-6 py-20">
        <p className={montserrat.className} style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#cbb26a', marginBottom: '16px', textAlign: 'center' }}>
          Service Areas
        </p>
        <h1 className={cormorant.className} style={{ fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: 300, color: '#ffffff', textAlign: 'center', lineHeight: 1.1, marginBottom: '24px' }}>
          General Contractor Serving<br />Marin, Sonoma &amp; Napa
        </h1>
        <div style={{ width: '60px', height: '1px', backgroundColor: '#cbb26a', margin: '0 auto 64px' }} />

        {[
          { label: 'Marin County — Primary Service Area', cities: marinCities },
          { label: 'Sonoma & Napa Counties', cities: otherCities },
        ].map(group => (
          <div key={group.label} style={{ marginBottom: '64px' }}>
            <p className={montserrat.className} style={{ fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(203,178,106,0.6)', marginBottom: '32px' }}>
              {group.label}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: '2px', backgroundColor: 'rgba(203,178,106,0.1)' }}>
              {group.cities.map(city => (
                <Link
                  key={city.slug}
                  href={`/${city.slug}-general-contractor`}
                  style={{ backgroundColor: '#000000', padding: '32px', textDecoration: 'none', display: 'block' }}
                  className="group"
                >
                  <h2 className={`${cormorant.className} group-hover:text-[#cbb26a]`} style={{ fontSize: '24px', fontWeight: 300, color: '#ffffff', marginBottom: '8px', transition: 'color 0.3s ease' }}>
                    {city.name}
                  </h2>
                  <p className={montserrat.className} style={{ fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(203,178,106,0.5)', marginBottom: '8px' }}>
                    {city.county}
                  </p>
                  <p className={montserrat.className} style={{ fontSize: '11px', fontWeight: 300, color: 'rgba(255,255,255,0.35)', lineHeight: 1.6 }}>
                    {city.description.substring(0, 80)}...
                  </p>
                  <p className={montserrat.className} style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#cbb26a', marginTop: '16px' }}>
                    View Services →
                  </p>
                </Link>
              ))}
            </div>
          </div>
        ))}

        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <Link href="/services/general-contractor-marin-county" className={montserrat.className} style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#cbb26a', textDecoration: 'none' }}>
            Licensed General Contractor in Marin County &rarr;
          </Link>
        </div>

        <div style={{ textAlign: 'center', padding: '64px 0', borderTop: '1px solid rgba(203,178,106,0.15)' }}>
          <h2 className={cormorant.className} style={{ fontSize: '40px', fontWeight: 300, color: '#ffffff', marginBottom: '24px' }}>
            Don&apos;t See Your City?
          </h2>
          <p className={montserrat.className} style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', marginBottom: '40px', letterSpacing: '0.08em' }}>
            We serve all of Marin, Sonoma and Napa Counties. Call us at (415) 968-9494.
          </p>
          <a
            href="tel:4159689494"
            style={{ display: 'inline-block', backgroundColor: '#cbb26a', color: '#000000', padding: '18px 56px', fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none' }}
          >
            (415) 968-9494
          </a>
        </div>
      </div>
    </main>
  );
}
