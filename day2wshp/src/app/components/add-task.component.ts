import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  addTask(form: NgForm) {

    console.log('form: ', form.value);

    form.resetForm();

  }

}
