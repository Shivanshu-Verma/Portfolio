import type { MetadataRoute } from "next";
import projects from "@/data/projects";
import { posts } from "@/lib/posts";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const published = posts.filter((post) => !post.draft);

  return [
    {
      url: absoluteUrl("/"),
      changeFrequency: "monthly",
      priority: 1,
      lastModified,
    },
    ...projects.map((project) => ({
      url: absoluteUrl(`/projects/${project.id}`),
      changeFrequency: "yearly" as const,
      priority: 0.8,
      lastModified,
    })),
    ...(published.length
      ? [
          {
            url: absoluteUrl("/writing"),
            changeFrequency: "weekly" as const,
            priority: 0.7,
            lastModified,
          },
        ]
      : []),
    ...published.map((post) => ({
      url: absoluteUrl(`/writing/${post.slug}`),
      changeFrequency: "yearly" as const,
      priority: 0.6,
      lastModified: new Date(post.date),
    })),
  ];
}
