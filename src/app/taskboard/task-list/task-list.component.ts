import { Component, OnInit } from '@angular/core';
import {TaskService} from '../task.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {TaskFormModel} from '../model/TaskFormModel';
import * as moment from 'moment';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  public tasks: TaskFormModel[];
  rowData: any[];
  public waring = false;


  constructor(
    private taskService: TaskService,
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.taskService.taskSubject$.subscribe((data) => {
      if (data) {
        data.forEach((task) => {
          task.createDate = moment(task.createDate).format('YYYY-MM-DD');
        })
        this.tasks = data;
        console.log('Load Tasks');
        this.rowData = this.tasks.map(obj => (
          { ...obj, Active: 'false'}
        ));
      }
    });
  }

  private initForm(): void {
    this.taskService.getTaskForm().subscribe((data) => {
      if (data) {
        data.forEach((task) => {
          task.createDate = moment(task.createDate).format('YYYY-MM-DD');
        })
        this.tasks = data;
        this.rowData = this.tasks.map(obj => (
        { ...obj, Active: 'false'}
        ));
        console.log(this.rowData);
        console.log('Load Tasks');
      }
    });
  }

  deleteTasks(): void {
    console.log(this.rowData)
    // tslint:disable-next-line:triple-equals
    const deleteItems = this.rowData.filter(obj => obj.Active == true);
    const tasks = deleteItems.map (obj => {
      return {
        id: obj.id,
        name: obj.name,
        createDate: obj.createDate
      };
    })
    console.log(tasks + ' would be deleted');

    if (tasks.length !== 0) {
      this.waring = false;
      this.taskService.deleteTasks(tasks);
    } else {
      this.waring = true;
    }
  }
}
