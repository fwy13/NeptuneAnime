import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.animevietsub.ink",
        port: "",
        pathname: "/**"
      }
    ]
  }
};

export default nextConfig;
