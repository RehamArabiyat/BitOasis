import { TestBed } from '@angular/core/testing';

import { PropsalService } from './propsal.service';

describe('PropsalService', () => {
  let service: PropsalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropsalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
