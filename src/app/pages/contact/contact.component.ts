import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  animations: [
    trigger('buttonHover', [
      state('normal', style({ transform: 'scale(1)' })),
      state('hovered', style({ transform: 'scale(1.05)' })),
      transition('normal <=> hovered', animate('200ms ease-in-out')),
    ]),
  ],
})
export class ContactComponent {
  name = '';
  email = '';
  message = '';

  hoverState = 'normal';

  onSubmit() {
    alert(`Thanks for reaching out, ${this.name}! I will get back to you soon.`);
    this.name = '';
    this.email = '';
    this.message = '';
  }
}
