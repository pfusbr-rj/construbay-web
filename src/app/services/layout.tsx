import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Luxury Remodeling Services in Marin County | Kitchens, Baths, ADUs | ConstruBay',
  description: "Explore ConstruBay's full range of luxury remodeling services in Marin County — kitchens, bathrooms, ADUs, additions, and whole-home renovations.",
  alternates: { canonical: 'https://www.construbay.com/services' },
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children
}
