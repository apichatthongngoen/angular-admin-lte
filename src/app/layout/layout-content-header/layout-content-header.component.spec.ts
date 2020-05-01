import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutContentHeaderComponent } from './layout-content-header.component';

describe('LayoutContentHeaderComponent', () => {
  let component: LayoutContentHeaderComponent;
  let fixture: ComponentFixture<LayoutContentHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutContentHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutContentHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
