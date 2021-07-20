import { TestBed } from '@angular/core/testing';

import { CheckURLService } from './check-url.service';

describe('CheckURLService', () => {
  let service: CheckURLService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckURLService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
