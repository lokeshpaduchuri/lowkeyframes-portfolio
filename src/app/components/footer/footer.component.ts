import { Component } from '@angular/core';
import { SocialLinksComponent } from '../social-links/social-links.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [SocialLinksComponent],
  templateUrl: './footer.component.html',
  styles: [``]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
