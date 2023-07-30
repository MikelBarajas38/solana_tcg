/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "www.arweave.net",
      },
      {
        hostname: "arweave.net",
      },
    ],
  },
}

module.exports = nextConfig
