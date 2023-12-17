import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadServiceManageGoodsComponent } from './head-service-manage-goods.component';

describe('HeadServiceManageGoodsComponent', () => {
  let component: HeadServiceManageGoodsComponent;
  let fixture: ComponentFixture<HeadServiceManageGoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeadServiceManageGoodsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadServiceManageGoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
