import { Routes } from '@angular/router';
import { Counter } from './components/counter/counter';
import { ListProducts } from './components/list-products/list-products';
import { GithubUsers } from './components/github-users/github-users';
import { Login } from './components/login/login';
import { Signup } from './components/signup/signup';
import { MaterialLists } from './components/material-lists/material-lists';

export const routes: Routes = [
  {path: 'counter', component: Counter},
  {path: 'products', component: ListProducts},
  {path: 'github', component: GithubUsers},
  {path: 'login', component: Login},
  {path: 'signup', component: Signup},
  {path: 'material', component: MaterialLists}
];
