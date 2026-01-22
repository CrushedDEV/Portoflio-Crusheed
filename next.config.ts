import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/Portoflio-Crusheed" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
