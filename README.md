# Goddess Wellness (peptides-with-indra)

Marketing and product site for Goddess Wellness: science-backed peptides with clear information and a focus on quality and transparency. (Repo name remains peptides-with-indra.)

## Tech stack

- **Next.js** (App Router), **React**, **TypeScript**
- **PrimeReact**, **PrimeFlex**, **PrimeIcons**
- **Sass**, **date-fns**, **react-hook-form**, **Zustand** (as needed)

## Getting started

1. **Node**  
   Use Node 22 LTS (see `.nvmrc`). With nvm: `nvm use`.

2. **Install and run**

   ```bash
   npm install
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000).

3. **Scripts**

   - `npm run dev` — development server
   - `npm run build` — production build
   - `npm run start` — run production build
   - `npm run lint` — ESLint

## Project structure

- `src/app` — Next.js App Router routes and root layout
- `src/components` — Reusable UI: `common/`, `layout/`, `ui/`, `pages/` (page-specific sections)
- `src/constants` — Content and config (navigation, products, copy, themes)
- `src/providers` — React context (theme, PrimeReact)
- `src/types` — Shared TypeScript types
- `src/styles` — Global SCSS (variables, base, utilities, themes)
- `src/hooks`, `src/services`, `src/stores` — For custom hooks, API/business logic, and state as the app grows

Imports use the `@/` alias (e.g. `@/components`, `@/constants`, `@/types`).

## Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [PrimeReact](https://primereact.org/)
