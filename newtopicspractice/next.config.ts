import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'shippo-static.s3.amazonaws.com',
        port: '',
        pathname: '/**',
      },
    ]
  }
};

export default nextConfig;
