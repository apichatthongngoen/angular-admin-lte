import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelDisplayModuleComponent } from './channel-display-module.component';

describe('ChannelDisplayModuleComponent', () => {
  let component: ChannelDisplayModuleComponent;
  let fixture: ComponentFixture<ChannelDisplayModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChannelDisplayModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelDisplayModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
