import Link from "next/link";
import Image from "next/image";
import { MotionLayer } from "./MotionLayer";

export const navLinks = [
  ["Services", "/services"],
  ["About us", "/about"],
  ["Contact", "/contact"],
];

export function Logo() {
  return (
    <Link className="brand" href="/" aria-label="Quadups home">
      <Image
        src="/quadups-full-white.png"
        alt="Quadups logo"
        width={120}
        height={40}
        priority
      />
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="site-nav">
      <Logo />
      <nav aria-label="Primary navigation">
        {navLinks.map(([label, href]) => (
          <Link href={href} key={href}>
            {label}
          </Link>
        ))}
      </nav>
      <Link className="nav-cta" href="/startproject">
        Start a project
      </Link>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer" data-reveal>
      <div className="footer-beam" aria-hidden="true" />
      <div className="footer-main">
        <div data-reveal-item>
          <Logo />
          <p>Startup-as-a-Service, product engineering, AI automation, cloud, and security for teams ready to move.</p>
        </div>
        <nav aria-label="Footer navigation" data-reveal-item>
          {navLinks.map(([label, href]) => (
            <Link href={href} key={href}>
              {label}
            </Link>
          ))}
          <Link href="/startproject">Start a project</Link>
        </nav>
        <div className="footer-signal interactive-card" data-reveal-item>
          <span>Next build window</span>
          <strong>Open</strong>
          <Link href="mailto:hello@quadupsltd.com">hello@quadupsltd.com</Link>
        </div>
      </div>
      <div className="footer-bottom" data-reveal-item>
        <span>Quadups Limited</span>
        <span>Building smarter, faster, and more securely.</span>
      </div>
    </footer>
  );
}

export function PageShell({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="site-shell" id="top">
      <MotionLayer />
      <SiteHeader />
      {children}
      <SiteFooter />
    </main>
  );
}

export function WirePanel({ children, compact = false }: Readonly<{ children?: React.ReactNode; compact?: boolean }>) {
  return (
    <div className={`wire-panel ${compact ? "wire-panel-compact" : ""}`}>
      <Logo />
      <div className="wire-orbit" />
      {children ? <div className="wire-panel-copy">{children}</div> : null}
    </div>
  );
}
