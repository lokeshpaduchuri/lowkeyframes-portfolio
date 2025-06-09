import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styles: [`
    nav { background-color: #000;  /* fixed height */
      min-height: 64px; /* fixed height */
      line-height: 60px; /* vertically center text */
  overflow: hidden;}
    a { color: white; }
    a:hover { text-decoration: underline; }
  `],
})
export class NavbarComponent {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}
