import { TestBed } from '@angular/core/testing';

import { DngToastService } from './dng-toast.service';

describe('DngToastService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DngToastService = TestBed.get(DngToastService);
    expect(service).toBeTruthy();
  });
});
