import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpDBTitleLookupComponent } from './otp-db-title-lookup.component';

describe('OtpDBTitleLookupComponent', () => {
  let component: OtpDBTitleLookupComponent;
  let fixture: ComponentFixture<OtpDBTitleLookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtpDBTitleLookupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtpDBTitleLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
