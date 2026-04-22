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
      { source: '/adu/marin-county', destination: '/adu-marin-county', permanent: true },
      { source: '/home', destination: '/', permanent: true },
      { source: '/contact', destination: '/request-a-bid', permanent: true },
      { source: '/jobs/:slug', destination: '/', permanent: true },
      { source: '/jobs', destination: '/', permanent: true },
      { source: '/form', destination: '/request-a-bid', permanent: true },
      { source: '/adu', destination: '/services/adu-builder-marin-county', permanent: true },
      { source: '/adu-marin-county', destination: '/services/adu-builder-marin-county', permanent: true },
      { source: '/adu-sonoma-county', destination: '/services/adu-builder-sonoma-county', permanent: true },
      { source: '/adu-builder-marin-county', destination: '/services/adu-builder-marin-county', permanent: true },
      { source: '/adu-builder-sonoma-county', destination: '/services/adu-builder-sonoma-county', permanent: true },
      { source: '/marin-county-adu-builder', destination: '/services/adu-builder-marin-county', permanent: true },
      { source: '/mill-valley-adu-builder', destination: '/services/adu-builder-mill-valley', permanent: true },
      { source: '/adu-builder/mill-valley', destination: '/services/adu-builder-mill-valley', permanent: true },
      { source: '/adu-builder/petaluma', destination: '/services/adu-builder-sonoma-county', permanent: true },
      { source: '/adu-builder/san-rafael', destination: '/services/adu-builder-marin-county', permanent: true },
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
