import type { MetadataRoute } from "next";

const baseUrl = "https://aniketarora.be";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-01-24");

  return [
    {
      url: baseUrl,
      lastModified,
      priority: 1
    },
    {
      url: `${baseUrl}/Resume.pdf`,
      lastModified,
      priority: 0.8
    }
  ];
}
