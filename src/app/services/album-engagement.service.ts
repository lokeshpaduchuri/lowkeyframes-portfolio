import { Injectable } from '@angular/core';
import { ToastService } from './toast.service';

@Injectable({ providedIn: 'root' })
export class AlbumEngagementService {
  private timerId: ReturnType<typeof setInterval> | null = null;
  private activeSeconds = 0;
  private isVisible = true;
  private isFocused = true;
  private albumId?: string;
  private albumTitle?: string;

  constructor(private toast: ToastService) {}

  initTimer(albumId: string, albumTitle: string): void {
    this.destroy();
    this.albumId = albumId;
    this.albumTitle = albumTitle;
    if (this.isSuppressed(albumId) || this.hasContacted(albumId)) {
      return;
    }
    this.handleVisibility = this.handleVisibility.bind(this);
    document.addEventListener('visibilitychange', this.handleVisibility);
    window.addEventListener('focus', this.handleVisibility);
    window.addEventListener('blur', this.handleVisibility);
    this.timerId = setInterval(() => {
      if (this.isActive()) {
        this.activeSeconds++;
        if (this.activeSeconds >= 30 && this.albumId && this.albumTitle) {
          this.toast.open({
            title: `Loving the ${this.albumTitle} album?`,
            message: 'If this vibe fits your story, I can tailor a session just for you. Want to chat?',
            ctaLabel: 'Contact us',
            albumId: this.albumId,
            albumTitle: this.albumTitle
          });
          this.destroy();
        }
      }
    }, 1000);
  }

  destroy(): void {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
    document.removeEventListener('visibilitychange', this.handleVisibility);
    window.removeEventListener('focus', this.handleVisibility);
    window.removeEventListener('blur', this.handleVisibility);
    this.activeSeconds = 0;
  }

  suppress(albumId: string): void {
    this.setWithTTL(this.suppressKey(albumId), 24 * 60 * 60 * 1000);
  }

  markContact(albumId: string): void {
    sessionStorage.setItem(this.contactKey(albumId), '1');
  }

  private isActive(): boolean {
    return this.isVisible && this.isFocused;
  }

  private handleVisibility(): void {
    this.isVisible = document.visibilityState === 'visible';
    this.isFocused = document.hasFocus();
  }

  private isSuppressed(albumId: string): boolean {
    return this.getWithTTL(this.suppressKey(albumId));
  }

  private hasContacted(albumId: string): boolean {
    return !!sessionStorage.getItem(this.contactKey(albumId));
  }

  private suppressKey(id: string): string {
    return `lkf_toast_suppress_${id}`;
  }

  private contactKey(id: string): string {
    return `lkf_toast_contact_${id}`;
  }

  private setWithTTL(key: string, ttl: number): void {
    const item = { value: '1', expiry: Date.now() + ttl };
    localStorage.setItem(key, JSON.stringify(item));
  }

  private getWithTTL(key: string): boolean {
    const raw = localStorage.getItem(key);
    if (!raw) {
      return false;
    }
    try {
      const item = JSON.parse(raw);
      if (Date.now() > item.expiry) {
        localStorage.removeItem(key);
        return false;
      }
      return true;
    } catch {
      localStorage.removeItem(key);
      return false;
    }
  }
}

