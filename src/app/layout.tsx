import type { Metadata } from "next";
import { Inter, Caveat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
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
      }
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
        className={`${inter.variable} ${caveat.variable} font-sans antialiased bg-brand-dark text-white`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
