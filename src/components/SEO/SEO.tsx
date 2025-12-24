/**
 * @file SEO.tsx
 * @description SEO component for managing meta tags, Open Graph, Twitter Cards, and structured data
 * Optimized for UK and Nigerian markets
 * @author Quadups Dev Team
 * @last_modified 2025
 */

import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  structuredData?: object;
}

export const SEO = ({
  title = "Quadups Ltd - Custom Software Development & Digital Solutions | UK & Nigeria",
  description = "Leading software development company in UK and Nigeria. We build custom web apps, mobile apps, AI/ML solutions, and provide startup-as-a-service. Transform your business with cutting-edge technology.",
  keywords = "software development UK, software development Nigeria, custom software development, web development London, mobile app development Lagos, AI development, machine learning, startup development, Web3 development, blockchain development, UI/UX design, e-commerce solutions, digital transformation, tech consulting UK, tech consulting Nigeria",
  image = "https://quadups.com/logo/quadups-full-black-transparent.png",
  url = "https://quadups.com",
  type = "website",
  author = "Quadups Ltd",
  publishedTime,
  modifiedTime,
  structuredData,
}: SEOProps) => {
  const siteName = "Quadups Ltd";
  const twitterHandle = "@quadupsltd";

  // Default structured data for Organization
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Quadups Ltd",
    "url": "https://quadups.com",
    "logo": "https://quadups.com/logo/quadups-full-black-transparent.png",
    "description": description,
    "address": [
      {
        "@type": "PostalAddress",
        "addressCountry": "GB",
        "addressLocality": "London",
        "addressRegion": "England"
      },
      {
        "@type": "PostalAddress",
        "addressCountry": "NG",
        "addressLocality": "Lagos",
        "addressRegion": "Lagos State"
      }
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+44-7350-156560",
        "contactType": "customer service",
        "areaServed": ["GB", "NG"],
        "availableLanguage": ["en"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+234-706-460-3807",
        "contactType": "customer service",
        "areaServed": "NG",
        "availableLanguage": ["en"]
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/quadups",
      "https://web.facebook.com/profile.php?id=61574737907803",
      "https://x.com/quadupsltd",
      "https://www.instagram.com/quadupsltd"
    ],
    "founder": {
      "@type": "Person",
      "name": "Quadups Team"
    },
    "foundingDate": "2024",
    "areaServed": ["GB", "NG", "US", "EU"],
    "serviceType": [
      "Custom Software Development",
      "Web Development",
      "Mobile App Development",
      "AI & Machine Learning",
      "UI/UX Design",
      "Web3 & Blockchain Development",
      "E-commerce Solutions",
      "Technology Consulting"
    ]
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={url} />

      {/* Geographic Targeting */}
      <meta name="geo.region" content="GB" />
      <meta name="geo.region" content="NG" />
      <meta name="geo.placename" content="London, United Kingdom" />
      <meta name="geo.placename" content="Lagos, Nigeria" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:locale:alternate" content="en_NG" />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
    </Helmet>
  );
};

