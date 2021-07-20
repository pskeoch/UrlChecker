import { TestBed } from '@angular/core/testing';

import { UrlRequestService } from './url-request.service';

describe('UrlRequestService', () => {
  let service: UrlRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrlRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
