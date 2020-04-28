import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyQueueComponent } from './money-queue.component';

describe('MoneyQueueComponent', () => {
  let component: MoneyQueueComponent;
  let fixture: ComponentFixture<MoneyQueueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneyQueueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
