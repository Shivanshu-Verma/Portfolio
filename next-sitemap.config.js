/** @type {import('next-sitemap').IConfig} */

const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://shivanshu.site";
const siteUrl = rawSiteUrl.startsWith("http")
  ? rawSiteUrl
  : `https://${rawSiteUrl}`;

module.exports = {
  siteUrl,
  changefreq: "monthly",
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  transform: async (config, path) => {
    const highPriorityPaths = new Set(["/", "/projects"]);

    return {
      loc: `${siteUrl.replace(/\/$/, "")}${path}`,
      changefreq: path === "/" ? "monthly" : "yearly",
      priority: highPriorityPaths.has(path) ? 0.9 : 0.6,
      lastmod: new Date().toISOString(),
      alternateRefs: config.alternateRefs || [],
    };
  },
  exclude: ["/api/*", "/admin/*"],
};
