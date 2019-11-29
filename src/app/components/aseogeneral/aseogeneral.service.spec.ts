import { TestBed } from '@angular/core/testing';

import { AseogeneralService } from './aseogeneral.service';

describe('AseogeneralService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AseogeneralService = TestBed.get(AseogeneralService);
    expect(service).toBeTruthy();
  });
});
