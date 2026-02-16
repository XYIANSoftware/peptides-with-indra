'use client';

import { ThemeProvider } from './ThemeProvider';
import { PrimeReactProvider } from './PrimeReactProvider';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <PrimeReactProvider>{children}</PrimeReactProvider>
    </ThemeProvider>
  );
}
