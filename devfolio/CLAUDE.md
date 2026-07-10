# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # start Next.js dev server (localhost:3000)
npm run build    # production build
npm run start    # serve production build
npm run lint     # eslint over the project
```

There is no test suite configured (no test script, no Jest/Vitest config).

## Architecture

This is a single-page portfolio site built with Next.js App Router (`app/`). Everything renders
off one route: `app/page.tsx` composes the whole page by stacking section components in order
(`NavBar`, `Hero`, `StackBanner`, `About`, `Work`, `Toolkit`, `Experience`, `Contact`, `Footer`).
To add or reorder a section, edit `app/page.tsx` and drop a component in `app/components/`.

Fonts (Sora, JetBrains Mono, Archivo Black) are loaded via `next/font/google` in `app/layout.tsx`
and exposed as CSS variables (`--font-sora`, `--font-mono`, `--font-black`) consumed through the
Tailwind v4 `@theme inline` block in `app/globals.css`. Custom keyframe animations (`wiggle`,
`icon-bounce`, `marquee`) are also registered there rather than in a JS Tailwind config — this
project uses Tailwind v4's CSS-first config, not `tailwind.config.ts`.
