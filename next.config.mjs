/** @type {import('next').NextConfig} */
const nextConfig = {
  staticPageGenerationTimeout: 180,
  async redirects() {
    return [
      // Old Wix job pages → homepage (301 permanent)
      {
        source: '/jobs/:slug',
        destination: '/',
        permanent: true,
      },
      {
        source: '/jobs',
        destination: '/',
        permanent: true,
      },
      // Old Wix form page → request a bid
      {
        source: '/form',
        destination: '/request-a-bid',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
