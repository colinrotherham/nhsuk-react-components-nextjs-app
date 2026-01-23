import { join } from 'node:path';
import { type NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  sassOptions: {
    implementation: 'sass-embedded',
  },
};

export default nextConfig;
