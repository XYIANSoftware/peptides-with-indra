import type { Metadata } from 'next';
import Script from 'next/script';
// PrimeReact: theme (required for styled mode), then icons and flex utilities
import 'primereact/resources/themes/lara-dark-blue/theme.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import {
  DEFAULT_THEME_ID,
  SITE_DESCRIPTION,
  SITE_TITLE,
  SITE_URL,
  THEME_STORAGE_KEY,
} from '@/constants';
import { Providers } from '@/providers';
import { getThemeInitScript, THEME_SCRIPT_ID } from './theme-script';
import './globals.css';
import './main.scss';

const fullTitle = `${SITE_TITLE} | Quality Peptides, Clear Information`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: fullTitle,
    template: `%s | ${SITE_TITLE}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'peptides',
    'peptide supplements',
    'quality peptides',
    'science-backed',
    'wellness',
    'recovery',
    'longevity',
    'mobility',
  ],
  authors: [{ name: SITE_TITLE }],
  creator: SITE_TITLE,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_TITLE,
    title: fullTitle,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: '/og-image.png',
        width: 1536,
        height: 1024,
        alt: `${SITE_TITLE} – Quality peptides, clear information`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: fullTitle,
    description: SITE_DESCRIPTION,
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: SITE_URL },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme={DEFAULT_THEME_ID}>
      <body>
        <Script
          id={THEME_SCRIPT_ID}
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: getThemeInitScript(THEME_STORAGE_KEY, DEFAULT_THEME_ID),
          }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
