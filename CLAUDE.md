# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Vite HMR)
npm run build     # Type-check (tsc -b) then bundle for production
npm run lint      # Run ESLint
npm run preview   # Preview production build locally
```

There are no automated tests in this project.

## Environment Variables

Copy `.env.example` and create `.env.local` with the real values. The variables actually used by the code are:

```
VITE_GOOGLE_APPS_SCRIPT_URL=   # Google Apps Script web app URL (handles form submissions)
VITE_GOOGLE_APPS_SCRIPT_SECRET= # Shared secret sent with each submission
```

The `.env.example` file documents older service-account variables that are no longer used.

## Architecture

This is a personal portfolio SPA built with React 19 + TypeScript + Vite. There are two routes:

- `/` — `src/pages/Home.tsx`: hero, skills filter, 3 featured projects, contact section
- `/projects` — `src/pages/Projects.tsx`: full project grid (5 projects + GitHub link card)

**Internationalisation (i18n):** `react-i18next` with two locales (`pt-BR` default, `en-US`). All user-visible strings go through `useTranslation()` / `t('key')`. Translation files live in `src/i18n/locales/`. A floating `LanguageToggle` button is rendered at the app root in `App.tsx` and persists across both routes via `localStorage`.

**Contact form:** `ContactModal` collects name/email/message and calls `src/services/googleSheets.ts`, which POSTs to a Google Apps Script URL using `mode: 'no-cors'`. Success/error feedback is shown via `Toast`.

**Project modals:** Clicking a project card opens `ProjectModal`, which displays the project image, tech stack, features, a GitHub link, and a `WorkFlow` slot. Each project has a dedicated `WorkFlow*` component (`WorkFlowSection`, `WorkFlowRefund`, `WorkFlowRestaurant`, `WorkFlowCursos`, `WorkFlowTickets`) that renders API endpoint documentation sourced from JSON files in `src/Base/`. The JSON shape is typed in `src/types/workflow.ts` as `WorkflowDocumentation` (a map of group name to `APIEndpoint[]`).

**Styling:** Plain CSS per component in `src/styles/`. No CSS preprocessor or CSS-in-JS.

**Assets:** SVG icons in `src/assets/icons/`, project screenshots/images in `src/assets/images/`, and PDF CVs (PT and EN) in `src/assets/`.
