import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdercreationComponent } from './odercreation.component';

describe('OdercreationComponent', () => {
  let component: OdercreationComponent;
  let fixture: ComponentFixture<OdercreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OdercreationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OdercreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
