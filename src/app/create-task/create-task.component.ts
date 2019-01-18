import { Component, OnInit } from '@angular/core';
import { Task } from '../Task';
import { TaskCreateService } from '../task-create.service';
@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

    // newTask: Task = new Task('' , '' , '10/01/2018' , '');
    title: String;
    desc: String;
    startDate: Date;
    endDate: Date;
    t: Task;
    resultFlag: Boolean = false;
    constructor(private taskCreateService: TaskCreateService) { }

    ngOnInit() {
    }

    onSave() {
        if(this.isValidTitle(this.title) && this.isValidDesc(this.desc) && 
        this.isValidStartDate(this.startDate) && this.isValidEndDate(this.endDate)) {

            this.t = new Task(this.title , this.desc , this.startDate , this.endDate);
            console.log(this.t); 
            alert('Data Saved');
            // this.taskCreateService.submitTask(this.t)
            // .subscribe(
            //     data => {
            //         this.resultFlag=true;
            //         console.log(data);
            //     },
            //     error => console.error("Error!", error)
            // );
        }
         
    }
    
    isValidTitle(title: String): Boolean {
        if(title !== undefined && title !== null) {
            return true;
        }
        else
            return false;
    }

    isValidDesc(desc: String): Boolean {
        if(desc !== undefined && desc !== null) {
            return true;
        }
        else
            return false;
    }
    isValidStartDate(startDate: Date): Boolean {
        if(startDate !== undefined && startDate !== null) {
            return true;
        }
        else
            return false;
    }
    isValidEndDate(endDate: Date): Boolean {
        if(endDate !== undefined && endDate !== null) {
            return true;
        }
        else
            return false;
    }

}
