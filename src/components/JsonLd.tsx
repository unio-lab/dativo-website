export function OrganizationJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Dativo',
    url: 'https://dativo.dev',
    logo: 'https://dativo.dev/logos/logo-dark-on-white.svg',
    description:
      'EU Data Act compliance platform for connected product manufacturers.',
    sameAs: [
      'https://github.com/unio-lab/dativo',
      'https://www.linkedin.com/company/dativo-eu',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function SoftwareApplicationJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Dativo',
    url: 'https://dativo.dev',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description:
      'Operational platform enabling connected product manufacturers to comply with the EU Data Act (Regulation (EU) 2023/2854).',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'EUR',
      description: 'Community Edition — free and open source',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
