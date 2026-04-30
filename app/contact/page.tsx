import type { Metadata } from "next";
import { CalendlyButton } from "../components/CalendlyButton";
import { JsonLd } from "../components/JsonLd";
import { PageShell } from "../components/SiteChrome";
import { company, pageMetadata, siteUrl } from "../seo";

const FORM_ENDPOINT = "https://formspree.io/f/mldjgbjo";

export const metadata: Metadata = pageMetadata({
  title: "Contact Quadups Limited | Book a Startup Technology Consultation",
  description:
    "Contact Quadups Limited or book a 30-minute consultation for Startup-as-a-Service, MVP development, AI automation, cloud, DevOps, cybersecurity, and software engineering across the UK, US, Europe, Africa, and Nigeria.",
  path: "/contact",
  keywords: [
    "contact Quadups",
    "book software consultation",
    "startup technology consultation UK",
    "MVP consultation Nigeria",
  ],
});

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${siteUrl}/contact#contact`,
  name: "Contact Quadups Limited",
  url: `${siteUrl}/contact`,
  mainEntity: {
    "@id": `${siteUrl}/#organization`,
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: company.email,
    url: `${siteUrl}/contact`,
    areaServed: ["GB", "US", "NG", "EU", "AF"],
    availableLanguage: "en",
  },
};

export default function ContactPage() {
  return (
    <PageShell>
      <JsonLd data={contactJsonLd} />
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
          <div className="contact-actions" data-reveal-item>
            <CalendlyButton />
            <a className="primary-button" href="mailto:hello@quadupsltd.com">
              Email us
            </a>
          </div>
        </div>
        <div className="contact-card interactive-card" data-reveal-item>
          <form className="contact-form" action={FORM_ENDPOINT} method="POST">
            <input type="hidden" name="_subject" value="New Quadups contact message" />
            <label>
              <span>Name</span>
              <input name="name" placeholder="Your name" required />
            </label>
            <label>
              <span>Email</span>
              <input name="email" placeholder="you@example.com" type="email" required />
            </label>
            <label className="contact-message-field">
              <span>Message</span>
              <textarea name="message" placeholder="How can we help?" required />
            </label>
            <button type="submit">Send message</button>
          </form>
          <div className="contact-meta">
            <div>
              <span>Email</span>
              <a href="mailto:hello@quadupsltd.com" data-tooltip="hello@quadupsltd.com">hello@quadupsltd.com</a>
            </div>
            <div>
              <span>Response time</span>
              <strong>Less than 24 hours</strong>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
