import { Directive, ElementRef, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[appInView]',
  standalone: true
})
export class InViewDirective implements OnInit, OnDestroy {
  @Output() inViewChange = new EventEmitter<boolean>();
  private observer?: IntersectionObserver;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.inViewChange.emit(true);
          this.observer?.disconnect();
        }
      });
    }, { threshold: 0.1 });
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
