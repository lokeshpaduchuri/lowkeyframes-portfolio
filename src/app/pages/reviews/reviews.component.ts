import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, state, query, stagger, animateChild } from '@angular/animations';
import { REVIEWS, Review } from '../../data/reviews';
import { InViewDirective } from '../../components/in-view.directive';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule, InViewDirective],
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
  animations: [
    trigger('fadeUp', [
      state('hidden', style({ opacity: 0, transform: 'translateY(20px)' })),
      state('visible', style({ opacity: 1, transform: 'none' })),
      transition('hidden => visible', animate('600ms ease-out'))
    ]),
    trigger('listAnimation', [
      transition(':enter', [
        query('@fadeUp', stagger(100, animateChild()), { optional: true })
      ])
    ])
  ]
})
export class ReviewsComponent implements OnInit {
  reviews: Review[] = REVIEWS;
  visible: boolean[] = [];

  constructor(private titleService: Title, private meta: Meta) {}

  ngOnInit() {
    this.titleService.setTitle('Client Reviews - Lowkeyframes');
    this.meta.updateTag({ name: 'description', content: 'Testimonials from photography clients.' });
  }

  onInView(index: number) {
    this.visible[index] = true;
  }

  schemaData(review: Review): string {
    const data = {
      '@context': 'https://schema.org',
      '@type': 'Review',
      reviewBody: review.text,
      author: {
        '@type': 'Person',
        name: review.author
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5'
      },
      itemReviewed: {
        '@type': 'Service',
        name: 'Photography Service'
      }
    };
    return JSON.stringify(data);
  }
}
