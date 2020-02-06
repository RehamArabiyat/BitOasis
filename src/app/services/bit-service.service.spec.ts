import { TestBed } from '@angular/core/testing';

import { BitServiceService } from './bit-service.service';

describe('BitServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BitServiceService = TestBed.get(BitServiceService);
    expect(service).toBeTruthy();
  });
});
