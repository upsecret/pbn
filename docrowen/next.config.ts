import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep prerendering from overwhelming the WordPress REST API.
  experimental: {
    cpus: 1,
    staticGenerationMaxConcurrency: 1,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cms.docrowen.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
