import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  typingDone = false;
  constructor(private seo: SeoService) {}

  ngOnInit() {
    this.seo.setSEO({
      title: 'About',
      description: 'Get to know the web architect turned memory hoarder behind LowKey Frames.',
      path: '/about'
    });
  }
}
