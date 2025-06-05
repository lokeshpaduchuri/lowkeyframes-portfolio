import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styles: [`
    nav { background-color: #000; }
    a { color: white; }
    a:hover { text-decoration: underline; }
  `],
})
export class NavbarComponent {}
