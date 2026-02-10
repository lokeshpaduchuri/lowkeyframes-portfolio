import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';
import { RouterModule } from '@angular/router';
import { SocialLinksComponent } from '../../components/social-links/social-links.component';
import { ALBUMS } from '../../data/albums';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, SocialLinksComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  featuredAlbums = ALBUMS.slice(0, 3);

  constructor(private seo: SeoService) {}

  ngOnInit() {
    this.seo.setSEO({
      title: 'Home',
      description: 'Welcome to the Lowkeyframes portfolio home page.',
      path: '/'
    });
  }

  onImageError(event: any) {
    if (event.target) {
      event.target.style.display = 'none';
    }
  }
}
