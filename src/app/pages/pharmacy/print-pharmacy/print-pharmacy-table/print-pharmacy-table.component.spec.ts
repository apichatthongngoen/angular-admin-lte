import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintPharmacyTableComponent } from './print-pharmacy-table.component';

describe('PrintPharmacyTableComponent', () => {
  let component: PrintPharmacyTableComponent;
  let fixture: ComponentFixture<PrintPharmacyTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintPharmacyTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintPharmacyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
