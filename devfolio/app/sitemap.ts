import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

// Single-page portfolio: every section lives on "/" behind an anchor, so the
// sitemap has one canonical entry for the site root.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
