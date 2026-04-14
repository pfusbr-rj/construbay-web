import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Request a Private Consultation | ConstruBay',
  description: 'Tell us about your project and schedule a private consultation with ConstruBay. CSLB #1106798.',
  alternates: { canonical: 'https://www.construbay.com/request-a-bid' },
}

export default function RequestBidLayout({ children }: { children: React.ReactNode }) {
  return children
}
