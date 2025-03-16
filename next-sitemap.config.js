/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: "https://www.shivanshu.site",
  changefreq: "yearly",
  priority: 1,
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
