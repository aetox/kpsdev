import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AproposComponent } from './pages/apropos/apropos.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ServicesComponent } from './pages/services/services.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    title: 'Accueil',
    component: HomeComponent,
  },
  {
    path: 'apropos',
    title: 'A propos',
    component: AproposComponent,
  },
  {
    path: 'contact',
    title: 'Contact',
    component: ContactComponent,
  },
  {
    path: 'services',
    title: 'Services',
    component: ServicesComponent,
  },
  { path: '**', redirectTo: '/home' },
];
