import { TestBed } from '@angular/core/testing';

import { CastigoService } from './castigo.service';

describe('CastigoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CastigoService = TestBed.get(CastigoService);
    expect(service).toBeTruthy();
  });
});
