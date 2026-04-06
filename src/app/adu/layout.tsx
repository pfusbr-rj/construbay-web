import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Build an ADU in Marin County | Free Site Visit | ConstruBay',
  description: 'Add $150K+ to your home value. Build a fully permitted ADU in Marin, Sonoma or Napa County. Free site visit — book in 60 seconds. CSLB #1106798.',
  keywords: 'ADU construction Marin County, accessory dwelling unit Sonoma County, ADU builder Napa County, garage conversion ADU, detached ADU permit Marin',
  robots: { index: false, follow: false },
  openGraph: {
    title: 'Build an ADU in Marin County | Free Site Visit | ConstruBay',
    description: 'Add $150K+ to your home. Fully permitted ADUs across Marin, Sonoma & Napa County. Free site visit.',
    url: 'https://construbay.com/adu',
    siteName: 'ConstruBay',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.construbay.com/adu',
  },
}

export default function ADULayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </>
  )
}
