import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceStaffPopupComponent } from './service-staff-popup.component';

describe('ServiceStaffPopupComponent', () => {
  let component: ServiceStaffPopupComponent;
  let fixture: ComponentFixture<ServiceStaffPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceStaffPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiceStaffPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
