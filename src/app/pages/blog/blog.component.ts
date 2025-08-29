import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit() {
    this.seo.setSEO({
      title: 'Blog',
      description: 'Latest updates and behind-the-scenes stories.',
      path: '/blog'
    });
  }
}
