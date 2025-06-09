import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../../data/projects'; // Adjust the import path as necessary
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4">
    <div class="bg-zinc-900 text-white p-6 rounded-2xl w-full max-w-lg relative animate-fade-in">
      <button class="absolute top-3 right-4 text-white text-2xl font-bold" (click)="close()">×</button>
      <img *ngIf="project?.image" [src]="project?.image" class="w-full rounded-md mb-4 max-h-64 object-cover" />
      <h2 class="text-2xl font-bold text-green-400 mb-2">{{ project?.title }}</h2>
      <p class="text-sm text-zinc-300 mb-4">{{ project?.description }}</p>
      <a *ngIf="project?.link" [href]="project?.link" target="_blank"
        class="inline-block mt-2 underline text-green-300 hover:text-green-200 text-sm">
        Visit Project
      </a>
    </div>
  </div>
  `,
})
export class ProjectModalComponent {
  @Input() project!: Project | null;
  @Output() closeModal = new EventEmitter<void>();

  close() {
    this.closeModal.emit();
  }
}
