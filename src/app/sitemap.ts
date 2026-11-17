import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/profile";
import { getAllPosts } from "@/lib/blog";
import { projects } from "@/data/projects";

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
    ...projects.map((project) => ({ url: `${siteConfig.url}/projects/${project.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 })),
    ...posts,
  ];
}
