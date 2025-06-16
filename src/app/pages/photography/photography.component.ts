import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ALBUMS, Album } from '../../data/albums';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-photography',
  imports: [RouterModule, CommonModule],
  templateUrl: './photography.component.html',
})
export class PhotographyComponent implements OnInit {
  albums: Album[] = ALBUMS;

  constructor(private titleService: Title, private meta: Meta) {}

  ngOnInit() {
    this.titleService.setTitle('Photography - Lowkeyframes');
    this.meta.updateTag({ name: 'description', content: 'Explore photography albums showcasing diverse stories and portraits.' });
  }
}
