import type { Metadata } from "next";
import { Inter, Caveat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialSidebar from "@/components/SocialSidebar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.construbay.com"),
  title: {
    default: "ConstruBay | Licensed General Contractor — Marin & Sonoma County | CSLB #1106798",
    template: "%s | ConstruBay",
  },
  description:
    "Licensed general contractor serving Marin and Sonoma County. Full remodels, ADUs, custom pools, kitchen and bath, permit expediting. CSLB #1106798. Free estimates — (415) 968-9494.",
  alternates: {
    canonical: "https://www.construbay.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.construbay.com",
    siteName: "ConstruBay",
    title: "ConstruBay | Licensed General Contractor — Marin & Sonoma County | CSLB #1106798",
    description:
      "Licensed general contractor serving Marin and Sonoma County. Full remodels, ADUs, custom pools, kitchen and bath, permit expediting. CSLB #1106798. Free estimates — (415) 968-9494.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    // Add your Google Search Console verification code here
    // google: "your-verification-code",
  },
};

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "GeneralContractor",
      "@id": "https://www.construbay.com/#contractor",
      "name": "ConstruBay",
      "description": "Licensed general contractor specializing in luxury residential construction, ADUs, custom pools, and home remodels in Marin and Sonoma Counties. CSLB #1106798.",
      "url": "https://www.construbay.com",
      "telephone": "+14159689494",
      "email": "paulo@construbay.com",
      "license": "CSLB #1106798",
      "priceRange": "$$$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "18 El Paseo Ln",
        "addressLocality": "Mill Valley",
        "addressRegion": "CA",
        "postalCode": "94941",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 37.9061,
        "longitude": -122.5450
      },
      "areaServed": [
        {"@type": "City", "name": "Mill Valley"},
        {"@type": "City", "name": "Tiburon"},
        {"@type": "City", "name": "Sausalito"},
        {"@type": "City", "name": "San Rafael"},
        {"@type": "City", "name": "Novato"},
        {"@type": "City", "name": "Petaluma"},
        {"@type": "City", "name": "Santa Rosa"},
        {"@type": "City", "name": "Sebastopol"},
        {"@type": "City", "name": "Sonoma"},
        {"@type": "County", "name": "Marin County"},
        {"@type": "County", "name": "Sonoma County"}
      ],
      "openingHours": "Mo-Fr 08:00-18:00",
      "sameAs": [
        "https://www.facebook.com/construbay",
        "https://www.instagram.com/construbaymarin",
        "https://www.yelp.com/biz/construbay-mill-valley",
        "https://www.houzz.com/professionals/construbay"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Construction Services",
        "itemListElement": [
          {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "ADU Construction"}},
          {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Full Home Remodel"}},
          {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Custom Pool Construction"}},
          {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Kitchen Remodeling"}},
          {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Permit Expediting"}}
        ]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "47",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "author": { "@type": "Person", "name": "The Mathews" },
          "reviewBody": "Quick to respond! They gave us a free estimate in a timely manner. Hired them for several projects on our home. They do great work, clean, friendly, fun to work with on a daily basis."
        },
        {
          "@type": "Review",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "author": { "@type": "Person", "name": "Lars & Mary Williams" },
          "reviewBody": "Great place to work at with great people. Energetic with a great foundation for growth. Organized and focused to perform at a high level of expectation for their customers."
        },
        {
          "@type": "Review",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "author": { "@type": "Person", "name": "Chris Parks" },
          "reviewBody": "The job was very fast paced and fun. I dealt with different aspects of their business and the team was incredibly professional throughout."
        }
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.construbay.com/#website",
      "url": "https://www.construbay.com",
      "name": "ConstruBay"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-E5R2DP0WG0" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-E5R2DP0WG0');`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdSchema),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${caveat.variable} font-sans antialiased bg-brand-dark text-white pb-16 md:pb-0`}
      >
        <SocialSidebar />

        <Header />
        <main>{children}</main>
        <Footer />
        <div className="mobile-cta-bar fixed bottom-0 left-0 right-0 z-50 flex" style={{
          display: 'flex',
          borderTop: '1px solid rgba(203,178,106,0.3)',
          backgroundColor: '#000000',
        }}>
          <a
            href="tel:4159689494"
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              padding: '16px',
              backgroundColor: '#0a1628',
              color: '#ffffff',
              textDecoration: 'none',
              borderRight: '1px solid rgba(203,178,106,0.2)',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#cbb26a" strokeWidth="1.5">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '11px',
              fontWeight: '300',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}>
              Call Now
            </span>
          </a>
          <a
            href="https://wa.me/14159689494"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              padding: '16px',
              backgroundColor: '#25D366',
              color: '#ffffff',
              textDecoration: 'none',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '11px',
              fontWeight: '300',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}>
              WhatsApp
            </span>
          </a>
        </div>
      </body>
    </html>
  );
}
