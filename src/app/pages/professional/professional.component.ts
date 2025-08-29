import { Component, OnInit } from '@angular/core';
import { Experience, EXPERIENCES } from '../../data/experiences';
import { CommonModule } from '@angular/common';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-professional',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.scss']
})
export class ProfessionalComponent implements OnInit {
  experiences: Experience[] = EXPERIENCES;

  constructor(private seo: SeoService) {}

  ngOnInit() {
    this.seo.setSEO({
      title: 'Professional Experience',
      description: 'Browse professional work history and technologies used.',
      path: '/professional'
    });
  }
}

