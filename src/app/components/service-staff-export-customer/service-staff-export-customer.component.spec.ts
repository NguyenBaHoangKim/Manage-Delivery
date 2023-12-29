import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceStaffExportCustomerComponent } from './service-staff-export-customer.component';

describe('ServiceStaffExportCustomerComponent', () => {
  let component: ServiceStaffExportCustomerComponent;
  let fixture: ComponentFixture<ServiceStaffExportCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceStaffExportCustomerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiceStaffExportCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
