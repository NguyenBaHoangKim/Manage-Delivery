import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BossManagerComponent } from './boss-manager.component';

describe('BossManagerComponent', () => {
  let component: BossManagerComponent;
  let fixture: ComponentFixture<BossManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BossManagerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BossManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
