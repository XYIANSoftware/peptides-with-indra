import type { ThemeOption } from '@/types';

export const THEMES: ThemeOption[] = [
  { id: 'socal-wellness-light', label: 'Wellness Light' },
  { id: 'dark-synth', label: 'Dark Synth' },
];

export const DEFAULT_THEME_ID = 'socal-wellness-light' as const;

export const THEME_STORAGE_KEY = 'app-theme';
