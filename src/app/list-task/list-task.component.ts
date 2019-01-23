import { Component, OnInit } from '@angular/core';
import { Task } from '../Task';
import { TaskCreateService } from '../task-create.service';
import { TaskArrayService } from '../task-array.service';
import { Router } from '@angular/router';
import { FLAGS } from '@angular/core/src/render3/interfaces/view';
@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {

  selectedTaskArray : Array<Task> = new Array() ;

  tasks=this.taskArray.showAllTasks();
  
  
  constructor(private taskArray: TaskArrayService, private router: Router) { }
  selectTask(task: Task){
    if(this.checkIfPresent(task)===true){
      this.deleteTask(task);
    }
    else{
      this.selectedTaskArray.push(task);
    }
    console.log("Number of selections: "+this.selectedTaskArray.length);
  }

  checkIfPresent(task:Task): Boolean
  {
    let flag = false;
    for(let i=0;i<this.selectedTaskArray.length;i++)
    {
      if(this.selectedTaskArray[i].title===task.title){
        flag = true;
        break;
      }
    }
    return flag;
  }

  deleteTask(task:Task){
    let deleteIndex:number;
    let tasks = this.selectedTaskArray;
    for(let i = 0;i< tasks.length;i++) {
      if(tasks[i].title===task.title) {
        deleteIndex = i;
        break;
      }
    }
    tasks.splice(deleteIndex,1);
    // console.log(this.router.url);
  }

  ngOnInit() {
      
  }

}
