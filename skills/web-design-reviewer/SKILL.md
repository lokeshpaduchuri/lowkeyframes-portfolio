---
name: web-design-reviewer
description: 'Review and fix web UI/design issues using browser automation and source edits. Best for requests like review website design, check UI, fix layout, responsive issues, accessibility issues, or visual consistency issues. Optimized for Angular SSR projects.'
---

# Web Design Reviewer

Use this skill to visually review a running website, identify UI/UX defects, and apply minimal source-level fixes.

## When to Use

Trigger for requests such as:
- review website design
- check the UI
- fix the layout
- find responsive issues
- fix accessibility visuals (contrast/focus/spacing)

## Project-Optimized Defaults (Lowkeyframes)

- Framework: Angular 17 with SSR
- Styling: component SCSS + global `src/styles.scss`
- Build/test gates: `npm run build`, `npm test`
- SSR rule: never introduce direct browser globals without guards

Use these defaults unless the user says otherwise.

## Inputs Required

1. Target URL (local/staging/prod)
2. Scope (single page vs full flow)
3. Whether source edits are allowed (read-only review vs fix)

If URL is missing, ask:
> Please share the URL to review (for example, `http://localhost:4200`).

## Fast Workflow

1. **Gather context**
   - Detect framework/styling from `package.json`, `angular.json`, and `src/` layout.
   - Confirm review scope and expected pages.

2. **Inspect visually**
   - Capture baseline screenshots.
   - Check at 375, 768, 1280, and 1920 widths.
   - Prioritize P1/P2 issues first.

3. **Fix minimally**
   - Edit the smallest relevant file(s).
   - Prefer component-scoped fixes before global overrides.
   - Preserve existing style and naming patterns.

4. **Re-verify**
   - Re-capture screenshots of changed areas.
   - Re-check affected pages/breakpoints for regressions.

5. **Validate quality gates**
   - Run `npm run build`
   - Run `npm test`
   - If tooling is unavailable, report exact failure clearly.

## Inspection Checklist

### P1 (Fix Immediately)
- Broken layout (overflow, overlap, clipped critical text)
- Mobile breakage blocking navigation/content
- Missing visible focus for keyboard navigation
- Critical contrast/readability failures

### P2 (Fix Next)
- Inconsistent spacing/alignment harming readability
- Awkward breakpoint transitions
- Small touch targets on mobile
- Visual inconsistency in repeated UI patterns

### P3 (Optional)
- Minor spacing or styling polish

## Angular + SSR Guardrails

- Avoid direct `window`, `document`, `localStorage`, `matchMedia` in shared/server paths unless guarded.
- Keep motion subtle and state-driven.
- Avoid decorative looping animations.
- Preserve image aspect-ratio stability to reduce CLS.
- Prefer one transform channel on hover (avoid stacked noisy effects).

## File Targeting Priority

1. `src/app/pages/**` or `src/app/components/**` related SCSS/HTML
2. Shared styles in `src/styles.scss` only when issue is truly global
3. Route/page metadata only if SEO output is impacted

## Tooling Notes

Recommended browser capabilities:
- navigation
- screenshot capture
- viewport resize
- console/DOM inspection

Playwright MCP is a strong default; use equivalent tools if available.

## Reference Files

Load only when needed:
- Framework-specific fix patterns: [references/framework-fixes.md](references/framework-fixes.md)

## Output Format

```markdown
# Web Design Review Results

## Summary
- Target URL: {url}
- Framework: {framework}
- Styling: {styling}
- Viewports tested: 375, 768, 1280, 1920
- Issues found: {count}
- Issues fixed: {count}

## Fixed Issues
### [P1|P2] {title}
- Page: {path}
- Issue: {what was wrong}
- File(s): `{path}`
- Fix: {what changed}
- Verification: {how validated}

## Remaining Issues (if any)
- Issue: {title}
- Reason not fixed: {reason}
- Recommended next step: {action}

## Testing
- `npm run build`: {result}
- `npm test`: {result}
```

## Best Practices

Do:
- Capture before/after screenshots
- Fix one issue at a time
- Keep diffs small and reversible
- Re-verify nearby layouts after each fix

Don’t:
- Do broad refactors during visual bug fixes
- Override globally when a local fix works
- Trade performance/SSR safety for visual polish
