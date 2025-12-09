import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Logence_HP',
  assetPrefix: '/Logence_HP/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
