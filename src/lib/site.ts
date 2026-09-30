const normalizeUrl = (raw: string): string =>
  (/^https?:\/\//.test(raw) ? raw : `https://${raw}`).replace(/\/+$/, "");

const resumeUrl = process.env.NEXT_PUBLIC_RESUME_LINK;

export const site = {
  name: "Shivanshu Verma",
  handle: "ShivanshuV_",
  url: normalizeUrl(
    process.env.NEXT_PUBLIC_SITE_URL || "https://shivanshu.site",
  ),
  title: "Shivanshu Verma · Backend engineer",
  description:
    "Shivanshu Verma, backend engineer (SDE-2) at DoubleTick. APIs, message pipelines and infrastructure; projects, experience and writing.",
  jobTitle: "Software Development Engineer II",
  company: { name: "DoubleTick", url: "https://doubletick.io" },
  email: "v2.shivanshu@gmail.com",
  location: "Jodhpur, Rajasthan, India",
  college: "Indian Institute of Technology (IIT) Jodhpur",
  gaId: process.env.NEXT_PUBLIC_GTAG_ID,
  /** Undefined when NEXT_PUBLIC_RESUME_LINK is unset; résumé links are hidden then. */
  resumeUrl: resumeUrl && resumeUrl !== "#" ? resumeUrl : undefined,
  links: {
    github: "https://www.github.com/Shivanshu-Verma",
    linkedin: "https://www.linkedin.com/in/verma-shivanshu",
    x: "https://www.twitter.com/ShivanshuV_",
    instagram: "https://www.instagram.com/_shivanshuv",
    email: "mailto:v2.shivanshu@gmail.com",
    source: "https://github.com/Shivanshu-Verma/Portfolio",
    coffee: "https://www.buymeacoffee.com/shivanshuv",
  },
} as const;

export const absoluteUrl = (path = "/"): string =>
  new URL(path, `${site.url}/`).toString();
