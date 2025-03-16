/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: "https://www.shivanshu.site",
  changefreq: "daily",
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  // Default transformation function
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
