import { TestBed } from '@angular/core/testing';

import { ManagerQuedadaService } from './manager-quedada.service';

describe('ManagerQuedadaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManagerQuedadaService = TestBed.get(ManagerQuedadaService);
    expect(service).toBeTruthy();
  });
});
