import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ALBUMS, Album } from '../../data/albums';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-album-viewer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // needed for swiper web components
  template: `
    <button
      (click)="goBack()"
      class="fixed top-4 left-4 z-50 bg-green-600 hover:bg-green-700 text-black px-4 py-2 rounded shadow"
    >
      Back
    </button>

    <div *ngIf="album" class="h-screen bg-black flex items-center justify-center p-4">
      <swiper-container
        pagination="true"
        navigation="true"
        loop="true"
        slides-per-view="1"
        class="w-full max-w-5xl h-[80vh] rounded-lg"
      >
        <swiper-slide *ngFor="let img of album.images">
          <img
            [src]="img"
            alt="Album photo"
            class="w-full h-full object-contain rounded-lg"
          />
        </swiper-slide>
      </swiper-container>
    </div>

    <div *ngIf="!album" class="text-center text-green-400 mt-20">
      Album not found.
    </div>
  `,
})
export class AlbumViewerComponent implements OnDestroy {
  album: Album | undefined;
  private paramSub?: Subscription;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.paramSub = this.route.params.subscribe(params => {
      const id = params['id'];
      this.album = ALBUMS.find(a => a.id === id);
      if (!this.album) {
        this.router.navigate(['/photography']);
      }
    });
  }

  ngOnDestroy() {
    this.paramSub?.unsubscribe();
  }

  goBack() {
    window.history.back();
  }
}
