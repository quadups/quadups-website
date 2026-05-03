import type { Metadata } from "next";
import { JsonLd } from "./components/JsonLd";
import { metrics, process, services } from "./content";
import { ProcessStack } from "./components/ProcessStack";
import { PageShell } from "./components/SiteChrome";
import { SectionViewEvent, TrackedLink } from "./components/PostHogEvents";
import { absoluteUrl, company, pageMetadata, siteUrl } from "./seo";

export const metadata: Metadata = pageMetadata({
  title: "Startup-as-a-Service, MVP Development & Technical Co-Founder Support | Quadups",
  description:
    "Quadups Limited helps founders and businesses in the UK, US, Europe, Africa, and Nigeria validate ideas, build MVPs, launch secure products, and scale with AI automation, cloud, DevOps, blockchain, and cybersecurity.",
  path: "/",
  keywords: [
    "Startup-as-a-Service UK",
    "technical co-founder Africa",
    "MVP development Nigeria",
    "AI automation United States",
    "software development Europe",
  ],
});

const homeJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}/#startup-as-a-service`,
    name: "Startup-as-a-Service and technical product development",
    provider: { "@id": `${siteUrl}/#organization` },
    serviceType: company.services,
    areaServed: company.regions.map((name) => ({ "@type": "Place", name })),
    url: siteUrl,
    description:
      "End-to-end startup technology support including idea validation, MVP development, product engineering, AI automation, cloud, DevOps, blockchain, and cybersecurity.",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      url: absoluteUrl("/startproject"),
      category: "Technology consulting",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Startup-as-a-Service?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Startup-as-a-Service is Quadups Limited's model for acting as a technical co-founder, product team, and innovation partner across validation, MVP development, launch, and iteration while founders retain ownership.",
        },
      },
      {
        "@type": "Question",
        name: "Which regions does Quadups serve?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Quadups works with founders, startups, and businesses across the United Kingdom, United States, Europe, Africa, and Nigeria.",
        },
      },
      {
        "@type": "Question",
        name: "What does Quadups build?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Quadups builds web platforms, software products, mobile applications, cloud and DevOps infrastructure, AI automation systems, blockchain solutions, and cybersecurity foundations.",
        },
      },
    ],
  },
];

