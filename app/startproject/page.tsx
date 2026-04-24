import Link from "next/link";
import { MotionLayer } from "../components/MotionLayer";
import { WirePanel } from "../components/SiteChrome";

export default function StartProjectPage() {
  return (
    <main className="project-page">
      <MotionLayer />
      <WirePanel>
        <h1 data-hero-stagger>Let&apos;s bring your visions into reality</h1>
      </WirePanel>
      <section className="project-form-section" aria-labelledby="project-title">
        <div className="project-form-wrap">
          <Link className="back-link" href="/" data-hero-stagger aria-label="Back to home">
            <span aria-hidden="true">←</span>
            Back
          </Link>
          <p className="eyebrow" data-hero-stagger>
            Start a project
          </p>
          <h2 id="project-title" data-hero-stagger>
            Tell us what you&apos;re building.
          </h2>
          <form className="project-form" data-hero-stagger>
            <select name="projectType" defaultValue="" aria-label="Select project type">
              <option value="" disabled>
                Select Project Type
              </option>
              <option>Startup-as-a-Service</option>
              <option>Web or software platform</option>
              <option>Mobile application</option>
              <option>AI automation</option>
              <option>Cloud, DevOps, or security</option>
            </select>
            <input name="name" placeholder="Name" aria-label="Name" />
            <input name="email" placeholder="Email" aria-label="Email" type="email" />
            <label>
              Describe your project in detail. Add your idea, links, references, goals, and any must-have features.
              <textarea name="details" aria-label="Project details" />
            </label>
            <button type="button">Send Project Enquiry</button>
          </form>
          <p className="form-note">Our team will reach out to you in less than 24 hours.</p>
        </div>
      </section>
    </main>
  );
}
