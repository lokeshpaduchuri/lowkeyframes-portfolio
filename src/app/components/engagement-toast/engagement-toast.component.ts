import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ToastService, ToastConfig } from '../../services/toast.service';
import { AlbumEngagementService } from '../../services/album-engagement.service';

@Component({
  selector: 'app-engagement-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './engagement-toast.component.html',
  styleUrls: ['./engagement-toast.component.scss']
})
export class EngagementToastComponent implements OnInit, OnDestroy {
  toast: ToastConfig | null = null;
  private sub?: Subscription;
  @ViewChild('toastEl') toastEl?: ElementRef<HTMLElement>;

  constructor(
    private toastService: ToastService,
    private albumEngagement: AlbumEngagementService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.sub = this.toastService.toast$.subscribe(t => {
      this.toast = t;
      if (t) {
        setTimeout(() => this.focusFirst(), 0);
      }
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  close(): void {
    this.toastService.close();
  }

  contact(): void {
    if (!this.toast) {
      return;
    }
    if (this.toast.albumId) {
      this.albumEngagement.markContact(this.toast.albumId);
    }
    this.router.navigate(['/contact'], {
      queryParams: { albumId: this.toast.albumId, albumTitle: this.toast.albumTitle }
    });
    this.close();
  }

  notNow(): void {
    if (this.toast?.albumId) {
      this.albumEngagement.suppress(this.toast.albumId);
    }
    this.close();
  }

  @HostListener('document:keydown', ['$event'])
  handleKeydown(ev: KeyboardEvent): void {
    if (!this.toast) {
      return;
    }
    if (ev.key === 'Escape') {
      ev.preventDefault();
      this.close();
    } else if (ev.key === 'Tab') {
      this.trapFocus(ev);
    }
  }

  private focusFirst(): void {
    const el = this.toastEl?.nativeElement;
    const focusable = el?.querySelectorAll<HTMLElement>('button, [href], [tabindex]:not([tabindex="-1"])');
    focusable && focusable[0]?.focus();
  }

  private trapFocus(ev: KeyboardEvent): void {
    const el = this.toastEl?.nativeElement;
    const focusable = el?.querySelectorAll<HTMLElement>('button, [href], [tabindex]:not([tabindex="-1"])');
    if (!focusable || focusable.length === 0) {
      return;
    }
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const active = document.activeElement as HTMLElement;
    if (!ev.shiftKey && active === last) {
      ev.preventDefault();
      first.focus();
    } else if (ev.shiftKey && active === first) {
      ev.preventDefault();
      last.focus();
    }
  }
}

