import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlResponseCheckComponent } from './url-response-check.component';

describe('UrlResponseCheckComponent', () => {
  let component: UrlResponseCheckComponent;
  let fixture: ComponentFixture<UrlResponseCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrlResponseCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlResponseCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
