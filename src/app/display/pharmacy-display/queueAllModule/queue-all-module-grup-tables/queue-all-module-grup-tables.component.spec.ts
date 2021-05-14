import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueueAllModuleGrupTablesComponent } from './queue-all-module-grup-tables.component';

describe('QueueAllModuleGrupTablesComponent', () => {
  let component: QueueAllModuleGrupTablesComponent;
  let fixture: ComponentFixture<QueueAllModuleGrupTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueueAllModuleGrupTablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueueAllModuleGrupTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
