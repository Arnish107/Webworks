import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Local restaurant photos live in /public/images.
    // Keep remotePatterns empty until a CDN is intentionally added.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
