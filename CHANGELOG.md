# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [0.1.0] - 2025-02-16

### Added

- Next.js App Router app with TypeScript and `@/*` path alias.
- PrimeReact, PrimeIcons, PrimeFlex, Sass, date-fns, react-hook-form, Zustand.
- Blank app baseline: default create-next-app styles and assets removed.
- SCSS architecture: `src/styles/variables.scss`, `base.scss`, `utilities.scss`, `themes/dark-synth.scss`, `primereact-overrides.scss`, and single entry `main.scss` with strict load order.
- Multi-theme system: ThemeProvider with localStorage persistence (`app-theme`), `data-theme` on document, and `beforeInteractive` script to prevent flash.
- Dark-synth as default theme with full variable set and dialog overrides.
- Providers: ThemeProvider → PrimeReactProvider → children; `useTheme()` with theme, setTheme, cycleTheme.
- Root layout: Prime theme CSS → PrimeIcons → PrimeFlex → globals → main.scss; html `data-theme="dark-synth"`.
- Project structure: `src/app`, `src/components` (common, layout, ui, pages with index re-exports), `src/providers`, `src/styles`, `src/constants`, `src/types`, `src/hooks`, `src/services`, `src/stores`.
- Home page with PrimeReact Card, Button, and ThemeSwitcher component.
