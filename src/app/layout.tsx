import "./globals.scss";
import { Poppins } from "next/font/google";
import { ReactNode } from "react";
import { Metadata, Viewport } from "next";
import Script from "next/script";
import LocalConfig from "@/constants/config";
import Strings from "@/constants/strings";
import { WebVitals } from "@/components/common/WebVitals";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
  preload: true,
  fallback: [
    "system-ui",
    "arial",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Fira Sans",
    "Droid Sans",
  ],
});

const rawSiteUrl = LocalConfig.values.NEXT_PUBLIC_SITE_URL;
const siteUrl = rawSiteUrl.startsWith("http")
  ? rawSiteUrl
  : `https://${rawSiteUrl.replace(/^https?:\/\//, "")}`;
const normalizedBase = siteUrl.replace(/\/$/, "");
const primaryEmail = LocalConfig.values.NEXT_PUBLIC_PRIMARY_EMAIL;
const primaryLocation = LocalConfig.values.NEXT_PUBLIC_PRIMARY_LOCATION;
const primaryCollege = LocalConfig.values.NEXT_PUBLIC_PRIMARY_COLLEGE;
const gtagId = LocalConfig.values.NEXT_PUBLIC_GTAG_ID;

const defaultOgImage = `${normalizedBase}/opengraph-image`;
const defaultTwitterImage = `${normalizedBase}/twitter-image`;

const sameAsProfiles = [
  Strings.githubLink,
  Strings.linkedInLink,
  Strings.twitterLink,
  Strings.telegramLink,
  Strings.instagramLink,
  Strings.primaryEmailLink,
  normalizedBase,
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: Strings.fullName,
    alternateName: [Strings.shortName, "Shivanshu V"],
    description:
      "Software engineer, full stack developer, and cybersecurity enthusiast building secure, scalable products and leading student communities.",
    url: siteUrl,
    "@id": `${normalizedBase}#person`,
    image: `${normalizedBase}/images/prometeo.jpg`,
    jobTitle: "Software Engineer & Cybersecurity Enthusiast",
    worksFor: [
      {
        "@type": "Organization",
        name: "DevlUp Labs",
        sameAs: "https://devluplabs.tech/",
      },
    ],
    memberOf: [
      {
        "@type": "Organization",
        name: "Google Developer Student Clubs",
        sameAs: "https://developers.google.com/community/gdsc",
      },
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: primaryCollege,
      sameAs: "https://iitj.ac.in/",
    },
    email: primaryEmail,
    sameAs: sameAsProfiles,
    knowsAbout: [
      "Full Stack Development",
      "Cybersecurity",
      "DevSecOps",
      "Cloud Computing",
      "Reverse Engineering",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: primaryLocation,
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Business",
      email: primaryEmail,
      telephone: Strings.primaryPhone,
      availableLanguage: ["English", "Hindi"],
      url: `${normalizedBase}/#contact`,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${normalizedBase}#website`,
    url: siteUrl,
    name: `${Strings.fullName} Portfolio`,
    description:
      "Explore the portfolio, engineering work, cybersecurity projects, and publications of Shivanshu Verma from IIT Jodhpur.",
    inLanguage: "en",
    publisher: {
      "@id": `${normalizedBase}#person`,
    },
    potentialAction: [
      {
        "@type": "ContactAction",
        target: `${normalizedBase}/#contact`,
        name: "Start a collaboration with Shivanshu Verma",
      },
    ],
  },
];

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  referrer: "origin-when-cross-origin",
  title: {
    default: `${Strings.fullName} | Portfolio` as string,
    template: `%s | ${Strings.fullName}`,
  },
  description:
    "Discover Shivanshu Verma—software engineer, full stack developer, and cybersecurity enthusiast from IIT Jodhpur. Explore experiences, projects, skills, publications, and ways to collaborate.",
  applicationName: `${Strings.fullName} Portfolio`,
  category: "Technology",
  generator: "Next.js 14",
  authors: [{ name: Strings.fullName, url: siteUrl }],
  creator: Strings.fullName,
  publisher: Strings.fullName,
  keywords: [
    "Shivanshu Verma",
    "Shivanshu",
    "ShivanshuV_",
    "Shivanshu-Verma",
    "IIT Jodhpur",
    "Indian Institute of Technology Jodhpur",
    "Software Engineer",
    "Full Stack Developer",
    "Cybersecurity Enthusiast",
    "DevSecOps",
    "MERN Stack",
    "Cloud Security",
    "Open Source Contributor",
    "Tech Speaker",
    "Student Developer",
  ],
  formatDetection: {
    telephone: false,
    address: true,
    email: false,
  },
  openGraph: {
    title: `${Strings.fullName} | Software Engineer & Cybersecurity Enthusiast`,
    description:
      "Portfolio of Shivanshu Verma, a software engineer and cybersecurity enthusiast from IIT Jodhpur. Explore projects, speaking, and consulting work.",
    url: siteUrl,
    siteName: `${Strings.fullName} Portfolio`,
    locale: "en_IN",
    type: "profile",
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: `${Strings.fullName} portfolio preview banner`,
      },
    ],
    firstName: "Shivanshu",
    lastName: "Verma",
    username: Strings.shortName,
    gender: "male",
    emails: [primaryEmail],
  },
  twitter: {
    card: "summary_large_image",
    title: `${Strings.fullName} | Software Engineer & Cybersecurity Enthusiast`,
    description:
      "Hi, I'm Shivanshu Verma—full stack developer and cybersecurity enthusiast from IIT Jodhpur. Check out my work and connect with me.",
    creator: "@ShivanshuV_",
    site: "@ShivanshuV_",
    images: [defaultTwitterImage],
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      "en-US": `${siteUrl}/`,
      "en-IN": `${siteUrl}/`,
    },
  },
  appLinks: {
    web: {
      url: siteUrl,
    },
  },
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
  verification: {
    google: "4cVXJt04ZBVCuqNFDQA8VeR4JADAVKgP0u1QtK5tNyM",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", rel: "icon", type: "image/x-icon" },
      {
        url: "/icon.svg",
        rel: "icon",
        type: "image/svg+xml",
      },
    ],
    apple: [
      {
        url: "/images/placeholder.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/site.webmanifest",
  colorScheme: "dark light",
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#050505" }],
  other: {
    "msapplication-TileColor": "#050505",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#050505",
};

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html lang="en" className={poppins.className}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {JSON.stringify(structuredData)}
        </Script>

        {gtagId ? (
          <>
            <Script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${gtagId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gtagId}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        ) : null}
      </head>

      <body
        className={
          process.env.NODE_ENV === "development" ? "debug-screens" : ""
        }
      >
        {process.env.NODE_ENV === "development" ? <WebVitals /> : null}
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
