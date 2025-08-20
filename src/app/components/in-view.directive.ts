import { Directive, ElementRef, EventEmitter, Inject, OnDestroy, OnInit, Output, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appInView]',
  standalone: true
})
export class InViewDirective implements OnInit, OnDestroy {
  @Output() inViewChange = new EventEmitter<boolean>();
  private observer?: IntersectionObserver;

  constructor(private el: ElementRef, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId) && typeof IntersectionObserver !== 'undefined') {
      this.observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.inViewChange.emit(true);
            this.observer?.disconnect();
          }
        });
      }, { threshold: 0.1 });
      this.observer.observe(this.el.nativeElement);
    } else {
      this.inViewChange.emit(true);
    }
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
