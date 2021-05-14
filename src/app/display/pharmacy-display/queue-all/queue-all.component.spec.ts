import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueueAllComponent } from './queue-all.component';

describe('QueueAllComponent', () => {
  let component: QueueAllComponent;
  let fixture: ComponentFixture<QueueAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueueAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueueAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
