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
  @Output() public selectedTaskEvent = new EventEmitter();
  selected = false;
  
  constructor(private taskArray: TaskArrayService , private router: Router) { }

  onDelete()
  {
    let deleteIndex:number;
    let tasks = this.taskArray.showAllTasks();
    for(let i = 0;i< tasks.length;i++) {
      if(tasks[i].title===this.task.title) {
        deleteIndex = i;
      }
    }
    tasks.splice(deleteIndex,1);
    // console.log(this.router.url);
    if(this.router.url==="/showATask"){
      this.router.navigate(['/home']);
    }
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

  onSelect(){
    this.selected=!this.selected;
    this.selectedTaskEvent.emit(this.task);
  }
  ngOnInit() {
    
  }

}