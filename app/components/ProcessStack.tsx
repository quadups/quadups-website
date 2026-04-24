"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type ProcessStackProps = {
  steps: string[];
};

export function ProcessStack({ steps }: ProcessStackProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const container = containerRef.current;
    const cards = cardRefs.current.filter(Boolean) as HTMLLIElement[];

    if (reduceMotion || !container || cards.length < 2) return;

    const ctx = gsap.context(() => {
      gsap.set(cards[0], { yPercent: 0, scale: 1, rotate: 0, opacity: 1 });
      cards.slice(1).forEach((card) => {
        gsap.set(card, { yPercent: 118, scale: 1, rotate: 0, opacity: 1 });
      });

      cards.forEach((card, index) => {
        gsap.set(card, { zIndex: index + 1 });
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${window.innerHeight * (cards.length - 1)}`,
          pin: true,
          scrub: 0.55,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      for (let index = 0; index < cards.length - 1; index += 1) {
        const current = cards[index];
        const next = cards[index + 1];

        timeline.to(
          current,
          {
            scale: 0.72,
            rotate: index % 2 === 0 ? 4 : -4,
            yPercent: -8,
            duration: 1,
            ease: "none",
          },
          index,
        );

        timeline.to(
          next,
          {
            yPercent: 0,
            duration: 1,
            ease: "none",
          },
          index,
        );
      }
    }, container);

    const resizeObserver = new ResizeObserver(() => ScrollTrigger.refresh());
    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
      ctx.revert();
    };
  }, [steps.length]);

  return (
    <div className="process-stack" ref={containerRef}>
      <div className="process-stack-stage">
        <ol aria-label="How Quadups works">
          {steps.map((step, index) => (
            <li
              className="process-stack-card"
              key={step}
              ref={(element) => {
                cardRefs.current[index] = element;
              }}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{step}</strong>
              <p>
                {index === 0 && "Clarify the opportunity before a single sprint is committed."}
                {index === 1 && "Map the market, user promise, and system shape with founder-level context."}
                {index === 2 && "Pressure-test competitors, risks, and technical feasibility early."}
                {index === 3 && "Design the lean architecture and build the product path with security in mind."}
                {index > 3 && "Move through focused delivery cycles until the product is ready to launch and learn."}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
