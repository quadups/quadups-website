import Link from "next/link";
import { PageShell } from "../components/SiteChrome";
import { services } from "../content";

export default function ServicesPage() {
  return (
    <PageShell>
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

      <section className="service-grid service-grid-wide" data-reveal>
        {services.map((service) => (
          <article className="service-card interactive-card" key={service.title} data-reveal-item>
            <span>{service.eyebrow}</span>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </article>
        ))}
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
