import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Address } from '../model';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {

  @Output()
  onNewAddress = new EventEmitter<Address>();

  constructor() { }

  ngOnInit() { }

  processForm(addrForm: NgForm) {
    const addr: Address = <Address> addrForm.value;
    console.info('address: ', addr);
    console.info('processing form: ', addrForm);
    this.onNewAddress.next(addr);

    addrForm.resetForm();
  }

}
