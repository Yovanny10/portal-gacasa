import { TestBed } from '@angular/core/testing';

import { LavadaService } from './lavada.service';

describe('LavadaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LavadaService = TestBed.get(LavadaService);
    expect(service).toBeTruthy();
  });
});
