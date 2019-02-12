import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Item } from '../model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input()
  inventories: Item[] = [
    { key: 0, label: 'blueberries', image: '/assets/fruits/blueberries.png'}
  ];

  @Output()
  onItemSelected = new EventEmitter<number>();

  constructor() { }

  ngOnInit() { }

  itemSelected(key: number) {
    //console.log('item selected: ', key);
    this.onItemSelected.next(key);
  }

}
