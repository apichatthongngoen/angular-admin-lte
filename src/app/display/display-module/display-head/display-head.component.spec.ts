import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayHeadComponent } from './display-head.component';

describe('DisplayHeadComponent', () => {
  let component: DisplayHeadComponent;
  let fixture: ComponentFixture<DisplayHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayHeadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
