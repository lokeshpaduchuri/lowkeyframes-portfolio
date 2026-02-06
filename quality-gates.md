# Quality Gates

## Required Commands
- `npm run build` (includes SSR build path and sitemap prebuild)
- `npm test`

## Optional Command
- `ng lint` (run if lint configuration is present and maintained)

## SSR-Specific Verification
- Confirm build completes without server-side rendering errors.
- Confirm there are no direct browser-global usage regressions (`window`, `document`, `localStorage`) in server paths.
- Confirm sitemap generation still executes during prebuild.

## Manual Smoke Checklist
- **Home**: page loads, hero content is readable, primary navigation and CTA work.
- **Portfolio grid**: tiles render with stable spacing; album links navigate correctly.
- **Album detail**: image list/gallery loads; back control remains visible and stable.
- **About**: content sections render cleanly without spacing collapse.
- **Contact**: contact actions/form area render correctly and remain legible.

## Rollback Guidance
- Revert a committed change:
  - `git revert <commit_sha>`
- Discard uncommitted file edits:
  - `git restore <path>`
- Discard all uncommitted changes in repo:
  - `git restore .`
