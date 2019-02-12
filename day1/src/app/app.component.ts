import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day2';
  days: string[] = ['day1', 'day2', 'day3', 'day4']

  cart: string[] = [];

  clicked($event) {
    console.log('clicked: ', $event);
    this.cart.push($event);
  }
}
