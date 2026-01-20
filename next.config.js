/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  // Ensure CSS is processed correctly
  webpack: (config) => {
    return config
  },
}

module.exports = nextConfig
