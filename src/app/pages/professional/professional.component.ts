import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Experience, EXPERIENCES } from '../../data/experiences';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-professional',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.scss']
})
export class ProfessionalComponent implements OnInit {
  experiences: Experience[] = EXPERIENCES;

  constructor(private titleService: Title, private meta: Meta) {}

  ngOnInit() {
    this.titleService.setTitle('Professional Experience - Lowkeyframes');
    this.meta.updateTag({ name: 'description', content: 'Browse professional work history and technologies used.' });
  }
}


