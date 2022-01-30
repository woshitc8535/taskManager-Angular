import { TestBed } from '@angular/core/testing';

import { TaskService } from './task.service';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {TaskFormModel} from './model/TaskFormModel';
import {Observable, of} from 'rxjs';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('TaskService', () => {
  let service: TaskService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
    });
    service = TestBed.inject(TaskService);

    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new TaskService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should return expected Tasks (HttpClient called once)', (done: DoneFn) => {
    const expectedTasks: TaskFormModel[] =
      [{ taskId: 1, name: 'A' , createDate: '2022-1-29'}, { taskId: 2, name: 'B' , createDate: '2022-1-29'}];

    httpClientSpy.get.and.returnValue(of(expectedTasks));

    service.getTaskForm().subscribe({
      next: tasks => {
        expect(tasks)
          .withContext('expected tasks')
          .toEqual(expectedTasks);
        done();
      },
      error: done.fail
    });
    expect(httpClientSpy.get.calls.count())
      .withContext('one call')
      .toBe(1);
  });
});
