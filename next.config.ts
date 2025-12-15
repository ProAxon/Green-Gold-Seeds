import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ['46.62.128.100'],
  async rewrites() {
    return [
      {
        source: '/strapi/:path*',
        destination: 'http://localhost:1337/:path*',
      },
    ];
  },
};

export default withNextIntl(nextConfig);
