export default function SiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness', 'GeneralContractor'],
    '@id': 'https://www.construbay.com/#business',
    name: 'ConstruBay',
    url: 'https://www.construbay.com',
    telephone: '+14159689494',
    email: 'paulo@construbay.com',
    // image required for LocalBusiness rich results eligibility
    image: 'https://www.construbay.com/images/svg/logo%20vector-02.svg',
    // hasMap required — Google Maps URL improves local pack signals
    hasMap: 'https://maps.google.com/?q=ConstruBay+Mill+Valley+CA',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '18 El Paseo Ln',
      addressLocality: 'Mill Valley',
      addressRegion: 'CA',
      postalCode: '94941',
      addressCountry: 'US',
    },
    // geo required for local pack signals
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 37.9061,
      longitude: -122.5450,
    },
    license: 'CSLB #1106798',
    priceRange: '$$$',
    // openingHoursSpecification — proper DayOfWeek URIs, not plain string
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'https://schema.org/Monday',
          'https://schema.org/Tuesday',
          'https://schema.org/Wednesday',
          'https://schema.org/Thursday',
          'https://schema.org/Friday',
        ],
        opens: '08:00',
        closes: '18:00',
      },
    ],
    areaServed: [
      { '@type': 'City', name: 'Mill Valley' },
      { '@type': 'City', name: 'Tiburon' },
      { '@type': 'City', name: 'Sausalito' },
      { '@type': 'City', name: 'San Rafael' },
      { '@type': 'City', name: 'Belvedere' },
      { '@type': 'City', name: 'Ross' },
      { '@type': 'City', name: 'Kentfield' },
      { '@type': 'City', name: 'Corte Madera' },
      // AdministrativeArea is the correct schema.org type — 'County' is invalid
      { '@type': 'AdministrativeArea', name: 'Marin County' },
      { '@type': 'AdministrativeArea', name: 'Sonoma County' },
      { '@type': 'AdministrativeArea', name: 'Napa County' },
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
    // hasOfferCatalog is the correct schema.org property — serviceType[] is not recognized
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Construction Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'ADU Construction' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Whole Home Remodel' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Kitchen Remodel' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bathroom Remodel' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Home Addition' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Outdoor Living' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Permit Expediting' } },
      ],
    },
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
