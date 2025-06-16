import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PhotographyComponent } from './pages/photography/photography.component';
import { ProfessionalComponent } from './pages/professional/professional.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { AlbumViewerComponent } from './pages/album-viewer/album-viewer.component'; // new

export const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'HomePage' } },
  { path: 'about', component: AboutComponent, data: { animation: 'AboutPage' } },
  { path: 'photography', component: PhotographyComponent, data: { animation: 'PhotographyPage' } },
  { path: 'professional', component: ProfessionalComponent, data: { animation: 'ProfessionalPage' } },
  { path: 'contact', component: ContactComponent, data: { animation: 'ContactPage' } },

  // New route for album carousel view
  { path: 'album/:id', component: AlbumViewerComponent, data: { animation: 'AlbumViewerPage' } },

  // Wildcard route to catch unknown URLs and redirect home
  { path: '**', redirectTo: '', pathMatch: 'full' },
];


