import type { ThemeOption } from '@/types';

export const THEMES: ThemeOption[] = [
  { id: 'dark-synth', label: 'Dark Synth' },
];

export const DEFAULT_THEME_ID = 'dark-synth' as const;

export const THEME_STORAGE_KEY = 'app-theme';
