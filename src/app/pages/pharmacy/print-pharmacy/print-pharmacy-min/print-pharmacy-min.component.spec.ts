import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintPharmacyMinComponent } from './print-pharmacy-min.component';

describe('PrintPharmacyMinComponent', () => {
  let component: PrintPharmacyMinComponent;
  let fixture: ComponentFixture<PrintPharmacyMinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintPharmacyMinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintPharmacyMinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
