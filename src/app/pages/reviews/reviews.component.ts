import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
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
      transition('void => visible', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
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
}
