import { TestBed } from '@angular/core/testing';

import { TaskArrayService } from './task-array.service';

describe('TaskArrayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaskArrayService = TestBed.get(TaskArrayService);
    expect(service).toBeTruthy();
  });
});
