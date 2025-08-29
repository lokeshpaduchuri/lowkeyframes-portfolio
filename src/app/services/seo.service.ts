import { Injectable, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { environment } from '../../environments/environment';

export interface SeoParams {
  title: string;
  description?: string;
  /**
   * Absolute path part, e.g. '/portfolio' or '/album/twined-hearts'
   */
  path?: string;
  /**
   * Absolute image URL for OG/Twitter. Falls back to default.
   */
  image?: string;
  /**
   * If true, forces noindex regardless of env.
   */
  noindex?: boolean;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly site = 'LowKey Frames';
  private readonly origin = 'https://lowkeyframes.com';
  private readonly defaultImage = `${this.origin}/assets/hero.webp`;

  constructor(
    private title: Title,
    private meta: Meta,
    @Inject(DOCUMENT) private document: Document
  ) {}

  setSEO(params: SeoParams): void {
    const { title, description, path, image, noindex } = params;
    const fullTitle = title.includes(this.site) ? title : `${title} - ${this.site}`;
    const url = path ? `${this.origin}${path.startsWith('/') ? '' : '/'}${path}` : this.origin;
    const img = image || this.defaultImage;

    this.title.setTitle(fullTitle);
    if (description) {
      this.meta.updateTag({ name: 'description', content: description });
      this.meta.updateTag({ property: 'og:description', content: description });
      this.meta.updateTag({ name: 'twitter:description', content: description });
    }

    // Canonical
    this.setCanonical(url);

    // Robots (env-aware)
    const robots = !environment.production || noindex ? 'noindex,nofollow' : 'index,follow';
    this.meta.updateTag({ name: 'robots', content: robots });

    // Open Graph
    this.meta.updateTag({ property: 'og:title', content: fullTitle });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:image', content: img });
    this.meta.updateTag({ property: 'og:site_name', content: this.site });
    this.meta.updateTag({ property: 'og:locale', content: 'en_US' });

    // Twitter
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: fullTitle });
    this.meta.updateTag({ name: 'twitter:image', content: img });
  }

  setCanonical(url: string): void {
    const head = this.document.head;
    let link: HTMLLinkElement | null = head.querySelector('link[rel="canonical"]');
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      head.appendChild(link);
    }
    link.setAttribute('href', url);
  }

  /**
   * Injects a JSON-LD script with a data-marker attribute so we can replace it later.
   */
  addJsonLd(data: unknown, marker = 'seo-jsonld'): void {
    const head = this.document.head;
    // remove previous with same marker
    head.querySelectorAll(`script[type="application/ld+json"][data-marker="${marker}"]`).forEach(n => n.remove());
    const script = this.document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-marker', marker);
    script.textContent = JSON.stringify(data);
    head.appendChild(script);
  }

  /**
   * Sets a BreadcrumbList JSON-LD for the current page.
   */
  setBreadcrumb(items: { name: string; url: string }[]): void {
    const data = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: item.name,
        item: item.url
      }))
    };
    this.addJsonLd(data, 'seo-breadcrumb');
  }
}

