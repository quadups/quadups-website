"use client";

export function CalendlyButton() {
  const openCalendly = () => {
    const calendlyLink = "https://calendly.com/quadupsltd/30min";
    window.open(calendlyLink, "_blank");
  };

  return (
    <button className="secondary-button calendly-button" type="button" onClick={openCalendly}>
      Book a 30 min call
    </button>
  );
}
