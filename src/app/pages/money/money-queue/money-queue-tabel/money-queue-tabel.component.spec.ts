import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyQueueTabelComponent } from './money-queue-tabel.component';

describe('MoneyQueueTabelComponent', () => {
  let component: MoneyQueueTabelComponent;
  let fixture: ComponentFixture<MoneyQueueTabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneyQueueTabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyQueueTabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
