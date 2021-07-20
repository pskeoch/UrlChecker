import { TestBed } from '@angular/core/testing';

import { BigCommerceService } from './big-commerce.service';

describe('BigCommerceService', () => {
  let service: BigCommerceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BigCommerceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
