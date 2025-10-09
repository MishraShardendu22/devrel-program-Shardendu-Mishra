import Script from 'next/script'

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Keploy Inc.",
    "url": "https://keploy.io",
    "logo": "https://devrel.keploy.io/keploy-logo.png",
    "description": "Keploy is an open-source API testing platform that creates test cases and data mocks from API calls.",
    "sameAs": [
      "https://twitter.com/Keployio",
      "https://www.linkedin.com/company/keploy/",
      "https://www.youtube.com/@keploy",
      "https://keploy.slack.com/",
      "https://github.com/keploy"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Community Support",
      "url": "https://keploy.slack.com/"
    }
  }

  const programSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalProgram",
    "name": "Keploy Developer Relations Program",
    "description": "Get into the world of DevRels and experience of being one for a month. Learn API testing, create content, and grow your community skills.",
    "provider": {
      "@type": "Organization",
      "name": "Keploy Inc.",
      "url": "https://keploy.io"
    },
    "url": "https://devrel.keploy.io",
    "educationalCredentialAwarded": "Developer Relations Experience Certificate",
    "audience": {
      "@type": "Audience",
      "audienceType": "Developers, Students, Tech Enthusiasts"
    },
    "timeToComplete": "P1M",
    "courseMode": "online",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Keploy Developer Relations Program",
    "url": "https://devrel.keploy.io",
    "description": "Join Keploy's Developer Relations Program and experience the world of DevRel for a month",
    "publisher": {
      "@type": "Organization",
      "name": "Keploy Inc."
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://devrel.keploy.io/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://devrel.keploy.io"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About",
        "item": "https://devrel.keploy.io/#about"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Program",
        "item": "https://devrel.keploy.io/#program"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Community",
        "item": "https://devrel.keploy.io/#community"
      }
    ]
  }

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Script
        id="program-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(programSchema),
        }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  )
}
