import Link from "next/link";
import type { Metadata } from "next";
import { MotionLayer } from "../components/MotionLayer";
import { JsonLd } from "../components/JsonLd";
import { RichProjectBrief } from "../components/RichProjectBrief";
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
        <div className="project-hero-copy" data-hero-stagger>
          <p>Founder intake</p>
          <h1>Let&apos;s shape your idea into a launch-ready product.</h1>
        </div>
      </WirePanel>
      <section className="project-form-section" aria-labelledby="project-title">
        <div className="project-form-wrap">
          <Link className="back-link" href="/" data-hero-stagger aria-label="Back to home">
            <span aria-hidden="true">{"<"}</span>
            Back
          </Link>
          <div className="project-intake-card" data-hero-stagger>
            <div className="project-intake-head">
              <p className="eyebrow">Start a project</p>
              <h2 id="project-title">Tell us what you&apos;re building.</h2>
              <p>
                Share the shape of the product, where you are now, and what a successful first milestone looks like.
              </p>
            </div>

            <form className="project-form" action={FORM_ENDPOINT} method="POST">
              <input type="hidden" name="_subject" value="New Quadups project enquiry" />
              <label className="project-field project-field-full">
                <span>Project type</span>
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
              </label>
              <label className="project-field">
                <span>Name</span>
                <input name="name" placeholder="Your name" aria-label="Name" required />
              </label>
              <label className="project-field">
                <span>Email</span>
                <input name="email" placeholder="you@example.com" aria-label="Email" type="email" required />
              </label>
              <label className="project-field project-field-full">
                <span>Project brief</span>
                <small>
                  Include the idea, target users, deadline, useful links, and anything that would help us understand the
                  opportunity quickly.
                </small>
                <RichProjectBrief />
              </label>
              <div className="project-submit-row">
                <button type="submit">Send Project Enquiry</button>
                <p>We usually respond in less than 24 hours. No spam, only replies about your idea or project enquiry.</p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
