import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskAddingComponent } from './task-adding.component';
import {TaskService} from '../task.service';
import {FormBuilder} from '@angular/forms';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('TaskAddingComponent', () => {
  let component: TaskAddingComponent;
  let fixture: ComponentFixture<TaskAddingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskAddingComponent ],
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        TaskService,
        FormBuilder
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskAddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
