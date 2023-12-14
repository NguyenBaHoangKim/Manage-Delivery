import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointStaffExceptOutComponent } from './point-staff-except-out.component';

describe('PointStaffExceptOutComponent', () => {
  let component: PointStaffExceptOutComponent;
  let fixture: ComponentFixture<PointStaffExceptOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PointStaffExceptOutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PointStaffExceptOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
