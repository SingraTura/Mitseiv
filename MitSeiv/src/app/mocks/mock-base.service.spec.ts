import { TestBed } from '@angular/core/testing';

import { MockBaseService } from './mock-base.service';

describe('MockBaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MockBaseService = TestBed.get(MockBaseService);
    expect(service).toBeTruthy();
  });
});
