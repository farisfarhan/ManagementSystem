import { TestBed } from '@angular/core/testing';

import { TestGuard1Guard } from './test-guard1.guard';

describe('TestGuard1Guard', () => {
  let guard: TestGuard1Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TestGuard1Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
