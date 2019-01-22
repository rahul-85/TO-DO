import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTaskComponent } from './create-task/create-task.component';
import { ListTaskComponent } from './list-task/list-task.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: 'createTask', component: CreateTaskComponent},
  {path: 'showTasks', component: ListTaskComponent},
  {path: 'home', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [CreateTaskComponent , ListTaskComponent, AppComponent];