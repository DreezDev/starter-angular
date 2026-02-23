import { Routes } from '@angular/router';
import { Home } from '@feature/home/home';
import { NotFound } from '@feature/not-found/not-found';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: '**',
    component: NotFound,
  },
];
