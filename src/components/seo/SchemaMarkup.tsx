import { SITE_CONFIG } from '@/data/content'

const schemaData = {
  '@context': 'https://schema.org',
  '@type': 'TattooParlor',
  name: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  url: 'https://ornatoestudio.com.br',
  telephone: '+5561999999999',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Plaza Mall',
    addressLocality: 'Águas Claras',
    addressRegion: 'DF',
    addressCountry: 'BR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -15.8361,
    longitude: -48.0444,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '10:00',
      closes: '19:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '10:00',
      closes: '16:00',
    },
  ],
  priceRange: '$$',
  image: 'https://ornatoestudio.com.br/og-image.jpg',
  sameAs: [SITE_CONFIG.instagramUrl],
  founder: {
    '@type': 'Person',
    name: SITE_CONFIG.artist,
  },
}

export function SchemaMarkup() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  )
}
