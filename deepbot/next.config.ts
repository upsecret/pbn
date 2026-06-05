import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cms.deepbot.tv' },
      { protocol: 'http',  hostname: 'cms.deepbot.tv' },
    ],
  },
}

export default nextConfig
