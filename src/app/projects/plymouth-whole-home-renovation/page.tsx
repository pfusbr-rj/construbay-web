import CaseStudyLayout from '@/components/CaseStudyLayout';

export const metadata = {
  title: 'Historic Mill Valley Home Restoration — 36 Plymouth Ave | ConstruBay',
  description: 'Complete whole-home renovation of a historic Mill Valley property. Period-appropriate materials, modern systems, luxury finishes. ConstruBay CSLB #1106798.',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'The Plymouth Whole-Home Renovation — 36 Plymouth Ave Mill Valley',
  description: 'Complete whole-home renovation of a historic Mill Valley property with period-appropriate materials and modern systems',
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

export default function PlymouthRenovationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CaseStudyLayout
        heroImage="/images/gallery/eugene-anya/eugene-anya-01.jpg"
        heroAlt="36 Plymouth Ave Mill Valley whole-home renovation by ConstruBay"
        eyebrow="Case Study — Full House Renovation"
        title="The Plymouth Whole-Home Renovation"
        subhead="36 Plymouth Ave, Mill Valley — Full House Renovation"
        stats={[
          { label: 'Location', value: 'Mill Valley, CA' },
          { label: 'Scope', value: 'Full House Renovation' },
          { label: 'Type', value: 'Historic Restoration' },
          { label: 'Family', value: 'Growing Family Home' },
        ]}
        opening="Eugene and Anya wanted their Mill Valley home transformed from top to bottom — but without losing the character that made them fall in love with it. A complete renovation preserving the home's original soul while delivering every modern system and finish a growing family requires."
        challengeTitle="THE CHALLENGE"
        challenges={[
          'Preserving original architectural character while upgrading every system',
          'Occupied renovation requiring careful phasing to minimize family disruption',
          'Period-appropriate materials needed for historic consistency throughout',
        ]}
        solutionTitle="OUR SOLUTION"
        solutions={[
          'Salvaged original millwork and restored period-appropriate hardware throughout',
          'Phased construction allowing family to remain in home during renovation',
          'Custom sourced reclaimed materials matching original 1940s construction period',
        ]}
        testimonialQuote="ConstruBay understood exactly what we wanted — a home that feels like it always belonged here, just better in every way."
        testimonialAuthor="Eugene &amp; Anya — 36 Plymouth Ave, Mill Valley"
      />
    </>
  );
}
