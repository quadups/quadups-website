"use client";

import { TrackedButton } from "./PostHogEvents";

export function CalendlyButton() {
  const openCalendly = () => {
    const calendlyLink = "https://calendly.com/quadupsltd/30min";
    window.open(calendlyLink, "_blank");
  };

  return (
    <TrackedButton
      className="secondary-button calendly-button"
      event="calendly_clicked"
      eventProperties={{ location: "contact_hero" }}
      type="button"
      onClick={openCalendly}
    >
      Book a 30 min call
    </TrackedButton>
  );
}
