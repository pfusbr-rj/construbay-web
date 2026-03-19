import type { Metadata } from "next";
import { Inter, Caveat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialBar from "@/components/SocialBar";

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
    default: "General Contractor | Construbay | Mill Valley",
    template: "%s | Construbay",
  },
  description:
    "Construbay specializes in high-end custom finishes for luxury homes. Kitchen remodeling, bathroom remodeling, custom homes in Mill Valley and Del Mar.",
  alternates: {
    canonical: "https://www.construbay.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.construbay.com",
    siteName: "Construbay",
    title: "General Contractor | Construbay | Mill Valley",
    description:
      "Luxury remodels & custom homes in Mill Valley and Del Mar. Kitchen, bathroom, and whole-home renovations.",
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

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Construbay",
  description:
    "High-end custom finishes for luxury homes. Kitchen and bathroom remodeling, custom homes.",
  url: "https://construbay.com",
  telephone: "+1-415-968-9494",
  email: "paulo@construbay.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "18 El Paseo Ln",
    addressLocality: "Mill Valley",
    addressRegion: "CA",
    postalCode: "94941",
    addressCountry: "US",
  },
  areaServed: ["Mill Valley", "Del Mar"],
  serviceType: [
    "Kitchen Remodeling",
    "Bathroom Remodeling",
    "Custom Homes",
    "Home Remodeling",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${caveat.variable} font-sans antialiased bg-brand-dark text-white`}
      >
        <Header />
        <SocialBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
