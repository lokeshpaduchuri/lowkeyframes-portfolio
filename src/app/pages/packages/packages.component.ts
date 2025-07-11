import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-packages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent implements OnInit {
  constructor(private titleService: Title, private meta: Meta) {}

  ngOnInit() {
    this.titleService.setTitle('Packages - Lowkeyframes');
    this.meta.updateTag({ name: 'description', content: 'Photography session packages and booking information.' });
  }
}
