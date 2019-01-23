import { Component, OnInit , Output, EventEmitter } from '@angular/core';
import { Task } from '../Task';
import { TaskArrayService } from '../task-array.service';

@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrls: ['./show-task.component.css']
})
export class ShowTaskComponent implements OnInit {

  public task: Task;
  
  constructor(private taskArray: TaskArrayService) { }

  ngOnInit() {
      this.task=this.taskArray.showAllTasks()[this.taskArray.showAllTasks().length-1];
  }

  

}
