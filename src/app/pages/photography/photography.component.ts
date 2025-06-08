import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ALBUMS } from '../../data/albums';

@Component({
  selector: 'app-photography',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <h1 class="text-3xl font-bold mb-6 text-green-400">Photography Albums</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <a
        *ngFor="let album of albums"
        [routerLink]="['/album', album.id]"
        class="block rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition"
      >
        <img
          [src]="album.cover"
          alt="{{ album.title }}"
          class="w-full h-48 object-cover"
        />
        <div class="p-4 bg-black text-green-300 text-lg font-semibold text-center">
          {{ album.title }}
        </div>
      </a>
    </div>
  `,
})
export class PhotographyComponent {
  albums = ALBUMS;
}
