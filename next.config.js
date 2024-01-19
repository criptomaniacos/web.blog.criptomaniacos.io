/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { hostname: "img.youtube.com" },
      { hostname: "ghost.cmania.co" },
    ],
  },
};

module.exports = nextConfig;
