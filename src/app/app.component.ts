import { Component } from '@angular/core';
import { Router, RouterOutlet, Scroll } from '@angular/router';
import { trigger, transition, style, animate, query, group } from '@angular/animations';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ViewportScroller } from '@angular/common';
import { filter } from 'rxjs';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  template: `
    <app-navbar></app-navbar>
    <main class="pt-10 min-h-[calc(100vh-4rem)] text-white" [@routeAnimations]="prepareRoute(outlet)">
  <router-outlet #outlet="outlet"></router-outlet>
</main>
    <app-footer></app-footer>
  `,
  animations: [
  trigger('routeAnimations', [
  transition('* <=> *', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ], { optional: true }),
    query(':enter', [
      style({ opacity: 0 })
    ], { optional: true }),
    group([
      query(':leave', [
        animate('300ms ease-out', style({ opacity: 0 }))
      ], { optional: true }),
      query(':enter', [
        animate('300ms ease-out', style({ opacity: 1 }))
      ], { optional: true }),
    ])
  ])
])

],
})
export class AppComponent {

  constructor(private router: Router, private viewportScroller: ViewportScroller) {
    this.router.events
      .pipe(filter((e): e is Scroll => e instanceof Scroll))
      .subscribe((e) => {
        // Scroll to top on forward navigation
        if (e.position === null) {
          this.viewportScroller.scrollToPosition([0, 0]);
          this.viewportScroller.scrollToPosition([0, 64]); 
        }
      });
  }
  
  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'] || null;
  }
}