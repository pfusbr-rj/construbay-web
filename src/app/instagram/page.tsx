import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "ConstruBay | Mill Valley's #1 Luxury Contractor",
  description:
    'Luxury remodeling in Marin County. Fixed-scope contracts, AI permit technology, 5-year warranty. Book your discovery call with Paulo Fernandes.',
}

const CG = 'Cormorant Garamond'
const MS = 'Montserrat'

const buttons = [
  {
    label: 'BOOK A DISCOVERY CALL',
    href: 'https://calendly.com/construbay/initial-consultation-construbay',
    primary: true,
    external: true,
  },
  { label: 'VIEW OUR PROJECTS', href: '/projects', primary: false, external: false },
  { label: '2026 PRICING GUIDE', href: '/pricing', primary: false, external: false },
  {
    label: 'FREE PERMIT RISK REPORT',
    href: '/marin-county-permit-expediting',
    primary: false,
    external: false,
  },
]

const services = [
  'KITCHEN REMODELING',
  'BATHROOM REMODELING',
  'ADU CONSTRUCTION',
  'FULL HOME REMODEL',
  'OUTDOOR LIVING',
  'DESIGN-BUILD',
]

export default function InstagramPage() {
  return (
    <div
      style={{
        backgroundColor: '#000000',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div style={{ width: '100%', maxWidth: '480px' }}>

        {/* TOP SECTION */}
        <div style={{ paddingTop: '48px', textAlign: 'center' }}>
          <p
            style={{
              fontFamily: CG,
              fontSize: '32px',
              fontWeight: 300,
              color: '#cbb26a',
              margin: 0,
              letterSpacing: '0.05em',
            }}
          >
            CONSTRUBAY
          </p>
          <p
            style={{
              fontFamily: CG,
              fontSize: '20px',
              fontStyle: 'italic',
              color: '#cbb26a',
              margin: '6px 0 0',
            }}
          >
            Built With Intention
          </p>
          <p
            style={{
              fontFamily: MS,
              fontSize: '11px',
              letterSpacing: '0.15em',
              color: 'rgba(255,255,255,0.6)',
              margin: '12px 0 0',
            }}
          >
            MILL VALLEY&apos;S #1 LUXURY CONTRACTOR &bull; CSLB #1106798
          </p>
          <div
            style={{
              width: '60px',
              height: '1px',
              backgroundColor: '#cbb26a',
              margin: '24px auto',
            }}
          />
        </div>

        {/* PAULO INTRO SECTION */}
        <div style={{ padding: '0 24px 24px', textAlign: 'center' }}>
          <div
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              border: '2px solid #cbb26a',
              backgroundColor: '#1a1a1a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px',
            }}
          >
            <span
              style={{
                fontFamily: CG,
                fontSize: '22px',
                fontWeight: 300,
                color: '#cbb26a',
              }}
            >
              PF
            </span>
          </div>
          <p
            style={{
              fontFamily: MS,
              fontSize: '14px',
              color: '#ffffff',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              margin: '0 0 10px',
            }}
          >
            Paulo Fernandes
          </p>
          <p
            style={{
              fontFamily: MS,
              fontSize: '13px',
              color: 'rgba(255,255,255,0.6)',
              lineHeight: 1.7,
              maxWidth: '300px',
              margin: '0 auto',
            }}
          >
            I personally oversee every project from permit to final walkthrough.
          </p>
        </div>

        {/* CTA BUTTONS */}
        <div style={{ padding: '0 24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {buttons.map((btn) =>
            btn.external ? (
              <a
                key={btn.label}
                href={btn.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '16px',
                  backgroundColor: btn.primary ? '#cbb26a' : 'transparent',
                  color: btn.primary ? '#000000' : '#cbb26a',
                  border: btn.primary ? 'none' : '1px solid #cbb26a',
                  fontFamily: MS,
                  fontSize: '12px',
                  fontWeight: btn.primary ? 700 : 400,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  textAlign: 'center',
                  boxSizing: 'border-box',
                }}
              >
                {btn.label}
              </a>
            ) : (
              <Link
                key={btn.label}
                href={btn.href}
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '16px',
                  backgroundColor: 'transparent',
                  color: '#cbb26a',
                  border: '1px solid #cbb26a',
                  fontFamily: MS,
                  fontSize: '12px',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  textAlign: 'center',
                  boxSizing: 'border-box',
                }}
              >
                {btn.label}
              </Link>
            )
          )}
        </div>

        {/* SOCIAL PROOF BAR */}
        <div
          style={{
            marginTop: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
          }}
        >
          {['⭐ 5.0 STARS', 'NEXTDOOR #1', '91 PROJECTS'].map((item, i) => (
            <span key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span
                style={{
                  fontFamily: MS,
                  fontSize: '10px',
                  letterSpacing: '0.1em',
                  color: 'rgba(255,255,255,0.4)',
                }}
              >
                {item}
              </span>
              {i < 2 && (
                <span style={{ color: '#cbb26a', fontSize: '6px', lineHeight: 1 }}>&#9679;</span>
              )}
            </span>
          ))}
        </div>

        {/* SERVICES GRID */}
        <div
          style={{
            marginTop: '32px',
            padding: '0 24px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '8px',
          }}
        >
          {services.map((service) => (
            <div
              key={service}
              style={{
                border: '1px solid rgba(203,178,106,0.4)',
                backgroundColor: '#000000',
                padding: '8px 12px',
                textAlign: 'center',
                fontFamily: MS,
                fontSize: '10px',
                color: 'rgba(255,255,255,0.6)',
                letterSpacing: '0.15em',
              }}
            >
              {service}
            </div>
          ))}
        </div>

        {/* PHONE CTA */}
        <div style={{ marginTop: '32px', textAlign: 'center' }}>
          <a
            href="tel:4159689494"
            style={{ textDecoration: 'none', display: 'block' }}
          >
            <p
              style={{
                fontFamily: MS,
                fontSize: '10px',
                letterSpacing: '0.15em',
                color: 'rgba(255,255,255,0.4)',
                margin: '0 0 8px',
                textTransform: 'uppercase',
              }}
            >
              Or Call Paulo Directly
            </p>
            <p
              style={{
                fontFamily: CG,
                fontSize: '24px',
                fontWeight: 300,
                color: '#cbb26a',
                margin: 0,
              }}
            >
              (415) 968-9494
            </p>
          </a>
        </div>

        {/* FOOTER */}
        <div
          style={{
            marginTop: '40px',
            paddingBottom: '48px',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontFamily: MS,
              fontSize: '10px',
              color: 'rgba(255,255,255,0.2)',
              margin: 0,
            }}
          >
            &copy; 2026 ConstruBay. CSLB #1106798. Mill Valley, CA
          </p>
        </div>

      </div>
    </div>
  )
}
