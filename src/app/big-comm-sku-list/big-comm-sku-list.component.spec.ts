import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigCommSkuListComponent } from './big-comm-sku-list.component';

describe('BigCommSkuListComponent', () => {
  let component: BigCommSkuListComponent;
  let fixture: ComponentFixture<BigCommSkuListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigCommSkuListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BigCommSkuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
