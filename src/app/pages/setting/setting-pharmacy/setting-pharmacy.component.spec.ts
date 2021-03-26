import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingPharmacyComponent } from './setting-pharmacy.component';

describe('SettingPharmacyComponent', () => {
  let component: SettingPharmacyComponent;
  let fixture: ComponentFixture<SettingPharmacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingPharmacyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingPharmacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
