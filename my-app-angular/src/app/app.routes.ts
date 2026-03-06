import { Routes } from '@angular/router';
import { Counter } from './components/counter/counter';
import { ListProducts } from './components/list-products/list-products';
import { GithubUsers } from './components/github-users/github-users';

export const routes: Routes = [
  {path: 'counter', component: Counter},
  {path: 'products', component: ListProducts},
  {path: 'github', component: GithubUsers}
];
