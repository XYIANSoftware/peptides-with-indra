# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

### Changed

- **Branding**: Site name updated from “Peptides With Indra” to “Goddess Wellness” (per client; matches brochure). `SITE_TITLE`, hero headline, About headline/lead, metadata, and README updated. Tagline and product copy unchanged.
- **Brochure-as-company**: Site framed as the company that produced the brochure. Hero: "The company behind the brochure." About: Goddess Wellness is the company behind the product brochure; this site brings the brochure catalog online. Products intro: catalog matches our product brochure. Brochure label "Download our brochure"; About card copy "Our product brochure is the full catalog."
- **Metadata**: Default meta description now includes brand name: "Goddess Wellness: professional peptides, your way. ..." for SEO and link previews. All page metadata already used SITE_TITLE/SITE_DESCRIPTION so titles and descriptions show Goddess Wellness.
- **Centered content on large/ultra-wide screens**: About, Contact, FAQ, Privacy, and Terms page wrappers now use `margin-left: auto; margin-right: auto` so content is centered when viewport is wider than the wrapper max-width. Products intro block centered; product detail page constrained to 960px and centered.
- **ADA / accessibility**: Focus and keyboard usability improved. Focus ring is now a 2px solid ring (WCAG 2.2 contrast): light theme #4a7568, dark theme #24cdc5. Global :focus-visible for links and native buttons in base.scss. PrimeReact overrides: accordion header link, tabview tab link, dialog close button, and dropdown item get visible focus. Skip-to-main-content link added (first tab stop, visible on focus); main has id="main-content". Mobile theme switcher buttons given aria-label. Existing ARIA (nav labels, logo, theme buttons, ProductTag, TagInfoDialog, contact labels) retained; PrimeReact components keep built-in roles/aria.

### Added

- **Product spec tag dialogs**: Tags (Recovery, Research-backed, 5 mg, Mobility, Longevity, Cellular, 10 mg) are clickable with subtle hover and active styles; click/tap opens a dialog with short, factual copy. Same look as before so they don’t scream “clickable.”
- **Reusable `TagInfoDialog`**: Props `visible`, `onHide`, `title`, `description`; used for tag info. Exported from `@/components/ui`.
- **`ProductTag` component**: Renders a tag by `label`; if dialog info exists (from constants), tag is a button that opens `TagInfoDialog`; otherwise renders a plain PrimeReact Tag. Used in ProductCard and product detail page.
- **New constants file `productTagDialogs.ts`**: `TAG_DIALOG_LIST` (list of `TagDialogInfo`: id, label, dialogTitle, dialogDescription) and `getTagDialogInfo(label)`. Hard-coded for fast lookups and easy edits. (Requested name was PRODUCTS.ts; on case-insensitive systems that would overwrite products.ts, so the file is `productTagDialogs.ts`. Rename to PRODUCTS.ts on a case-sensitive FS if desired.)
- **Type `TagDialogInfo`** in `product.types.ts` and re-exported from `@/types`.
- **App icons** (Next.js [app icon conventions](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons)): Needle icon in `src/app/icon.png` (browser tab icon) and `src/app/apple-icon.png` (Apple touch icon); both are copies of the same asset so tabs and home-screen bookmarks use the needle. Optional: add `favicon.ico` in `app/` for legacy .ico requests.
- **SEO and metadata**: Root layout metadata includes `metadataBase`, title (with template for child pages), description, keywords, authors, creator, Open Graph (type, locale, url, siteName, title, description), Twitter card (`summary_large_image`), robots (index/follow), and canonical URL. Constants: `SITE_URL` (from `NEXT_PUBLIC_SITE_URL` or fallback) and `SITE_DESCRIPTION` for reuse.
- **OG and Twitter images**: Link previews use `public/main-app-twitter-og-meta-image-icon.png`; layout `openGraph.images` and `twitter.images` reference it directly (1536×1024). With `metadataBase`, URLs are absolute for crawlers and messengers.
- **Light-mode background**: `public/background-tripical-heart.png` as body background (SoCal Wellness Light only). Parallax style (`background-attachment: fixed`). Theme body rules use `!important` so they override base; layout wrapper and main use `data-app-layout` / `data-app-main` and are set to `background: transparent` in light mode so the body background shows through.
- **Dark-mode background**: `public/background-dark-synth-tropical-heart.png` as body background for Dark Synth theme; same parallax and transparent wrappers so both themes show the same image style with different colors.
- **README**: Rewritten for Peptides With Indra—tech stack, getting started (Node 22, npm scripts), project structure, `@/` imports. Dev-facing and accurate.
- **Types**: `Product` and `ProductCardItem` in `src/types` (`product.types.ts`). Constants import `Product` from `@/types`; types re-exported from `types/index.ts`.
- **FAQ content**: Full FAQ list moved to constants as `FAQ_ITEMS` (preview items plus return policy and international shipping) with stable `id`s. FAQ page uses `FAQ_ITEMS` and `key={item.id}`; FAQ preview section uses `key={item.id}` for preview items.
- **ProductCard**: Shared `ProductCard` in `components/common` (props: `item: ProductCardItem`, optional `classNames`, optional `titleTag`). Products page and Featured products section use it; no duplicated card markup.
- **ESLint**: `@typescript-eslint/no-explicit-any`: `"error"` for `**/*.ts` and `**/*.tsx` to enforce no `any`/unsafe typings.
- Spacing tokens in variables: `--space-page-x`, `--space-page-y`, `--space-section`, `--space-card`, `--space-component`, `--button-padding-x`, `--button-padding-y`, `--tag-padding-x`, `--tag-padding-y`, `--input-padding-x`, `--input-padding-y` for consistent breathing room.
- Card elevation: `--card-shadow`, `--card-shadow-hover`, `--card-radius` in both themes; cards get default shadow and stronger shadow on hover.
- SoCal Wellness Light: subtle earthy card border and refined shadows for a smoother, more professional look.

### Changed

- **Copy and tagline**: New tagline “Professional peptides, your way.” Site description and page titles use it. Hero and About text refocused on easy access, clear information, everyday use, recovery, and injury-specific support; word count kept similar.
- **Default theme**: Light mode (SoCal Wellness Light) is the default; `DEFAULT_THEME_ID` is `socal-wellness-light`. Theme file comments updated so it’s clear the default is light and dark-synth is the optional dark theme.
- **Netlify**: Added `netlify.toml` with build command `npm run build` and `NODE_VERSION = "22"` to match `.nvmrc`; Next.js is auto-detected by Netlify (OpenNext).
- **Cards and sections (base)**: Slight rounding and small elevation applied globally. `variables.scss`: added `--surface-radius` and `--surface-shadow`; cards use `--card-radius: 14px` and slightly stronger `--card-shadow` / `--card-shadow-hover`. `base.scss`: all `section` elements get `border-radius: var(--surface-radius)` and `box-shadow: var(--surface-shadow)`. Both themes set these tokens so cards and sections look less flat everywhere.
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
