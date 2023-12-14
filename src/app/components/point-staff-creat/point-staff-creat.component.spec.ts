import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointStaffCreatComponent } from './point-staff-creat.component';

describe('PointStaffCreatComponent', () => {
  let component: PointStaffCreatComponent;
  let fixture: ComponentFixture<PointStaffCreatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PointStaffCreatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PointStaffCreatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
