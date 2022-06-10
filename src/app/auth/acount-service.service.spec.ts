import { TestBed } from '@angular/core/testing';

import { AcountService } from './acount-service.service';

describe('AcountServiceService', () => {
  let service: AcountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
