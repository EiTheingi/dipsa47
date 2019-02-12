import { Component } from '@angular/core';

import { Item } from  './model';

const FRUITS = [ 'acorn_squash', 'apple', 'bell_pepper' ];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day1wshp';

  items: Item[] = [];

  cart: Item[] = [];

  constructor() {
    for (let i in FRUITS)
      this.items.push({
        key: parseInt(i),
        label: FRUITS[i],
        image: `/assets/fruits/${FRUITS[i]}.png`
      })
      console.log(this.items);
  }

  processItem(key: number) {
    this.cart.push(this.items[key]);
  }
}
