# Copilot Instructions

## Project Context
- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4
- **UI Data:** shadcn/ui (New York style, Zinc theme)
- **Icons:** Lucide React
- **Package Manager:** pnpm

## Architecture & Structure
- **App Router:** All page routes live in `app/`. Use `page.tsx` for routes, `layout.tsx` for wrapping layouts.
- **Server Components:** Default to React Server Components (RSC). Add `"use client"` directive at the top of files only when client-side interactivity (state, effects, event listeners) is required.
- **Components:** 
  - Generic UI components: `components/ui/` (shadcn implementation)
  - Feature components: `components/` or co-located in `app/` features
- **Utilities:** `lib/utils.ts` contains the `cn` helper for class merging.

## Coding Conventions
- **Imports:** Use absolute imports with the `@/` alias (e.g., `import { Button } from "@/components/ui/button"`).
- **Styling:**
  - Use Tailwind utility classes.
  - Use `cn()` utility for conditional classes and merging custom classNames: `className={cn("base-class", className)}`.
  - Avoid inline styles; prefer Tailwind overrides.
- **TypeScript:** 
  - strict mode is enabled. 
  - Avoid `any` types.
  - Use `interface` for props definitions.

## Key Files & Patterns
- `components.json`: Configuration for shadcn/ui.
- `lib/utils.ts`: Implementation of `cn` (clsx + tailwind-merge).
- `app/layout.tsx`: Root layout with font configuration (Geist).

## Developer Workflow
- **Development:** `pnpm dev`
- **Build:** `pnpm build`
- **Lint:** `pnpm lint`

## Component Creation (shadcn/ui)
When asked to create new generic UI components, assume the usage of shadcn/ui CLI or manual implementation following existing patterns in `components/ui`.
- CLI Command: `pnpm dlx shadcn@latest add <component-name>`