function ProductConsole() {
  return (
    <div className="product-console interactive-card" aria-label="Quadups delivery dashboard preview" data-hero-stagger>
      <div className="console-top">
        <span />
        <span />
        <span />
      </div>
      <div className="console-body">
        <aside>
          {["Validate", "Design", "Build", "Secure", "Launch"].map((item, index) => (
            <span className={index === 2 ? "is-active" : ""} key={item}>
              {item}
            </span>
          ))}
        </aside>
        <section>
          <div className="console-header">
            <p>Startup Operating System</p>
            <strong>82%</strong>
          </div>
          <div className="delivery-map">
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="signal-grid">
            <div>
              <small>Market fit</small>
              <b>High</b>
            </div>
            <div>
              <small>Risk scan</small>
              <b>Clear</b>
            </div>
            <div>
              <small>Launch sprint</small>
              <b>Live</b>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <PageShell>
      <JsonLd data={homeJsonLd} />
      <section className="hero-section" aria-labelledby="hero-title">
        <SectionViewEvent name="home_hero" />
        <div className="hero-copy">
          <p className="eyebrow" data-hero-stagger>
            Startup-as-a-Service for ambitious teams
          </p>
          <h1 id="hero-title" data-hero-stagger>
            We build startups, not just software.
          </h1>
          <p className="hero-lede" data-hero-stagger>
            Quadups Limited empowers founders, startups, and businesses to build smarter, faster, and more securely
            through end-to-end tech solutions that drive real impact.
          </p>
          <div className="hero-actions" data-hero-stagger>
            <TrackedLink
              className="primary-button"
              event="start_project_clicked"
              eventProperties={{ location: "home_hero_primary" }}
              href="/startproject"
            >
              Start a project
            </TrackedLink>
            <TrackedLink
              className="secondary-button"
              event="services_clicked"
              eventProperties={{ location: "home_hero_secondary" }}
              href="/services"
            >
              Explore services
            </TrackedLink>
          </div>
        </div>

        <div className="hero-visual">
          <div className="wire-orbit hero-wire" />
          <ProductConsole />
          <div className="floating-card card-ai interactive-card" data-hero-stagger>
            <span>AI automation</span>
            <strong>42 hrs</strong>
            <small>saved weekly</small>
          </div>
          <div className="floating-card card-security interactive-card" data-hero-stagger>
            <span>Security layer</span>
            <strong>Active</strong>
            <small>encrypted, monitored, audited</small>
          </div>
        </div>
      </section>

      <section className="metric-strip" aria-label="Quadups operating strengths" data-reveal>
        <SectionViewEvent name="metrics" />
        {metrics.map(([label, value, caption]) => (
          <article className="interactive-card" key={label} data-reveal-item>
            <span>{label}</span>
            <strong>{value}</strong>
            {caption ? <small>{caption}</small> : null}
          </article>
        ))}
      </section>

      <section className="services-section" id="services" aria-labelledby="services-title" data-reveal>
        <SectionViewEvent name="services_preview" />
        <div className="section-heading">
          <p className="eyebrow" data-reveal-item>
            What we do
          </p>
          <h2 id="services-title" data-reveal-item>
            One partner for the full product journey.
          </h2>
        </div>
        <div className="service-grid">
          {services.slice(0, 4).map((service) => (
            <article className="service-card interactive-card" key={service.title} data-reveal-item>
              <span>{service.eyebrow}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="process-section" id="process" aria-labelledby="process-title" data-reveal>
        <SectionViewEvent name="how_we_work" />
        <div className="process-copy">
          <p className="eyebrow" data-reveal-item>
            Research before code
          </p>
          <h2 id="process-title" data-reveal-item>
            We pressure-test the idea, then ship the system.
          </h2>
          <p data-reveal-item>
            Before development begins, we help founders answer the critical questions through validation,
            product-market fit analysis, competitive research, and technical feasibility.
          </p>
        </div>
        <ProcessStack steps={process.slice(0, 4)} />
      </section>

      <section className="security-section" id="security" aria-labelledby="security-title" data-reveal>
        <SectionViewEvent name="security" />
        <div className="security-panel interactive-card" data-reveal-item>
          <p className="eyebrow">Built secure from day one</p>
          <h2 id="security-title">Performance, scalability, and protection in the same blueprint.</h2>
          <p>
            We design cloud, DevOps, AI, automation, blockchain, and cybersecurity practices as one operating
            foundation so your product is ready to launch, learn, and scale.
          </p>
        </div>
        <div className="capability-cloud interactive-card" aria-label="Capabilities" data-reveal-item>
          {["MVPs", "Cloud", "DevOps", "AI", "Mobile", "Web", "Blockchain", "Cybersecurity"].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="cta-section" aria-labelledby="cta-title" data-reveal>
        <SectionViewEvent name="home_cta" />
        <p className="eyebrow" data-reveal-item>
          Let&apos;s build something game-changing
        </p>
        <h2 id="cta-title" data-reveal-item>
          Bring the idea. We&apos;ll bring the product team.
        </h2>
        <TrackedLink
          className="primary-button"
          event="start_project_clicked"
          eventProperties={{ location: "home_bottom_cta" }}
          href="/startproject"
          data-reveal-item
        >
          Partner with Quadups
        </TrackedLink>
      </section>

      <section className="seo-answer-section" aria-labelledby="regional-title" data-reveal>
        <SectionViewEvent name="regional_seo_answer" />
        <p className="eyebrow" data-reveal-item>
          Regional startup technology partner
        </p>
        <h2 id="regional-title" data-reveal-item>
          Built for founders scaling across the UK, US, Europe, Africa, and Nigeria.
        </h2>
        <p data-reveal-item>
          Quadups supports early-stage and scaling teams that need a reliable technical partner for product strategy,
          MVP development, software engineering, AI automation, cloud infrastructure, DevOps, cybersecurity, and
          blockchain delivery. Our work is designed for cross-border teams that need secure systems, fast iteration,
          and practical product decisions.
        </p>
      </section>

      <section className="faq-section" aria-labelledby="faq-title" data-reveal>
        <SectionViewEvent name="faq" />
        <p className="eyebrow" data-reveal-item>
          Quick answers
        </p>
        <h2 id="faq-title" data-reveal-item>
          Common questions founders ask Quadups.
        </h2>
        <div className="faq-grid">
          <article data-reveal-item>
            <h3>What is Startup-as-a-Service?</h3>
            <p>
              It is Quadups&apos; model for operating as your technical co-founder, product team, and innovation
              partner from validation to MVP, launch, and iteration.
            </p>
          </article>
          <article data-reveal-item>
            <h3>Who does Quadups work with?</h3>
            <p>
              We partner with founders, startups, SMEs, and scaling teams across the United Kingdom, United States,
              Europe, Africa, and Nigeria.
            </p>
          </article>
          <article data-reveal-item>
            <h3>What can Quadups build?</h3>
            <p>
              We build secure web platforms, mobile apps, AI automation systems, cloud and DevOps infrastructure,
              blockchain products, and cybersecurity foundations.
            </p>
          </article>
        </div>
      </section>
    </PageShell>
  );
}
