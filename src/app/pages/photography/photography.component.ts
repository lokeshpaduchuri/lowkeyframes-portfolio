import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, style, animate, transition, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-photography',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './photography.component.html',
  animations: [
    trigger('photoAnimation', [
      transition(':enter', [
        query('img', [
          style({ opacity: 0, transform: 'scale(0.85)' }),
          stagger(100, [
            animate('400ms ease-out', style({ opacity: 1, transform: 'scale(1)' })),
          ]),
        ]),
      ]),
    ]),
  ],
})
export class PhotographyComponent {
  photos = [
    { src: 'assets/photos/photo1.jpg', alt: 'Photo 1' },
    { src: 'assets/photos/photo2.jpg', alt: 'Photo 2' },
    { src: 'assets/photos/photo3.jpg', alt: 'Photo 3' },
    { src: 'assets/photos/photo4.jpg', alt: 'Photo 4' },
  ];
}
