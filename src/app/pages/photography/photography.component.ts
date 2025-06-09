import { Component } from '@angular/core';
import { ALBUMS, Album } from '../../data/albums';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-photography',
  imports: [RouterModule, CommonModule],
  templateUrl: './photography.component.html',
})
export class PhotographyComponent {
  albums: Album[] = ALBUMS;
}
