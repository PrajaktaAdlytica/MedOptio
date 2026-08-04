import type { MetadataRoute } from "next";

const baseUrl = "https://www.medoptio.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: baseUrl, priority: 1 },
    { url: `${baseUrl}/products/review`, priority: 0.9 },
    { url: `${baseUrl}/products/refill`, priority: 0.9 },
    { url: `${baseUrl}/products/care`, priority: 0.9 },
    { url: `${baseUrl}/demo`, priority: 0.8 },
    {
      url: `${baseUrl}/news/medoptio-announces-550k-funding-from-tiphub`,
      lastModified: new Date("2025-11-09T00:00:00.000Z"),
      priority: 0.8,
    },
  ];
}
