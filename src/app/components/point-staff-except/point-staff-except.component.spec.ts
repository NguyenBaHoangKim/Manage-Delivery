import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointStaffExceptComponent } from './point-staff-except.component';

describe('PointStaffExceptComponent', () => {
  let component: PointStaffExceptComponent;
  let fixture: ComponentFixture<PointStaffExceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PointStaffExceptComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PointStaffExceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
