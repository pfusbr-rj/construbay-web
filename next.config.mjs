/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    tsconfigPath: 'tsconfig.build.json',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  staticPageGenerationTimeout: 300,
  experimental: {
    workerThreads: false,
    cpus: 1,
  },
  async redirects() {
    return [
      { source: '/jobs/:slug', destination: '/', permanent: true },
      { source: '/jobs', destination: '/', permanent: true },
      { source: '/form', destination: '/request-a-bid', permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [{ key: 'X-Robots-Tag', value: 'index, follow' }],
      },
    ];
  },
};

export default nextConfig;
