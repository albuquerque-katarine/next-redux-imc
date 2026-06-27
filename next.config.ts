import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  devIndicators: false,
  images: {
    unoptimized: true,
  },
  
  basePath: "/next-redux-imc",
  assetPrefix: "/next-redux-imc/",

  trailingSlash: true,
};

export default nextConfig;
