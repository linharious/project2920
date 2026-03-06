import { Component } from '@angular/core';
import { ProductItem } from '../product-item/product-item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-products',
  imports: [ProductItem, CommonModule],
  templateUrl: './list-products.html',
  styleUrl: './list-products.scss',
})
export class ListProducts {
  products = [
    {id: 1, name: 'product a', price: 10.89},
    {id: 2, name: 'product b', price: 140.89},
    {id: 3, name: 'product c', price: 9.89},
  ]

  productA = {id: 1, name: 'product a', price: 10.89};

  sum = 0;

  onAddToCart(product: any) {
    console.log('this is from the parent list of products');
    console.log(product);
    this.sum += product.price;
  }
}
