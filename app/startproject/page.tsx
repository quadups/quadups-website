import Link from "next/link";
import type { Metadata } from "next";
import { MotionLayer } from "../components/MotionLayer";
import { JsonLd } from "../components/JsonLd";
import { WirePanel } from "../components/SiteChrome";
import { pageMetadata, siteUrl } from "../seo";

const FORM_ENDPOINT = "https://formspree.io/f/mldjgbjo";

export const metadata: Metadata = pageMetadata({
  title: "Start a Project | MVP, SaaS, AI Automation & Software Development",
  description:
    "Start a project with Quadups Limited. Share your startup idea, MVP, web platform, mobile app, AI automation, cloud, DevOps, blockchain, or cybersecurity brief for teams in the UK, US, Europe, Africa, and Nigeria.",
  path: "/startproject",
  keywords: [
    "start a software project",
    "build MVP UK",
    "build startup Nigeria",
    "hire technical co-founder",
    "AI automation project",
  ],
});

const startProjectJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${siteUrl}/startproject#start-project`,
  name: "Start a project with Quadups Limited",
  url: `${siteUrl}/startproject`,
  description:
    "Project enquiry page for founders and businesses requesting MVP development, Startup-as-a-Service, AI automation, software development, cloud, DevOps, blockchain, and cybersecurity support.",
  mainEntity: { "@id": `${siteUrl}/#organization` },
};

export default function StartProjectPage() {
  return (
    <main className="project-page">
      <JsonLd data={startProjectJsonLd} />
      <MotionLayer />
      <WirePanel>
        <h1 data-hero-stagger>Let&apos;s bring your visions into reality</h1>
      </WirePanel>
      <section className="project-form-section" aria-labelledby="project-title">
        <div className="project-form-wrap">
          <Link className="back-link" href="/" data-hero-stagger aria-label="Back to home">
            <span aria-hidden="true">{"<"}</span>
            Back
          </Link>
          <p className="eyebrow" data-hero-stagger>
            Start a project
          </p>
          <h2 id="project-title" data-hero-stagger>
            Tell us what you&apos;re building.
          </h2>
          <form className="project-form" action={FORM_ENDPOINT} method="POST" data-hero-stagger>
            <input type="hidden" name="_subject" value="New Quadups project enquiry" />
            <select name="projectType" defaultValue="" aria-label="Select project type" required>
              <option value="" disabled>
                Select Project Type
              </option>
              <option>Startup-as-a-Service</option>
              <option>Web or software platform</option>
              <option>Mobile application</option>
              <option>AI automation</option>
              <option>Cloud, DevOps, or security</option>
            </select>
            <input name="name" placeholder="Name" aria-label="Name" required />
            <input name="email" placeholder="Email" aria-label="Email" type="email" required />
            <label>
              Describe your project in detail. Add your idea, links, references, goals, and any must-have features.
              <textarea name="details" aria-label="Project details" required />
            </label>
            <button type="submit">Send Project Enquiry</button>
          </form>
          <p className="form-note">Our team will reach out to you in less than 24 hours.</p>
        </div>
      </section>
    </main>
  );
}
