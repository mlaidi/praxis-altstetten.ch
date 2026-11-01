/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  compress: true,
  swcMinify: true,
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'praxis-altstetten.ch',
        pathname: '/wp-content/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.praxis-altstetten.ch' }],
        destination: 'https://praxis-altstetten.ch/:path*',
        permanent: true,
      },
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/home/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/hausaerzte-zuerich-altstetten',
        destination: '/',
        permanent: true,
      },
      {
        source: '/hausaerzte-zuerich-altstetten/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/service/herzuntersuchung',
        destination: '/leistungen/herzuntersuchung',
        permanent: true,
      },
      {
        source: '/service/herzuntersuchung/',
        destination: '/leistungen/herzuntersuchung',
        permanent: true,
      },
      {
        source: '/Service/herzuntersuchung',
        destination: '/leistungen/herzuntersuchung',
        permanent: true,
      },
      {
        source: '/Service/herzuntersuchung/',
        destination: '/leistungen/herzuntersuchung',
        permanent: true,
      },
      {
        source: '/service/:slug',
        destination: '/leistungen/:slug',
        permanent: true,
      },
      {
        source: '/Service/:slug',
        destination: '/leistungen/:slug',
        permanent: true,
      },
      {
        source: '/leistungen-alt/:path*',
        destination: '/#services',
        permanent: true,
      },
      {
        source: '/freie-stellen',
        destination: '/#contact',
        permanent: true,
      },
      {
        source: '/freie-stellen/',
        destination: '/#contact',
        permanent: true,
      },
      {
        source: '/make-an-appointment',
        destination: '/#contact',
        permanent: true,
      },
      {
        source: '/make-an-appointment/',
        destination: '/#contact',
        permanent: true,
      },
      {
        source: '/hausarztpraxis-altstetten-zuerich-kontakt',
        destination: '/#contact',
        permanent: true,
      },
      {
        source: '/hausarztpraxis-altstetten-zuerich-kontakt/',
        destination: '/#contact',
        permanent: true,
      },
      {
        source: '/doctor/dr-saskia-rodriguez-hausarztpraxis-zurich-in-altstetten',
        destination: '/#team',
        permanent: true,
      },
      {
        source: '/doctor/dr-saskia-rodriguez-hausarztpraxis-zurich-in-altstetten/',
        destination: '/#team',
        permanent: true,
      },
      {
        source: '/doctor/:path*',
        destination: '/#team',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
