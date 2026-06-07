/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Wolfsbane',
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: '/Wolfsbane',
  },
};

export default nextConfig;
