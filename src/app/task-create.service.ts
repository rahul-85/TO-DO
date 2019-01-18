import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './Task';

@Injectable({
  providedIn: 'root'
})
export class TaskCreateService {

  url='http://localhost:1336/createTask';

  constructor(private http:HttpClient) { }
  
  submitTask(task: Task) {
      return this.http.post<Task>(this.url , task);
  }
}
