"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import type { ChangeEvent, ComponentProps, MouseEvent, ReactNode } from "react";
import posthog from "posthog-js";

type EventProperties = Record<string, string | number | boolean | null | undefined>;

function pageProperties(extra?: EventProperties): EventProperties {
  if (typeof window === "undefined") return extra ?? {};

  return {
    path: window.location.pathname,
    url: window.location.href,
    referrer: document.referrer || undefined,
    ...extra,
  };
}

export function trackEvent(event: string, properties?: EventProperties) {
  if (typeof window === "undefined") return;
  posthog.capture(event, pageProperties(properties));
}

function lengthBucket(value: FormDataEntryValue | null) {
  const length = typeof value === "string" ? value.trim().length : 0;
  if (length === 0) return "empty";
  if (length < 120) return "short";
  if (length < 500) return "medium";
  return "long";
}

type TrackedLinkProps = ComponentProps<typeof Link> & {
  event: string;
  eventProperties?: EventProperties;
};

export function TrackedLink({ event, eventProperties, onClick, ...props }: TrackedLinkProps) {
  return (
    <Link
      {...props}
      onClick={(clickEvent) => {
        trackEvent(event, eventProperties);
        onClick?.(clickEvent);
      }}
    />
  );
}

type TrackedAnchorProps = ComponentProps<"a"> & {
  event: string;
  eventProperties?: EventProperties;
};

export function TrackedAnchor({ event, eventProperties, onClick, ...props }: TrackedAnchorProps) {
  return (
    <a
      {...props}
      onClick={(clickEvent) => {
        trackEvent(event, eventProperties);
        onClick?.(clickEvent);
      }}
    />
  );
}

type TrackedButtonProps = ComponentProps<"button"> & {
  event: string;
  eventProperties?: EventProperties;
};

export function TrackedButton({ event, eventProperties, onClick, ...props }: TrackedButtonProps) {
  return (
    <button
      {...props}
      onClick={(clickEvent: MouseEvent<HTMLButtonElement>) => {
        trackEvent(event, eventProperties);
        onClick?.(clickEvent);
      }}
    />
  );
}

type TrackedSelectProps = ComponentProps<"select"> & {
  event: string;
  eventProperties?: EventProperties;
};

export function TrackedSelect({ event, eventProperties, onChange, ...props }: TrackedSelectProps) {
  return (
    <select
      {...props}
      onChange={(changeEvent: ChangeEvent<HTMLSelectElement>) => {
        trackEvent(event, {
          ...eventProperties,
          value: changeEvent.currentTarget.value,
        });
        onChange?.(changeEvent);
      }}
    />
  );
}

type TrackedFormProps = ComponentProps<"form"> & {
  event: string;
  children: ReactNode;
};

export function TrackedForm({ event, children, onSubmit, ...props }: TrackedFormProps) {
  return (
    <form
      {...props}
      onSubmit={(submitEvent) => {
        const formData = new FormData(submitEvent.currentTarget);
        trackEvent(event, {
          project_type: formData.get("projectType")?.toString(),
          message_length_bucket: lengthBucket(formData.get("message")),
          brief_length_bucket: lengthBucket(formData.get("details")),
          has_project_type: Boolean(formData.get("projectType")),
        });
        onSubmit?.(submitEvent);
      }}
    >
      {children}
    </form>
  );
}

export function SectionViewEvent({ name }: { name: string }) {
  const elementRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry], currentObserver) => {
        if (!entry?.isIntersecting) return;
        trackEvent("section_viewed", { section: name });
        currentObserver.disconnect();
      },
      { threshold: 0.45 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [name]);

  return <span ref={elementRef} aria-hidden="true" className="analytics-sentinel" />;
}
