# Agent Handbook

## Purpose
This handbook defines how agents should operate in this repository: ship small, reliable changes with SSR-safe behavior, calm UX hierarchy, and measurable quality gates. It is intended to support all future work types (features, bugfixes, performance, refactors, SEO, content, and dependency upgrades) without re-learning project context each time.

## Project Snapshot
- Stack: Angular 17 with SSR, Tailwind CSS, and Swiper.
- Build/test scripts are managed with npm (`ng build`, `ng test`).
- `npm run build` runs `prebuild` first, which generates sitemap output via `scripts/generate-sitemap.mjs`.
- SSR safety is mandatory: avoid direct `window`/`document` access without platform guards and verify route rendering does not regress.

## Repo Map
- App pages live in `src/app/pages/`.
- Shared UI lives in `src/app/components/`.
- Data and static page data live in `src/app/data/`.
- Services live in `src/app/services/`.
- Sitemap generation script: `scripts/generate-sitemap.mjs`.

Key page components:
- Home: `src/app/pages/home/home.component.ts`
- About: `src/app/pages/about/about.component.ts`
- Photography: `src/app/pages/photography/photography.component.ts`
- Professional: `src/app/pages/professional/professional.component.ts`
- Portfolio: `src/app/pages/portfolio/portfolio.component.ts`
- Reviews: `src/app/pages/reviews/reviews.component.ts`
- Blog: `src/app/pages/blog/blog.component.ts`
- Contact: `src/app/pages/contact/contact.component.ts`
- Album detail: `src/app/pages/album-viewer/album-viewer.component.ts`

## Golden Rules
- SSR safety first: no browser-only APIs without `isPlatformBrowser` or equivalent guards.
- Keep diffs minimal: remove-before-add and prefer targeted edits over broad rewrites.
- UX principles: calm hierarchy, motion only for state changes, performance-first interactions.
- Validate always: run required quality gates before handing off.

## Contributor Guidelines

### Coding Style
- Use **2 spaces** for indentation. Never use tabs.
- For TypeScript files (`*.ts`), prefer **single quotes** for strings.
- Ensure each file ends with a newline and has no trailing whitespace.

### Testing
- Run `npm test` before committing. It invokes the Angular CLI's Karma tests.
- If the environment lacks required dependencies, note this in the PR testing section.

### Commit Messages
- Use short, present-tense messages such as `Add hero component` or `Fix nav link`.
- Group related changes into a single commit when practical.

### Pull Request Summary
- Summarize the important changes in bullet points.
- Reference modified files using GitHub's file path quoting (e.g., `src/app/app.component.ts`).
- Include a Testing section describing the result of running `npm test`.

## Quality Gates
Required:
- `npm run build` (SSR build + sitemap prebuild)
- `npm test`

SSR-focused checks:
- Confirm no server build/runtime errors tied to browser-only globals.
- Confirm route-level metadata/sitemap outputs still generate successfully.

Manual smoke checklist:
- Home route loads, hero and primary CTA visible.
- Portfolio route loads grid/list and links to album detail correctly.
- Album detail route loads images without layout jumps.
- About route loads content blocks with stable spacing.
- Contact route loads form/contact actions and no visual clutter.

## Task Types & Execution Pattern
- Feature
  - Define acceptance criteria first.
  - Add only the minimum UI/logic needed to satisfy scope.
- Bugfix
  - Reproduce before changing code.
  - Fix root cause, then run focused regression checks.
- Refactor
  - Preserve behavior and public contracts.
  - Split structural cleanup from functional changes when possible.
- Performance
  - Target measurable wins (LCP, CLS, bundle size, interaction cost).
  - Prefer lazy loading, image stability, and reduced animation overhead.
- Upgrade
  - Isolate dependency bumps and changelog review.
  - Build and test after each incremental step.
- SEO
  - Keep metadata accurate per route.
  - Validate OG/canonical/schema output and sitemap freshness.
- Content
  - Preserve editorial voice and formatting.
  - Keep copy updates separate from code logic when possible.

## Upgrade Playbook (Angular / Tailwind / Swiper)
1. Create a dedicated upgrade branch and define exact target versions.
2. Review release notes/changelogs for breaking changes.
3. Upgrade one major package group at a time (Angular, then Tailwind, then Swiper).
4. Run `npm run build` and `npm test` after each group.
5. Address deprecations and SSR regressions immediately.
6. Re-check visual behavior where Swiper/animations are used.
7. Document migration notes and unresolved follow-ups in PR.

## Performance & UX Guardrails
- Do not reintroduce typing cursor effects or bounce-style cues.
- Do not auto-rotate album covers or hero covers by timer.
- Avoid stacked hover transforms that compound scale + translate + shadow abruptly.
- Preserve image aspect-ratio stability to reduce CLS.
- Prefer lazy-loading and responsive image sizing where feasible.
- Keep transitions subtle and state-driven; avoid decorative motion loops.
- Guard all browser-only behavior for SSR compatibility.

## Recent Learnings (append-only)
- Removing typing animations improved readability and reduced motion fatigue.
- Timed cover rotation introduced distraction and should stay disabled.
- Contact page glow effects reduced clarity and were removed for cleaner hierarchy.
- Back-button overlays in album context should remain fixed and non-jittery.
- Layered hover effects can feel noisy; use one transform channel at a time.
- Image fade-in can help perceived polish but must not hide loading failures.
- CLS issues are most visible on album and portfolio images without fixed ratios.
- Route transitions should support navigation context, not compete with content.
- SSR-safe guards are required whenever introducing viewport/event logic.
- Build checks catch sitemap regressions early because prebuild runs automatically.

## Relocated Content
- Marketing/site copy: `content/meet-your-agents.md`
- Reusable optimization prompt template: `prompts/portfolio-optimization-prompt.md`
