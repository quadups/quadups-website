import type { Metadata } from "next";
import "@fontsource/questrial";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quadups Limited | Startup-as-a-Service & End-to-End Tech Solutions",
  description:
    "Quadups Limited helps founders, startups, and businesses validate, build, launch, and scale secure software products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
