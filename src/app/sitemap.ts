import { MetadataRoute } from "next";
import LocalConfig from "@/constants/config";
import projects from "@/data/projects";

const getBaseUrl = () => {
  const raw = LocalConfig.values.NEXT_PUBLIC_SITE_URL;
  return raw.startsWith("http")
    ? raw.replace(/\/$/, "")
    : `https://${raw.replace(/^https?:\/\//, "").replace(/\/$/, "")}`;
};

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl();

  const baseEntries: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      changeFrequency: "monthly",
      priority: 1,
      lastModified: new Date(),
    },
  ];

  const projectEntries = projects.map<MetadataRoute.Sitemap[number]>(
    (project) => ({
      url: `${baseUrl}/projects/${project.id}`,
      changeFrequency: "yearly",
      priority: 0.8,
      lastModified: new Date(),
    })
  );

  return [...baseEntries, ...projectEntries];
}
