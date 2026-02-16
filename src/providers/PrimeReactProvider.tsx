'use client';

import { PrimeReactProvider as PrimeProvider } from 'primereact/api';

/**
 * PrimeReact global config. Wraps the app so all Prime components have access.
 * - ripple: button/click feedback (default false in Prime, we enable for polish)
 * - locale: en for accessibility labels and messages
 */
const primeReactValue = {
  ripple: true,
  locale: 'en',
} as const;

export function PrimeReactProvider({ children }: { children: React.ReactNode }) {
  return <PrimeProvider value={primeReactValue}>{children}</PrimeProvider>;
}
