'use client';

import { ThemeProvider } from './ThemeProvider';
import { PrimeReactProvider } from './PrimeReactProvider';

/**
 * Root client providers. Order matters:
 * - ThemeProvider (outer): app theme state + localStorage, data-theme, useTheme()
 * - PrimeReactProvider (inner): PrimeReact context (ripple, locale, etc.)
 * Both are required for layout; children can be server or client components.
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <PrimeReactProvider>{children}</PrimeReactProvider>
    </ThemeProvider>
  );
}
