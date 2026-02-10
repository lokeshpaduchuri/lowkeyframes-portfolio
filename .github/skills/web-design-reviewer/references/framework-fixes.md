# Framework Fix Guidelines

Use the smallest possible fix that resolves the issue at the source.

## Angular 17 + SSR (Primary)

### Preferred fix order
1. Component template (`*.component.html`)
2. Component styles (`*.component.scss`)
3. Shared/global styles (`src/styles.scss`) only if cross-cutting

### SSR-safe patterns
- Guard browser-only behavior with platform checks before using browser globals.
- Avoid introducing viewport/event logic in server-rendered code paths.

### UI/UX guardrails for this project
- Keep motion subtle and state-based.
- Avoid timer-driven decorative motion.
- Preserve image dimensions/aspect ratio to reduce CLS.
- Avoid stacked hover effects that combine multiple aggressive transforms.

## React / Next.js
- Prefer local component/module styles before global CSS.
- Respect server/client boundaries and hydration behavior.

## Vue / Nuxt
- Prefer scoped component styles.
- Use global overrides only for shared design tokens/utilities.

## Svelte / SvelteKit
- Prefer per-component style updates.
- Keep global selector usage minimal and explicit.

## Universal Validation
- Re-test the exact broken viewport(s).
- Re-test one adjacent page/flow for regressions.
- Confirm keyboard focus visibility and readable contrast for changed elements.
