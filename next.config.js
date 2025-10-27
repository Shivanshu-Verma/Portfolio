/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**.githubusercontent.com" },
      { protocol: "https", hostname: "**.github.com" },
      { protocol: "https", hostname: "cdn.buymeacoffee.com" },
      { protocol: "https", hostname: "storage.ko-fi.com" },
    ],
  },
  eslint: {
    // Allow production builds to complete even if ESLint finds warnings.
    ignoreDuringBuilds: true,
  },
  trailingSlash: false,
  poweredByHeader: false,
  generateBuildId: async () => {
    if (process.env.NEXT_BUILD_ID) {
      return process.env.NEXT_BUILD_ID;
    }
    return `${Date.now()}`;
  },
  experimental: {
    instrumentationHook: true,
  },
};

module.exports = nextConfig;
