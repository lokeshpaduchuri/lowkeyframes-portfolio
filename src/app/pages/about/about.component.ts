import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  typingDone = false;
  constructor(private titleService: Title, private meta: Meta) {}

  ngOnInit() {
    this.titleService.setTitle('About - Lowkeyframes');
    this.meta.updateTag({
      name: 'description',
      content:
        'Get to know the web architect turned memory hoarder behind LowKey Frames.'
    });
  }
}

