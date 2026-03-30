export default function SiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness', 'GeneralContractor'],
    '@id': 'https://www.construbay.com/#business',
    name: 'ConstruBay',
    url: 'https://www.construbay.com',
    telephone: '+14159689494',
    email: 'paulo@construbay.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '18 El Paseo Ln',
      addressLocality: 'Mill Valley',
      addressRegion: 'CA',
      postalCode: '94941',
      addressCountry: 'US',
    },
    license: 'CSLB #1106798',
    priceRange: '$$$',
    areaServed: [
      { '@type': 'City', name: 'Mill Valley' },
      { '@type': 'City', name: 'Tiburon' },
      { '@type': 'City', name: 'Sausalito' },
      { '@type': 'City', name: 'San Rafael' },
      { '@type': 'City', name: 'Belvedere' },
      { '@type': 'City', name: 'Ross' },
      { '@type': 'City', name: 'Kentfield' },
      { '@type': 'City', name: 'Corte Madera' },
      { '@type': 'County', name: 'Marin County' },
      { '@type': 'County', name: 'Sonoma County' },
      { '@type': 'County', name: 'Napa County' },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '47',
      bestRating: '5',
      worstRating: '1',
    },
    review: [
      {
        '@type': 'Review',
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        author: { '@type': 'Person', name: 'The Mathews' },
        name: 'Full Home Remodel — Mill Valley',
        reviewBody: 'Quick to respond! They gave us a free estimate in a timely manner. Hired them for several projects on our home. They do great work, clean, friendly, fun to work with on a daily basis.',
      },
      {
        '@type': 'Review',
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        author: { '@type': 'Person', name: 'Lars & Mary Williams' },
        name: 'Kitchen Remodel — Tiburon',
        reviewBody: 'Great place to work at with great people. Energetic with a great foundation for growth. Organized and focused to perform at a high level of expectation for their customers.',
      },
    ],
    founder: {
      '@type': 'Person',
      name: 'Paulo Fernandes',
      jobTitle: 'Owner & General Contractor',
      url: 'https://www.construbay.com/about',
    },
    serviceType: [
      'ADU Construction',
      'Whole Home Remodel',
      'Kitchen Remodel',
      'Bathroom Remodel',
      'Home Addition',
      'Outdoor Living',
      'Permit Expediting',
    ],
    sameAs: [
      'https://www.instagram.com/construbaymarin',
      'https://www.facebook.com/construbay',
      'https://www.yelp.com/biz/construbay-mill-valley',
      'https://www.houzz.com/professionals/construbay',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
