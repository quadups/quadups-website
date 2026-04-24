import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "@fontsource/questrial";
import "./globals.css";
import { JsonLd } from "./components/JsonLd";
import { absoluteUrl, organizationJsonLd, pageMetadata, siteUrl, websiteJsonLd } from "./seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  ...pageMetadata({
    title: "Quadups Limited | Startup-as-a-Service, MVP Development & AI Automation",
    description:
      "Quadups Limited is a Startup-as-a-Service technology partner for founders and businesses in the UK, US, Europe, Africa, and Nigeria. Validate, build, launch, and scale secure software products.",
    path: "/",
  }),
  applicationName: "Quadups Limited",
  authors: [{ name: "Quadups Limited", url: siteUrl }],
  creator: "Quadups Limited",
  publisher: "Quadups Limited",
  category: "Technology consulting",
  classification: "Software development, startup technology partner, AI automation, cloud, DevOps, cybersecurity",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/quadups-black-small-transparent.svg", type: "image/svg+xml" }],
    shortcut: "/quadups-black-small-transparent.svg",
    apple: "/quadups-black-small-transparent.svg",
  },
  manifest: absoluteUrl("/manifest.webmanifest"),
  other: {
    "geo.region": "GB",
    "geo.placename": "United Kingdom, United States, Europe, Africa, Nigeria",
    "target-region": "GB, US, EU, NG, AF",
    "business:contact_data:email": "hello@quadupsltd.com",
    "ai-summary":
      "Quadups Limited provides Startup-as-a-Service, technical co-founder support, MVP development, AI automation, cloud, DevOps, blockchain, and cybersecurity engineering for founders and businesses across the UK, US, Europe, Africa, and Nigeria.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <JsonLd data={[organizationJsonLd, websiteJsonLd]} />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
