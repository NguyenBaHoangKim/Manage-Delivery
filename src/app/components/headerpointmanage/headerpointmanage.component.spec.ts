import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderpointmanageComponent } from './headerpointmanage.component';

describe('HeaderpointmanageComponent', () => {
  let component: HeaderpointmanageComponent;
  let fixture: ComponentFixture<HeaderpointmanageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderpointmanageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderpointmanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
