import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/marketing',
        destination: '/resumes/all-points',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
