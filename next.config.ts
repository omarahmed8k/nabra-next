import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig = {
  // Removed legacy i18n (App Router handles locales via segments)
};

export default withNextIntl(nextConfig);
