import Link from "next/link";
import { PageShell } from "../components/SiteChrome";

export default function ContactPage() {
  return (
    <PageShell>
      <section className="contact-layout" data-reveal>
        <div className="subpage-hero contact-copy">
          <p className="eyebrow" data-reveal-item>
            Contact
          </p>
          <h1 data-reveal-item>Talk to Quadups about your next build.</h1>
          <p data-reveal-item>
            Tell us where you are in the journey. We can help validate the idea, design the architecture, build the MVP,
            or scale the product you already have.
          </p>
          <Link className="primary-button" href="/startproject" data-reveal-item>
            Start a project
          </Link>
        </div>
        <div className="contact-card interactive-card" data-reveal-item>
          <span>Email</span>
          <a href="mailto:hello@quadupsltd.com">hello@quadupsltd.com</a>
          <span>Response time</span>
          <strong>Less than 24 hours</strong>
          <span>Best for</span>
          <strong>Founders, startups, product teams, and businesses ready to build smarter.</strong>
        </div>
      </section>
    </PageShell>
  );
}
