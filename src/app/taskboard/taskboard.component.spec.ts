import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskboardComponent } from './taskboard.component';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('TaskboardComponent', () => {
  let component: TaskboardComponent;
  let fixture: ComponentFixture<TaskboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskboardComponent ],
      imports: [
        HttpClientTestingModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
