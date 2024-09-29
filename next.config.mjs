/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.congress.gov',
      },
    ],
  },
};

export default nextConfig;
