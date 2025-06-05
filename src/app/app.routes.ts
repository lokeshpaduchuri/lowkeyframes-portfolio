import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PhotographyComponent } from './pages/photography/photography.component';
import { ProfessionalComponent } from './pages/professional/professional.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'HomePage' } },
  { path: 'photography', component: PhotographyComponent, data: { animation: 'PhotographyPage' } },
  { path: 'professional', component: ProfessionalComponent, data: { animation: 'ProfessionalPage' } },
  { path: 'contact', component: ContactComponent, data: { animation: 'ContactPage' } },
];
