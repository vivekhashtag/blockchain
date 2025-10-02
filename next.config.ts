import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Disable ESLint during builds (warnings won't fail the build)
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
