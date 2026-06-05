import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.spc.noaa.gov", pathname: "/**" },
      { protocol: "https", hostname: "spc.noaa.gov", pathname: "/**" },
      { protocol: "https", hostname: "radar.weather.gov", pathname: "/**" },
      { protocol: "https", hostname: "www.weather.gov", pathname: "/**" },
      { protocol: "https", hostname: "www.star.nesdis.noaa.gov", pathname: "/**" },
    ],
  },
  async redirects() {
    return [
      {
        source: "/:year(\\d{4})/:month(\\d{1,2})/:slug.html",
        destination: "/post/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
