import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "../components/JsonLd";
import { PageShell } from "../components/SiteChrome";
import { absoluteUrl, pageMetadata, siteUrl } from "../seo";

export const metadata: Metadata = pageMetadata({
  title: "MVP Sprint | $2,000 Flat MVP Build | Quadups",
  description:
    "Start your MVP with Quadups Limited for $2,000 flat. Send a brief or book a call to scope, validate, and build a launch-ready product with a focused technical team.",
  path: "/mvp",
  keywords: [
    "MVP sprint",
    "build MVP fast",
    "startup MVP development",
    "technical co-founder MVP",
    "MVP development UK",
  ],
});

const mvpJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${siteUrl}/mvp#mvp-sprint`,
  name: "MVP sprint",
  description:
    "A focused $2,000 flat MVP intake and delivery path for founders who want to move from idea to launch-ready product with Quadups Limited.",
  provider: { "@id": `${siteUrl}/#organization` },
  serviceType: "MVP development",
  url: absoluteUrl("/mvp"),
  offers: {
    "@type": "Offer",
    url: absoluteUrl("/startproject"),
    availability: "https://schema.org/InStock",
    category: "Software development",
    price: "2000",
    priceCurrency: "USD",
  },
};

export default function MvpPage() {
  return (
    <PageShell>
      <JsonLd data={mvpJsonLd} />
      <section className="mvp-offer" aria-labelledby="mvp-title">
        <div className="mvp-announcement" data-hero-stagger>
          <span>New</span>
          <Link href="/startproject">Get your MVP built - $2,000 flat -&gt;</Link>
        </div>

        <div className="mvp-heading">
          <p className="eyebrow" data-hero-stagger>
            MVP sprint
          </p>
          <h1 id="mvp-title" data-hero-stagger>
            From idea to MVP without the usual drag.
          </h1>
          <p data-hero-stagger>
            Pick how you&apos;d like to start. Send a brief or book a short call, same team, same $2,000 flat MVP
            sprint, same focus on validation, scope, timeline, and the fastest path to a usable first version.
          </p>
          <div className="mvp-price-pill" data-hero-stagger aria-label="$2,000 flat MVP sprint price">
            <span>$2k MVP</span>
            <strong>$2,000 flat</strong>
          </div>
        </div>

        <div className="mvp-choice-grid" data-reveal>
          <article className="mvp-choice-card is-featured interactive-card" data-reveal-item>
            <div className="mvp-card-icon" aria-hidden="true">
              Edit
            </div>
            <span>2 minutes</span>
            <h2>Send a brief</h2>
            <p>Tell us what you&apos;re building. We&apos;ll reply with a practical next step and key questions.</p>
            <ul>
              <li>No calendar pressure</li>
              <li>Great if you&apos;re still scoping</li>
              <li>Written reply you can share</li>
            </ul>
            <Link className="mvp-card-button" href="/startproject">
              Start the brief -&gt;
            </Link>
          </article>

          <article className="mvp-choice-card interactive-card" data-reveal-item>
            <div className="mvp-card-icon" aria-hidden="true">
              Call
            </div>
            <span>30 minutes</span>
            <h2>Book a call</h2>
            <p>Talk to the team. Ask anything about scope, timeline, product decisions, and technical tradeoffs.</p>
            <ul>
              <li>Get answers in real time</li>
              <li>Best if you&apos;re ready to start</li>
              <li>No sales pitch, real engineers</li>
            </ul>
            <a
              className="mvp-card-button mvp-card-button-dark"
              href="https://calendly.com/quadupsltd/30min"
              rel="noreferrer"
              target="_blank"
            >
              See available times -&gt;
            </a>
          </article>
        </div>
      </section>
    </PageShell>
  );
}
