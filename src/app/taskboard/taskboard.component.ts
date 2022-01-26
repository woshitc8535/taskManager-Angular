import { Component, OnInit } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {TaskService} from './task.service';

@Component({
  selector: 'app-taskboard',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.css']
})
export class TaskboardComponent implements OnInit {
  public display = false;

  constructor(
    private taskService: TaskService,
  ) { }

  ngOnInit(): void {
  }


  public displayCreateBoard(): void {
    this.display = !this.display;
    this.taskService.displayToggleSubject.next(this.display);
  }
}
