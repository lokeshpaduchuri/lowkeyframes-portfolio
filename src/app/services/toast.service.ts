import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ToastConfig {
  title: string;
  message: string;
  ctaLabel?: string;
  albumId?: string;
  albumTitle?: string;
}

@Injectable({ providedIn: 'root' })
export class ToastService {
  private toastSubject = new BehaviorSubject<ToastConfig | null>(null);
  readonly toast$ = this.toastSubject.asObservable();

  open(config: ToastConfig): void {
    this.toastSubject.next(config);
  }

  close(): void {
    this.toastSubject.next(null);
  }
}

