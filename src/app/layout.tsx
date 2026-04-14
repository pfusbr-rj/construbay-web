import type { Metadata } from "next";
import { Inter, Caveat } from "next/font/google";
import { headers } from "next/headers";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialSidebar from "@/components/SocialSidebar";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import PhoneClickTracker from "@/components/PhoneClickTracker";

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
    default: "Luxury General Contractor in Marin & Sonoma County | ConstruBay",
    template: "%s | ConstruBay",
  },
  description:
    "Luxury kitchen remodels, bathrooms, ADUs, home additions in Marin and Sonoma County. Fixed-price contracts. CSLB #1106798. Schedule your complimentary assessment.",
  alternates: {
    canonical: "https://www.construbay.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.construbay.com",
    siteName: "ConstruBay",
    title: "Luxury General Contractor in Marin & Sonoma County | ConstruBay",
    description:
      "Luxury kitchen remodels, bathrooms, ADUs, home additions in Marin and Sonoma County. Fixed-price contracts. CSLB #1106798. Schedule your complimentary assessment.",
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
  "@type": "GeneralContractor",
  "@id": "https://construbay.com/#organization",
  "name": "ConstruBay",
  "legalName": "ConstruBay Inc.",
  "url": "https://construbay.com",
  "logo": "https://construbay.com/construbay-logo.svg",
  "image": "https://construbay.com/construbay-logo.svg",
  "description": "Licensed luxury general contractor serving Marin, Sonoma, and Napa Counties. Specializing in ADUs, whole-home remodels, custom kitchens, luxury bathrooms, and home additions. CSLB #1106798.",
  "telephone": "+14159689494",
  "email": "paulo@construbay.com",
  "foundingDate": "2018",
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "Contractor License",
    "name": "CSLB License #1106798",
    "recognizedBy": {
      "@type": "Organization",
      "name": "California Contractors State License Board",
      "url": "https://www.cslb.ca.gov"
    }
  },
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
    "latitude": 37.9060,
    "longitude": -122.5450
  },
  "areaServed": [
    { "@type": "County", "name": "Marin County", "containedInPlace": { "@type": "State", "name": "California" } },
    { "@type": "County", "name": "Sonoma County", "containedInPlace": { "@type": "State", "name": "California" } },
    { "@type": "County", "name": "Napa County", "containedInPlace": { "@type": "State", "name": "California" } }
  ],
  "priceRange": "$$$",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
    "opens": "08:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://www.instagram.com/construbaymarin",
    "https://www.facebook.com/construbay"
  ]
};

const BASE_URL = 'https://www.construbay.com'

const SEGMENT_NAMES: Record<string, string> = {
  'about': 'About',
  'adu': 'ADU Construction',
  'blog': 'Blog',
  'design-build': 'Design-Build',
  'for-architects': 'For Architects',
  'for-homeowners': 'For Homeowners',
  'full-home-remodeling': 'Full Home Remodeling',
  'investments': 'Investments',
  'kitchen-remodeling': 'Kitchen Remodeling',
  'bathroom-remodeling': 'Bathroom Remodeling',
  'locations': 'Locations',
  'outdoor-living': 'Outdoor Living',
  'pricing': 'Pricing',
  'projects': 'Projects',
  'request-a-bid': 'Request a Bid',
  'services': 'Services',
}

function segmentToName(segment: string): string {
  return SEGMENT_NAMES[segment] ??
    segment.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
}

function pathnameToBreadcrumbs(pathname: string): { name: string; url: string }[] {
  const segments = pathname.split('/').filter(Boolean)
  const items: { name: string; url: string }[] = [{ name: 'Home', url: BASE_URL }]
  let accumulated = ''
  for (const segment of segments) {
    accumulated += `/${segment}`
    items.push({ name: segmentToName(segment), url: `${BASE_URL}${accumulated}` })
  }
  return items
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = headers().get('x-pathname') ?? '/'
  const segments = pathname.split('/').filter(Boolean)
  // Blog post pages (/blog/[slug]) render their own breadcrumb with the actual post title.
  // All other pages get a path-derived breadcrumb from root layout.
  const isBlogPost = segments.length === 2 && segments[0] === 'blog'
  const breadcrumbItems = pathnameToBreadcrumbs(pathname)

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
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16562885363" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-16562885363');`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdSchema),
          }}
        />
        {!isBlogPost && <BreadcrumbSchema items={breadcrumbItems} />}
      </head>
      <Script
        id="gtm-head"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GT-WP5CF89M');`,
        }}
      />
      <Script id="ms-clarity" strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "w2xbo5ao6o");
        `}
      </Script>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1006503175356146');
          fbq('track', 'PageView');
        `}
      </Script>
      <body
        className={`${inter.variable} ${caveat.variable} font-sans antialiased bg-brand-dark text-white pb-16 md:pb-0`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GT-WP5CF89M"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img height="1" width="1" style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1006503175356146&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <PhoneClickTracker />
        <SocialSidebar />

        <Header />
        <main>{children}</main>
        <ExitIntentPopup />
        <Footer />
        <div className="mobile-cta-bar fixed bottom-0 left-0 right-0 z-50 flex md:hidden" style={{
          borderTop: '1px solid rgba(203,178,106,0.3)',
          backgroundColor: '#000000',
        }}>
          <a
            href="/request-a-bid"
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '16px',
              backgroundColor: '#cbb26a',
              color: '#000000',
              textDecoration: 'none',
              borderRight: '1px solid rgba(0,0,0,0.15)',
            }}
          >
            <span style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '11px',
              fontWeight: '400',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}>
              Request a Bid
            </span>
          </a>
          <a
            href="tel:4159689494"
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '16px',
              backgroundColor: '#000000',
              color: '#cbb26a',
              textDecoration: 'none',
              border: 'none',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#cbb26a" strokeWidth="1.5">
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
        </div>
      </body>
    </html>
  );
}
