import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
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
export class ContactComponent implements OnInit {
  name = '';
  email = '';
  message = '';

  constructor(private titleService: Title, private meta: Meta) {}

  ngOnInit() {
    this.titleService.setTitle('Contact - Lowkeyframes');
    this.meta.updateTag({ name: 'description', content: 'Send a message to connect with Lowkeyframes.' });
  }

  hoverState = 'normal';

  onSubmit() {
    alert(`Thanks for reaching out, ${this.name}! I will get back to you soon.`);
    this.name = '';
    this.email = '';
    this.message = '';
  }
}
