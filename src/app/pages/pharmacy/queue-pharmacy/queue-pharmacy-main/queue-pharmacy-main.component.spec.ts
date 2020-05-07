import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueuePharmacyMainComponent } from './queue-pharmacy-main.component';

describe('QueuePharmacyMainComponent', () => {
  let component: QueuePharmacyMainComponent;
  let fixture: ComponentFixture<QueuePharmacyMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueuePharmacyMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueuePharmacyMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
