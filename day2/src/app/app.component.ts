import { Component } from '@angular/core';
import { Address } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  addresses: Address[] = [];

  addNewAddress(addr: Address) {
    this.addresses.push(addr);
    console.log('address:', this.addresses);
  }
}
