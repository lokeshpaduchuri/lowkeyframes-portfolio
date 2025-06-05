import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-professional',
  standalone: true,
  templateUrl: './professional.component.html',
  imports: [CommonModule],
  styles: [`
    h2 { font-weight: 700; margin-bottom: 1rem; }
    .project { border-bottom: 1px solid #ddd; padding: 1rem 0; }
    .project:last-child { border: none; }
  `],
})
export class ProfessionalComponent {
  projects = [
    { title: 'Project A', description: 'Description of professional work A' },
    { title: 'Project B', description: 'Description of professional work B' },
    // Add more projects
  ];
}