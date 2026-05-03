import type { Metadata } from "next";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://quadupsltd.com";

export const company = {
  name: "Quadups Limited",
  shortName: "Quadups",
  email: "hello@quadupsltd.com",
  calendly: "https://calendly.com/quadupsltd/30min",
  logo: "/quadups-full-white.png",
  regions: ["United Kingdom", "United States", "Europe", "Africa", "Nigeria"],
  services: [
    "Startup-as-a-Service",
    "technical co-founder services",
    "MVP development",
    "web and software development",
    "mobile app development",
    "cloud and DevOps consulting",
    "AI automation consulting",
    "blockchain development",
    "cybersecurity engineering",
  ],
};

export const defaultKeywords = [
  "Quadups Limited",
  "Startup-as-a-Service",
  "STaaS",
  "technical co-founder UK",
  "technical co-founder Nigeria",
  "startup product development",
  "MVP development UK",
  "MVP development US",
  "software development company UK",
  "software development company Nigeria",
  "AI automation for startups",
  "cloud DevOps consulting",
  "cybersecurity software development",
  "blockchain development company",
  "startup technology partner Europe",
  "startup technology partner Africa",
];

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

export function pageMetadata({
  title,
  description,
  path,
  keywords = [],
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    keywords: [...defaultKeywords, ...keywords],
    alternates: {
      canonical: url,
      languages: {
        "en-GB": url,
        "en-US": url,
        "en-NG": url,
        "x-default": url,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: company.name,
      locale: "en_GB",
      alternateLocale: ["en_US", "en_NG"],
      type: "website",
      images: [
        {
          url: absoluteUrl(company.logo),
          width: 1200,
          height: 630,
          alt: "Quadups Limited",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(company.logo)],
    },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": `${siteUrl}/#organization`,
  name: company.name,
  alternateName: company.shortName,
  url: siteUrl,
  logo: absoluteUrl(company.logo),
  email: company.email,
  areaServed: company.regions.map((name) => ({ "@type": "Place", name })),
  knowsAbout: company.services,
  slogan: "Startup-as-a-Service for founders, startups, and businesses.",
  description:
    "Quadups Limited helps founders, startups, and businesses validate, build, launch, and scale secure software products across the UK, US, Europe, Africa, and Nigeria.",
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: company.email,
      url: absoluteUrl("/contact"),
      areaServed: ["GB", "US", "NG", "EU", "AF"],
      availableLanguage: ["en"],
    },
  ],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: company.name,
  url: siteUrl,
  publisher: { "@id": `${siteUrl}/#organization` },
  inLanguage: "en",
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteUrl}/services?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};
