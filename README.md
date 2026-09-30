# shivanshu.site

Personal site of Shivanshu Verma: projects, experience and writing. A typographic,
content-first design ("engineer's notebook") with light and dark themes and an MDX blog.

## Stack

- **Next.js 16** (App Router, Turbopack) and **React 19**; every route is prerendered
- **Tailwind CSS 4**, with design tokens as CSS variables in `src/app/globals.css`
- **Geist Sans + Geist Mono** via the `geist` package
- **content-collections** + MDX for posts, **rehype-pretty-code / Shiki** for code highlighting
- **lucide-react** for UI icons; inline SVG brand marks
- `next/og` social images for the site, every project and every post
- ESLint 9 (flat config) and Prettier (with `prettier-plugin-tailwindcss`)

## Getting started

Requires Node 24 (see `.nvmrc`) and pnpm, which Corepack pins from `package.json`.

```bash
corepack enable
pnpm install
cp .env.sample .env.local   # optional, see below
pnpm dev                    # http://localhost:3000
```

| Script              | What it does                           |
| ------------------- | -------------------------------------- |
| `pnpm dev`          | Dev server; draft posts are visible    |
| `pnpm build`        | Production build; drafts are excluded  |
| `pnpm start`        | Serve the production build             |
| `pnpm lint`         | ESLint                                 |
| `pnpm typecheck`    | `tsc --noEmit`                         |
| `pnpm format`       | Prettier (also sorts Tailwind classes) |
| `pnpm format:check` | Prettier in check mode                 |

## Environment variables

All optional. The site builds and runs without any of them.

| Variable                  | Effect when set                          | When unset                |
| ------------------------- | ---------------------------------------- | ------------------------- |
| `NEXT_PUBLIC_SITE_URL`    | Canonical URL for metadata, sitemap, RSS | `https://shivanshu.site`  |
| `NEXT_PUBLIC_RESUME_LINK` | Shows the Résumé buttons                 | Résumé buttons are hidden |
| `NEXT_PUBLIC_GTAG_ID`     | Loads Google Analytics                   | No analytics script       |

## Editing content

| What                                  | Where                     |
| ------------------------------------- | ------------------------- |
| Name, links, SEO description, env use | `src/lib/site.ts`         |
| Hero, about, education, recognition   | `src/data/profile.ts`     |
| Projects and case studies             | `src/data/projects.ts`    |
| Experience timeline                   | `src/data/experience.ts`  |
| Stack groups                          | `src/data/stack.ts`       |
| Blog posts                            | `src/content/posts/*.mdx` |

Optional fields (such as an experience `start`/`end` or `summary`, or education `degree`/`year`)
are simply not rendered when missing.

### Writing a post

Create `src/content/posts/<slug>.mdx`:

````mdx
---
title: "Post title"
summary: "One or two sentences shown in lists and previews."
date: "2026-10-01"
tag: Backend # Backend | Infra | Security
draft: false
---

Opening paragraph (styled as the standfirst).

## A section heading

Fenced code takes an optional title: ```ts title="src/example.ts"

<Callout>A highlighted note.</Callout>
````

Drafts (`draft: true`) appear in `pnpm dev` only. The Writing page, the home-page section, the
nav link, RSS (`/rss.xml`) and the sitemap entries appear automatically once at least one post
is published.

## Project structure

```
content-collections.ts    MDX collection: schema, highlighting, reading time, headings
src/
  app/                    routes, metadata, OG images, sitemap, robots, RSS, manifest
  components/
    common/               Section, ButtonLink, brand icons
    layout/               header, nav, theme toggle, footer
    home/                 home-page sections
    writing/  post/       blog list, table of contents, copy button, MDX components
  content/posts/          blog posts (MDX)
  data/                   typed site content
  lib/                    site config, posts helpers, OG renderer, utilities
```

## Deployment

Deployed on Vercel. Vercel doesn't natively support pnpm 11 yet, so set
`ENABLE_EXPERIMENTAL_COREPACK=1` (Production and Preview) so it uses the version pinned in
`packageManager`. The build log should show that pnpm version.

## License

[MIT](./LICENSE)
