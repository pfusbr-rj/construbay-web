import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Book a Site Visit | ConstruBay Mill Valley',
  description:
    "Luxury kitchen, bathroom and ADU remodeling in Marin County. CSLB #1106798. 4.9★ Google. Book a site visit with Mill Valley's top general contractor.",
};

export default function InstagramLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
