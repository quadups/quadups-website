import Link from "next/link";
import { ProcessStack } from "../components/ProcessStack";
import { PageShell } from "../components/SiteChrome";
import { process } from "../content";

export default function AboutPage() {
  return (
    <PageShell>
      <section className="subpage-hero about-hero" data-reveal>
        <p className="eyebrow" data-reveal-item>
          About Quadups
        </p>
        <h1 data-reveal-item>We partner with founders like a product team that thinks commercially.</h1>
        <p data-reveal-item>
          Quadups Limited exists to help ambitious teams turn bold ideas into real-world products. We combine product
          strategy, software engineering, cloud operations, AI, automation, blockchain, and cybersecurity into one
          practical build partner.
        </p>
      </section>

      <section className="process-section" data-reveal>
        <div>
          <p className="eyebrow" data-reveal-item>
            How we work
          </p>
          <h2 data-reveal-item>Lean, secure, scalable, and always aligned with your vision.</h2>
        </div>
        <ProcessStack steps={process} />
      </section>

      <section className="security-section" data-reveal>
        <div className="security-panel interactive-card" data-reveal-item>
          <p className="eyebrow">Our promise</p>
          <h2>You retain full ownership while we bring the technical depth.</h2>
        </div>
        <div className="capability-cloud interactive-card" data-reveal-item>
          {["Founders", "Startups", "SMBs", "Scaleups", "Product teams", "Operators"].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="cta-section subpage-cta" data-reveal>
        <p className="eyebrow" data-reveal-item>
          Build with us
        </p>
        <h2 data-reveal-item>Let&apos;s turn the next version of your company into a working product.</h2>
        <Link className="primary-button" href="/startproject" data-reveal-item>
          Start a project
        </Link>
      </section>
    </PageShell>
  );
}
