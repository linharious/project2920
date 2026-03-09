import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Counter } from './components/counter/counter';
import { ListProducts } from './components/list-products/list-products';
import { Navbar } from './components/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, Counter, ListProducts, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  title = 'my-app-angular';
  name = 'linharious';
  imageUrl =
    'https://static.boredpanda.com/blog/wp-content/uploads/2024/10/Cw3eFuEqgb8-png__880.jpg';

  items = [
    'item1',
    'item2',
    'item3',
    'item4',
    'item5',
    'item6',
    'item7',
    'item8',
    'item9',
    'item10',
  ];
  isActive = true;
  textColor = 'red';
  fontSize = 50;
  counterName = 'legs set';
  isLoggedIn = true;

  clickButton() {
    console.log('button clicked');
    this.name = 'badass cat';
    this.imageUrl = 'https://i.chzbgr.com/full/10433114112/h4D24531B/mylifern';
    this.isActive = true;
    this.textColor = 'green';
    this.fontSize--;
  }

  logout() {
    this.isLoggedIn = false;
  }

  login() {
    this.isLoggedIn = true;
  }
}
