import posthog from 'posthog-js'

posthog.init(process.env.NEXT_PUBLIC_POSTHOG_TOKEN!, {
  api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
  defaults: '2026-01-30',
  person_profiles: 'identified_only',
  capture_pageview: false,
  capture_pageleave: true,
})

if (typeof window !== 'undefined') {
  posthog.capture('$pageview', { $current_url: window.location.href })
}

export function onRouterTransitionStart(url: string) {
  posthog.capture('$pageview', { $current_url: url })
}
