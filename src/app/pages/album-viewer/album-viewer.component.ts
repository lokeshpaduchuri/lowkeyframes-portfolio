import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ALBUMS, Album } from '../../data/albums';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AwsS3Service } from '../../services/aws-s3.service';
import { environment } from '../../../environments/environment';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-album-viewer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // needed for swiper web components
  templateUrl: './album-viewer.component.html',
  styleUrls: ['./album-viewer.component.scss']
})
export class AlbumViewerComponent implements OnDestroy {
  album: Album | undefined;
  private paramSub?: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private s3: AwsS3Service,
    private titleService: Title,
    private meta: Meta
  ) {
    this.paramSub = this.route.params.subscribe(async params => {
      const id = params['id'];
      this.album = ALBUMS.find(a => a.id === id);
      if (!this.album) {
        this.router.navigate(['/photography']);
        return;
      }
      this.titleService.setTitle(`${this.album.title} - Lowkeyframes`);
      this.meta.updateTag({ name: 'description', content: `Viewing the ${this.album.title} album.` });
      try {
        const bucket = environment.aws.bucket;
        const images = await this.s3.listObjects(bucket, `${id}/`);
        if (images.length) {
          this.album.images = images;
        }
      } catch (err) {
        console.error('Failed to load S3 objects', err);
      }
    });
  }

  ngOnDestroy() {
    this.paramSub?.unsubscribe();
  }

  goBack() {
    window.history.back();
  }
}
