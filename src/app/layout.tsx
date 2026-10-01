import "./globals.css";
import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import { rssAlternates } from "@/lib/posts";
import { absoluteUrl, site } from "@/lib/site";

// Runs before first paint so a saved light theme never flashes dark (Next "preventing flash" guide).
const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`;

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": absoluteUrl("/#person"),
    name: site.name,
    alternateName: site.handle,
    url: site.url,
    image: absoluteUrl("/icon.svg"),
    jobTitle: site.jobTitle,
    worksFor: {
      "@type": "Organization",
      name: site.company.name,
      sameAs: site.company.url,
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: site.college,
      sameAs: "https://iitj.ac.in/",
    },
    email: site.email,
    sameAs: [
      site.links.github,
      site.links.linkedin,
      site.links.x,
      site.links.instagram,
    ],
    knowsAbout: [
      "Backend engineering",
      "Distributed systems",
      "Cloud infrastructure",
      "Kubernetes",
      "Cybersecurity",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    url: site.url,
    name: site.name,
    description: site.description,
    inLanguage: "en",
    publisher: { "@id": absoluteUrl("/#person") },
  },
];

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: `%s · ${site.name}` },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "Technology",
  keywords: [
    "Shivanshu Verma",
    "ShivanshuV_",
    "Backend engineer",
    "Software engineer",
    "DoubleTick",
    "IIT Jodhpur",
    "Node.js",
    "NestJS",
    "Kubernetes",
    "Cybersecurity",
  ],
  formatDetection: { telephone: false, email: false },
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "en_IN",
    type: "profile",
    firstName: "Shivanshu",
    lastName: "Verma",
    username: site.handle,
    gender: "male",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    creator: `@${site.handle}`,
    site: `@${site.handle}`,
  },
  alternates: rssAlternates,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: { google: "4cVXJt04ZBVCuqNFDQA8VeR4JADAVKgP0u1QtK5tNyM" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0b",
};

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => (
  <html
    lang="en"
    data-theme="dark"
    className={`${GeistSans.variable} ${GeistMono.variable}`}
    suppressHydrationWarning
  >
    <head>
      <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </head>
    <body>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-foreground focus:px-4 focus:py-2.5 focus:text-sm focus:font-medium focus:text-background"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" tabIndex={-1} className="rails outline-none">
        {children}
      </main>
      <SiteFooter />
      <SpeedInsights />
    </body>
    {site.gaId ? <GoogleAnalytics gaId={site.gaId} /> : null}
  </html>
);

export default RootLayout;
