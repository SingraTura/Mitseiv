import { TestBed } from '@angular/core/testing';

import { ManagerUsuarioService } from './manager-usuario.service';

describe('ManagerUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManagerUsuarioService = TestBed.get(ManagerUsuarioService);
    expect(service).toBeTruthy();
  });
});
