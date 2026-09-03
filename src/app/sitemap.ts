import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/profile";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts().map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(`${post.date}T00:00:00Z`),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    { url: siteConfig.url, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${siteConfig.url}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    ...posts,
  ];
}
