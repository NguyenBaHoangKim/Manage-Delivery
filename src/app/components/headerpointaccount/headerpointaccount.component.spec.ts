import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderpointaccountComponent } from './headerpointaccount.component';

describe('HeaderpointaccountComponent', () => {
  let component: HeaderpointaccountComponent;
  let fixture: ComponentFixture<HeaderpointaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderpointaccountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderpointaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
