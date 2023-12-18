import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointStaffCreatTopointComponent } from './point-staff-creat-topoint.component';

describe('PointStaffCreatTopointComponent', () => {
  let component: PointStaffCreatTopointComponent;
  let fixture: ComponentFixture<PointStaffCreatTopointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PointStaffCreatTopointComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PointStaffCreatTopointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
