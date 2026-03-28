import { Cormorant_Garamond, Montserrat } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['300', '400'] });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['300', '400'] });

interface Stat {
  label: string;
  value: string;
}

interface CaseStudyLayoutProps {
  heroImage: string;
  heroAlt: string;
  eyebrow: string;
  title: string;
  subhead: string;
  stats: Stat[];
  opening: React.ReactNode;
  challengeTitle?: string;
  challenges: string[];
  solutionTitle?: string;
  solutions: string[];
  testimonialQuote: string;
  testimonialAuthor: string;
}

export default function CaseStudyLayout({
  heroImage,
  heroAlt,
  eyebrow,
  title,
  subhead,
  stats,
  opening,
  challengeTitle = 'THE CHALLENGE',
  challenges,
  solutionTitle = 'OUR SOLUTION',
  solutions,
  testimonialQuote,
  testimonialAuthor,
}: CaseStudyLayoutProps) {
  return (
    <main style={{ backgroundColor: '#000000', minHeight: '100vh' }}>

      {/* Full-bleed Hero */}
      <div style={{ position: 'relative', height: '70vh', minHeight: '480px' }}>
        <Image
          src={heroImage}
          alt={heroAlt}
          fill
          className="object-cover"
          priority
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.7) 100%)' }} />
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '0 0 64px',
        }}>
          <div className="max-w-5xl mx-auto px-6 w-full">
            <p className={montserrat.className} style={{
              fontSize: '10px',
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              color: 'rgba(203,178,106,0.8)',
              marginBottom: '16px',
            }}>
              {eyebrow}
            </p>
            <h1 className={cormorant.className} style={{
              fontSize: 'clamp(36px, 5vw, 64px)',
              fontWeight: '300',
              color: '#ffffff',
              lineHeight: 1.1,
              marginBottom: '12px',
              letterSpacing: '0.02em',
            }}>
              {title}
            </h1>
            <p className={montserrat.className} style={{
              fontSize: '12px',
              fontWeight: '300',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'rgba(203,178,106,0.7)',
            }}>
              {subhead}
            </p>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div style={{ backgroundColor: '#0a0a0a', borderBottom: '1px solid rgba(203,178,106,0.15)' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4" style={{ borderLeft: '1px solid rgba(203,178,106,0.12)' }}>
            {stats.map((stat) => (
              <div key={stat.label} style={{
                borderRight: '1px solid rgba(203,178,106,0.12)',
                padding: '28px 32px',
              }}>
                <p className={montserrat.className} style={{
                  fontSize: '10px',
                  fontWeight: '300',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.35)',
                  marginBottom: '8px',
                }}>
                  {stat.label}
                </p>
                <p className={cormorant.className} style={{
                  fontSize: '22px',
                  fontWeight: '300',
                  color: '#cbb26a',
                  letterSpacing: '0.03em',
                }}>
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-5xl mx-auto px-6" style={{ padding: '80px 24px 0' }}>

        {/* Opening Paragraph */}
        <p className={cormorant.className} style={{
          fontSize: 'clamp(20px, 2.5vw, 26px)',
          fontWeight: '300',
          color: 'rgba(255,255,255,0.85)',
          lineHeight: 1.7,
          letterSpacing: '0.02em',
          maxWidth: '760px',
          marginBottom: '80px',
        }}>
          {opening}
        </p>

        {/* Challenge + Solution — 2 col on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '80px', marginBottom: '80px' }}>

          {/* Challenge */}
          <div>
            <p className={montserrat.className} style={{
              fontSize: '10px',
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              color: '#cbb26a',
              marginBottom: '32px',
              borderBottom: '1px solid rgba(203,178,106,0.2)',
              paddingBottom: '16px',
            }}>
              {challengeTitle}
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {challenges.map((item, i) => (
                <li key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <span style={{ color: '#cbb26a', fontFamily: 'serif', fontSize: '18px', lineHeight: 1.6, flexShrink: 0 }}>—</span>
                  <p className={montserrat.className} style={{
                    fontSize: '13px',
                    fontWeight: '300',
                    color: 'rgba(255,255,255,0.6)',
                    lineHeight: 1.9,
                    letterSpacing: '0.04em',
                  }}>
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution */}
          <div>
            <p className={montserrat.className} style={{
              fontSize: '10px',
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              color: '#cbb26a',
              marginBottom: '32px',
              borderBottom: '1px solid rgba(203,178,106,0.2)',
              paddingBottom: '16px',
            }}>
              {solutionTitle}
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {solutions.map((item, i) => (
                <li key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <span style={{ color: '#cbb26a', fontFamily: 'serif', fontSize: '18px', lineHeight: 1.6, flexShrink: 0 }}>—</span>
                  <p className={montserrat.className} style={{
                    fontSize: '13px',
                    fontWeight: '300',
                    color: 'rgba(255,255,255,0.6)',
                    lineHeight: 1.9,
                    letterSpacing: '0.04em',
                  }}>
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Testimonial */}
        <div style={{
          borderLeft: '2px solid #cbb26a',
          paddingLeft: '40px',
          marginBottom: '96px',
        }}>
          <p className={cormorant.className} style={{
            fontSize: 'clamp(22px, 2.8vw, 30px)',
            fontWeight: '300',
            fontStyle: 'italic',
            color: '#ffffff',
            lineHeight: 1.6,
            marginBottom: '20px',
            letterSpacing: '0.02em',
          }}>
            &ldquo;{testimonialQuote}&rdquo;
          </p>
          <p className={montserrat.className} style={{
            fontSize: '10px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(203,178,106,0.7)',
          }}>
            {testimonialAuthor}
          </p>
        </div>

        {/* CTA */}
        <div style={{
          borderTop: '1px solid rgba(203,178,106,0.15)',
          paddingTop: '80px',
          paddingBottom: '120px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px',
          textAlign: 'center',
        }}>
          <p className={montserrat.className} style={{
            fontSize: '10px',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.35)',
          }}>
            Ready to build?
          </p>
          <h2 className={cormorant.className} style={{
            fontSize: 'clamp(28px, 3.5vw, 44px)',
            fontWeight: '300',
            color: '#ffffff',
            letterSpacing: '0.02em',
          }}>
            Start Your Project
          </h2>
          <Link
            href="/request-a-bid"
            className="hover:bg-transparent hover:text-[#cbb26a] transition-all duration-300"
            style={{
              marginTop: '16px',
              backgroundColor: '#cbb26a',
              color: '#000000',
              border: '1px solid #cbb26a',
              fontSize: '11px',
              fontWeight: '400',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              padding: '14px 40px',
              textDecoration: 'none',
              display: 'inline-block',
              fontFamily: 'Montserrat, sans-serif',
            }}
          >
            Request a Bid
          </Link>
        </div>
      </div>
    </main>
  );
}
