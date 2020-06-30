import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyQueueContentComponent } from './money-queue-content.component';

describe('MoneyQueueContentComponent', () => {
  let component: MoneyQueueContentComponent;
  let fixture: ComponentFixture<MoneyQueueContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneyQueueContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyQueueContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
