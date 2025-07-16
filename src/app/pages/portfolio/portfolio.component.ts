import { Component, OnInit, OnDestroy, AfterViewInit, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Title, Meta } from '@angular/platform-browser';
import { ALBUMS, Album } from '../../data/albums';
import { AwsS3Service } from '../../services/aws-s3.service';
import { environment } from '../../../environments/environment';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-portfolio',
  imports: [RouterModule, CommonModule],
  templateUrl: './portfolio.component.html',
})
export class PortfolioComponent implements OnInit, OnDestroy, AfterViewInit {
  albums: Album[] = [];
  private coverInterval?: ReturnType<typeof setInterval>;
  @ViewChildren('.album-card', { read: ElementRef }) albumCards!: QueryList<ElementRef>;

  constructor(
    private titleService: Title,
    private meta: Meta,
    private s3: AwsS3Service
  ) {}

  async ngOnInit() {
    this.titleService.setTitle('Portfolio - Lowkeyframes');
    this.meta.updateTag({ name: 'description', content: 'Browse portfolio albums showcasing diverse stories and portraits.' });

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
  }

  ngAfterViewInit() {
    if (typeof window === 'undefined') {
      return;
    }
    gsap.registerPlugin(ScrollTrigger);
    this.animateCards();
    this.albumCards.changes.subscribe(() => this.animateCards());
  }

  ngOnDestroy() {
    if (this.coverInterval) {
      clearInterval(this.coverInterval);
    }
    ScrollTrigger.getAll().forEach(t => t.kill());
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

  private animateCards() {
    const elements = this.albumCards.map(c => c.nativeElement as HTMLElement);
    if (!elements.length) {
      return;
    }
    gsap.set(elements, { opacity: 0, y: 40 });
    elements.forEach((el, i) => {
      const opts: any = {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        delay: i * 0.1,
      };
      if (el.getBoundingClientRect().top > window.innerHeight) {
        opts.scrollTrigger = { trigger: el, start: 'top 80%', once: true };
      }
      gsap.to(el, opts);
    });
  }
}

