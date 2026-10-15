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
        source: '/galerie',
        destination: '/',
        permanent: true,
      },
      {
        source: '/810',
        destination: '/',
        permanent: true,
      },
      {
        source: '/category/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/freie-stellen',
        destination: '/#contact',
        permanent: true,
      },
      {
        source: '/faqs',
        destination: '/',
        permanent: true,
      },
      {
        source: '/wp-:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/author/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/wp-content/themes/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/wp-login.php',
        destination: '/',
        permanent: true,
      },
      {
        source: '/wp-admin/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/galerie/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/service/herzuntersuchung/',
        destination: '/leistungen/herzuntersuchung',
        permanent: true,
      },
      {
        source: '/service/herzuntersuchung',
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
        destination: '/leistungen',
        permanent: true,
      },
      {
        source: '/hausaerzte-zuerich-altstetten/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/neuigkeiten-hausarztpraxis-zuerich-atlstetten',
        destination: '/',
        permanent: true,
      },
      {
        source: '/make-an-appointment',
        destination: '/',
        permanent: true,
      },
      {
        source: '/hausarztpraxis-altstetten-zuerich-kontakt',
        destination: '/#contact',
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
