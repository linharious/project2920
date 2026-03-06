import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.scss',
})
export class Counter {
  @Input() name: any;
  value = 0;

  increment() {
    this.value++;
  }

  decrement() {
    this.value--;
  }
}
