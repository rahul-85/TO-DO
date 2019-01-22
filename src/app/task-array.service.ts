import { Injectable } from '@angular/core';
import { Task } from './Task';

@Injectable({
  providedIn: 'root'
})
export class TaskArrayService {

  private tasks: Array<Task> = new Array() ;
  constructor() { }
  pushATask(task: Task) {
    this.tasks.push(task);
  }
  showAllTasks(): Task[] {
    return this.tasks;
  }
}
