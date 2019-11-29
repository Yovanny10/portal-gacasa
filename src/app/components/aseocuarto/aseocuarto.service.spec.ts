import { TestBed } from '@angular/core/testing';

import { AseocuartoService } from './aseocuarto.service';

describe('AseocuartoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AseocuartoService = TestBed.get(AseocuartoService);
    expect(service).toBeTruthy();
  });
});
