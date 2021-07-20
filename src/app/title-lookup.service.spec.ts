import { TestBed } from '@angular/core/testing';

import { TitleLookupService } from './title-lookup.service';

describe('TitleLookupService', () => {
  let service: TitleLookupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TitleLookupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
