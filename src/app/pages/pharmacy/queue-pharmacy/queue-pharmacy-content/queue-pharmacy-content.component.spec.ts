import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueuePharmacyContentComponent } from './queue-pharmacy-content.component';

describe('QueuePharmacyContentComponent', () => {
  let component: QueuePharmacyContentComponent;
  let fixture: ComponentFixture<QueuePharmacyContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueuePharmacyContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueuePharmacyContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
