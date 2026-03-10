import type { NextConfig } from "next";
import { withContentlayer } from "next-contentlayer";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
  },
  turbopack: {
    root: __dirname,
  },
};

export default withContentlayer(nextConfig);
