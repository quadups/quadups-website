import Link from "next/link";
import { metrics, process, services } from "./content";
import { ProcessStack } from "./components/ProcessStack";
import { PageShell } from "./components/SiteChrome";

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
      <section className="hero-section" aria-labelledby="hero-title">
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
            <Link className="primary-button" href="/startproject">
              Start a project
            </Link>
            <Link className="secondary-button" href="/services">
              Explore services
            </Link>
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
        {metrics.map(([label, value]) => (
          <article className="interactive-card" key={label} data-reveal-item>
            <span>{label}</span>
            <strong>{value}</strong>
          </article>
        ))}
      </section>

      <section className="services-section" id="services" aria-labelledby="services-title" data-reveal>
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
        <div>
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
        <p className="eyebrow" data-reveal-item>
          Let&apos;s build something game-changing
        </p>
        <h2 id="cta-title" data-reveal-item>
          Bring the idea. We&apos;ll bring the product team.
        </h2>
        <Link className="primary-button" href="/startproject" data-reveal-item>
          Partner with Quadups
        </Link>
      </section>
    </PageShell>
  );
}
