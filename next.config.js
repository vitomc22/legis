/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'dist',
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
