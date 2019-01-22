
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-webapp';
  // createTaskFlag=false;
  firstPageFlag=true;
  secondPageFlag=true;
  // showTasksFlag=false;
  firstButton() {
      this.firstPageFlag=false;
      // this.createTaskFlag=true;
      this.secondPageFlag=false;
  }
  secondButton() {
    // this.createTaskFlag=false;
    this.secondPageFlag=false;
    this.firstPageFlag=false;
    // this.showTasksFlag=true;
  }
}

