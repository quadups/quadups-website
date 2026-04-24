import type { MetadataRoute } from "next";
import { absoluteUrl } from "./seo";

const routes = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/services", priority: 0.95, changeFrequency: "weekly" },
  { path: "/startproject", priority: 0.9, changeFrequency: "weekly" },
  { path: "/contact", priority: 0.85, changeFrequency: "monthly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => {
    const url = absoluteUrl(route.path);

    return {
      url,
      lastModified: new Date(),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: {
          "en-GB": url,
          "en-US": url,
          "en-NG": url,
          "x-default": url,
        },
      },
    };
  });
}
