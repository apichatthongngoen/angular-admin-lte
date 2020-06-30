import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyQueueMainComponent } from './money-queue-main.component';

describe('MoneyQueueMainComponent', () => {
  let component: MoneyQueueMainComponent;
  let fixture: ComponentFixture<MoneyQueueMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneyQueueMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyQueueMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
