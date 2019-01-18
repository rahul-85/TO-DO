import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../Task';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {

  @Input() public task: Task;
  // date1: Date = this.task.endDate;
  constructor() { }

  ngOnInit() {
  }

}