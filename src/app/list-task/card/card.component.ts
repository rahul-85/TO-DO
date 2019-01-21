import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {

  @Input() public task: Task;
  @Output() public deletedTaskEvent = new EventEmitter();
  constructor() { }

  onDelete()
  {
    this.deletedTaskEvent.emit(this.task);
  }

  ngOnInit() {
  }

}