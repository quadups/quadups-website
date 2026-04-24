"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function MotionLayer() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-hero-stagger]", {
        y: 34,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.11,
      });

      gsap.from(".wire-orbit", {
        scale: 0.86,
        rotate: -12,
        opacity: 0,
        duration: 1.25,
        ease: "expo.out",
        delay: 0.2,
      });

      gsap.to(".wire-orbit", {
        y: -22,
        rotate: 2,
        duration: 5.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((section) => {
        gsap.from(section.querySelectorAll("[data-reveal-item]"), {
          scrollTrigger: {
            trigger: section,
            start: "top 78%",
          },
          y: 42,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.09,
        });
      });

      gsap.utils.toArray<HTMLElement>(".interactive-card").forEach((card) => {
        const enter = () => gsap.to(card, { y: -9, scale: 1.015, duration: 0.25, ease: "power2.out" });
        const leave = () => gsap.to(card, { y: 0, scale: 1, duration: 0.35, ease: "power2.out" });
        card.addEventListener("mouseenter", enter);
        card.addEventListener("mouseleave", leave);
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}
