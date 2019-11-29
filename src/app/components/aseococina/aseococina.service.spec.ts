import { TestBed } from '@angular/core/testing';

import { AseococinaService } from './aseococina.service';

describe('AseococinaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AseococinaService = TestBed.get(AseococinaService);
    expect(service).toBeTruthy();
  });
});
