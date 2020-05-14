import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueuePharmacyTableComponent } from './queue-pharmacy-table.component';

describe('QueuePharmacyTableComponent', () => {
  let component: QueuePharmacyTableComponent;
  let fixture: ComponentFixture<QueuePharmacyTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueuePharmacyTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueuePharmacyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
