import { MetadataRoute } from "next";
import LocalConfig from "@/constants/config";

const getBaseUrl = () => {
  const raw = LocalConfig.values.NEXT_PUBLIC_SITE_URL;
  return raw.startsWith("http")
    ? raw.replace(/\/$/, "")
    : `https://${raw.replace(/^https?:\/\//, "").replace(/\/$/, "")}`;
};

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getBaseUrl();

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: [`${baseUrl}/sitemap.xml`],
    host: baseUrl,
  };
}
