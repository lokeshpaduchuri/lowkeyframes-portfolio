import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
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
export class ProfessionalComponent implements OnInit {
  projects: Project[] = PROJECTS;
  selectedProject: Project | null = null;

  constructor(private titleService: Title, private meta: Meta) {}

  ngOnInit() {
    this.titleService.setTitle('Professional Work - Lowkeyframes');
    this.meta.updateTag({ name: 'description', content: 'Browse professional projects and collaborations.' });
  }

  openProjectModal(project: Project) {
    this.selectedProject = project;
  }

  closeProjectModal() {
    this.selectedProject = null;
  }
}


