import { Component, OnInit, Input, OnDestroy } from '@angular/core';

import { Address } from '../model';
import { AddressService } from '../address.services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-addresses',
  templateUrl: './list-addresses.component.html',
  styleUrls: ['./list-addresses.component.css']
})
export class ListAddressesComponent implements OnInit, OnDestroy {

  addresses: Address[] = [];

  onNewAddress$: Subscription;

  constructor(private addrSvc: AddressService) { }

  ngOnInit() { 
    this.onNewAddress$ = this.addrSvc.onNewAddress.subscribe(
      (addr: Address) => {
        //this.addresses = this.addrSvc.getAddresses();
        this.loadAddresses();
      }
    )
    this.loadAddresses();
  }

  private loadAddresses() {
      this.addrSvc.getAddressesWithPromise()
        .then(
          (result: Address[]) => {
            console.info('result: ', result)
            this.addresses = result;
          }
        ) //then
        .catch(error => {
          console.error('Error: ', error);
        })
  }

  ngOnDestroy() {
    this.onNewAddress$.unsubscribe();
  }

}
