import { Component, OnInit } from '@angular/core';
import { Task } from '../Task';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {

  description = "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting."
  date = new Date();
  task = new Task('Task1',this.description,this.date,this.date);
  tasks = [
    new Task('Task 1',this.description,this.date,this.date),
    new Task('Task 2',this.description,this.date,this.date),
    new Task('Task 3',this.description,this.date,this.date),
    new Task('Task 4',this.description,this.date,this.date),
    new Task('Task 5',this.description,this.date,this.date),
    new Task('Task 6',this.description,this.date,this.date),
    new Task('Task 7',this.description,this.date,this.date),
    new Task('Task 8',this.description,this.date,this.date),
    new Task('Task 9',this.description,this.date,this.date),
    new Task('Task 10',this.description,this.date,this.date),
    new Task('Task 11',this.description,this.date,this.date),
    new Task('Task 12',this.description,this.date,this.date),
    new Task('Task 13',this.description,this.date,this.date),
    new Task('Task 14',this.description,this.date,this.date),
    new Task('Task 15',this.description,this.date,this.date),
  ];

  constructor() { }

  ngOnInit() {
  }

}
