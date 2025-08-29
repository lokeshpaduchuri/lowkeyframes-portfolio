import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit() {
    this.seo.setSEO({
      title: 'Home',
      description: 'Welcome to the Lowkeyframes portfolio home page.',
      path: '/'
    });
  }
}
