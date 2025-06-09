import { Component } from '@angular/core';
import { Project, PROJECTS } from '../../data/projects';
import { CommonModule } from '@angular/common'; // Import CommonModule for Angular directives
import { ProjectModalComponent } from '../../components/project-modal/project-modal.component';

@Component({
  selector: 'app-professional',
  standalone: true,
  imports: [CommonModule, ProjectModalComponent],
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.scss']
})
export class ProfessionalComponent {
  projects: Project[] = PROJECTS;
  selectedProject: Project | null = null;

  openProjectModal(project: Project) {
    this.selectedProject = project;
  }

  closeProjectModal() {
    this.selectedProject = null;
  }
}


