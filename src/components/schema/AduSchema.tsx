export default function AduSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'ADU Construction Marin County',
    description: 'Full-service ADU design, permitting, and construction in Marin County. Detached ADUs, garage conversions, attached ADUs, and Junior ADUs (JADUs). Fixed-scope contracts. CSLB #1106798.',
    provider: {
      '@type': 'GeneralContractor',
      name: 'ConstruBay',
      telephone: '+14159689494',
      license: 'CSLB #1106798',
      url: 'https://www.construbay.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Mill Valley',
        addressRegion: 'CA',
        postalCode: '94941',
        addressCountry: 'US',
      },
    },
    areaServed: {
      '@type': 'County',
      name: 'Marin County',
      containsPlace: [
        { '@type': 'City', name: 'Mill Valley' },
        { '@type': 'City', name: 'Tiburon' },
        { '@type': 'City', name: 'Sausalito' },
        { '@type': 'City', name: 'San Rafael' },
        { '@type': 'City', name: 'Belvedere' },
        { '@type': 'City', name: 'Ross' },
        { '@type': 'City', name: 'Kentfield' },
      ],
    },
    offers: {
      '@type': 'Offer',
      priceSpecification: {
        '@type': 'PriceSpecification',
        minPrice: '185000',
        maxPrice: '750000',
        priceCurrency: 'USD',
      },
    },
    serviceType: 'ADU Construction',
    url: 'https://www.construbay.com/adu',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
