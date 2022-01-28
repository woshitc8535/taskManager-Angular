import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TaskFormModel} from './model/TaskFormModel';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  public taskFormModel: TaskFormModel;
  private taskSubject = new BehaviorSubject<any>(undefined);
  taskSubject$: Observable<TaskFormModel[]> = this.taskSubject.asObservable();
  displayToggleSubject = new BehaviorSubject<boolean>(undefined);
  toggleSubject$: Observable<boolean> = this.displayToggleSubject.asObservable();
  private readonly reviewUri = 'http://129.153.144.193:8080/task/review-all';
  private readonly saveUri = 'http://129.153.144.193:8080/task/create';
  private readonly deleteUri = 'http://129.153.144.193:8080/task/deleteTasks'
  constructor(
    private http: HttpClient,
  ) { }

  public getTaskForm(): Observable<TaskFormModel[]> {
    return this.http.get<TaskFormModel[]>(this.reviewUri);
  }

  public saveTaskForm(task: TaskFormModel) {
    this.http.post(this.saveUri, task).subscribe((data) => {
      if (data) {
        console.log('Successfully Save');
        this.taskSubject.next(data);
      }
    });
  }

  public deleteTasks(tasks: any[]) {
    this.http.put<TaskFormModel>(this.deleteUri, tasks).subscribe((data) => {
      if (data) {
        console.log('Successfully Save');
        this.taskSubject.next(data);
      }
    });
  }
}
