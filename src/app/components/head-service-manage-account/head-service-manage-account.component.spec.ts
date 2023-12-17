import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadServiceManageAccountComponent } from './head-service-manage-account.component';

describe('HeadServiceManageAccountComponent', () => {
  let component: HeadServiceManageAccountComponent;
  let fixture: ComponentFixture<HeadServiceManageAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeadServiceManageAccountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadServiceManageAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
