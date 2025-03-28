import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    ppr: 'incremental',
  },
  eslint: {
    ignoreDuringBuilds: true, // ✅ Disable ESLint errors during build
  },
};

export default nextConfig;
