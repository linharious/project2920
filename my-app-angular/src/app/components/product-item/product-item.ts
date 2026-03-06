import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-item',
  imports: [],
  templateUrl: './product-item.html',
  styleUrl: './product-item.scss',
})
export class ProductItem {
  @Input() product: any;
  @Output() addToCart = new EventEmitter();

  onAddToCart() {
    console.log('added to cart: ', this.product);
    console.log(this.product);
    this.addToCart.emit(this.product);
  }

}
