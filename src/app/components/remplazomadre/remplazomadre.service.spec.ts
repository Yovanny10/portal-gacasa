import { TestBed } from '@angular/core/testing';

import { RemplazomadreService } from './remplazomadre.service';

describe('RemplazomadreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RemplazomadreService = TestBed.get(RemplazomadreService);
    expect(service).toBeTruthy();
  });
});
