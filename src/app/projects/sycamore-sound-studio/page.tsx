import CaseStudyLayout from '@/components/CaseStudyLayout';

export const metadata = {
  title: 'Custom Basement Music Studio — 70 Sycamore Ave Mill Valley | ConstruBay',
  description: 'Professional-grade basement music studio conversion in Mill Valley CA. Acoustic engineering, sound isolation, luxury finishes. ConstruBay CSLB #1106798.',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'The Sycamore Sound Studio — 70 Sycamore Ave Mill Valley',
  description: 'Professional-grade basement music studio conversion in Mill Valley CA with acoustic engineering and luxury finishes',
  author: {
    '@type': 'Organization',
    name: 'ConstruBay',
    url: 'https://www.construbay.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'ConstruBay',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.construbay.com/images/svg/logo%20vector-02.svg',
    },
  },
};

export default function SycamoreSoundStudioPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CaseStudyLayout
        heroImage="/images/gallery/colaizzo/colaizzo-01.jpg"
        heroAlt="70 Sycamore Ave Mill Valley basement music studio by ConstruBay"
        eyebrow="Case Study — Basement Conversion"
        title="The Sycamore Sound Studio"
        subhead="70 Sycamore Ave, Mill Valley — Basement Conversion"
        stats={[
          { label: 'Location', value: 'Mill Valley, CA' },
          { label: 'Scope', value: 'Basement Conversion' },
          { label: 'Type', value: 'Music Studio' },
          { label: 'Specialty', value: 'Acoustic Engineering' },
        ]}
        opening="Doug Colaizzo had a vision — a professional-grade recording studio beneath his Mill Valley home. The challenge was converting a standard residential basement into a space with the acoustic performance of a commercial studio while maintaining the luxury finishes expected throughout the home."
        challengeTitle="THE CHALLENGE"
        challenges={[
          'Standard residential construction provides zero sound isolation between floors',
          'Low ceiling height required custom acoustic engineering solutions',
          'HVAC noise is the enemy of professional recording — every system had to be isolated',
        ]}
        solutionTitle="OUR SOLUTION"
        solutions={[
          'Room-within-a-room construction with floating floor and decoupled walls',
          'Custom low-profile acoustic panels maintaining 8ft clear height throughout',
          'Silent HVAC system with isolated equipment room outside the recording space',
        ]}
        testimonialQuote="The studio exceeded every expectation. The sound isolation is flawless and the finishes are impeccable."
        testimonialAuthor="Doug Colaizzo — 70 Sycamore Ave, Mill Valley"
      />
    </>
  );
}
