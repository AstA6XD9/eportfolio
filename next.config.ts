import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
        pathname: '/**',
      },
    ],
  },
  // Si tu utilises un sous-dossier sur GitHub Pages (ex: /portfolio), décommente la ligne suivante :
  // basePath: '/portfolio',
  // trailingSlash: true,
};

export default nextConfig;
