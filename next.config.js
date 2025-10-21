/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com']
  },
  experimental: {
    appDir: false
  }
}

module.exports = nextConfig