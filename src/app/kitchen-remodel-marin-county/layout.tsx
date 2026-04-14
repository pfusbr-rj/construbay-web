import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kitchen Remodel Marin County | Luxury Kitchen Contractor | ConstruBay',
  description: 'Luxury kitchen remodels in Marin County. Fixed-scope contracts, custom cabinetry, AI-accelerated permits. CSLB #1106798. Book your complimentary assessment.',
};

export default function KitchenRemodelMarinLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
