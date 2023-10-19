import { TestBed } from '@angular/core/testing';

import { TodoListFacadeService } from './todo-list-facade.service';

describe('TodoListFacadeService', () => {
  let service: TodoListFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoListFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
