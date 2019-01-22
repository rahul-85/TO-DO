import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTaskComponent } from './create-task/create-task.component';
import { ListTaskComponent } from './list-task/list-task.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './list-task/card/card.component';
import { ShowTaskComponent } from './show-task/show-task.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'createTask', component: CreateTaskComponent},
  {path: 'showTasks', component: ListTaskComponent},
  {path: 'home', component: HomeComponent},
  {path: 'showATask' , component: ShowTaskComponent},
  {path: 'createTask/:id' , component: CreateTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
