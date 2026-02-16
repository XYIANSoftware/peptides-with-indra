import type { Metadata } from 'next';
import Script from 'next/script';
// PrimeReact: theme (required for styled mode), then icons and flex utilities
import 'primereact/resources/themes/lara-dark-blue/theme.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { DEFAULT_THEME_ID, THEME_STORAGE_KEY } from '@/constants';
import { Providers } from '@/providers';
import { getThemeInitScript, THEME_SCRIPT_ID } from './theme-script';
import './globals.css';
import './main.scss';

export const metadata: Metadata = {
  title: 'Peptides With Indra | Quality Peptides, Clear Information',
  description:
    'Science-backed peptides, explained simply. Quality you can trust—from a brand that cares about what goes into your body.',
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
