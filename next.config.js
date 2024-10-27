/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/legis",
  distDir: '/dist',
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
  images: {        
      unoptimized: true, // <=== disable image optimization
      path: `${basePath}/dist`, // <=== change the default image path
  },
};

module.exports = nextConfig;
