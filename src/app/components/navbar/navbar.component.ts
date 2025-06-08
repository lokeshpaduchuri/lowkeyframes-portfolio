import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styles: [`
    nav { background-color: #000; height: 60px; /* fixed height */
  line-height: 60px; /* vertically center text */
  overflow: hidden;}
    a { color: white; }
    a:hover { text-decoration: underline; }
  `],
})
export class NavbarComponent {}
