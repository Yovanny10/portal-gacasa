import { TestBed } from '@angular/core/testing';

import { RegisterPageService } from './register-page.service';

describe('RegisterPageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegisterPageService = TestBed.get(RegisterPageService);
    expect(service).toBeTruthy();
  });
});
