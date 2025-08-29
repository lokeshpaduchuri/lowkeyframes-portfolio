import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PhotographyComponent } from './pages/photography/photography.component';
import { ProfessionalComponent } from './pages/professional/professional.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { AlbumViewerComponent } from './pages/album-viewer/album-viewer.component'; // new
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ReviewsComponent } from './pages/reviews/reviews.component';
import { BlogComponent } from './pages/blog/blog.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'HomePage' } },
  { path: 'about', component: AboutComponent, data: { animation: 'AboutPage' } },
  { path: 'photography', component: PhotographyComponent, data: { animation: 'PhotographyPage' } },
  { path: 'professional', component: ProfessionalComponent, data: { animation: 'ProfessionalPage' } },
  { path: 'portfolio', component: PortfolioComponent, data: { animation: 'PortfolioPage' } },
  { path: 'reviews', component: ReviewsComponent, data: { animation: 'ReviewsPage' } },
  { path: 'blog', component: BlogComponent, data: { animation: 'BlogPage' } },
  { path: 'contact', component: ContactComponent, data: { animation: 'ContactPage' } },

  // New route for album carousel view
  { path: 'album/:id', component: AlbumViewerComponent, data: { animation: 'AlbumViewerPage' } },

  // Wildcard route to catch unknown URLs and show 404
  { path: '**', component: NotFoundComponent, data: { animation: 'NotFoundPage' } },
];

