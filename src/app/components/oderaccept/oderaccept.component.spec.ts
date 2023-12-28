import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OderacceptComponent } from './oderaccept.component';

describe('OderacceptComponent', () => {
  let component: OderacceptComponent;
  let fixture: ComponentFixture<OderacceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OderacceptComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OderacceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
