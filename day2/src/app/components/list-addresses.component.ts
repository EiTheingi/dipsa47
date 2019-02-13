import { Component, OnInit, Input } from '@angular/core';

import { Address } from '../model';

@Component({
  selector: 'app-list-addresses',
  templateUrl: './list-addresses.component.html',
  styleUrls: ['./list-addresses.component.css']
})
export class ListAddressesComponent implements OnInit {

  @Input()
  addresses: Address[] = []

  constructor() { }

  ngOnInit() { }

}
