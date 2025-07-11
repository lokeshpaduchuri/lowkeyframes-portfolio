import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
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
export class PhotographyComponent implements OnInit, OnDestroy {
  albums: Album[] = [];
  showScrollHint = false;
  private coverInterval?: ReturnType<typeof setInterval>;

  constructor(
    private titleService: Title,
    private meta: Meta,
    private s3: AwsS3Service
  ) {}

  @HostListener('window:scroll')
  onScroll() {
    this.checkScrollHint();
  }

  async ngOnInit() {
    this.titleService.setTitle('Photography - Lowkeyframes');
    this.meta.updateTag({ name: 'description', content: 'Explore photography albums showcasing diverse stories and portraits.' });

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
    this.startCoverRotation();
    setTimeout(() => this.checkScrollHint());
  }

  ngOnDestroy() {
    if (this.coverInterval) {
      clearInterval(this.coverInterval);
    }
  }

  private checkScrollHint() {
    const doc = document.documentElement;
    const bottom = window.scrollY + window.innerHeight;
    this.showScrollHint = bottom < doc.scrollHeight - 20;
  }

  private startCoverRotation() {
    this.coverInterval = setInterval(() => {
      this.albums.forEach(album => {
        if (album.images && album.images.length > 1) {
          const idx = typeof album.coverIndex === 'number' ? album.coverIndex : 0;
          const next = (idx + 1) % album.images.length;
          album.coverIndex = next;
          album.cover = album.images[next];
        }
      });
    }, 5000);
  }
}

