import { NextConfig } from 'next';
import webpack, { Configuration } from 'webpack';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['example.com', 'another-domain.com'],
  },
  env: {
    CUSTOM_API_URL: process.env.CUSTOM_API_URL || 'https://api.example.com',
  },
  async rewrites() {
    return [
      {
        source: '/old-route',
        destination: '/new-route',
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/old-page',
        destination: '/new-page',
        permanent: true,
      },
    ];
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignorar errores de ESLint durante la construcción
  },
  webpack(config: Configuration, { isServer }: { isServer: boolean }): Configuration {
    // Verificamos si 'config.resolve' es un objeto antes de modificarlo
    if (!isServer && config.resolve && typeof config.resolve === 'object') {
      config.resolve.fallback = {
        fs: false,
        path: false,
      };
    }
    return config;
  },
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'es',
  },
};

export default nextConfig;
