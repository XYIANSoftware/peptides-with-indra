export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
] as const;

export const CTA_LABEL = 'Shop Products';
export const CTA_HREF = '/products';

export const SITE_TITLE = 'Peptides With Indra';

/** Used for metadataBase, openGraph.url, canonical; set NEXT_PUBLIC_SITE_URL in production. */
export const SITE_URL =
  typeof process !== 'undefined' && process.env.NEXT_PUBLIC_SITE_URL
    ? process.env.NEXT_PUBLIC_SITE_URL
    : 'https://peptideswithindra.com';

export const SITE_DESCRIPTION =
  'Science-backed peptides, explained simply. Quality you can trust—from a brand that cares about what goes into your body.';
