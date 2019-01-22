import { Component, OnInit } from '@angular/core';
import { Task } from '../Task';

@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrls: ['./show-task.component.css']
})
export class ShowTaskComponent implements OnInit {

  public task:Task;
  constructor() { }

  ngOnInit() {
  }

}
