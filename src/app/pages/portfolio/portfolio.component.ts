import { Component, OnInit, OnDestroy } from '@angular/core';
import { ALBUMS, Album } from '../../data/albums';
import { AwsS3Service } from '../../services/aws-s3.service';
import { environment } from '../../../environments/environment';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SeoService } from '../../services/seo.service';

@Component({
  standalone: true,
  selector: 'app-portfolio',
  imports: [RouterModule, CommonModule],
  templateUrl: './portfolio.component.html',
})
export class PortfolioComponent implements OnInit, OnDestroy {
  albums: Album[] = [];
  private coverInterval?: ReturnType<typeof setInterval>;

  constructor(
    private seo: SeoService,
    private s3: AwsS3Service
  ) {}

  async ngOnInit() {
    this.seo.setSEO({
      title: 'Portfolio',
      description: 'Browse portfolio albums showcasing diverse stories and portraits.',
      path: '/portfolio'
    });

    try {
      const bucket = environment.aws.bucket;
      const ids = await this.s3.listAlbums(bucket);
      if (ids.length) {
        const fetched = await Promise.all(
          ids.map(async id => {
            const s3Images = await this.s3.listObjects(bucket, `${id}/`);
            const local = ALBUMS.find(a => a.id === id);
            const images = s3Images.length ? s3Images : local?.images || [];

            if (!images.length) {
              return null;
            }

            const coverFromS3 = s3Images.find(img => img.includes('cover'));
            const cover = coverFromS3 || local?.cover || images[0];
            const title = local?.title || id.replace(/-/g, ' ');
            const description = local?.description || '';

            return {
              id,
              title,
              description,
              cover,
              coverIndex: coverFromS3 ? images.indexOf(coverFromS3) : local?.coverIndex,
              images
            } as Album;
          })
        );

        const fetchedAlbums = fetched.filter((a): a is Album => !!a);
        const map = new Map(fetchedAlbums.map(a => [a.id, a]));
        this.albums = ALBUMS.map(a => map.get(a.id) || a);
        fetchedAlbums.forEach(a => {
          if (!ALBUMS.find(alb => alb.id === a.id)) {
            this.albums.push(a);
          }
        });
      } else {
        this.albums = ALBUMS;
      }
    } catch (err) {
      console.error('Failed to load albums', err);
      this.albums = ALBUMS;
    }
    if (typeof window !== 'undefined') {
      this.startCoverRotation();
    }
  }

  ngOnDestroy() {
    if (this.coverInterval) {
      clearInterval(this.coverInterval);
    }
  }

  private startCoverRotation() {
    if (typeof window === 'undefined') {
      return;
    }
    this.coverInterval = setInterval(() => {
      this.albums.forEach(album => {
        if (album.images && album.images.length > 1) {
          const idx = typeof album.coverIndex === 'number' ? album.coverIndex : 0;
          const next = (idx + 1) % album.images.length;
          album.coverIndex = next;
          album.cover = album.images[next];
          album.loaded = false;
          album.loadError = false;
        }
      });
    }, 5000);
  }
}
