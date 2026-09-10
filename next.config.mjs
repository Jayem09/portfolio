/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['react-icons'],
  },
  webpack: (config, { dev }) => {
    if (dev) {
      // Disable filesystem cache that corrupts with react-icons barrel
      config.cache = false;
    }
    return config;
  },
};
export default nextConfig;
