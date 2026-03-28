import CaseStudyLayout from '@/components/CaseStudyLayout';

export const metadata = {
  title: 'Mill Valley Full Home Transformation — 209 Marion Ave | ConstruBay',
  description: '2,200 sq ft full gut renovation in Mill Valley CA completed in 8 months. Hillside foundation, seismic retrofit, custom kitchen. ConstruBay CSLB #1106798.',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Mill Valley Full Home Transformation — 209 Marion Ave',
  description: '2,200 sq ft full gut renovation in Mill Valley CA completed in 8 months',
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

export default function MarionAvenuePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CaseStudyLayout
        heroImage="/images/gallery/bagatellos/bagatellos-01.jpg"
        heroAlt="209 Marion Ave Mill Valley full home renovation by ConstruBay"
        eyebrow="Case Study — Full Remodel"
        title="Mill Valley Full Home Transformation"
        subhead="209 Marion Ave, Mill Valley — 2,200 Sq Ft"
        stats={[
          { label: 'Location', value: 'Mill Valley, CA' },
          { label: 'Scope', value: 'Full Remodel + Addition' },
          { label: 'Size', value: '2,200 Sq Ft' },
          { label: 'Duration', value: '8 Months' },
        ]}
        opening="When Nick Bagatello purchased this 1960s Mill Valley home, he knew it needed everything — foundation work, seismic retrofit, new electrical, plumbing, and a complete interior reimagining. What he did not want was the typical Marin County renovation experience — open-ended timelines and ballooning budgets. We delivered this 2,200 square foot full renovation in 8 months from permit approval to final walkthrough."
        challengeTitle="THE CHALLENGE"
        challenges={[
          'Hillside foundation required engineered retaining walls before interior work could begin',
          'Original 1962 electrical could not support modern HVAC and EV charging requirements',
          'Heritage oak tree restrictions limited construction access and staging areas',
        ]}
        solutionTitle="OUR SOLUTION"
        solutions={[
          'Pre-construction geotechnical survey allowed concurrent foundation and framing sequencing',
          '400-amp service upgrade with underground utilities to preserve street aesthetics',
          'Crane-assisted material delivery to work around protected root zones',
        ]}
        testimonialQuote="They delivered exactly what they promised, when they promised it. In Mill Valley that is unheard of."
        testimonialAuthor="Nick Bagatello — 209 Marion Ave, Mill Valley"
      />
    </>
  );
}
