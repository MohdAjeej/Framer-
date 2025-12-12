import React from 'react';

export const StructuredData: React.FC = () => {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Lumen Technologies Inc.',
    url: 'https://lumen.light',
    logo: 'https://lumen.light/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-012-3456',
      contactType: 'Customer Service',
      email: 'hello@lumen.light'
    },
    sameAs: [
      'https://twitter.com/lumen',
      'https://instagram.com/lumen',
      'https://facebook.com/lumen'
    ]
  };

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Lumen — Smart Ambient Light',
    description: 'Lumen learns your mood and syncs with music to create perfect ambient lighting.',
    sku: 'LUMEN-001',
    brand: {
      '@type': 'Brand',
      name: 'Lumen'
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: '129',
      highPrice: '299',
      offerCount: '3',
      offers: [
        {
          '@type': 'Offer',
          name: 'Starter Plan',
          price: '129',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock'
        },
        {
          '@type': 'Offer',
          name: 'Pro Plan',
          price: '199',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock'
        },
        {
          '@type': 'Offer',
          name: 'Studio Plan',
          price: '299',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock'
        }
      ]
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '127',
      bestRating: '5',
      worstRating: '1'
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
    </>
  );
};

