import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent implements OnInit {

  @Input()
  message = "hello everyone";

  @Output()
  onSelected = new EventEmitter<string>();

  counter = 0

  constructor() { }

  ngOnInit() { }

  mouseEntered($event) {
    //console.info("Mouse entered", $event)
  }
  mouseLeft($event) {
    //console.info("Mouse left: ", $event)
  }

  buttonClicked($event) {
    //console.info("button clicked: ", $event)
    this.message = this.message.toUpperCase();
    this.counter++;
    //String interpolation
    this.onSelected.next(`${this.message} - ${this.counter}`);
  }

}
