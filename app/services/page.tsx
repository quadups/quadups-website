import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "../components/JsonLd";
import { PageShell } from "../components/SiteChrome";
import { services } from "../content";
import { absoluteUrl, company, pageMetadata, siteUrl } from "../seo";

export const metadata: Metadata = pageMetadata({
  title: "Services | MVP Development, AI Automation, Cloud, DevOps & Cybersecurity",
  description:
    "Explore Quadups Limited services: Startup-as-a-Service, MVP development, web and software engineering, mobile apps, cloud, DevOps, AI automation, blockchain, and cybersecurity for the UK, US, Europe, Africa, and Nigeria.",
  path: "/services",
  keywords: [
    "MVP development services",
    "AI automation consulting",
    "cloud DevOps services UK",
    "software development Nigeria",
    "cybersecurity engineering Africa",
  ],
});

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${siteUrl}/services#services`,
  name: "Quadups Limited technology services",
  itemListElement: services.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: service.title,
      description: service.text,
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: company.regions.map((name) => ({ "@type": "Place", name })),
      url: absoluteUrl("/services"),
    },
  })),
};

export default function ServicesPage() {
  const carouselServices = [...services, ...services];

  return (
    <PageShell>
      <JsonLd data={servicesJsonLd} />
      <section className="subpage-hero" data-reveal>
        <p className="eyebrow" data-reveal-item>
          Services
        </p>
        <h1 data-reveal-item>Technical teams for founders who need momentum.</h1>
        <p data-reveal-item>
          From early research to resilient infrastructure, Quadups gives you the strategy, product design, engineering,
          automation, and security capacity to move from idea to market with confidence.
        </p>
      </section>

      <section className="service-snake-section" aria-label="Quadups services carousel" data-reveal>
        <div className="service-snake-track" data-reveal-item>
          {carouselServices.map((service, index) => (
            <article className="service-card service-snake-card interactive-card" key={`${service.title}-${index}`}>
              <span>{service.eyebrow}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-section subpage-cta" data-reveal>
        <p className="eyebrow" data-reveal-item>
          Ready to build?
        </p>
        <h2 data-reveal-item>Start with one product sprint or bring us in as your full technical partner.</h2>
        <Link className="primary-button" href="/startproject" data-reveal-item>
          Start a project
        </Link>
      </section>
    </PageShell>
  );
}
