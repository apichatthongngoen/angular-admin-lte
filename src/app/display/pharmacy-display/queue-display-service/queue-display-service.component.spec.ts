import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueueDisplayServiceComponent } from './queue-display-service.component';

describe('QueueDisplayServiceComponent', () => {
  let component: QueueDisplayServiceComponent;
  let fixture: ComponentFixture<QueueDisplayServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueueDisplayServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueueDisplayServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
