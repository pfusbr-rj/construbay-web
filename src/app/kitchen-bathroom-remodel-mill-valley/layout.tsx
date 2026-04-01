import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Kitchen & Bathroom Remodeling Mill Valley | ConstruBay',
  description:
    'Luxury kitchen and bathroom remodeling in Mill Valley by licensed contractor CSLB #1106798. Fixed-price contracts, permit-handled, 10-year warranty. Schedule a private consultation.',
};

export default function KitchenBathroomMillValleyLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
