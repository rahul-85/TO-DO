import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { TaskArrayService } from 'src/app/task-array.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {

  @Input() public task: Task;
  @Output() public deletedTaskEvent = new EventEmitter();
  
  constructor(private taskArray: TaskArrayService , private router: Router) { }

  onDelete()
  {
    this.deletedTaskEvent.emit(this.task);
  }

  onUpdate() {
    let id: Number;
    let tasks=this.taskArray.showAllTasks();
    for(let i = 0;i< tasks.length;i++) {
        if(tasks[i].title===this.task.title) {
          id = i;
        }
    }
    this.router.navigate(['/createTask',id]);
  }

  ngOnInit() {
    
  }

}