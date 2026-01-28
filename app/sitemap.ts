import type { MetadataRoute } from "next";

const baseUrl = "https://aniketarora.be";

export default function sitemap(): MetadataRoute.Sitemap {
  const buildTime =
    process.env.BUILD_TIME ??
    process.env.VERCEL_GIT_COMMIT_TIMESTAMP ??
    process.env.SOURCE_DATE_EPOCH;
  const lastModified = buildTime
    ? new Date(
        /^\d+$/.test(buildTime)
          ? Number(buildTime) * (buildTime.length === 13 ? 1 : 1000)
          : buildTime
      )
    : new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      priority: 1
    },
    {
      url: `${baseUrl}/resume`,
      lastModified,
      priority: 0.8
    },
    {
      url: `${baseUrl}/resume.pdf`,
      lastModified,
      priority: 0.7
    }
  ];
}
