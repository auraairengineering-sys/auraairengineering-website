import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Legacy /solutions/* URLs now live under /industries/*
      { source: "/solutions", destination: "/industries", permanent: true },
      { source: "/solutions/:slug", destination: "/industries/:slug", permanent: true },
    ];
  },
};

export default nextConfig;
