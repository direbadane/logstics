import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  devIndicators:false,
  images: {
    // Set to `true` if your hosting doesn't support Next.js Image Optimization
    // (e.g., self-hosted Node.js, some Docker setups, Render, Fly.io).
    // Set to `false` (or remove) when deploying to Vercel for automatic optimization.
    unoptimized: false,
  },
};

export default nextConfig;
