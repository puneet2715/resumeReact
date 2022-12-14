/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        // port: '',
        // pathname: "/puneet2715/",
      },
    ],
  },
};

module.exports = nextConfig;
