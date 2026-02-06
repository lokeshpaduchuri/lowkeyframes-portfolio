# Roadmap

## Now

### UX polish
- Normalize section spacing and heading rhythm across Home, About, and Contact.
- Reduce competing hover effects on cards/buttons to one subtle state change per element.

### Performance
- Lock in image width/height or aspect-ratio on portfolio and album views to reduce CLS.
- Audit lazy-loading behavior so offscreen media does not block initial rendering.

### SEO
- Ensure route-level title/description consistency for Home, Portfolio, Album, and Contact.
- Verify sitemap generation includes active routes and excludes invalid/deprecated paths.

### Content
- Consolidate editorial content into dedicated markdown sources for easier updates.
- Align alt text tone with brand voice while staying descriptive and specific.

### Features
- Improve portfolio filtering/sorting clarity without changing existing route structure.
- Add consistent album-level metadata display (location, session type, year) where available.

### Upgrades
- Prepare Angular minor/patch upgrade checklist and compatibility notes.
- Verify Tailwind and Swiper versions against known SSR and build compatibility.

## Next

### UX polish
- Add restrained page-enter transitions only where they reinforce context changes.
- Improve mobile tap targets and spacing on navigation and album actions.

### Performance
- Explore responsive image candidates (`srcset`) for heavy gallery routes.
- Track bundle impact of Swiper usage and limit feature modules to necessary pages.

### SEO
- Add/expand JSON-LD for organization and image gallery context.
- Improve Open Graph coverage for album detail routes.

### Content
- Build a repeatable template for case-study style album descriptions.
- Create concise FAQ content for booking, delivery times, and travel coverage.

### Features
- Introduce optional lightbox behavior with strict keyboard and SSR-safe handling.
- Add a lightweight “related albums” module on album detail pages.

### Upgrades
- Plan Angular major upgrade path with migration sequencing and fallback strategy.
- Review Tailwind config for future v4 migration readiness.

## Later

### UX polish
- Optional theme toggle only if contrast/accessibility remains strong by default.
- Revisit micro-interaction inventory and remove any decorative-only effects.

### Performance
- Evaluate image format strategy (WebP/AVIF) and preconnect hints for media hosts.
- Add periodic performance budget checks in CI once baseline metrics are stable.

### SEO
- Automate sitemap/robots verification in release workflow.
- Expand internal linking between blog, portfolio, and service pages.

### Content
- Add seasonal campaign landing content with reusable content blocks.
- Build a review curation workflow for rotating testimonials.

### Features
- Optional analytics integration with privacy-first defaults and deferred loading.
- Lightweight content-driven spotlight section for new albums or featured shoots.

### Upgrades
- Periodic dependency health pass (quarterly) with security and SSR compatibility review.
- Reassess Swiper alternatives if bundle or accessibility constraints increase.
