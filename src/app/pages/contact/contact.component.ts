import { Component, OnInit, Renderer2 } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

interface ContactCategory {
  id: string;
  label: string;
  intro: string;
  placeholder: string;
  cta: string;
  icon: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    trigger('fade', [
      transition(':enter', [style({ opacity: 0 }), animate('300ms', style({ opacity: 1 }))]),
      transition(':leave', [animate('300ms', style({ opacity: 0 }))])
    ])
  ]
})
export class ContactComponent implements OnInit {
  categories: ContactCategory[] = [
    {
      id: 'family',
      label: 'Family Session',
      intro: 'Family is everything! Let me know about your crew.',
      placeholder: 'Tell me about your family plans…',
      cta: 'Book My Family Story',
      icon: '👨‍👩‍👧‍👦'
    },
    {
      id: 'couple',
      label: 'Couple Shoot',
      intro: 'Let’s capture your love story.',
      placeholder: 'Share your vision for the couple shoot…',
      cta: 'Book Our Love Story',
      icon: '💕'
    },
    {
      id: 'editorial',
      label: 'Creative Editorial',
      intro: 'Got a creative concept? I’m in!',
      placeholder: 'Describe the editorial vibe…',
      cta: 'Create Editorial Magic',
      icon: '🎨'
    },
    {
      id: 'event',
      label: 'Event Coverage',
      intro: 'Events deserve stellar coverage.',
      placeholder: 'Tell me about your event plans…',
      cta: 'Cover My Event',
      icon: '🎉'
    },
    {
      id: 'hi',
      label: 'Just Saying Hi!',
      intro: 'Feel free to drop a friendly note.',
      placeholder: 'Your message…',
      cta: 'Send Hello',
      icon: '👋'
    }
  ];

  step = 1;
  selectedCategory?: ContactCategory;
  name = '';
  email = '';
  message = '';
  creativeTitle = '';
  hover = false;
  darkMode = false;
  submitted = false;

  constructor(
    private titleService: Title,
    private meta: Meta,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Contact - Lowkeyframes');
    this.meta.updateTag({ name: 'description', content: 'Send a message to connect with Lowkeyframes.' });
  }

  selectCategory(cat: ContactCategory) {
    this.selectedCategory = cat;
    this.step = 2;
  }

  backToCategories() {
    this.step = 1;
    this.selectedCategory = undefined;
  }

  toggleTheme() {
    this.darkMode = !this.darkMode;
    const html = this.renderer.selectRootElement('html', true);
    if (this.darkMode) {
      this.renderer.addClass(html, 'dark-mode');
    } else {
      this.renderer.removeClass(html, 'dark-mode');
    }
  }

  onSubmit() {
    const data = new FormData();
    data.append('name', this.name);
    data.append('email', this.email);
    data.append('category', this.selectedCategory?.label || '');
    data.append('message', this.message);
    data.append('creativeTitle', this.creativeTitle);
    this.submitted = true;
    setTimeout(() => {
      this.resetForm();
    }, 2000);
  }

  resetForm() {
    this.name = '';
    this.email = '';
    this.message = '';
    this.creativeTitle = '';
    this.step = 1;
    this.selectedCategory = undefined;
    this.submitted = false;
  }
}
