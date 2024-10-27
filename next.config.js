/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/legis",
  distDir: '/dist',
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
  images: {        
      unoptimized: true, // <=== disable image optimization
      localPatterns: [
        {
          pathname: ' legis/images/**',
          search: '',
        },
      ],
  },
};

module.exports = nextConfig;
