/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["nettruyen-crawl.vercel.app", "i.pinimg.com", "ar.toneden.io"],
  },
};

module.exports = nextConfig;
