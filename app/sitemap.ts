import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { allPosts } from "contentlayer/generated";

const staticPages = [
  "",
  "/services",
  "/equipe",
  "/projects",
  "/blog",
  "/contact",
  "/careers",
  "/pricing",
  "/stack",
  "/about",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();
  const staticEntries = staticPages.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const blogEntries = allPosts.map((post) => ({
    url: `${siteConfig.url}/${post._raw.flattenedPath}`,
    lastModified: post.date || now,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries];
}
