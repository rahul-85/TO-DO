import { TestBed } from '@angular/core/testing';

import { TaskCreateService } from './task-create.service';

describe('TaskCreateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaskCreateService = TestBed.get(TaskCreateService);
    expect(service).toBeTruthy();
  });
});
