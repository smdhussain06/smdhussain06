/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  // Only add basePath for production builds (GitHub Pages)
  basePath: process.env.NODE_ENV === 'production' ? '/smdhussain06' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/smdhussain06' : '',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
