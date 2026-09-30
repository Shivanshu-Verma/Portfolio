import type { NextConfig } from "next";
import { withContentCollections } from "@content-collections/next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
};

// The plugin's return type predates Next 16's NextConfig, hence the cast.
export default withContentCollections(nextConfig) as Promise<NextConfig>;
