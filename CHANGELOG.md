# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

### Added

- **Product spec tag dialogs**: Tags (Recovery, Research-backed, 5 mg, Mobility, Longevity, Cellular, 10 mg) are clickable with subtle hover and active styles; click/tap opens a dialog with short, factual copy. Same look as before so they don’t scream “clickable.”
- **Reusable `TagInfoDialog`**: Props `visible`, `onHide`, `title`, `description`; used for tag info. Exported from `@/components/ui`.
- **`ProductTag` component**: Renders a tag by `label`; if dialog info exists (from constants), tag is a button that opens `TagInfoDialog`; otherwise renders a plain PrimeReact Tag. Used in ProductCard and product detail page.
- **New constants file `productTagDialogs.ts`**: `TAG_DIALOG_LIST` (list of `TagDialogInfo`: id, label, dialogTitle, dialogDescription) and `getTagDialogInfo(label)`. Hard-coded for fast lookups and easy edits. (Requested name was PRODUCTS.ts; on case-insensitive systems that would overwrite products.ts, so the file is `productTagDialogs.ts`. Rename to PRODUCTS.ts on a case-sensitive FS if desired.)
- **Type `TagDialogInfo`** in `product.types.ts` and re-exported from `@/types`.
- **README**: Rewritten for Peptides With Indra—tech stack, getting started (Node 22, npm scripts), project structure, `@/` imports. Dev-facing and accurate.
- **Types**: `Product` and `ProductCardItem` in `src/types` (`product.types.ts`). Constants import `Product` from `@/types`; types re-exported from `types/index.ts`.
- **FAQ content**: Full FAQ list moved to constants as `FAQ_ITEMS` (preview items plus return policy and international shipping) with stable `id`s. FAQ page uses `FAQ_ITEMS` and `key={item.id}`; FAQ preview section uses `key={item.id}` for preview items.
- **ProductCard**: Shared `ProductCard` in `components/common` (props: `item: ProductCardItem`, optional `classNames`, optional `titleTag`). Products page and Featured products section use it; no duplicated card markup.
- **ESLint**: `@typescript-eslint/no-explicit-any`: `"error"` for `**/*.ts` and `**/*.tsx` to enforce no `any`/unsafe typings.
- Spacing tokens in variables: `--space-page-x`, `--space-page-y`, `--space-section`, `--space-card`, `--space-component`, `--button-padding-x`, `--button-padding-y`, `--tag-padding-x`, `--tag-padding-y`, `--input-padding-x`, `--input-padding-y` for consistent breathing room.
- Card elevation: `--card-shadow`, `--card-shadow-hover`, `--card-radius` in both themes; cards get default shadow and stronger shadow on hover.
- SoCal Wellness Light: subtle earthy card border and refined shadows for a smoother, more professional look.

### Changed

- **Constants**: `FAQ_PREVIEW_ITEMS` now include `id`. `constants/index.ts` no longer re-exports `Product` (use `@/types`). `constants/products.ts` imports `Product` from `@/types`.
- Base: `.app-container` uses spacing tokens; main content area uses `--space-page-x`.
- Buttons: larger min-height and padding (default, sm, lg); clear hover (subtle shadow) and focus-visible (focus ring); ripple already enabled via PrimeReactProvider ([PrimeReact Ripple](https://primereact.org/ripple/)).
- Tags/chips: more padding and border-radius for readable, un-cramped labels.
- Cards: body padding from `--space-card`, border-radius, border; hover elevation via `--card-shadow-hover`.
- Header: increased inner padding and CTA uses default button size (no longer sm). Products page: more wrapper and grid gap, card body gap.
- Accordion: header link padding `1rem 1.25rem`, min-height 3rem; content padding `--space-component`, line-height 1.6. Panel, Message, Sidebar, TabView: header/content padding via `--space-component`. InputText/InputTextarea: padding and min-height; InputTextarea line-height and min-height. Dropdown panel items: padding.

### Fixed

- PrimeReact setup: PrimeReactProvider now receives explicit `value` with `ripple: true` and `locale: 'en'`. Provider order documented (ThemeProvider → PrimeReactProvider). Layout CSS load order commented (theme → primeicons → primeflex).

## [0.2.0] - 2026-02-16

### Added

- **SoCal Wellness Light** as primary (default) theme: soft off-white/warm neutrals, muted seafoam/sage accents, charcoal text, high-trust wellness look. New theme file `themes/socal-wellness-light.scss` with full variable set and dialog overrides.
- Theme toggle: **Wellness Light** / **Dark Synth** in header (top-right icon) and in mobile sidebar with labels. Smooth theme transition on html/body.
- **AppLayout**: AppHeader (sticky nav, CTA, theme switcher, hamburger), AppFooter (brand, tagline, links, copyright). Mobile: right-side Sidebar with nav, theme options, and CTA.
- **Home page** sections: Hero (value statement, CTAs), Trust strip (4 points), Featured products grid, Benefits (3 items), Testimonials, FAQ preview (accordion + link to FAQ), CTA band, Footer. All use placeholder content with confident, human tone.
- **Products** page: responsive grid of product cards (name, short description, spec chips, CTA). **Product detail** page: two-column (image placeholder left, info right; mobile stacked), tabs for Details / Specs / Shipping. Placeholder product data (BPC-157, TB-500, Epithalon).
- **About** page: narrative from constants (headline, lead, paragraphs). **FAQ** page: full accordion (preview items + returns, international). **Contact** page: simple form (name, email, message) with success state; no backend.
- Content constants: `content.ts` (HERO, TRUST_STRIP, FEATURED_PRODUCTS_PREVIEW, BENEFITS, TESTIMONIALS, FAQ_PREVIEW_ITEMS, CTA_BAND, ABOUT_INTRO, CONTACT_COPY) and `products.ts` (PRODUCTS, getProductBySlug). Navigation constants: NAV_LINKS, CTA_LABEL, CTA_HREF, SITE_TITLE.
- PrimeReact overrides for Sidebar and TabView (CSS variables only). Utility animation: `.util-animate-in` (subtle fade/translate-in, respects prefers-reduced-motion).

### Changed

- **Default theme** is now **socal-wellness-light** (was dark-synth). Dark Synth kept as secondary theme; layout and structure unchanged.
- Theme types: `ThemeId` now `'socal-wellness-light' | 'dark-synth'`. THEMES list and beforeInteractive script updated for both IDs.
- Root layout metadata: title and description updated for Peptides With Indra brand.
- Node/npm: default set to Node 22 LTS (v22.11.0) and npm 11.10.0; added `.nvmrc` (22) for this repo.

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
