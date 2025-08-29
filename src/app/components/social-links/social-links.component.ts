import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
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
  imports: [NgFor, NgIf],
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
        name: 'Instagram',
        url: 'https://instagram.com/twinedheartsbyloki',
        label: 'Follow @twinedheartsbyloki on Instagram',
        svg: this.sanitizer.bypassSecurityTrustHtml(`
          <svg viewBox="0 0 24 24" class="w-5 h-5" aria-hidden="true"><path fill="currentColor" d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zm-5 3a5 5 0 1 0 0 10a5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6a3 3 0 0 1 0-6zm4.5-.75a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5z"/></svg>
        `)
      },
      {
        name: 'Pinterest',
        url: 'https://www.pinterest.com/lowkeyframes',
        label: 'Follow us on Pinterest',
        svg: this.sanitizer.bypassSecurityTrustHtml(`
          <svg viewBox="0 0 24 24" class="w-5 h-5" aria-hidden="true"><path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12c04.084 2.566 7.57 6.164 8.949-.084-.76-.16-1.928.034-2.758.174-.752 1.118-4.798 1.118-4.798s-.286-.573-.286-1.418c0-1.33.773-2.327 1.736-2.327.819 0 1.213.615 1.213 1.354 0 .825-.526 2.059-.796 3.203-.227.96.48 1.741 1.424 1.741 1.709 0 3.029-1.804 3.029-4.408 0-2.307-1.659-3.924-4.034-3.924-2.748 0-4.37 2.06-4.37 4.192 0 .83.319 1.721.718 2.205.08.095.09.178.067.274-.073.299-.237.96-.269 1.094-.042.175-.138.212-.319.128-1.19-.553-1.93-2.288-1.93-3.685 0-2.993 2.177-5.74 6.276-5.74 3.292 0 5.848 2.348 5.848 5.486 0 3.27-2.062 5.902-4.93 5.902-.963 0-1.868-.5-2.178-1.085l-.592 2.257c-.214.826-.8 1.862-1.192 2.495C9.84 21.943 10.902 22 12 22c5.514 0 10-4.486 10-10S17.514 2 12 2z"/></svg>
        `)
      },
      {
        name: 'Email',
        url: 'mailto:lowkeyframestx@gmail.com',
        label: 'Send us an email',
        svg: this.sanitizer.bypassSecurityTrustHtml(`
          <svg viewBox="0 0 24 24" class="w-5 h-5" aria-hidden="true"><path fill="currentColor" d="M2 4h20v16H2V4zm2 2v12h16V6H4zm8 5-8-5h16l-8 5zm0 2 8 5H4l8-5z"/></svg>
        `)
      }
    ];
  }

  get sizeClass(): string {
    return this.sizeMap[this.size];
  }
}

