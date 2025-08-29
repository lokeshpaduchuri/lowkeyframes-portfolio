import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface Social {
  name: string;
  url: string;
  label: string;
  svg: SafeHtml;
}

@Component({
  selector: 'app-social-links',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './social-links.component.html',
  styles: [``],
  host: { class: 'flex gap-3' }
})
export class SocialLinksComponent {
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() showLabels = false;

  socials: Social[];

  private sizeMap: Record<'sm' | 'md' | 'lg', string> = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  private heightMap: Record<'sm' | 'md' | 'lg', string> = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12'
  };

  constructor(private sanitizer: DomSanitizer) {
    this.socials = [
      {
        name: 'Instagram',
        url: 'https://instagram.com/lowkey.frames',
        label: 'Follow on Instagram',
        svg: this.sanitizer.bypassSecurityTrustHtml(`
          <svg viewBox="0 0 24 24" class="w-5 h-5" aria-hidden="true"><path fill="currentColor" d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zm-5 3a5 5 0 1 0 0 10a5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6a3 3 0 0 1 0-6zm4.5-.75a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5z"/></svg>
        `)
      },
      {
        name: 'YouTube',
        url: 'https://youtube.com/@lowkeyframes',
        label: 'Watch on YouTube',
        svg: this.sanitizer.bypassSecurityTrustHtml(`
          <svg viewBox="0 0 24 24" class="w-5 h-5" aria-hidden="true"><path fill="currentColor" d="M10 15l5.19-3L10 9v6zm11-3c0-2.21-.18-3.47-.39-4.24-.2-.74-.8-1.34-1.54-1.54C18.46 6 12 6 12 6s-6.46 0-7.07.22c-.74.2-1.34.8-1.54 1.54C3.18 8.53 3 9.79 3 12s.18 3.47.39 4.24c.2.74.8 1.34 1.54 1.54C5.54 18 12 18 12 18s6.46 0 7.07-.22c.74-.2 1.34-.8 1.54-1.54.21-.77.39-2.03.39-4.24z"/></svg>
        `)
      },
      {
        name: 'Pinterest',
        url: 'https://www.pinterest.com/lowkeyframes',
        label: 'Follow us on Pinterest',
        svg: this.sanitizer.bypassSecurityTrustHtml(`
          <svg viewBox="0 0 24 24" class="w-5 h-5" aria-hidden="true"><path fill="currentColor" d="M8.32 20.64l.78-3.26a6.24 6.24 0 01-.31-1.83c0-1.7 1-2.96 2.24-2.96 1.06 0 1.57.8 1.57 1.75 0 1.07-.68 2.68-1.04 4.17-.3 1.26.63 2.29 1.9 2.29 2.29 0 4.05-2.42 4.05-5.93 0-3.1-2.22-5.25-5.4-5.25-3.68 0-5.85 2.76-5.85 5.6 0 1.12.35 2.16 1.08 2.54.12.06.18.03.21-.09.02-.1.13-.61.17-.84.03-.08.01-.14-.06-.21-.22-.26-.36-.6-.36-1.08 0-2.33 1.74-4.42 4.5-4.42 2.45 0 3.8 1.5 3.8 3.5 0 2.6-1.15 4.8-2.85 4.8-.94 0-1.64-.78-1.42-1.74.27-1.14.8-2.38.8-3.21 0-.74-.39-1.35-1.2-1.35-.95 0-1.71.98-1.71 2.28 0 .83.28 1.39.28 1.39l-1 4.24c-.17.72-.03 1.6-.02 1.87.01.12.16.15.21.06z"/></svg>
        `)
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/company/lowkeyframes',
        label: 'Connect on LinkedIn',
        svg: this.sanitizer.bypassSecurityTrustHtml(`
          <svg viewBox="0 0 24 24" class="w-5 h-5" aria-hidden="true"><path fill="currentColor" d="M4.98 3.5a2.5 2.5 0 1 1-4.98 0a2.5 2.5 0 0 1 4.98 0zM.5 8.5h4.92v14.92H.5zM8.48 8.5h4.71v2.04h.07c.66-1.2 2.3-2.47 4.73-2.47c5.06 0 6 3.33 6 7.67v8.68h-4.93v-7.7c0-1.84-.03-4.2-2.56-4.2c-2.56 0-2.95 2-2.95 4.07v7.83H8.48z"/></svg>
        `)
      },
      {
        name: 'Email',
        url: 'mailto:lowkeyframestx@gmail.com',
        label: 'Send us an email',
        svg: this.sanitizer.bypassSecurityTrustHtml(`
          <svg viewBox="0 0 24 24" class="w-5 h-5" aria-hidden="true"><path fill="currentColor" d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 2v.01L12 11l8-5.99V6H4zm16 2.49l-8 5-8-5V18h16V8.49z"/></svg>
        `)
      }
    ];
  }

  get sizeClass(): string {
    return this.showLabels
      ? `${this.heightMap[this.size]} px-3`
      : this.sizeMap[this.size];
  }
}

