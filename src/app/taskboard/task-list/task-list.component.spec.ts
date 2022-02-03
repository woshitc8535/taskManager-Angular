import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';

import { TaskListComponent } from './task-list.component';
import {TaskService} from '../task.service';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('TaskListComponent', () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;
  let testBedService: TaskService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskListComponent ],
      imports: [
        HttpClientTestingModule
      ],
      providers: [TaskService,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    testBedService = TestBed.get(TaskService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Service inject via inject(...) and TestBed.get',
    inject([TaskService], (taskService: TaskService) => {
      expect(taskService).toBe(testBedService);
    }));
});
