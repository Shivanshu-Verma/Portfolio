const LocalConfig = {
  values: {
    TZ: process.env.TZ,
    NODE_ENV: process.env.NODE_ENV,
    AUTOPREFIXER_GRID: process.env.AUTOPREFIXER_GRID,
    NEXT_PUBLIC_GTAG_ID: process.env.NEXT_PUBLIC_GTAG_ID,
    NEXT_PUBLIC_GITHUB_TOKEN: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
    NEXT_PUBLIC_VERCEL_TOKEN: process.env.NEXT_PUBLIC_VERCEL_TOKEN,
    NEXT_PUBLIC_RESUME_LINK: process.env.NEXT_PUBLIC_RESUME_LINK || "#",
    NEXT_PUBLIC_SITE_URL:
      process.env.NEXT_PUBLIC_SITE_URL || "https://shivanshu.site",
    NEXT_PUBLIC_PRIMARY_EMAIL:
      process.env.NEXT_PUBLIC_PRIMARY_EMAIL || "v2.shivanshu@gmail.com",
    NEXT_PUBLIC_PRIMARY_LOCATION:
      process.env.NEXT_PUBLIC_PRIMARY_LOCATION || "Jodhpur, Rajasthan, India",
    NEXT_PUBLIC_PRIMARY_COLLEGE:
      process.env.NEXT_PUBLIC_PRIMARY_COLLEGE ||
      "Indian Institute of Technology (IIT) Jodhpur",
  },
};

export default LocalConfig;
