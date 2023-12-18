import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceStaffExportPointComponent } from './service-staff-export-point.component';

describe('ServiceStaffExportPointComponent', () => {
  let component: ServiceStaffExportPointComponent;
  let fixture: ComponentFixture<ServiceStaffExportPointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceStaffExportPointComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiceStaffExportPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
