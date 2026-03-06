import { Routes } from '@angular/router';
import { Counter } from './components/counter/counter';
import { ListProducts } from './components/list-products/list-products';

export const routes: Routes = [
  {path: 'counter', component: Counter},
  {path: 'products', component: ListProducts}
];
