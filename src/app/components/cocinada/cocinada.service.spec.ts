import { TestBed } from '@angular/core/testing';

import { CocinadaService } from './cocinada.service';

describe('CocinadaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CocinadaService = TestBed.get(CocinadaService);
    expect(service).toBeTruthy();
  });
});
