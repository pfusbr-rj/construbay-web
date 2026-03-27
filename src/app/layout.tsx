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
        {/* Social Media Sidebar — desktop only */}
        <div style={{
          position: "fixed",
          left: "20px",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 40,
          gap: "16px",
        }} className="social-sidebar hidden md:flex md:flex-col">
          {[
            {
              href: "https://www.instagram.com/construbaymarin/",
              label: "Instagram",
              path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
            },
            {
              href: "https://www.facebook.com/construbaymarin/",
              label: "Facebook",
              path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
            },
            {
              href: "https://www.yelp.com/biz/construbay-mill-valley",
              label: "Yelp",
              path: "M21.111 18.226c-.141.969-2.119 3.483-3.029 3.847-.311.124-.611.094-.847-.086-.154-.12-.314-.365-3.192-5.589l-.036-.067c-.22-.424-.096-.939.295-1.232.383-.29.912-.283 1.29.019l.065.049c4.793 3.261 4.961 3.42 5.049 3.587.15.281.132.603-.036.919l-.559-1.447zm-9.169 3.896c-.016 1.01-1.781 3.88-2.644 4.353-.294.163-.604.18-.865.047-.175-.09-.356-.271-1.977-5.987l-.021-.076c-.138-.455.079-.946.51-1.168.424-.219.941-.147 1.281.18l.056.053c4.09 3.927 4.234 4.108 4.287 4.297.095.335.025.673-.199.953l-.428-.652zm-6.947-4.35c-.524.838-3.214 1.724-4.213 1.555-.343-.059-.613-.243-.756-.517-.096-.185-.12-.433.958-6.293l.015-.081c.098-.459.494-.773.965-.767.462.005.872.335.956.793l.013.072c.834 5.208.873 5.432.833 5.632-.071.356-.311.618-.652.752l-.119-.147zm2.588-6.962l-.085-.009c-5.253-.586-5.47-.648-5.611-.775-.249-.22-.344-.552-.257-.896.149-.589 2.132-3.02 3.051-3.361.31-.114.621-.084.854.083.152.112.334.327 4.13 5.872l.019.029c.244.38.193.879-.123 1.202-.298.306-.731.408-1.124.277zm14.154.462c.133.958-1.412 3.688-2.27 4.23-.291.184-.601.225-.877.112-.181-.073-.388-.23-4.853-4.971l-.059-.062c-.32-.342-.351-.862-.07-1.236.275-.368.751-.5 1.17-.324l.071.029c5.023 2.12 5.217 2.257 5.3 2.443.147.329.101.671-.107.979l-.305-.2z",
            },
            {
              href: "https://nextdoor.com/page/construbay-mill-valley-ca-1/",
              label: "Nextdoor",
              path: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.938 1.02a3.338 3.338 0 0 0-3.624 0L10.062 8.248a5.16 5.16 0 0 1 7.5 0zM12 8.625a2.438 2.438 0 1 1 0 4.876A2.438 2.438 0 0 1 12 8.625zm-4.5 3.25c0-.318.036-.627.1-.926l-1.974-.988A7.124 7.124 0 0 0 5.25 12c0 1.307.352 2.531.966 3.584l1.813-1.057A4.887 4.887 0 0 1 7.5 11.875zm9 0c0 .567-.1 1.111-.279 1.617l1.813 1.057A7.09 7.09 0 0 0 18.75 12c0-.914-.18-1.786-.5-2.584l-1.974.988c.065.3.1.609.1.926l.124-.455zm-4.5 5.25a4.875 4.875 0 0 1-3.89-1.95l-1.813 1.057A6.996 6.996 0 0 0 12 19.125a6.996 6.996 0 0 0 5.703-2.943l-1.813-1.057A4.875 4.875 0 0 1 12 17.125z",
            },
            {
              href: "https://www.linkedin.com/company/construbay/about",
              label: "LinkedIn",
              path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
            },
          ].map(({ href, label, path }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              style={{
                display: "block",
                color: "#cbb26a",
                transition: "opacity 0.2s ease",
                lineHeight: 0,
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.7")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                width={20}
                height={20}
              >
                <path d={path} />
              </svg>
            </a>
          ))}
        </div>

        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
