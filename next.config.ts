import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:file*.pkpass",
        headers: [
          { key: "Content-Type", value: "application/vnd.apple.pkpass" },
          { key: "Content-Disposition", value: "attachment" },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
