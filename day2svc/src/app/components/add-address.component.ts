import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Address } from '../model';
import { AddressService } from '../address.services';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {

  //Inject the service into the component
  constructor(private addrSvc: AddressService) { }

  ngOnInit() { }

  processForm(addrForm: NgForm) {
    const addr: Address = <Address> addrForm.value;
    console.info('address: ', addr);
    console.info('processing form: ', addrForm);

    /*
      let p = this.addrSvc.addAddressWithPromise(addr);
      p = p.then(() => { })
      p = p.catch(() => { })
    */

    //this.addrSvc.addAddress(addr);
    this.addrSvc.addAddressWithPromise(addr)
      .then((result) => {
        console.log('inserted: ', result)
        addrForm.resetForm();
      })
      .catch(error => {
        console.error('Insert error: ', error);
      })
  }

}
