import { TestBed } from '@angular/core/testing';

import { AseocasaService } from './aseocasa.service';

describe('AseocasaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AseocasaService = TestBed.get(AseocasaService);
    expect(service).toBeTruthy();
  });
});
