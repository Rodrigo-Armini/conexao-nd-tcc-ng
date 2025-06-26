import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
// Redireciona rota vazia para /home
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  // Rota da página home
  { path: 'home', component: HomeComponent }
];
