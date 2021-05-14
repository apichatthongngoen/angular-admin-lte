import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenCalledQueuAudioComponent } from './screen-called-queu-audio.component';

describe('ScreenCalledQueuAudioComponent', () => {
  let component: ScreenCalledQueuAudioComponent;
  let fixture: ComponentFixture<ScreenCalledQueuAudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenCalledQueuAudioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenCalledQueuAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
