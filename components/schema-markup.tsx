export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://divineevents.co.uk",
    "name": "Divine Events",
    "image": "https://divineevents.co.uk/og-image.jpg",
    "description": "Premier luxury Asian wedding decor and mandap hire across Leicester, Birmingham, London & UK. Bespoke Hindu, Sikh & Muslim wedding ceremonies.",
    "url": "https://divineevents.co.uk",
    "telephone": "+441234567890",
    "email": "info@divineevents.co.uk",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Leicester",
      "addressLocality": "Leicester",
      "addressRegion": "Leicestershire",
      "postalCode": "LE1",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "52.6369",
      "longitude": "-1.1398"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "16:00"
      }
    ],
    "priceRange": "£££",
    "areaServed": [
      {
        "@type": "City",
        "name": "Leicester"
      },
      {
        "@type": "City",
        "name": "Birmingham"
      },
      {
        "@type": "City",
        "name": "London"
      },
      {
        "@type": "City",
        "name": "Nottingham"
      },
      {
        "@type": "City",
        "name": "Derby"
      },
      {
        "@type": "City",
        "name": "Coventry"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "150"
    },
    "sameAs": [
      "https://www.facebook.com/divineevents",
      "https://www.instagram.com/divineevents",
      "https://www.twitter.com/divineevents"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Wedding Decor and Event Production",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Divine Events",
      "url": "https://divineevents.co.uk"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United Kingdom"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Wedding Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Luxury Mandap Hire",
            "description": "Exquisite handcrafted mandaps for Hindu, Sikh, and Muslim weddings"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Asian Wedding Decor",
            "description": "Complete venue transformation with luxury floral installations"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Wedding Stage Design",
            "description": "Stunning reception stages with premium backdrops"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "DJ Entertainment",
            "description": "Professional Asian wedding DJs with premium sound systems"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Lighting Production",
            "description": "Cinematic lighting design with intelligent fixtures"
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What areas do you cover for wedding decor services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide luxury Asian wedding decor services across Leicester, Birmingham, London, Nottingham, Derby, Coventry, and nationwide throughout the UK."
        }
      },
      {
        "@type": "Question",
        "name": "How much does mandap hire cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our mandap hire starts from £2,500 for classic designs, with bespoke custom mandaps from £5,000. Prices vary based on design complexity, size, and customization requirements."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide services for Hindu, Sikh, and Muslim weddings?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialize in Hindu, Sikh, Muslim, and all South Asian wedding traditions. Our team has extensive experience with Gujarati, Punjabi, Bengali, Tamil, and other cultural wedding ceremonies."
        }
      },
      {
        "@type": "Question",
        "name": "How far in advance should I book?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We recommend booking 6-12 months in advance for peak wedding season (April-October). However, we can accommodate shorter timelines based on availability."
        }
      },
      {
        "@type": "Question",
        "name": "Can you customize the mandap design?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! All our mandaps are fully customizable. We work with you to create a bespoke design that reflects your style, cultural traditions, and wedding theme."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: Array<{ name: string; url: string }> }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Made with Bob
