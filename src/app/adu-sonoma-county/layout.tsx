import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'ADU Builder Sonoma County | ConstruBay — Licensed General Contractor',
  description:
    'Build a fully permitted ADU in Sonoma County with ConstruBay. AI-powered permit planning, fixed-scope contracts, and owner-led projects. CSLB #1106798.',
};

export default function AduSonomaLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
