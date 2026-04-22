import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Our Process | ConstruBay — 5-Step Luxury Remodel & ADU Journey in Marin',
  description:
    'From first conversation to final walkthrough — see how ConstruBay delivers fixed-scope luxury remodels and ADUs across Marin, Sonoma & Napa. Discovery, Design, Permit, Build, Handover. CSLB #1106798.',
  alternates: {
    canonical: 'https://www.construbay.com/process',
  },
  openGraph: {
    title: 'Our Process | ConstruBay — 5-Step Luxury Remodel & ADU Journey in Marin',
    description:
      'From first conversation to final walkthrough — see how ConstruBay delivers fixed-scope luxury remodels and ADUs across Marin, Sonoma & Napa. Discovery, Design, Permit, Build, Handover. CSLB #1106798.',
    url: 'https://www.construbay.com/process',
    siteName: 'ConstruBay',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Process | ConstruBay — 5-Step Luxury Remodel & ADU Journey in Marin',
    description:
      'From first conversation to final walkthrough — see how ConstruBay delivers fixed-scope luxury remodels and ADUs across Marin, Sonoma & Napa.',
  },
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'The ConstruBay 5-Step Luxury Remodel & ADU Process',
  description:
    'A transparent, fixed-scope engagement journey for Marin, Sonoma, and Napa County homeowners: Discovery, Design, Permit, Build, and Handover.',
  totalTime: 'P26W',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Discovery & Site Visit',
      text: 'A 30-minute intro call plus on-site walkthrough to assess existing conditions, HOA rules, zoning, and prior permit history. You receive a written feasibility summary, a calibrated preliminary budget range, and an honest go / no-go recommendation.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Design & Scope Lock',
      text: 'Collaborative design sessions with your architect or our in-house design partner, full material selections, and a line-item scope document. You receive fully dimensioned construction drawings, a detailed scope-of-work, and a fixed-price contract.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Permit & Approvals',
      text: "We submit to your city's building department, handle corrections and resubmittals, and manage any HOA or ARB reviews. You receive issued building permits, approved stamped plans, and a locked start date.",
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Build & Project Management',
      text: 'A dedicated project manager is on-site and reachable. You receive weekly written progress updates with photos, real-time budget and schedule tracking, and a clean, respected jobsite.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Handover & Warranty',
      text: 'Final walkthrough with a detailed punch list, full document package (permits, warranties, manuals, paint codes, material sources), and a 10-year workmanship warranty. You receive a signed certificate of completion and a digital project binder.',
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://www.construbay.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Our Process',
      item: 'https://www.construbay.com/process',
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "How long does the Discovery phase take before I know if we're a fit?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Typically one week from first call to written feasibility summary.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you charge for Discovery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The initial consultation and feasibility summary are complimentary.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if the city asks for plan corrections during Permit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We handle all corrections and resubmittals at no additional cost — it is part of our fixed-scope contract.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I make changes during the Build phase?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, but all changes are documented as written change orders and agreed to in writing before any work proceeds. No surprises.',
      },
    },
    {
      '@type': 'Question',
      name: 'What counties do you serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Marin, Sonoma, and Napa County. We hold a current CSLB license (#1106798) and carry full commercial liability and workers' comp insurance.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is your warranty?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '10-year workmanship warranty on all labor, plus manufacturer warranties on every material installed.',
      },
    },
  ],
};

export default function ProcessLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
