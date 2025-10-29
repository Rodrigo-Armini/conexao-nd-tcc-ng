

import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ChatComponent } from './components/chat/chat.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
// Redireciona rota vazia para /home
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  // Rota da página home
  { path: 'home', component: HomeComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'chat', component: ChatComponent },
  
{ path: 'login', component: LoginComponent },
{ path: 'cadastro', component: CadastroComponent },
];