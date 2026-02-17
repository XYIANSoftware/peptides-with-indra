export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
] as const;

/** Footer legal links (Terms, Privacy). */
export const LEGAL_LINKS = [
  { href: '/terms', label: 'Terms of use' },
  { href: '/privacy', label: 'Privacy policy' },
] as const;

export const CTA_LABEL = 'Shop Products';
export const CTA_HREF = '/products';

/** Our product brochure PDF in public/ — link for download. */
export const BROCHURE_PDF_PATH = '/GoddessWellnessF.pdf';
export const BROCHURE_LABEL = 'Download our brochure';

export const SITE_TITLE = 'Goddess Wellness';

/** Used for metadataBase, openGraph.url, canonical; set NEXT_PUBLIC_SITE_URL in production. */
export const SITE_URL =
  typeof process !== 'undefined' && process.env.NEXT_PUBLIC_SITE_URL
    ? process.env.NEXT_PUBLIC_SITE_URL
    : 'https://peptideswithindra.com';

export const SITE_DESCRIPTION =
  'Goddess Wellness: professional peptides, your way. Clear information and easy access for everyday use, recovery, and injury-specific support.';
