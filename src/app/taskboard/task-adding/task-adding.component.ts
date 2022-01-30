import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TaskService} from '../task.service';
import {TaskFormModel} from '../model/TaskFormModel';
import * as moment from 'moment';

@Component({
  selector: 'app-task-adding',
  templateUrl: './task-adding.component.html',
  styleUrls: ['./task-adding.component.css']
})
export class TaskAddingComponent implements OnInit {
  private task: TaskFormModel = new TaskFormModel();
  validateForm!: FormGroup;
  public displayCreateDashboard: boolean;
  public waringDisplay = false;

  constructor(
    private taskService: TaskService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {

    this.init();
  }

  submitForm(): void {
    // tslint:disable-next-line:forin
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (this.timeValidation()) {
      console.log(this.validateForm.controls.date.value);
      this.waringDisplay = false;
      this.task.name = this.validateForm.controls.taskName.value;
      this.task.createDate = moment(this.validateForm.controls.date.value).format('YYYY-MM-DD');
      this.taskService.saveTaskForm(this.task);
    } else {
      this.waringDisplay = true;
    }

  }

  init(): void {
    this.validateForm = this.fb.group({
      taskName: [null, [Validators.required]],
      date: [null, [Validators.required]],
    });


    this.taskService.toggleSubject$.subscribe((data) => {
      this.displayCreateDashboard = data;
    });
  }

  timeValidation(): boolean {
   return moment(this.validateForm.controls.date.value).isValid();
  }
}
