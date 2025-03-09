import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Only run ESLint on specific files or disable completely during builds
    ignoreDuringBuilds: true,},
};

export default nextConfig;
