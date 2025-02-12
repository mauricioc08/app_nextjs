/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'app-nextjs-theta.vercel.app',
        port: '',
        pathname: '/**',
        search: '',
      },
      {
        protocol: 'http',
        hostname: 'localhost:3000',
        port: '',
        pathname: '/**',
        search: '',
      },
    ],
  },
}

module.exports = nextConfig
