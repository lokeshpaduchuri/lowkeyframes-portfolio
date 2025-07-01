import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ALBUMS, Album } from '../../data/albums';
import { AwsS3Service } from '../../services/aws-s3.service';
import { environment } from '../../../environments/environment';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-photography',
  imports: [RouterModule, CommonModule],
  templateUrl: './photography.component.html',
})
export class PhotographyComponent implements OnInit {
  albums: Album[] = [];

  constructor(
    private titleService: Title,
    private meta: Meta,
    private s3: AwsS3Service
  ) {}

  async ngOnInit() {
    this.titleService.setTitle('Photography - Lowkeyframes');
    this.meta.updateTag({ name: 'description', content: 'Explore photography albums showcasing diverse stories and portraits.' });

    try {
      const bucket = environment.aws.bucket;
      const ids = await this.s3.listAlbums(bucket);
      if (ids.length) {
        this.albums = await Promise.all(
          ids.map(async id => {
            const images = await this.s3.listObjects(bucket, `${id}/`);
            const cover = images.find(img => img.includes('cover')) || images[0] || '';
            return {
              id,
              title: id.replace(/-/g, ' '),
              description: '',
              cover,
              images
            } as Album;
          })
        );
      } else {
        this.albums = ALBUMS;
      }
    } catch (err) {
      console.error('Failed to load albums', err);
      this.albums = ALBUMS;
    }
  }
}
