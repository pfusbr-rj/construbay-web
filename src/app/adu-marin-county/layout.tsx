import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'ADU Builder Marin County | ConstruBay — Licensed General Contractor',
  description:
    'Build a fully permitted ADU in Marin County with ConstruBay. AI-powered permit planning across all 11 Marin jurisdictions, fixed-scope contracts, owner-led projects. CSLB #1106798. Book your complimentary site assessment.',
};

export default function AduMarinLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
