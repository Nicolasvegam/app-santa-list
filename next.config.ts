import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Disable ESLint during build for now - PWA testing
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Disable type checking during build for now - PWA testing  
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
