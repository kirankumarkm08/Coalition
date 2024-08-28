/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fedskillstest.ct.digital",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
